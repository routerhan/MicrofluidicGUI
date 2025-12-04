import * as THREE from "./libs/three.module.min.js";
import { STLLoader } from "./libs/STLLoader.js";
import { OrbitControls } from "./libs/OrbitControls.js";

const state = {
  points: [], // {row, col, x, y}
  imgFlow: null,
  predictions: null,
  meshBase64: null,
  flowCoords: null,
  isGenerating: false,
  isPredicting: false,
  isMeshing: false,
  hasMesh: false,
};

const canvas = document.getElementById("patternCanvas");
const ctx = canvas.getContext("2d");
const flowPreview = document.getElementById("flowPreview");
const btnGenerate = document.getElementById("btnGenerate");
const btnClear = document.getElementById("btnClear");
const btnPredict = document.getElementById("btnPredict");
const btnMesh = document.getElementById("btnMesh");
const btnDownload = document.getElementById("btnDownload");
const btnViewMesh = document.getElementById("btnViewMesh");
const toastEl = document.getElementById("toast");
const previewCanvas = document.getElementById("meshPreviewCanvas");
const previewPlaceholder = document.getElementById("meshPreviewPlaceholder");
const modalEl = document.getElementById("meshModal");
const modalCanvas = document.getElementById("meshModalCanvas");
const modalClose = document.getElementById("modalClose");
const viewModeSelect = document.getElementById("viewMode");
const viewButtons = document.querySelectorAll(".view-buttons button");

const gridConfig = {
  rows: 9,
  cols: ["A", "B", "C"],
  radius: 14,
  spacingX: 65,
  spacingY: 55,
  offsetX: null,
  offsetY: null,
};

function showToast(msg, isError = false) {
  toastEl.textContent = msg;
  toastEl.style.background = isError ? "#c0392b" : "#333";
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2500);
}

function getParams() {
  return {
    cdepth: parseFloat(document.getElementById("cdepth").value || "0.16"),
    cwidth: parseFloat(document.getElementById("cwidth").value || "0.4"),
    cspace: parseFloat(document.getElementById("cspace").value || "0.4"),
  };
}

function resetCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const { rows, cols, spacingX, spacingY } = gridConfig;
  const gridWidth = (cols.length - 1) * spacingX;
  const gridHeight = (rows - 1) * spacingY;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  gridConfig.offsetX = centerX - gridWidth / 2;
  gridConfig.offsetY = centerY - gridHeight / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);

  // draw dots and labels
  ctx.fillStyle = "#e0e0e0";
  ctx.strokeStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "11px Arial";
  for (let r = rows; r >= 1; r--) {
    const rowIdx = rows - r;
    for (let ci = 0; ci < cols.length; ci++) {
      const x = gridConfig.offsetX + ci * spacingX;
      const y = gridConfig.offsetY + rowIdx * spacingY;
      ctx.beginPath();
      ctx.arc(x, y, gridConfig.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#e0e0e0";
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#666";
      ctx.fillText(cols[ci], x, y);
    }
  }

  // redraw selections
  drawSelections();
}

