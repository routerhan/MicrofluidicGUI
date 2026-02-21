import React, { Suspense, lazy, useRef, useState } from "react";
import MeshModal from "../MeshPanel/MeshModal.jsx";

const MeshViewerR3F = lazy(() =>
    import("../../MeshViewerR3F").then((mod) => ({ default: mod.MeshViewerR3F })),
);

function StepMesh({
    meshBase64,
    meshing,
    onMesh,
    onDownload,
    onBack,
}) {
    const previewR3FRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("solid");

    const openModal = () => {
        if (!meshBase64) return;
        setIsModalOpen(true);
    };

    return (
        <div className="step-container">
            <div className="step-nav-top">
                <div className="step-nav-left">
                    <button className="btn" onClick={onBack}>
                        ← Back
                    </button>
                    <button className="btn green" id="btnMesh" onClick={onMesh} disabled={meshing}>
                        {meshing ? "Generating..." : "Generate 3D Mesh"}
                    </button>
                    <button className="btn blue" id="btnViewMesh" onClick={openModal} disabled={!meshBase64}>
                        Fullscreen Viewer
                    </button>
                    <button className="btn yellow" id="btnDownload" onClick={onDownload} disabled={!meshBase64}>
                        Download STL
                    </button>
                </div>
                <div className="step-nav-right">
                    <span className="pill">
                        {meshing ? "Generating..." : meshBase64 ? "✓ Mesh ready" : "Awaiting mesh"}
                    </span>
                </div>
            </div>

            <div className="step-content">
                <div className="card compact mesh-card">
                    <div className="mesh-preview-shell mesh-preview-full">
                        {meshBase64 ? (
                            <Suspense
                                fallback={
                                    <div style={{ color: "#a6b1d9", textAlign: "center", paddingTop: 40 }}>
                                        Loading 3D viewer…
                                    </div>
                                }
                            >
                                <MeshViewerR3F
                                    ref={previewR3FRef}
                                    stlBase64={meshBase64}
                                    viewMode={viewMode}
                                    canvasStyle={{ width: "100%", height: "100%" }}
                                />
                            </Suspense>
                        ) : (
                            <div id="meshPreviewPlaceholder">
                                Generate a mesh to see the 3D preview here.
                            </div>
                        )}
                    </div>
                    <div className="mesh-hint-bar">
                        <span>🖱️ Left drag: rotate · Right drag: pan · Scroll: zoom</span>
                        <span className="hint">Uses current flow path; falls back to template if none.</span>
                    </div>
                </div>
            </div>

            <MeshModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                meshBase64={meshBase64}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />
        </div>
    );
}

export default React.memo(StepMesh);
