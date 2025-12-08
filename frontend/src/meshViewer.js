import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

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

function createMeshViewer({
  previewCanvas,
  modalCanvas,
  orientationLabel,
  orientationOverlay,
  hintOverlay,
  onError,
}) {
  const viewer = {
    geometry: null,
    boundingRadius: 20,
    loopHandle: null,
    environmentMap: null,
    autorotate: true,
    autorotateSpeed: 0.002,
    autorotateTimeout: null,
    orientationTimeout: null,
    hintTimeout: null,
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
  };

  viewer.init = () => {
    viewer.preview.renderer = createRenderer(viewer.preview.canvas);
    viewer.modal.renderer = createRenderer(viewer.modal.canvas);

    viewer.environmentMap = createEnvironmentTexture(viewer.preview.renderer);

    viewer.preview.scene = createScene(viewer.environmentMap);
    viewer.modal.scene = createScene(viewer.environmentMap);

    viewer.preview.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    viewer.modal.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);

    viewer.preview.controls = new OrbitControls(viewer.preview.camera, viewer.preview.canvas);
    viewer.preview.controls.enableDamping = true;
    viewer.preview.controls.dampingFactor = 0.08;
    viewer.preview.controls.enablePan = false;

    viewer.modal.controls = new OrbitControls(viewer.modal.camera, viewer.modal.canvas);
    viewer.modal.controls.enableDamping = true;
    viewer.modal.controls.dampingFactor = 0.08;
    viewer.modal.controls.screenSpacePanning = true;
    viewer.modal.controls.panSpeed = 0.8;
    viewer.modal.controls.rotateSpeed = 0.9;
    const modalMouseDefaults = { ...viewer.modal.controls.mouseButtons };
    const setShiftPan = (active) => {
      const mb = viewer.modal.controls.mouseButtons;
      if (active) {
        mb.LEFT = THREE.MOUSE.PAN;
        mb.RIGHT = THREE.MOUSE.ROTATE;
      } else {
        mb.LEFT = modalMouseDefaults.LEFT;
        mb.MIDDLE = modalMouseDefaults.MIDDLE;
        mb.RIGHT = modalMouseDefaults.RIGHT;
      }
      viewer.modal.controls.enablePan = true;
    };
    const handlePointerDown = (event) => {
      if (event.shiftKey) {
        setShiftPan(true);
      } else {
        setShiftPan(false);
      }
    };
    const handlePointerUp = () => {
      setShiftPan(false);
    };
    viewer.modal.canvas.addEventListener("pointerdown", handlePointerDown);
    viewer.modal.canvas.addEventListener("pointerup", handlePointerUp);
    viewer.modal.canvas.addEventListener("pointerleave", handlePointerUp);

    viewer.resize();
    viewer.startLoop();
  };

  viewer.makeMeshGroup = (mode) => {
    if (!viewer.geometry) return null;
    const group = new THREE.Group();
    if (mode === "wireframe" || mode === "solid-wireframe") {
      const wire = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(viewer.geometry, wire);
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
        envMap: viewer.environmentMap || null,
        envMapIntensity: 1.2,
        vertexColors: true,
      });
      const mesh = new THREE.Mesh(viewer.geometry, solidMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    }
    return group;
  };

  viewer.applyViewMode = (mode) => {
    const applyToScene = (sceneKey) => {
      const target = viewer[sceneKey];
      if (!target.scene) return;
      if (target.meshGroup) {
        target.scene.remove(target.meshGroup);
        target.meshGroup = null;
      }
      target.meshGroup = viewer.makeMeshGroup(mode);
      if (target.meshGroup) {
        target.scene.add(target.meshGroup);
      }
    };
    applyToScene("preview");
    applyToScene("modal");
    viewer.renderOnce();
  };

  viewer.setGeometryFromBase64 = (stlB64) => {
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
      viewer.geometry = geometry;
      viewer.boundingRadius = geometry.boundingSphere ? geometry.boundingSphere.radius : 20;
      viewer.applyViewMode("solid");
      viewer.fitCamera("preview");
      viewer.fitCamera("modal");
      viewer.resize();
    } catch (err) {
      console.error("Failed to parse STL", err);
      if (onError) onError("Failed to parse STL.");
    }
  };

  viewer.clearGeometry = () => {
    const clearTarget = (target) => {
      if (target.scene && target.meshGroup) {
        target.scene.remove(target.meshGroup);
        target.meshGroup = null;
      }
    };
    clearTarget(viewer.preview);
    clearTarget(viewer.modal);
    viewer.geometry = null;
    viewer.boundingRadius = 20;
    viewer.renderOnce();
  };

  viewer.fitCamera = (sceneKey) => {
    const target = viewer[sceneKey];
    if (!target.scene || !target.camera || !viewer.geometry) return;
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
  };

  viewer.setOrientation = (view) => {
    const t = viewer.modal;
    if (!t.camera || !t.controls) return;
    const r = viewer.boundingRadius || 10;
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
    viewer.renderOnce();
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
    viewer.updateOrientationLabel(label);
    viewer.showOrientationOverlay();
  };

  viewer.panModal = (direction) => {
    const t = viewer.modal;
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
    const step = Math.max(viewer.boundingRadius * 0.1, 1);
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
    viewer.renderOnce();
    viewer.resumeAutoRotate();
  };

  viewer.resize = () => {
    const resizeTarget = (target) => {
      if (!target.renderer || !target.canvas || !target.camera) return;
      const { clientWidth, clientHeight } = target.canvas;
      target.renderer.setSize(clientWidth, clientHeight, false);
      target.camera.aspect = clientWidth / clientHeight;
      target.camera.updateProjectionMatrix();
    };
    resizeTarget(viewer.preview);
    resizeTarget(viewer.modal);
  };

  viewer.renderOnce = () => {
    const renderTarget = (target) => {
      if (!target.renderer || !target.scene || !target.camera) return;
      target.renderer.render(target.scene, target.camera);
    };
    renderTarget(viewer.preview);
    renderTarget(viewer.modal);
  };

  viewer.tickRotate = () => {
    const applyRotation = (target) => {
      if (!target.meshGroup) return;
      target.meshGroup.rotation.y += viewer.autorotateSpeed;
    };
    if (viewer.autorotate) {
      applyRotation(viewer.preview);
      applyRotation(viewer.modal);
    }
  };

  viewer.startLoop = () => {
    if (viewer.loopHandle) return;
    const loop = () => {
      if (viewer.modal.controls) {
        viewer.modal.controls.update();
      }
      if (viewer.preview.controls) {
        viewer.preview.controls.update();
      }
      viewer.tickRotate();
      viewer.renderOnce();
      viewer.loopHandle = requestAnimationFrame(loop);
    };
    loop();
  };

  viewer.stopLoop = () => {
    if (viewer.loopHandle) {
      cancelAnimationFrame(viewer.loopHandle);
      viewer.loopHandle = null;
    }
  };

  viewer.resumeAutoRotate = (delay = 1500) => {
    viewer.autorotate = false;
    if (viewer.autorotateTimeout) clearTimeout(viewer.autorotateTimeout);
    viewer.autorotateTimeout = setTimeout(() => {
      viewer.autorotate = true;
    }, delay);
  };

  viewer.updateOrientationLabel = (text) => {
    if (orientationLabel) {
      orientationLabel.textContent = text;
    }
  };

  viewer.showHintOverlay = () => {
    if (!hintOverlay) return;
    hintOverlay.classList.remove("hidden");
    hintOverlay.classList.add("show");
    clearTimeout(viewer.hintTimeout);
    viewer.hintTimeout = setTimeout(() => {
      hintOverlay.classList.remove("show");
    }, 3500);
  };

  viewer.showOrientationOverlay = () => {
    if (!orientationOverlay) return;
    orientationOverlay.classList.remove("hidden");
    orientationOverlay.classList.add("show");
    clearTimeout(viewer.orientationTimeout);
    viewer.orientationTimeout = setTimeout(() => {
      orientationOverlay.classList.remove("show");
    }, 2500);
  };

  viewer.handleModalToggle = (open) => {
    if (open) {
      viewer.setOrientation("reset");
      viewer.updateOrientationLabel("Perspective");
      viewer.showOrientationOverlay();
      viewer.showHintOverlay();
      viewer.renderOnce();
    }
  };

  viewer.dispose = () => {
    viewer.stopLoop();
    viewer.preview.controls?.dispose();
    viewer.modal.controls?.dispose();
    viewer.preview.renderer?.dispose();
    viewer.modal.renderer?.dispose();
    viewer.geometry?.dispose();
    if (viewer.environmentMap) viewer.environmentMap.dispose?.();
    if (viewer.autorotateTimeout) clearTimeout(viewer.autorotateTimeout);
    if (viewer.orientationTimeout) clearTimeout(viewer.orientationTimeout);
    if (viewer.hintTimeout) clearTimeout(viewer.hintTimeout);
  };

  return viewer;
}

