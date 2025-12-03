import base64
import io

import pytest
from fastapi.testclient import TestClient
from PIL import Image

from backend import main


class DummyIgen:
    def __init__(self, cdepth, cwidth, cspace):
        self.cdepth = cdepth
        self.cwidth = cwidth
        self.cspace = cspace
        self.variables = {"LSpace": 1.0, "LWidth": 1.0}

    def get_cnums(self):
        return 1

    def plot_flow_path(self, coords, distance, linewidths):
        buf = io.BytesIO()
        Image.new("RGB", (2, 2), color=(255, 255, 255)).save(buf, format="PNG")
        buf.seek(0)
        return buf

    def get_prediction(self, coords, nparams):
        buf = io.BytesIO()
        Image.new("RGB", (2, 2), color=(0, 0, 0)).save(buf, format="PNG")
        buf.seek(0)
        return [float(i) for i in range(12)], None, buf, coords


@pytest.fixture(autouse=True)
def patch_services(monkeypatch):
    monkeypatch.setattr(main, "get_igen", lambda cdepth, cwidth, cspace: DummyIgen(cdepth, cwidth, cspace))
    monkeypatch.setattr(main, "_calc_base_lengths", lambda igen: (1.0, 1.0))
    monkeypatch.setattr(
        main,
        "_interpret_points",
        lambda points, xbasic, ybasic: [(0.0, 0.0)]
        + [(float(i), float(i)) for i, _ in enumerate(points, start=1)]
        + [(99.0, 99.0)],
    )
    yield


@pytest.fixture
def client():
    return TestClient(main.app)


def _is_base64_png(data: str) -> bool:
    try:
        raw = base64.b64decode(data)
        return raw.startswith(b"\x89PNG\r\n\x1a\n")
    except Exception:
        return False


def test_flow_generate_success(client):
    payload = {"points": [{"row": 1, "col": "A"}], "params": {"cdepth": 0.16, "cwidth": 0.4, "cspace": 0.4}}
    resp = client.post("/api/flow/generate", json=payload)
    assert resp.status_code == 200
    data = resp.json()
    assert len(data["coords"]) == 3
    assert _is_base64_png(data["image_base64"])


def test_flow_generate_invalid_order(client):
    payload = {"points": [{"row": 2, "col": "A"}, {"row": 1, "col": "B"}], "params": {"cdepth": 0.16, "cwidth": 0.4, "cspace": 0.4}}
    resp = client.post("/api/flow/generate", json=payload)
    assert resp.status_code == 400
    assert "bottom-to-top" in resp.json()["detail"]


def test_flow_generate_row_limit(client):
    payload = {
        "points": [{"row": 1, "col": "A"}, {"row": 1, "col": "B"}, {"row": 1, "col": "C"}],
        "params": {"cdepth": 0.16, "cwidth": 0.4, "cspace": 0.4},
    }
    resp = client.post("/api/flow/generate", json=payload)
    assert resp.status_code == 400
    assert "more than 2 points" in resp.json()["detail"]


def test_predict_success(client):
    payload = {"points": [{"row": 1, "col": "A"}], "params": {"cdepth": 0.16, "cwidth": 0.4, "cspace": 0.4}}
    resp = client.post("/api/predict", json=payload)
    assert resp.status_code == 200
    data = resp.json()
    assert len(data["predictions"]) == 12
    assert _is_base64_png(data["image_base64"])
