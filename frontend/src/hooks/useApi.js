import { useCallback } from "react";

export function useApi() {
    const apiCall = useCallback(async (url, payload) => {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        if (!res.ok) {
            let message = res.statusText;
            try {
                const cloned = res.clone();
                const data = await cloned.json();
                message = data.detail || JSON.stringify(data);
            } catch {
                try {
                    const text = await res.text();
                    message = text || message;
                } catch {
                    // ignore
                }
            }
            throw new Error(message);
        }
        return res.json();
    }, []);

    return { apiCall };
}