export function useMeshViewer({
  previewCanvasRef,
  modalCanvasRef,
  orientationLabelRef,
  orientationOverlayRef,
  hintOverlayRef,
  onError,
}) {
  const viewerRef = useRef(null);

  useEffect(() => {
    const previewCanvas = previewCanvasRef.current;
    const modalCanvas = modalCanvasRef.current;
    if (!previewCanvas || !modalCanvas) return undefined;

    const viewer = createMeshViewer({
      previewCanvas,
      modalCanvas,
      orientationLabel: orientationLabelRef?.current || null,
      orientationOverlay: orientationOverlayRef?.current || null,
      hintOverlay: hintOverlayRef?.current || null,
      onError,
    });
    viewerRef.current = viewer;
    viewer.init();

    const handleResize = () => {
      viewer.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      viewer.dispose();
      viewerRef.current = null;
    };
  }, [previewCanvasRef, modalCanvasRef, orientationLabelRef, orientationOverlayRef, hintOverlayRef, onError]);

  const loadMesh = useCallback((b64) => viewerRef.current?.setGeometryFromBase64(b64), []);
  const clear = useCallback(() => viewerRef.current?.clearGeometry(), []);
  const applyViewMode = useCallback((mode) => viewerRef.current?.applyViewMode(mode), []);
  const setOrientation = useCallback((view) => viewerRef.current?.setOrientation(view), []);
  const pan = useCallback((dir) => viewerRef.current?.panModal(dir), []);
  const resize = useCallback(() => viewerRef.current?.resize(), []);
  const resumeAutoRotate = useCallback((delay) => viewerRef.current?.resumeAutoRotate(delay), []);
  const renderOnce = useCallback(() => viewerRef.current?.renderOnce(), []);
  const onModalToggle = useCallback((open) => viewerRef.current?.handleModalToggle(open), []);

  return {
    loadMesh,
    clear,
    applyViewMode,
    setOrientation,
    pan,
    resize,
    resumeAutoRotate,
    renderOnce,
    onModalToggle,
    viewerRef,
  };
}
