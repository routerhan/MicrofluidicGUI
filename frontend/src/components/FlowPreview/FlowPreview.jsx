import React from "react";

function FlowPreview({ flowImage }) {
    return (
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
    );
}

export default React.memo(FlowPreview);
