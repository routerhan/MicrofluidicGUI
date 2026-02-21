import React from "react";

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

export default React.memo(Toast);
