import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MeshViewerR3F } from "./MeshViewerR3F";

const GRID_CONFIG = {
  rows: 9,
  cols: ["A", "B", "C"],
  radius: 14,
  spacingX: 65,
  spacingY: 55,
};

const DEFAULT_PARAMS = {
  cdepth: 0.16,
  cwidth: 0.4,
  cspace: 0.4,
};

const PROP_FIELDS = [
  { key: "E11", note: "Young's Modulus (X)" },
  { key: "YS11", note: "Yield Strength (X)" },
  { key: "v11", note: "Poisson's Ratio (X)" },
  { key: "E22", note: "Young's Modulus (Y)" },
  { key: "YS22", note: "Yield Strength (Y)" },
  { key: "v22", note: "Poisson's Ratio (Y)" },
  { key: "k11", note: "Thermal Conductivity (X)" },
  { key: "k22", note: "Thermal Conductivity (Y)" },
  { key: "k33", note: "Thermal Conductivity (Z)" },
  { key: "CTE11", note: "Thermal Expansion (X)" },
  { key: "CTE22", note: "Thermal Expansion (Y)" },
  { key: "CTE33", note: "Thermal Expansion (Z)" },
];

const mechanicalProps = PROP_FIELDS.slice(0, 6);
const thermalProps = PROP_FIELDS.slice(6);

