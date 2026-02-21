import React, { useCallback, useEffect, useState } from "react";
import Stepper from "./components/Stepper/Stepper.jsx";
import StepDesign from "./components/steps/StepDesign.jsx";
import StepPredict from "./components/steps/StepPredict.jsx";
import StepMesh from "./components/steps/StepMesh.jsx";
import Toast from "./components/common/Toast.jsx";

const DEFAULT_PARAMS = {
  cdepth: 0.16,
  cwidth: 0.4,
  cspace: 0.4,
};

function App() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  // Shared state
  const [points, setPoints] = useState([]);
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const [flowImage, setFlowImage] = useState(null);
  const [flowCoords, setFlowCoords] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [meshBase64, setMeshBase64] = useState(null);

  // Loading
  const [generating, setGenerating] = useState(false);
  const [predicting, setPredicting] = useState(false);
  const [meshing, setMeshing] = useState(false);

  // Toast
  const [toast, setToast] = useState({ message: "", isError: false, visible: false });

  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
  }, []);

  const showToast = useCallback((message, isError = false) => {
    setToast({ message, isError, visible: true });
  }, []);

  useEffect(() => {
    if (!toast.visible) return undefined;
    const timer = setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 2500);
    return () => clearTimeout(timer);
  }, [toast.visible]);

  // --- API helpers ---
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

  const toNumberOrDefault = (value, fallback) => {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  const sanitizedParams = useCallback(
    () => ({
      cdepth: toNumberOrDefault(params.cdepth, DEFAULT_PARAMS.cdepth),
      cwidth: toNumberOrDefault(params.cwidth, DEFAULT_PARAMS.cwidth),
      cspace: toNumberOrDefault(params.cspace, DEFAULT_PARAMS.cspace),
    }),
    [params],
  );

  const coordsPayload = useCallback(
    () =>
      points
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((p) => ({ row: p.row, col: p.col })),
    [points],
  );

  // --- Point selection ---
  const togglePoint = useCallback(
    (row, col) => {
      setPoints((prev) => {
        const existingIdx = prev.findIndex((p) => p.row === row && p.col === col);
        if (existingIdx !== -1) {
          const next = prev.slice();
          next.splice(existingIdx, 1);
          return next.map((p, i) => ({ ...p, order: i + 1 }));
        }
        const perRow = prev.filter((p) => p.row === row);
        if (perRow.length >= 2) {
          showToast(`Row ${row} already has 2 points.`, true);
          return prev;
        }
        const maxRow = prev.reduce((m, p) => Math.max(m, p.row), 0);
        if (row < maxRow) {
          showToast("Points must be ordered bottom-to-top (row 1→9).", true);
          return prev;
        }
        return [...prev, { row, col, order: prev.length + 1 }];
      });
    },
    [showToast],
  );

  const clearAll = useCallback(() => {
    setPoints([]);
    setFlowImage(null);
    setFlowCoords(null);
    setPredictions(null);
    setMeshBase64(null);
    setCompletedSteps([]);
    setStep(0);
  }, []);

  // --- API actions ---
  const handleGenerate = useCallback(async () => {
    if (generating) return;
    if (points.length === 0) {
      showToast("Select at least one point.", true);
      return;
    }
    setGenerating(true);
    try {
      const data = await apiCall("/api/flow/generate", {
        points: coordsPayload(),
        params: sanitizedParams(),
      });
      setFlowImage(data.image_base64 || null);
      setFlowCoords(data.coords || null);
      // Clear downstream results
      setPredictions(null);
      setMeshBase64(null);
      setCompletedSteps((prev) => {
        const next = prev.filter((s) => s < 1);
        if (!next.includes(0)) next.push(0);
        return next;
      });
      showToast("Flow generated.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setGenerating(false);
    }
  }, [apiCall, coordsPayload, generating, points.length, sanitizedParams, showToast]);

  const handlePredict = useCallback(async () => {
    if (predicting) return;
    if (points.length === 0) {
      showToast("Select points before prediction.", true);
      return;
    }
    setPredicting(true);
    try {
      const data = await apiCall("/api/predict", {
        points: coordsPayload(),
        params: sanitizedParams(),
      });
      setFlowImage(data.image_base64 || null);
      setFlowCoords(data.coords || null);
      setPredictions(data.predictions || null);
      // Clear downstream
      setMeshBase64(null);
      setCompletedSteps((prev) => {
        const next = prev.filter((s) => s < 2);
        if (!next.includes(0)) next.push(0);
        if (!next.includes(1)) next.push(1);
        return next;
      });
      showToast("Prediction done.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setPredicting(false);
    }
  }, [apiCall, coordsPayload, predicting, points.length, sanitizedParams, showToast]);

  const handleMesh = useCallback(async () => {
    if (meshing) return;
    setMeshing(true);
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
      setCompletedSteps((prev) => {
        const next = [...prev];
        if (!next.includes(2)) next.push(2);
        return next;
      });
      showToast("Mesh generated.");
    } catch (err) {
      showToast(err.message, true);
    } finally {
      setMeshing(false);
    }
  }, [apiCall, flowCoords, flowImage, meshing, showToast]);

  const handleDownload = useCallback(() => {
    if (!meshBase64) return;
    const link = document.createElement("a");
    link.href = `data:model/stl;base64,${meshBase64}`;
    link.download = "Microfluidic_Geometry.stl";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [meshBase64]);

  // --- Navigation ---
  const handleParamChange = (key, value) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const goToStep = useCallback((idx) => {
    setStep(idx);
  }, []);

  return (
    <div className="page-shell">
      <header className="toolbar">
        <div className="title premium-title">
          <div className="title-text">
            <h1>Microfluidic Property Prediction</h1>
            <span className="subtitle">9x3 point selection · Flow preview · Prediction · 3D Mesh</span>
          </div>
          <div className="title-badge">
            <span className="pill glow">Pro Lab</span>
          </div>
        </div>
      </header>

      <Stepper current={step} onStepClick={goToStep} completedSteps={completedSteps} />

      <main className="wizard-main">
        {step === 0 && (
          <StepDesign
            points={points}
            onTogglePoint={togglePoint}
            onClear={clearAll}
            params={params}
            onParamChange={handleParamChange}
            flowImage={flowImage}
            generating={generating}
            onGenerate={handleGenerate}
            onNext={() => goToStep(1)}
            canGoNext={!!flowImage}
          />
        )}
        {step === 1 && (
          <StepPredict
            flowImage={flowImage}
            predictions={predictions}
            predicting={predicting}
            onPredict={handlePredict}
            onBack={() => goToStep(0)}
            onNext={() => goToStep(2)}
            canGoNext={!!predictions}
          />
        )}
        {step === 2 && (
          <StepMesh
            meshBase64={meshBase64}
            meshing={meshing}
            onMesh={handleMesh}
            onDownload={handleDownload}
            onBack={() => goToStep(1)}
          />
        )}
      </main>

      <Toast toast={toast} />
    </div>
  );
}

export default App;
