import React, { Suspense, lazy, useRef } from "react";

const MeshViewerR3F = lazy(() =>
    import("../../MeshViewerR3F").then((mod) => ({ default: mod.MeshViewerR3F })),
);

function MeshModal({ isOpen, onClose, meshBase64, viewMode, onViewModeChange }) {
    const modalR3FRef = useRef(null);

    const handleOrientation = (mode) => {
        modalR3FRef.current?.setOrientation(mode);
    };

    const handlePan = (dir) => {
        modalR3FRef.current?.pan(dir);
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop"
            id="meshModal"
            style={{ display: "flex" }}
            onClick={(e) => {
                if (e.target.id === "meshModal") onClose();
            }}
        >
            <div className="modal-content resizable mesh-modal">
                <div className="modal-header">
                    <h3>3D Mesh Viewer</h3>
                    <button className="modal-close-btn" id="modalClose" aria-label="Close modal" onClick={onClose}>
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
                                onChange={(e) => onViewModeChange(e.target.value)}
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
                                <button className="btn blue small" onClick={() => handleOrientation("xy")}>XY</button>
                                <button className="btn blue small" onClick={() => handleOrientation("xz")}>XZ</button>
                                <button className="btn blue small" onClick={() => handleOrientation("yz")}>YZ</button>
                                <button className="btn yellow small" onClick={() => handleOrientation("reset")}>Reset</button>
                            </div>
                        </div>
                        <div className="control-group pan-group">
                            <p className="control-label">Pan</p>
                            <div className="pan-buttons">
                                <button className="btn small pan vertical" onClick={() => handlePan("up")}>Up</button>
                                <button className="btn small pan vertical" onClick={() => handlePan("down")}>Down</button>
                                <button className="btn small pan horizontal" onClick={() => handlePan("left")}>Left</button>
                                <button className="btn small pan horizontal" onClick={() => handlePan("right")}>Right</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-canvas">
                    <Suspense fallback={<div style={{ color: "#a6b1d9", textAlign: "center", paddingTop: 40 }}>Loading 3D viewer…</div>}>
                        <MeshViewerR3F
                            ref={modalR3FRef}
                            stlBase64={meshBase64}
                            viewMode={viewMode}
                            canvasStyle={{ width: "100%", height: "100%" }}
                        />
                    </Suspense>
                </div>
                <div className="modal-hint">
                    <span>🖱️ Left drag: rotate · Right drag: pan · Scroll: zoom</span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(MeshModal);
