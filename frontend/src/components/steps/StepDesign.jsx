import React from "react";
import PatternCanvas from "../PointSelector/PatternCanvas.jsx";
import FlowPreview from "../FlowPreview/FlowPreview.jsx";

function StepDesign({
    points,
    onTogglePoint,
    onClear,
    params,
    onParamChange,
    flowImage,
    generating,
    onGenerate,
    onNext,
    canGoNext,
}) {
    return (
        <div className="step-container">
            <div className="step-nav-top">
                <div className="step-nav-left">
                    <button className="btn green" id="btnGenerate" onClick={onGenerate} disabled={generating}>
                        {generating ? "Generating..." : "Generate Flow Pattern"}
                    </button>
                    <button className="btn pink" id="btnClear" onClick={onClear}>
                        Clear All
                    </button>
                </div>
                <div className="step-nav-right">
                    <button className="btn blue" onClick={onNext} disabled={!canGoNext}>
                        Next: Predict →
                    </button>
                </div>
            </div>

            <div className="step-content">
                <div className="step-design-grid">
                    <div className="step-design-left">
                        <div className="card compact">
                            <h3>Point Selection (9×3)</h3>
                            <p className="hint">Bottom to top (1→9), max 2 per row.</p>
                            <div className="canvas-shell">
                                <PatternCanvas points={points} onTogglePoint={onTogglePoint} />
                            </div>
                        </div>

                        <div className="card compact">
                            <h3>Channel Parameters</h3>
                            <div className="params-compact">
                                <label>
                                    <span className="param-label">Depth</span>
                                    <input
                                        id="cdepth"
                                        type="number"
                                        step="0.01"
                                        value={params.cdepth}
                                        onChange={(e) => onParamChange("cdepth", e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className="param-label">Width</span>
                                    <input
                                        id="cwidth"
                                        type="number"
                                        step="0.01"
                                        value={params.cwidth}
                                        onChange={(e) => onParamChange("cwidth", e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className="param-label">Space</span>
                                    <input
                                        id="cspace"
                                        type="number"
                                        step="0.01"
                                        value={params.cspace}
                                        onChange={(e) => onParamChange("cspace", e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="card compact">
                        <h3>Flow Path Preview</h3>
                        <FlowPreview flowImage={flowImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(StepDesign);