function App() {
  const [points, setPoints] = useState([]);
  const [flowImage, setFlowImage] = useState(null);
  const [flowCoords, setFlowCoords] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const [meshBase64, setMeshBase64] = useState(null);
  const [loading, setLoading] = useState({ generating: false, predicting: false, meshing: false });
  const [toast, setToast] = useState({ message: "", isError: false, visible: false });
  const [viewMode, setViewMode] = useState("solid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewR3FRef = useRef(null);
  const modalR3FRef = useRef(null);

  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
  }, []);

  const showToast = useCallback((message, isError = false) => {
    setToast({ message, isError, visible: true });
  }, []);

  useEffect(() => {
    if (!toast.visible) return undefined;
    const timer = setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 2500);
    return () => clearTimeout(timer);
  }, [toast.visible]);

  const handleMeshError = useCallback(
    (message) => {
      showToast(message, true);
    },
    [showToast],
  );

  useEffect(() => {
    // no-op; R3F viewer handles its own lifecycle
  }, []);

  const coordsPayload = useMemo(
    () =>
      points
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((p) => ({ row: p.row, col: p.col })),
    [points],
  );

  const toNumberOrDefault = (value, fallback) => {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  const sanitizedParams = useCallback(
    () => ({
      cdepth: toNumberOrDefault(params.cdepth, DEFAULT_PARAMS.cdepth),
      cwidth: toNumberOrDefault(params.cwidth, DEFAULT_PARAMS.cwidth),
      cspace: toNumberOrDefault(params.cspace, DEFAULT_PARAMS.cspace),
    }),
    [params],
  );

  const togglePoint = useCallback(
    (row, col) => {
      setPoints((prev) => {
        const existingIdx = prev.findIndex((p) => p.row === row && p.col === col);
        if (existingIdx !== -1) {
          const next = prev.slice();
          next.splice(existingIdx, 1);
          return next.map((p, i) => ({ ...p, order: i + 1 }));
        }
        const perRow = prev.filter((p) => p.row === row);
        if (perRow.length >= 2) {
          showToast(`Row ${row} already has 2 points.`, true);
          return prev;
        }
        const maxRow = prev.reduce((m, p) => Math.max(m, p.row), 0);
        if (row < maxRow) {
          showToast("Points must be ordered bottom-to-top (row 1→9).", true);
          return prev;
        }
        return [...prev, { row, col, order: prev.length + 1 }];
      });
    },
    [showToast],
  );

  const clearSelection = useCallback(() => {
    setPoints([]);
    setFlowImage(null);
    setFlowCoords(null);
    setPredictions(null);
    setMeshBase64(null);
    setIsModalOpen(false);
    setViewMode("solid");
  }, []);

  const apiCall = useCallback(async (url, payload) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      let message = res.statusText;
      try {
        const data = await res.json();
        message = data.detail || JSON.stringify(data);
      } catch (err) {
        const text = await res.text();
        message = text || message;
      }
      throw new Error(message);
    }
    return res.json();
  }, []);

  const handleGenerate = useCallback(async () => {
    if (loading.generating) return;
    if (points.length === 0) {
      showToast("Select at least one point.", true);
      return;
    }
    setLoading((prev) => ({ ...prev, generating: true }));
    try {
      const data = await apiCall("/api/flow/generate", { points: coordsPayload, params: sanitizedParams() });
      setFlowImage(data.image_base64 || null);
      setFlowCoords(data.coords || null);
      setPredictions(null);
      setMeshBase64(null);
      setViewMode("solid");
      showToast("Flow generated.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setLoading((prev) => ({ ...prev, generating: false }));
    }
  }, [apiCall, coordsPayload, loading.generating, points.length, sanitizedParams, showToast]);

  const handlePredict = useCallback(async () => {
    if (loading.predicting) return;
    if (points.length === 0) {
      showToast("Select points before prediction.", true);
      return;
    }
    setLoading((prev) => ({ ...prev, predicting: true }));
    try {
      const data = await apiCall("/api/predict", { points: coordsPayload, params: sanitizedParams() });
      setFlowImage(data.image_base64 || null);
      setFlowCoords(data.coords || null);
      setPredictions(data.predictions || null);
      setMeshBase64(null);
      setViewMode("solid");
      showToast("Prediction done.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setLoading((prev) => ({ ...prev, predicting: false }));
    }
  }, [apiCall, coordsPayload, loading.predicting, points.length, sanitizedParams, showToast]);

  const handleMesh = useCallback(async () => {
    if (loading.meshing) return;
    setLoading((prev) => ({ ...prev, meshing: true }));
    try {
      const payload = {
        use_template: flowImage ? false : true,
        middle_image_base64: flowImage || null,
        coords: flowCoords || null,
        upper_thickness: 4,
        middle_thickness: 4,
        bottom_thickness: 4,
        apply_smoothing: false,
        output_filename: "Microfluidic_Geometry",
      };
      const data = await apiCall("/api/mesh", payload);
      setMeshBase64(data.stl_base64 || null);
      showToast("Mesh generated.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setLoading((prev) => ({ ...prev, meshing: false }));
    }
  }, [apiCall, flowCoords, flowImage, loading.meshing, showToast]);

  const handleDownload = useCallback(() => {
    if (!meshBase64) return;
    const link = document.createElement("a");
    link.href = `data:model/stl;base64,${meshBase64}`;
    link.download = "Microfluidic_Geometry.stl";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [meshBase64]);

  const handleParamChange = (key, value) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleOrientation = (mode) => {
    modalR3FRef.current?.setOrientation(mode);
  };

  const handlePan = (dir) => {
    modalR3FRef.current?.pan(dir);
  };

  const handleResumeAutoRotate = (delay) => {
    previewR3FRef.current?.resumeAutoRotate?.(delay);
    modalR3FRef.current?.resumeAutoRotate?.(delay);
  };

  const openModal = () => {
    if (!meshBase64) {
      showToast("Generate mesh first.", true);
      return;
    }
    setIsModalOpen(true);
    handleResumeAutoRotate(1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="toolbar">
        <div className="title premium-title">
          <div className="title-text">
            <h1>Microfluidic Property Prediction</h1>
            <span className="subtitle">9x3 point selection · Flow preview · Prediction · 3D Mesh</span>
          </div>
          <div className="title-badge">
            <span className="pill glow">Pro Lab</span>
          </div>
        </div>
      </header>
      <main className="layout">
        <section className="panel input-panel">
          <div className="panel-title">
            <h2>User Input</h2>
          </div>
          <div className="input-grid">
            <div className="card">
              <h3>Point Selection (9 Rows x 3 Columns)</h3>
              <p className="hint">Draw from bottom to top (row 1→9). Up to 2 points per row.</p>
              <div className="canvas-shell">
                <PatternCanvas points={points} onTogglePoint={togglePoint} />
              </div>
            </div>
            <div className="card">
              <h3>Flow Path Visualization</h3>
              <p className="hint">Flow path will be rendered here after generation.</p>
              <div className="preview-shell flow-preview-shell">
                {flowImage ? (
                  <img
                    id="flowPreview"
                    src={`data:image/png;base64,${flowImage}`}
                    alt="Flow preview"
                    style={{ display: "block" }}
                  />
                ) : null}
                {!flowImage ? <div id="flowPreviewPlaceholder">Flow path preview will appear here.</div> : null}
              </div>
            </div>
          </div>

          <div className="card params-card form vertical">
            <div className="params">
              <label>
                Channel Depth
                <input
                  id="cdepth"
                  type="number"
                  step="0.01"
                  value={params.cdepth}
                  onChange={(e) => handleParamChange("cdepth", e.target.value)}
                />
              </label>
              <label>
                Channel Width
                <input
                  id="cwidth"
                  type="number"
                  step="0.01"
                  value={params.cwidth}
                  onChange={(e) => handleParamChange("cwidth", e.target.value)}
                />
              </label>
              <label>
                Channel Space
                <input
                  id="cspace"
                  type="number"
                  step="0.01"
                  value={params.cspace}
                  onChange={(e) => handleParamChange("cspace", e.target.value)}
                />
              </label>
            </div>
            <div className="actions actions-split quick">
              <div className="actions-left">
                <button className="btn green" id="btnGenerate" onClick={handleGenerate} disabled={loading.generating}>
                  {loading.generating ? "Generating..." : "Generate Flow Pattern"}
                </button>
                <button className="btn green" id="btnPredict" onClick={handlePredict} disabled={loading.predicting}>
                  {loading.predicting ? "Predicting..." : "Start Predict"}
                </button>
              </div>
              <div className="actions-right">
                <button className="btn pink" id="btnClear" onClick={clearSelection}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="panel output-panel">
          <div className="panel-title">
            <h2>User Output</h2>
          </div>

          <div className="card results-card history-dashboard-panel">
            <div className="results-header">
              <div>
                <p className="eyebrow">Outputs</p>
                <h3>Mechanical &amp; Thermal Properties</h3>
              </div>
              <div className="results-summary">
                <span className="pill">{predictions ? "Ready" : "Awaiting prediction"}</span>
              </div>
            </div>
            <div className="props-group mechanical">
              <div className="group-header">
                <span className="pill solid">Mechanical</span>
              </div>
              <PropertyGrid fields={mechanicalProps} predictions={predictions} />
            </div>
            <div className="props-group thermal">
              <div className="group-header">
                <span className="pill outline">Thermal</span>
              </div>
              <PropertyGrid fields={thermalProps} predictions={predictions} />
            </div>
          </div>

          <div className="card mesh-card">
            <div className="results-header">
              <div>
                <p className="eyebrow">3D Mesh</p>
                <h3>Generation &amp; Preview</h3>
              </div>
              <div className="results-summary">
                <span className="pill">{loading.meshing ? "Generating..." : meshBase64 ? "Mesh ready" : "Awaiting mesh"}</span>
              </div>
            </div>
            <div className="mesh-actions">
              <button className="btn green" id="btnMesh" onClick={handleMesh} disabled={loading.meshing}>
                {loading.meshing ? "Generating..." : "Generate 3D Mesh"}
              </button>
              <button className="btn blue" id="btnViewMesh" onClick={openModal} disabled={!meshBase64}>
                Display 3D Mesh
              </button>
              <button className="btn yellow" id="btnDownload" onClick={handleDownload} disabled={!meshBase64}>
                Download STL
              </button>
            </div>
            <div className="mesh-preview-shell">
              <MeshViewerR3F
                ref={previewR3FRef}
                stlBase64={meshBase64}
                viewMode={viewMode}
                canvasStyle={{ width: "100%", height: "100%" }}
                onInteract={() => handleResumeAutoRotate()}
              />
              {!meshBase64 ? <div id="meshPreviewPlaceholder">Mesh preview will appear here.</div> : null}
            </div>
            <p className="hint">Uses current flow; falls back to template if none.</p>
          </div>
        </section>
      </main>

      <Toast toast={toast} />

      <div
        className="modal-backdrop"
        id="meshModal"
        style={{ display: isModalOpen ? "flex" : "none" }}
        onClick={(e) => {
          if (e.target.id === "meshModal") closeModal();
        }}
      >
        <div className="modal-content resizable mesh-modal">
          <div className="modal-header">
            <h3>3D Mesh Viewer</h3>
            <button className="modal-close-btn" id="modalClose" aria-label="Close modal" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="modal-controls dialog-actions">
            <div className="controls-left">
              <div className="control-group">
                <p className="control-label">View Mode</p>
                <select
                  id="viewMode"
                  className="view-mode-select"
                  value={viewMode}
                  onChange={(e) => handleViewModeChange(e.target.value)}
                  onMouseEnter={() => resumeAutoRotate()}
                >
                  <option value="solid">Solid</option>
                  <option value="wireframe">Wireframe</option>
                  <option value="solid-wireframe">Solid + Wireframe</option>
                </select>
              </div>
            </div>
            <div className="controls-right">
              <div className="control-group">
                <p className="control-label">Orientation</p>
                <div className="view-buttons chip-row">
                  <button className="btn blue small" data-view="xy" onClick={() => handleOrientation("xy")}>
                    XY
                  </button>
                  <button className="btn blue small" data-view="xz" onClick={() => handleOrientation("xz")}>
                    XZ
                  </button>
                  <button className="btn blue small" data-view="yz" onClick={() => handleOrientation("yz")}>
                    YZ
                  </button>
                  <button className="btn yellow small" data-view="reset" onClick={() => handleOrientation("reset")}>
                    Reset
                  </button>
                </div>
              </div>
              <div className="control-group pan-group">
                <p className="control-label">Pan</p>
                <div className="pan-buttons">
                  <button className="btn small pan vertical" data-pan="up" onClick={() => handlePan("up")}>
                    Up
                  </button>
                  <button className="btn small pan vertical" data-pan="down" onClick={() => handlePan("down")}>
                    Down
                  </button>
                  <button className="btn small pan horizontal" data-pan="left" onClick={() => handlePan("left")}>
                    Left
                  </button>
                  <button className="btn small pan horizontal" data-pan="right" onClick={() => handlePan("right")}>
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-canvas">
            <MeshViewerR3F
              ref={modalR3FRef}
              stlBase64={meshBase64}
              viewMode={viewMode}
              autorotate
              canvasStyle={{ width: "100%", height: "100%" }}
              onInteract={() => handleResumeAutoRotate()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PatternCanvas({ points, onTogglePoint }) {
  const canvasRef = useRef(null);
  const layoutRef = useRef({ positions: {} });

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.clientWidth || 300;
    const height = canvas.clientHeight || 300;
    canvas.width = width;
    canvas.height = height;

    const gridWidth = (GRID_CONFIG.cols.length - 1) * GRID_CONFIG.spacingX;
    const gridHeight = (GRID_CONFIG.rows - 1) * GRID_CONFIG.spacingY;
    const centerX = width / 2;
    const centerY = height / 2;
    const offsetX = centerX - gridWidth / 2;
    const offsetY = centerY - gridHeight / 2;

    const positions = {};

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);

    ctx.fillStyle = "#e0e0e0";
    ctx.strokeStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "11px Arial";
    for (let r = GRID_CONFIG.rows; r >= 1; r--) {
      const rowIdx = GRID_CONFIG.rows - r;
      for (let ci = 0; ci < GRID_CONFIG.cols.length; ci++) {
        const x = offsetX + ci * GRID_CONFIG.spacingX;
        const y = offsetY + rowIdx * GRID_CONFIG.spacingY;
        const col = GRID_CONFIG.cols[ci];
        positions[`${r}-${col}`] = { x, y };
        ctx.beginPath();
        ctx.arc(x, y, GRID_CONFIG.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#e0e0e0";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#666";
        ctx.fillText(col, x, y);
      }
    }

    const ordered = points.slice().sort((a, b) => (a.order || 0) - (b.order || 0));

    // Draw connecting path with gradient and glow (light green)
    if (ordered.length > 1) {
      const first = positions[`${ordered[0].row}-${ordered[0].col}`];
      const last = positions[`${ordered[ordered.length - 1].row}-${ordered[ordered.length - 1].col}`];
      if (first && last) {
        const grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
        grad.addColorStop(0, "#d6f7e4");
        grad.addColorStop(1, "#b4eac8");
        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 4;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(182, 233, 200, 0.35)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ordered.forEach((p, idx) => {
          const pos = positions[`${p.row}-${p.col}`];
          if (!pos) return;
          if (idx === 0) {
            ctx.moveTo(pos.x, pos.y);
          } else {
            ctx.lineTo(pos.x, pos.y);
          }
        });
        ctx.stroke();
        ctx.restore();
      }
    }

    // Draw nodes on top of the path
    for (const p of ordered) {
      const pos = positions[`${p.row}-${p.col}`];
      if (!pos) continue;
      const radial = ctx.createRadialGradient(pos.x - 3, pos.y - 3, 3, pos.x, pos.y, GRID_CONFIG.radius + 2);
      radial.addColorStop(0, "#f6fffb");
      radial.addColorStop(0.5, "#d8f7e6");
      radial.addColorStop(1, "#b4eac8");
      ctx.save();
      ctx.fillStyle = radial;
      ctx.strokeStyle = "#6cc492";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(108, 196, 146, 0.35)";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, GRID_CONFIG.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = "#0f2a2f";
      ctx.font = "bold 12px 'Segoe UI', Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.col, pos.x, pos.y);
    }

    layoutRef.current = { positions, offsetX, offsetY };
  }, [points]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  useEffect(() => {
    const onResize = () => drawCanvas();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawCanvas]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const positions = layoutRef.current.positions || {};
    let nearest = null;
    Object.entries(positions).forEach(([key, pos]) => {
      const dist = Math.hypot(pos.x - x, pos.y - y);
      if (dist <= GRID_CONFIG.radius * 1.1) {
        if (!nearest || dist < nearest.dist) {
          nearest = { key, dist };
        }
      }
    });
    if (nearest) {
      const [row, col] = nearest.key.split("-");
      onTogglePoint(Number(row), col);
    }
  };

  return <canvas id="patternCanvas" ref={canvasRef} onClick={handleClick} />;
}

function PropertyGrid({ fields, predictions }) {
  return (
    <div className="props-grid">
      {fields.map((field) => {
        const idx = PROP_FIELDS.findIndex((f) => f.key === field.key);
        const value = predictions && Number.isFinite(predictions[idx]) ? Number(predictions[idx]).toFixed(6) : "--";
        return (
          <div className="prop-block" key={field.key}>
            <label htmlFor={`prop-${field.key}`}>{field.key}</label>
            <p className="note">{field.note}</p>
            <input id={`prop-${field.key}`} readOnly value={value} />
          </div>
        );
      })}
    </div>
  );
}

function Toast({ toast }) {
  return (
    <div
      id="toast"
      className={`toast ${toast.visible ? "show" : ""}`}
      style={{ background: toast.isError ? "#c0392b" : "#333" }}
    >
      {toast.message}
    </div>
  );
}

export default App;
