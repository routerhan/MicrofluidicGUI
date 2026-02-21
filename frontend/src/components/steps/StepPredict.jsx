import React from "react";
import FlowPreview from "../FlowPreview/FlowPreview.jsx";
import PropertyGrid, { mechanicalProps, thermalProps } from "../PredictionResult/PropertyGrid.jsx";

function StepPredict({
    flowImage,
    predictions,
    predicting,
    onPredict,
    onBack,
    onNext,
    canGoNext,
}) {
    return (
        <div className="step-container">
            <div className="step-nav-top">
                <div className="step-nav-left">
                    <button className="btn" onClick={onBack}>
                        ← Back
                    </button>
                    <button className="btn green" id="btnPredict" onClick={onPredict} disabled={predicting}>
                        {predicting ? "Predicting..." : "Start Prediction"}
                    </button>
                </div>
                <div className="step-nav-right">
                    <span className="pill" style={{ marginRight: 8 }}>
                        {predictions ? "✓ Ready" : "Awaiting prediction"}
                    </span>
                    <button className="btn blue" onClick={onNext} disabled={!canGoNext}>
                        Next: 3D Mesh →
                    </button>
                </div>
            </div>

            <div className="step-content">
                <div className="step-predict-grid">
                    <div className="card compact">
                        <h3>Flow Path</h3>
                        <FlowPreview flowImage={flowImage} />
                    </div>

                    <div className="step-predict-results">
                        <div className="card compact results-card">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(StepPredict);