function drawSelections() {
  const order = [...state.points].sort((a, b) => a.order - b.order);
  ctx.lineWidth = 4;
  for (const p of order) {
    ctx.fillStyle = "#2ecc71";
    ctx.beginPath();
    ctx.arc(p.x, p.y, gridConfig.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#2ecc71";
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(p.col, p.x, p.y);
  }
  // draw lines
  ctx.strokeStyle = "#2ecc71";
  ctx.beginPath();
  for (let i = 0; i < order.length; i++) {
    const p = order[i];
    if (i === 0) {
      ctx.moveTo(p.x, p.y);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  }
  if (order.length > 0) ctx.stroke();
}

function findNearestPoint(x, y) {
  const { cols, spacingX, spacingY, offsetX, offsetY, radius, rows } = gridConfig;
  for (let r = rows; r >= 1; r--) {
    const rowIdx = rows - r;
    for (let ci = 0; ci < cols.length; ci++) {
      const px = offsetX + ci * spacingX;
      const py = offsetY + rowIdx * spacingY;
      const dist = Math.hypot(px - x, py - y);
      if (dist <= radius * 1.1) {
        return { row: r, col: cols[ci], x: px, y: py };
      }
    }
  }
  return null;
}

function validateSelection(newPoint) {
  const perRow = state.points.filter((p) => p.row === newPoint.row);
  if (perRow.length >= 2) {
    showToast(`Row ${newPoint.row} already has 2 points`, true);
    return false;
  }
  const maxRow = state.points.reduce((m, p) => Math.max(m, p.row), 0);
  if (newPoint.row < maxRow) {
    showToast("Points must be ordered bottom-to-top (row 1→9).", true);
    return false;
  }
  return true;
}

function removePoint(point) {
  const idx = state.points.findIndex((p) => p.row === point.row && p.col === point.col);
  if (idx === -1) return;
  state.points.splice(idx, 1);
  state.points.forEach((p, i) => {
    p.order = i + 1;
  });
  resetCanvas();
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const nearest = findNearestPoint(x, y);
  if (!nearest) return;
  const existing = state.points.find((p) => p.row === nearest.row && p.col === nearest.col);
  if (existing) {
    removePoint(existing);
    return;
  }
  if (!validateSelection(nearest)) return;
  state.points.push({ ...nearest, order: state.points.length + 1 });
  resetCanvas();
});

window.addEventListener("resize", resetCanvas);

function clearSelection() {
  state.points = [];
  state.imgFlow = null;
  state.predictions = null;
  state.meshBase64 = null;
  state.hasMesh = false;
  flowPreview.src = "";
  btnDownload.disabled = true;
  btnViewMesh.disabled = true;
  state.flowCoords = null;
  if (previewPlaceholder) {
    previewPlaceholder.style.display = "flex";
  }
  document.querySelectorAll(".results-card input").forEach((el) => (el.value = "--"));
  resetCanvas();
}

btnClear.addEventListener("click", () => {
  clearSelection();
});

async function apiCall(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    let message = res.statusText;
    try {
      const data = await res.json();
      message = data.detail || JSON.stringify(data);
    } catch (_) {
      const text = await res.text();
      message = text || message;
    }
    throw new Error(message);
  }
  return res.json();
}

function coordsPayload() {
  return [...state.points]
    .sort((a, b) => a.order - b.order)
    .map((p) => ({ row: p.row, col: p.col }));
}

async function handleGenerate() {
  if (state.isGenerating) return;
  if (state.points.length === 0) {
    showToast("Select at least one point.", true);
    return;
  }
  state.isGenerating = true;
  btnGenerate.disabled = true;
  try {
    const params = getParams();
    const data = await apiCall("/api/flow/generate", { points: coordsPayload(), params });
    state.imgFlow = data.image_base64;
    state.flowCoords = data.coords;
    flowPreview.src = `data:image/png;base64,${state.imgFlow}`;
    showToast("Flow generated.");
  } catch (err) {
    showToast(err.message, true);
  } finally {
    state.isGenerating = false;
    btnGenerate.disabled = false;
  }
}

async function handlePredict() {
  if (state.isPredicting) return;
  if (state.points.length === 0) {
    showToast("Select points before prediction.", true);
    return;
  }
  state.isPredicting = true;
  btnPredict.disabled = true;
  try {
    const params = getParams();
    const data = await apiCall("/api/predict", { points: coordsPayload(), params });
    state.imgFlow = data.image_base64;
    state.flowCoords = data.coords;
    flowPreview.src = `data:image/png;base64,${state.imgFlow}`;
    state.predictions = data.predictions;
    const names = ["E11", "YS11", "v11", "E22", "YS22", "v22", "k11", "k22", "k33", "CTE11", "CTE22", "CTE33"];
    names.forEach((name, idx) => {
      const el = document.getElementById(`prop-${name}`);
      if (el && data.predictions[idx] !== undefined) {
        el.value = Number(data.predictions[idx]).toFixed(6);
      }
    });
    showToast("Prediction done.");
  } catch (err) {
    showToast(err.message, true);
  } finally {
    state.isPredicting = false;
    btnPredict.disabled = false;
  }
}

