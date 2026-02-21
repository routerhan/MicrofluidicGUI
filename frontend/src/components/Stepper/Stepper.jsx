import React from "react";

const STEPS = [
    { label: "Design", description: "Point selection & flow path" },
    { label: "Predict", description: "Material property prediction" },
    { label: "3D Mesh", description: "Mesh generation & viewer" },
];

function Stepper({ current, onStepClick, completedSteps }) {
    return (
        <div className="stepper">
            {STEPS.map((step, idx) => {
                const isActive = idx === current;
                const isCompleted = completedSteps.includes(idx);
                const isClickable = isCompleted || idx <= current;

                let cls = "stepper-step";
                if (isActive) cls += " active";
                if (isCompleted && !isActive) cls += " completed";
                if (!isClickable) cls += " disabled";

                return (
                    <React.Fragment key={step.label}>
                        {idx > 0 && (
                            <div className={`stepper-connector${isCompleted || idx <= current ? " filled" : ""}`} />
                        )}
                        <button
                            className={cls}
                            onClick={() => isClickable && onStepClick(idx)}
                            disabled={!isClickable}
                            type="button"
                        >
                            <span className="stepper-number">
                                {isCompleted && !isActive ? "✓" : idx + 1}
                            </span>
                            <span className="stepper-info">
                                <span className="stepper-label">{step.label}</span>
                                <span className="stepper-desc">{step.description}</span>
                            </span>
                        </button>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default React.memo(Stepper);
