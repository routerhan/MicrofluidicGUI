import base64
import io

import pytest
from fastapi.testclient import TestClient
from PIL import Image

from backend import main


def _png_b64(color=(255, 255, 255)):
    buf = io.BytesIO()
    Image.new("RGB", (2, 2), color=color).save(buf, format="PNG")
    buf.seek(0)
    return base64.b64encode(buf.getvalue()).decode("utf-8")


class DummyMesh:
    def __init__(self):
        self.export_called = False

    def export(self, buffer, file_type="stl"):
        self.export_called = True
        buffer.write(b"solid dummy\nendsolid\n")


class DummyMeshGen:
    def __init__(self, slices_folder="slices"):
        self.slices_folder = slices_folder
        self.called_with = None

    def generate_mesh(
        self,
        upper_thickness,
        middle_thickness,
        bottom_thickness,
        apply_smoothing=False,
        output_filename="Microfluidic_Geometry",
        save_stl=False,
        middle_image_buf=None,
        inlet_pos=None,
        outlet_pos=None,
    ):
        self.called_with = {
            "upper": upper_thickness,
            "middle": middle_thickness,
            "bottom": bottom_thickness,
            "apply_smoothing": apply_smoothing,
            "output_filename": output_filename,
            "save_stl": save_stl,
            "middle_image_buf": middle_image_buf,
            "inlet": inlet_pos,
            "outlet": outlet_pos,
        }
        return DummyMesh(), [[1]]


@pytest.fixture(autouse=True)
def patch_mesh_gen(monkeypatch):
    monkeypatch.setattr(main, "MeshGenerator3D", lambda slices_folder="slices": DummyMeshGen(slices_folder))
    yield


@pytest.fixture
def client():
    return TestClient(main.app)


def _is_base64_stl(data: str) -> bool:
    raw = base64.b64decode(data)
    return raw.startswith(b"solid")


def test_mesh_success_with_image(client):
    payload = {
        "use_template": False,
        "middle_image_base64": _png_b64(),
        "coords": [[0, 0], [1, 1]],
        "upper_thickness": 4,
        "middle_thickness": 4,
        "bottom_thickness": 4,
    }
    resp = client.post("/api/mesh", json=payload)
    assert resp.status_code == 200
    data = resp.json()
    assert _is_base64_stl(data["stl_base64"])
    assert data["volume_shape"] == [1, 1]


def test_mesh_requires_image_or_template(client):
    payload = {"use_template": False, "upper_thickness": 4, "middle_thickness": 4, "bottom_thickness": 4}
    resp = client.post("/api/mesh", json=payload)
    assert resp.status_code == 400
    assert "middle_image_base64" in resp.json()["detail"]


def test_mesh_file_not_found(client, monkeypatch):
    def raise_not_found(*args, **kwargs):
        raise FileNotFoundError("missing template")

    monkeypatch.setattr(DummyMeshGen, "generate_mesh", raise_not_found)
    payload = {"use_template": True, "upper_thickness": 4, "middle_thickness": 4, "bottom_thickness": 4}
    resp = client.post("/api/mesh", json=payload)
    assert resp.status_code == 500
    assert "missing template" in resp.json()["detail"]
