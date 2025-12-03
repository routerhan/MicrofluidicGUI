import base64
import io
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import matplotlib

matplotlib.use("Agg")

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field, conint, constr

from Repository.pointinterpreter import INTERPRETER
from iGenerator import iGenerator
from MeshGenerator import MeshGenerator3D
from Repository.cnums_lookup import cnums_lookup


def _get_static_dir() -> Path:
    """Resolve the static directory relative to the project root."""
    project_root = Path(__file__).resolve().parent.parent
    static_dir = project_root / "static"
    static_dir.mkdir(parents=True, exist_ok=True)
    return static_dir


app = FastAPI(title="Microfluidic Web Backend")

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

static_dir = _get_static_dir()
app.mount("/static", StaticFiles(directory=static_dir), name="static")


@app.get("/health")
async def health() -> dict:
    """Simple health check endpoint."""
    return {"status": "ok"}


@app.get("/", include_in_schema=False)
async def root() -> RedirectResponse:
    """Redirect root to the static index if present."""
    index_path = static_dir / "index.html"
    if index_path.exists():
        return RedirectResponse(url="/static/index.html")
    return RedirectResponse(url="/health")


# ======== Schemas ========
class Point(BaseModel):
    row: conint(ge=1, le=9) = Field(..., description="Row index (1 bottom -> 9 top)")
    col: constr(pattern="^[ABCabc]$") = Field(..., description="Column letter (A/B/C)")


class ChannelParams(BaseModel):
    cdepth: float = Field(0.16, description="Channel Depth")
    cwidth: float = Field(0.4, description="Channel Width")
    cspace: float = Field(0.4, description="Channel Space")


class FlowRequest(BaseModel):
    points: List[Point]
    params: ChannelParams


class FlowResponse(BaseModel):
    coords: List[Tuple[float, float]]
    image_base64: str


class PredictRequest(FlowRequest):
    pass


class PredictResponse(BaseModel):
    predictions: List[float]
    coords: List[Tuple[float, float]]
    image_base64: str


class MeshRequest(BaseModel):
    use_template: bool = Field(False, description="Use template slices when no middle image provided")
    middle_image_base64: Optional[str] = Field(
        None, description="Base64 PNG for middle slice; if absent and use_template=false -> 400"
    )
    coords: Optional[List[Tuple[float, float]]] = Field(
        None, description="Optional list of coords; first/last used as inlet/outlet when explicit values missing"
    )
    inlet: Optional[Tuple[float, float]] = None
    outlet: Optional[Tuple[float, float]] = None
    upper_thickness: conint(ge=1, le=200) = 4
    middle_thickness: conint(ge=1, le=200) = 4
    bottom_thickness: conint(ge=1, le=200) = 4
    apply_smoothing: bool = False
    output_filename: constr(min_length=1, strip_whitespace=True) = "Microfluidic_Geometry"


class MeshResponse(BaseModel):
    stl_base64: str
    volume_shape: Optional[Tuple[int, ...]] = None


# ======== Helpers ========
_igen_cache: Dict[Tuple[float, float, float], iGenerator] = {}


def get_igen(cdepth: float, cwidth: float, cspace: float) -> iGenerator:
    """Get or create cached iGenerator to avoid reloading model repeatedly."""
    # Validate cnums first to avoid TypeError inside iGenerator when lookup fails.
    if (cwidth, cspace) not in cnums_lookup:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported channel width/space combination: ({cwidth}, {cspace}).",
        )
    key = (cdepth, cwidth, cspace)
    if key not in _igen_cache:
        _igen_cache[key] = iGenerator(cdepth, cwidth, cspace)
    return _igen_cache[key]


def _validate_points(points: List[Point]) -> List[Point]:
    if not points:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="At least one point is required.",
        )
    normalized = []
    row_counts: Dict[int, int] = {}
    prev_row = 0
    for p in points:
        row_counts[p.row] = row_counts.get(p.row, 0) + 1
        if row_counts[p.row] > 2:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Row {p.row} has more than 2 points.",
            )
        if p.row < prev_row:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Points must be ordered bottom-to-top (row 1 -> 9).",
            )
        prev_row = p.row
        normalized.append(Point(row=p.row, col=p.col.upper()))
    return normalized


def _calc_base_lengths(igen: iGenerator) -> Tuple[float, float]:
    cnums = igen.get_cnums()
    if not isinstance(cnums, (int, float)):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid channel parameters: cnums not found.",
        )
    xbasic = ((igen.cwidth * cnums) + (igen.cspace * cnums)) * 10
    ybasic = ((igen.cwidth * cnums) + (igen.cspace * cnums)) * 10
    return xbasic, ybasic


def _interpret_points(points: List[Point], xbasic: float, ybasic: float) -> List[Tuple[float, float]]:
    point_names = [f"{p.row}{p.col}" for p in points]

    def _eval_point(name: str) -> Tuple[float, float]:
        if name not in INTERPRETER:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Unknown point identifier: {name}",
            )
        expr = INTERPRETER[name]
        return eval(expr, {}, {"xbasic": xbasic, "ybasic": ybasic})  # noqa: S307

    coords: List[Tuple[float, float]] = []
    coords.append(_eval_point("i1"))
    for name in point_names:
        coords.append(_eval_point(name))
    coords.append(_eval_point("o1"))
    return coords


