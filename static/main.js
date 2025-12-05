import * as THREE from "./libs/three.module.min.js";
import { STLLoader } from "./libs/STLLoader.js";
import { OrbitControls } from "./libs/OrbitControls.js";
import { RoomEnvironment } from "./libs/RoomEnvironment.js";

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
const flowPreviewPlaceholder = document.getElementById("flowPreviewPlaceholder");
if (flowPreview) {
  flowPreview.style.display = "none";
}
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
const viewButtonsContainer = document.querySelector(".view-buttons");
const panButtons = document.querySelectorAll(".pan-buttons button");
const modalOrientationOverlay = document.getElementById("modalOrientationOverlay");
const modalHintOverlay = document.getElementById("modalHintOverlay");
const orientationLabel = document.getElementById("orientationLabel");

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
  if (flowPreview) {
    flowPreview.src = "";
    flowPreview.style.display = "none";
  }
  if (flowPreviewPlaceholder) {
    flowPreviewPlaceholder.style.display = "flex";
  }
  btnDownload.disabled = true;
  btnViewMesh.disabled = true;
  state.flowCoords = null;
  if (previewPlaceholder) {
    previewPlaceholder.style.display = "flex";
  }
  if (meshViewer && typeof meshViewer.clearGeometry === "function") {
    meshViewer.clearGeometry();
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
    if (flowPreview) {
      flowPreview.src = `data:image/png;base64,${state.imgFlow}`;
      flowPreview.style.display = "block";
    }
    if (flowPreviewPlaceholder) {
      flowPreviewPlaceholder.style.display = "none";
    }
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
    if (flowPreview) {
      flowPreview.src = `data:image/png;base64,${state.imgFlow}`;
      flowPreview.style.display = "block";
    }
    if (flowPreviewPlaceholder) {
      flowPreviewPlaceholder.style.display = "none";
    }
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

function createRenderer(canvasEl) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;
  return renderer;
}

function createEnvironmentTexture(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  const roomEnvironment = new RoomEnvironment(renderer);
  const envRT = pmremGenerator.fromScene(roomEnvironment);
  const texture = envRT.texture;
  envRT.dispose();
  roomEnvironment.dispose();
  pmremGenerator.dispose();
  return texture;
}

function createScene(envTexture) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5f7fb);
  if (envTexture) {
    scene.environment = envTexture;
  }
  const hemi = new THREE.HemisphereLight(0xffffff, 0x1b1f2f, 0.55);
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(8, 12, 10);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.bias = -0.0001;
  const fillLight = new THREE.DirectionalLight(0xd8e5ff, 0.6);
  fillLight.position.set(-6, 6, -5);
  const rimLight = new THREE.SpotLight(0xfff2d5, 0.5, 0, Math.PI / 5, 0.4);
  rimLight.position.set(0, 5, -9);
  rimLight.target.position.set(0, 0, 0);
  rimLight.castShadow = true;
  scene.add(hemi, keyLight, fillLight, rimLight, rimLight.target);
  return scene;
}

