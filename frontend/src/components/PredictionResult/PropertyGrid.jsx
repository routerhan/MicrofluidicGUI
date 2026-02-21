import React from "react";

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

export const mechanicalProps = PROP_FIELDS.slice(0, 6);
export const thermalProps = PROP_FIELDS.slice(6);

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

export default React.memo(PropertyGrid);