async function handleMesh() {
  if (state.isMeshing) return;
  state.isMeshing = true;
  btnMesh.disabled = true;
  try {
    // prefer existing generated flow image if available; otherwise request template
    const payload = {
      use_template: state.imgFlow ? false : true,
      middle_image_base64: state.imgFlow || null,
      coords: state.flowCoords || null,
      upper_thickness: 4,
      middle_thickness: 4,
      bottom_thickness: 4,
      apply_smoothing: false,
      output_filename: "Microfluidic_Geometry",
    };
    const data = await apiCall("/api/mesh", payload);
    state.meshBase64 = data.stl_base64;
    btnDownload.disabled = false;
    btnViewMesh.disabled = false;
    state.hasMesh = true;
    meshViewer.setGeometryFromBase64(state.meshBase64);
    showToast("Mesh generated.");
  } catch (err) {
    showToast(err.message, true);
  } finally {
    state.isMeshing = false;
    btnMesh.disabled = false;
  }
}

btnGenerate.addEventListener("click", handleGenerate);
btnPredict.addEventListener("click", handlePredict);
btnMesh.addEventListener("click", handleMesh);

btnDownload.addEventListener("click", () => {
  if (!state.meshBase64) return;
  const link = document.createElement("a");
  link.href = `data:model/stl;base64,${state.meshBase64}`;
  link.download = "Microfluidic_Geometry.stl";
  document.body.appendChild(link);
  link.click();
  link.remove();
});

// ==== 3D Viewer (Three.js) ====
function base64ToArrayBuffer(b64) {
  const binary = atob(b64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}

function createRenderer(canvasEl) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  return renderer;
}

function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
  light1.position.set(1, 1, 1);
  const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
  light2.position.set(-1, -1, -0.5);
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(light1, light2, ambient);
  return scene;
}

