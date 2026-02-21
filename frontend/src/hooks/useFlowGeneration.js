import { useCallback, useState } from "react";
import { useApi } from "./useApi";

const DEFAULT_PARAMS = {
    cdepth: 0.16,
    cwidth: 0.4,
    cspace: 0.4,
};

function toNumberOrDefault(value, fallback) {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

export function useFlowGeneration({ points, params, showToast }) {
    const { apiCall } = useApi();
    const [loading, setLoading] = useState(false);
    const [flowImage, setFlowImage] = useState(null);
    const [flowCoords, setFlowCoords] = useState(null);

    const coordsPayload = points
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((p) => ({ row: p.row, col: p.col }));

    const sanitizedParams = {
        cdepth: toNumberOrDefault(params.cdepth, DEFAULT_PARAMS.cdepth),
        cwidth: toNumberOrDefault(params.cwidth, DEFAULT_PARAMS.cwidth),
        cspace: toNumberOrDefault(params.cspace, DEFAULT_PARAMS.cspace),
    };

    const handleGenerate = useCallback(async () => {
        if (loading) return;
        if (points.length === 0) {
            showToast("Select at least one point.", true);
            return;
        }
        setLoading(true);
        try {
            const data = await apiCall("/api/flow/generate", {
                points: coordsPayload,
                params: sanitizedParams,
            });
            setFlowImage(data.image_base64 || null);
            setFlowCoords(data.coords || null);
            showToast("Flow generated.");
            return true;
        } catch (err) {
            showToast(err.message, true);
            return false;
        } finally {
            setLoading(false);
        }
    }, [apiCall, coordsPayload, loading, params, points.length, sanitizedParams, showToast]);

    const clearFlow = useCallback(() => {
        setFlowImage(null);
        setFlowCoords(null);
    }, []);

    return { loading, flowImage, flowCoords, handleGenerate, clearFlow, setFlowImage, setFlowCoords };
}
