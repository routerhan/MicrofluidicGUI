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

export function usePrediction({ points, params, showToast }) {
    const { apiCall } = useApi();
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState(null);
    const [predFlowImage, setPredFlowImage] = useState(null);
    const [predFlowCoords, setPredFlowCoords] = useState(null);

    const coordsPayload = points
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((p) => ({ row: p.row, col: p.col }));

    const sanitizedParams = {
        cdepth: toNumberOrDefault(params.cdepth, DEFAULT_PARAMS.cdepth),
        cwidth: toNumberOrDefault(params.cwidth, DEFAULT_PARAMS.cwidth),
        cspace: toNumberOrDefault(params.cspace, DEFAULT_PARAMS.cspace),
    };

    const handlePredict = useCallback(async () => {
        if (loading) return;
        if (points.length === 0) {
            showToast("Select points before prediction.", true);
            return;
        }
        setLoading(true);
        try {
            const data = await apiCall("/api/predict", {
                points: coordsPayload,
                params: sanitizedParams,
            });
            setPredFlowImage(data.image_base64 || null);
            setPredFlowCoords(data.coords || null);
            setPredictions(data.predictions || null);
            showToast("Prediction done.");
            return true;
        } catch (err) {
            showToast(err.message, true);
            return false;
        } finally {
            setLoading(false);
        }
    }, [apiCall, coordsPayload, loading, params, points.length, sanitizedParams, showToast]);

    const clearPredictions = useCallback(() => {
        setPredictions(null);
        setPredFlowImage(null);
        setPredFlowCoords(null);
    }, []);

    return { loading, predictions, predFlowImage, predFlowCoords, handlePredict, clearPredictions };
}