const meshViewer = {
  geometry: null,
  boundingRadius: 20,
  loopHandle: null,
  preview: {
    canvas: previewCanvas,
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    meshGroup: null,
  },
  modal: {
    canvas: modalCanvas,
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    meshGroup: null,
  },
  init() {
    this.preview.renderer = createRenderer(this.preview.canvas);
    this.modal.renderer = createRenderer(this.modal.canvas);

    this.preview.scene = createScene();
    this.modal.scene = createScene();

    this.preview.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    this.modal.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);

    this.preview.controls = new OrbitControls(this.preview.camera, this.preview.canvas);
    this.preview.controls.enableDamping = true;
    this.preview.controls.dampingFactor = 0.08;
    this.preview.controls.enablePan = false;

    this.modal.controls = new OrbitControls(this.modal.camera, this.modal.canvas);
    this.modal.controls.enableDamping = true;
    this.modal.controls.dampingFactor = 0.08;

    this.resize();
    this.startLoop();
  },
  setGeometryFromBase64(stlB64) {
    try {
      const loader = new STLLoader();
      const geometry = loader.parse(base64ToArrayBuffer(stlB64));
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      console.log("STL geometry", geometry.boundingBox, geometry.boundingSphere);
      this.geometry = geometry;
      this.boundingRadius = geometry.boundingSphere ? geometry.boundingSphere.radius : 20;
      this.applyViewMode(viewModeSelect.value || "solid");
      this.fitCamera("preview");
      this.fitCamera("modal");
      previewPlaceholder.style.display = "none";
      this.resize();
    } catch (err) {
      console.error("Failed to parse STL", err);
      showToast("Failed to parse STL.", true);
    }
  },
  makeMeshGroup(mode) {
    if (!this.geometry) return null;
    const group = new THREE.Group();
    if (mode === "wireframe" || mode === "solid-wireframe") {
      const wire = new THREE.MeshBasicMaterial({ color: 0x1f4f8b, wireframe: true });
      const mesh = new THREE.Mesh(this.geometry, wire);
      group.add(mesh);
    }
    if (mode === "solid" || mode === "solid-wireframe") {
      const solidMat = new THREE.MeshPhongMaterial({ color: 0xadd8e6, shininess: 80 });
      const mesh = new THREE.Mesh(this.geometry, solidMat);
      group.add(mesh);
    }
    return group;
  },
  applyViewMode(mode) {
    const applyToScene = (sceneKey) => {
      const target = this[sceneKey];
      if (!target.scene) return;
      if (target.meshGroup) {
        target.scene.remove(target.meshGroup);
      }
      target.meshGroup = this.makeMeshGroup(mode);
      if (target.meshGroup) {
        target.scene.add(target.meshGroup);
      }
    };
    applyToScene("preview");
    applyToScene("modal");
    this.renderOnce();
  },
  fitCamera(sceneKey) {
    const target = this[sceneKey];
    if (!target.scene || !target.camera || !this.geometry) return;
    const box = new THREE.Box3().setFromObject(target.meshGroup || new THREE.Object3D());
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z, 1);
    const dist = maxDim * 2;
    target.camera.position.set(dist, dist, dist);
    target.camera.lookAt(center);
    if (target.controls) {
      target.controls.target.copy(center);
      target.controls.update();
    }
  },
  setOrientation(view) {
    const t = this.modal;
    if (!t.camera || !t.controls) return;
    const r = this.boundingRadius || 10;
    switch (view) {
      case "xy":
        t.camera.position.set(0, r * 2, r * 0.01);
        break;
      case "xz":
        t.camera.position.set(0, r * 0.01, r * 2);
        break;
      case "yz":
        t.camera.position.set(r * 2, r * 0.01, 0);
        break;
      default:
        t.camera.position.set(r * 1.5, r * 1.5, r * 1.5);
        break;
    }
    t.camera.lookAt(t.controls.target);
    t.controls.update();
    this.render();
  },
  resize() {
    const resizeTarget = (target) => {
      if (!target.renderer || !target.canvas || !target.camera) return;
      const { clientWidth, clientHeight } = target.canvas;
      target.renderer.setSize(clientWidth, clientHeight, false);
      target.camera.aspect = clientWidth / clientHeight;
      target.camera.updateProjectionMatrix();
    };
    resizeTarget(this.preview);
    resizeTarget(this.modal);
  },
  openModal() {
    modalEl.classList.remove("hidden");
    this.resize();
    this.renderOnce();
  },
  closeModal() {
    modalEl.classList.add("hidden");
  },
  renderOnce() {
    const renderTarget = (target) => {
      if (!target.renderer || !target.scene || !target.camera) return;
      target.renderer.render(target.scene, target.camera);
    };
    renderTarget(this.preview);
    renderTarget(this.modal);
  },
  startLoop() {
    if (this.loopHandle) return;
    const loop = () => {
      if (this.modal.controls) {
        this.modal.controls.update();
      }
      if (this.preview.controls) {
        this.preview.controls.update();
      }
      this.renderOnce();
      this.loopHandle = requestAnimationFrame(loop);
    };
    loop();
  },
};

btnViewMesh.addEventListener("click", () => {
  if (!state.meshBase64) {
    showToast("Generate mesh first.", true);
    return;
  }
  meshViewer.openModal();
});

modalClose.addEventListener("click", () => meshViewer.closeModal());

viewModeSelect.addEventListener("change", (e) => {
  meshViewer.applyViewMode(e.target.value);
});

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    meshViewer.setOrientation(view);
  });
});

window.addEventListener("resize", () => {
  meshViewer.resize();
});

// init
resetCanvas();
meshViewer.init();
async function loadSampleMesh() {
  try {
    const res = await fetch("/static/mg_8.stl");
    if (!res.ok) {
      throw new Error(`Failed to load sample mesh (status ${res.status})`);
    }
    const buf = await res.arrayBuffer();
    const b64 = arrayBufferToBase64(buf);
    meshViewer.setGeometryFromBase64(b64);
    if (previewPlaceholder) {
      previewPlaceholder.textContent = "Sample mesh (mg_8.stl) loaded for preview.";
    }
    showToast("Sample mesh loaded for preview.");
  } catch (err) {
    console.error("Sample mesh load failed:", err);
    showToast("Unable to load sample mesh preview.", true);
  }
}
loadSampleMesh();
showToast("Ready.");
