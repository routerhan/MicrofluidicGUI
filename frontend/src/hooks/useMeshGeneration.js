import { useCallback, useState } from "react";
import { useApi } from "./useApi";

export function useMeshGeneration({ flowImage, flowCoords, showToast }) {
    const { apiCall } = useApi();
    const [loading, setLoading] = useState(false);
    const [meshBase64, setMeshBase64] = useState(null);

    const handleMesh = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        try {
            const payload = {
                use_template: flowImage ? false : true,
                middle_image_base64: flowImage || null,
                coords: flowCoords || null,
                upper_thickness: 4,
                middle_thickness: 4,
                bottom_thickness: 4,
                apply_smoothing: false,
                output_filename: "Microfluidic_Geometry",
            };
            const data = await apiCall("/api/mesh", payload);
            setMeshBase64(data.stl_base64 || null);
            showToast("Mesh generated.");
            return true;
        } catch (err) {
            showToast(err.message, true);
            return false;
        } finally {
            setLoading(false);
        }
    }, [apiCall, flowCoords, flowImage, loading, showToast]);

    const handleDownload = useCallback(() => {
        if (!meshBase64) return;
        const link = document.createElement("a");
        link.href = `data:model/stl;base64,${meshBase64}`;
        link.download = "Microfluidic_Geometry.stl";
        document.body.appendChild(link);
        link.click();
        link.remove();
    }, [meshBase64]);

    const clearMesh = useCallback(() => {
        setMeshBase64(null);
    }, []);

    return { loading, meshBase64, handleMesh, handleDownload, clearMesh };
}