const meshViewer = {
  geometry: null,
  boundingRadius: 20,
  loopHandle: null,
  environmentMap: null,
  autorotate: true,
  autorotateSpeed: 0.002,
  autorotateTimeout: null,
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

    this.environmentMap = createEnvironmentTexture(this.preview.renderer);

    this.preview.scene = createScene(this.environmentMap);
    this.modal.scene = createScene(this.environmentMap);

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
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const position = geometry.getAttribute("position");
      if (position) {
        const colors = new Float32Array(position.count * 3);
        const color = new THREE.Color();
        const minY = geometry.boundingBox?.min.y ?? -1;
        const maxY = geometry.boundingBox?.max.y ?? 1;
        const range = Math.max(maxY - minY, 1e-5);
        for (let i = 0; i < position.count; i++) {
          const y = position.getY(i);
          const t = (y - minY) / range;
          color.setHSL(0.6 - 0.5 * t, 0.75, 0.5 + 0.15 * t);
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
        }
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      }
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
  clearGeometry() {
    const clearTarget = (target) => {
      if (target.scene && target.meshGroup) {
        target.scene.remove(target.meshGroup);
        target.meshGroup = null;
      }
    };
    clearTarget(this.preview);
    clearTarget(this.modal);
    this.geometry = null;
    this.boundingRadius = 20;
    if (previewPlaceholder) {
      previewPlaceholder.style.display = "flex";
    }
    this.renderOnce();
  },
  makeMeshGroup(mode) {
    if (!this.geometry) return null;
    const group = new THREE.Group();
    if (mode === "wireframe" || mode === "solid-wireframe") {
      const wire = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(this.geometry, wire);
      mesh.castShadow = true;
      group.add(mesh);
    }
    if (mode === "solid" || mode === "solid-wireframe") {
      const solidMat = new THREE.MeshPhysicalMaterial({
        color: 0xb7d8ff,
        roughness: 0.35,
        metalness: 0.15,
        clearcoat: 0.6,
        clearcoatRoughness: 0.15,
        reflectivity: 0.8,
        envMap: this.environmentMap || null,
        envMapIntensity: 1.2,
        vertexColors: true,
      });
      const mesh = new THREE.Mesh(this.geometry, solidMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
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
    const box = new THREE.Box3();
    box.setFromObject(target.meshGroup || new THREE.Object3D());
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z, 1);
    const dist = maxDim * 1.3;
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
    this.renderOnce();
    let label = "Perspective";
    switch (view) {
      case "xy":
        label = "Facing XY Plane";
        break;
      case "xz":
        label = "Facing XZ Plane";
        break;
      case "yz":
        label = "Facing YZ Plane";
        break;
      default:
        label = "Perspective";
        break;
    }
    this.updateOrientationLabel(label);
    this.showOrientationOverlay();
  },
  panModal(direction) {
    const t = this.modal;
    if (!t.camera || !t.controls) return;
    let dx = 0;
    let dy = 0;
    switch (direction) {
      case "left":
        dx = -1;
        break;
      case "right":
        dx = 1;
        break;
      case "up":
        dy = 1;
        break;
      case "down":
        dy = -1;
        break;
      default:
        return;
    }
    const step = Math.max(this.boundingRadius * 0.1, 1);
    const camera = t.camera;
    const controls = t.controls;
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    const right = new THREE.Vector3().crossVectors(forward, camera.up).normalize();
    const up = camera.up.clone().normalize();
    const offset = new THREE.Vector3()
      .addScaledVector(right, dx * step)
      .addScaledVector(up, dy * step);
    camera.position.add(offset);
    controls.target.add(offset);
    controls.update();
    this.renderOnce();
    this.resumeAutoRotate();
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
    this.setOrientation("reset");
    this.resize();
    this.renderOnce();
    this.updateOrientationLabel("Perspective");
    this.showOrientationOverlay();
    this.showHintOverlay();
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
      this.tickRotate();
      this.renderOnce();
      this.loopHandle = requestAnimationFrame(loop);
    };
    loop();
  },
  tickRotate() {
    const applyRotation = (target) => {
      if (!target.meshGroup) return;
      target.meshGroup.rotation.y += this.autorotateSpeed;
    };
    if (this.autorotate) {
      applyRotation(this.preview);
      applyRotation(this.modal);
    }
  },
  resumeAutoRotate(delay = 1500) {
    this.autorotate = false;
    if (this.autorotateTimeout) clearTimeout(this.autorotateTimeout);
    this.autorotateTimeout = setTimeout(() => {
      this.autorotate = true;
    }, delay);
  },
  updateOrientationLabel(text) {
    if (orientationLabel) {
      orientationLabel.textContent = text;
    }
  },
  showHintOverlay() {
    if (!modalHintOverlay) return;
    modalHintOverlay.classList.remove("hidden");
    modalHintOverlay.classList.add("show");
    clearTimeout(this.hintTimeout);
    this.hintTimeout = setTimeout(() => {
      modalHintOverlay.classList.remove("show");
    }, 3500);
  },
  showOrientationOverlay() {
    if (!modalOrientationOverlay) return;
    modalOrientationOverlay.classList.remove("hidden");
    modalOrientationOverlay.classList.add("show");
    clearTimeout(this.orientationTimeout);
    this.orientationTimeout = setTimeout(() => {
      modalOrientationOverlay.classList.remove("show");
    }, 2500);
  },
};

btnViewMesh.addEventListener("click", () => {
  if (!state.meshBase64) {
    showToast("Generate mesh first.", true);
    return;
  }
  meshViewer.openModal();
  meshViewer.resumeAutoRotate(1000);
  meshViewer.showHintOverlay();
});

modalClose.addEventListener("click", () => meshViewer.closeModal());

viewModeSelect.addEventListener("change", (e) => {
  meshViewer.applyViewMode(e.target.value);
});
viewModeSelect.addEventListener("mouseenter", () => {
  meshViewer.showAxisHelpers("hover");
  meshViewer.updateOrientationLabel(`View Mode: ${viewModeSelect.value.toUpperCase()}`);
  meshViewer.showOrientationOverlay();
});
viewModeSelect.addEventListener("mouseleave", () => {
  meshViewer.hideAxisHelpers("hover");
});

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    meshViewer.setOrientation(view);
    meshViewer.resumeAutoRotate();
  });
  btn.addEventListener("mouseenter", () => meshViewer.showAxisHelpers("hover"));
  btn.addEventListener("mouseleave", () => meshViewer.hideAxisHelpers("hover"));
});

panButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dir = btn.dataset.pan;
    meshViewer.panModal(dir);
  });
});

window.addEventListener("resize", () => {
  meshViewer.resize();
});

["mousedown", "wheel", "touchstart"].forEach((evt) => {
  meshViewer.modal.canvas.addEventListener(evt, () => meshViewer.resumeAutoRotate());
  meshViewer.preview.canvas.addEventListener(evt, () => meshViewer.resumeAutoRotate());
});

// init
resetCanvas();
meshViewer.init();
showToast("Ready.");