def _encode_image(buf: io.BytesIO) -> str:
    buf.seek(0)
    return base64.b64encode(buf.read()).decode("utf-8")


def _decode_image_b64(image_b64: str) -> io.BytesIO:
    try:
        raw = base64.b64decode(image_b64)
        buf = io.BytesIO(raw)
        buf.seek(0)
        return buf
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid base64 payload for image.",
        ) from exc


def _resolve_inlet_outlet(
    request: MeshRequest,
) -> Tuple[Optional[Tuple[float, float]], Optional[Tuple[float, float]]]:
    inlet = request.inlet
    outlet = request.outlet
    if (inlet is None or outlet is None) and request.coords:
        coords = request.coords
        if len(coords) >= 2:
            inlet = inlet or tuple(coords[0])
            outlet = outlet or tuple(coords[-1])
    return inlet, outlet


def _infer_shape(data) -> Optional[Tuple[int, ...]]:
    if hasattr(data, "shape"):
        shape = getattr(data, "shape")
        return tuple(shape) if shape is not None else None
    if isinstance(data, (list, tuple)):
        shape_parts = []
        current = data
        while isinstance(current, (list, tuple)):
            shape_parts.append(len(current))
            current = current[0] if current else None
        return tuple(shape_parts) if shape_parts else None
    return None


def _resolve_slices_folder() -> str:
    """Pick existing slices folder, prefer 'slices' then 'Repository'."""
    project_root = Path(__file__).resolve().parent.parent
    slices_dir = project_root / "slices"
    if slices_dir.exists():
        return str(slices_dir)
    repository_dir = project_root / "Repository"
    if repository_dir.exists():
        return str(repository_dir)
    # fallback to project root to trigger clear error
    return str(project_root)


# ======== Routes ========
@app.post("/api/flow/generate", response_model=FlowResponse)
async def generate_flow(request: FlowRequest) -> FlowResponse:
    points = _validate_points(request.points)
    params = request.params

    try:
        igen = get_igen(params.cdepth, params.cwidth, params.cspace)
        xbasic, ybasic = _calc_base_lengths(igen)
        coords = _interpret_points(points, xbasic, ybasic)

        variables = igen.variables
        img_buf = igen.plot_flow_path(
            coords,
            distance=variables["LSpace"],
            linewidths=variables["LWidth"],
        )
        image_b64 = _encode_image(img_buf)
        return FlowResponse(coords=coords, image_base64=image_b64)
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - unexpected errors
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Flow generation failed: {exc}",
        ) from exc


@app.post("/api/predict", response_model=PredictResponse)
async def predict(request: PredictRequest) -> PredictResponse:
    points = _validate_points(request.points)
    params = request.params

    try:
        igen = get_igen(params.cdepth, params.cwidth, params.cspace)
        xbasic, ybasic = _calc_base_lengths(igen)
        coords = _interpret_points(points, xbasic, ybasic)

        nparams = [params.cdepth, params.cwidth, params.cspace]
        predictions, _, img_buf, selected_points = igen.get_prediction(coords, nparams)
        image_b64 = _encode_image(img_buf)
        return PredictResponse(
            predictions=predictions,
            coords=selected_points,
            image_base64=image_b64,
        )
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - unexpected errors
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Prediction failed: {exc}",
        ) from exc


@app.post("/api/mesh", response_model=MeshResponse)
async def generate_mesh(request: MeshRequest) -> MeshResponse:
    if not request.use_template and not request.middle_image_base64:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Provide middle_image_base64 or set use_template=true.",
        )

    inlet, outlet = _resolve_inlet_outlet(request)

    middle_buf = None
    if request.middle_image_base64:
        middle_buf = _decode_image_b64(request.middle_image_base64)

    try:
        mesh_gen = MeshGenerator3D(slices_folder=_resolve_slices_folder())
        mesh, volume = mesh_gen.generate_mesh(
            request.upper_thickness,
            request.middle_thickness,
            request.bottom_thickness,
            apply_smoothing=request.apply_smoothing,
            output_filename=request.output_filename,
            save_stl=False,
            middle_image_buf=middle_buf if not request.use_template or middle_buf is not None else None,
            inlet_pos=inlet,
            outlet_pos=outlet,
        )

        stl_buf = io.BytesIO()
        mesh.export(stl_buf, file_type="stl")
        stl_base64 = base64.b64encode(stl_buf.getvalue()).decode("utf-8")
        volume_shape = _infer_shape(volume)

        return MeshResponse(stl_base64=stl_base64, volume_shape=volume_shape)
    except FileNotFoundError as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Mesh generation failed: {exc}",
        ) from exc
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - unexpected errors
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Mesh generation failed: {exc}",
        ) from exc
