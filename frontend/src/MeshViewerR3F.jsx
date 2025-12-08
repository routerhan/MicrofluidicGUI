import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Edges, Environment, Grid, Lightformer, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import * as THREE from "three";

function base64ToArrayBuffer(b64) {
  const binary = atob(b64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function useStlGeometry(stlBase64) {
  const payload = useMemo(() => {
    if (!stlBase64) return { geometry: null, radius: 20, center: new THREE.Vector3() };
    const loader = new STLLoader();
    const arrayBuffer = base64ToArrayBuffer(stlBase64);
    const geom = loader.parse(arrayBuffer);
    geom.computeBoundingBox();
    const center = new THREE.Vector3();
    geom.boundingBox?.getCenter(center);
    geom.translate(-center.x, -center.y, -center.z);
    geom.computeBoundingBox();
    geom.computeBoundingSphere();

    const position = geom.getAttribute("position");
    if (position) {
      const colors = new Float32Array(position.count * 3);
      const color = new THREE.Color();
      const minY = geom.boundingBox?.min.y ?? -1;
      const maxY = geom.boundingBox?.max.y ?? 1;
      const range = Math.max(maxY - minY, 1e-5);
      for (let i = 0; i < position.count; i += 1) {
        const y = position.getY(i);
        const t = (y - minY) / range;
        color.setHSL(0.6 - 0.5 * t, 0.75, 0.5 + 0.15 * t);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }
    const radius = geom.boundingSphere ? geom.boundingSphere.radius : 20;
    return { geometry: geom, radius, center };
  }, [stlBase64]);

  useEffect(
    () => () => {
      payload.geometry?.dispose();
    },
    [payload.geometry],
  );

  return payload;
}

function FitOnLoad({ geometry, controlsRef }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!geometry) return;
    geometry.computeBoundingSphere();
    const sphere = geometry.boundingSphere;
    if (!sphere) return;
    const radius = Math.max(sphere.radius, 1);
    const dist = radius * 1.5;
    camera.position.set(dist, dist, dist);
    camera.lookAt(sphere.center);
    if (controlsRef?.current) {
      controlsRef.current.target.copy(sphere.center);
      controlsRef.current.update();
    }
  }, [camera, controlsRef, geometry]);

  return null;
}

function SurfaceMesh({
  geometry,
  viewMode = "solid",
  autorotate = true,
  rotateSpeed = 0.4,
  floatOffset = 0,
  rotationOffset = [Math.PI / 2, 0, 0],
}) {
  const groupRef = useRef(null);
  const spinRef = useRef(0);
  const baseQuat = useMemo(() => {
    const [rx = 0, ry = 0, rz = 0] = rotationOffset || [];
    const e = new THREE.Euler(rx, ry, rz);
    const q = new THREE.Quaternion();
    q.setFromEuler(e);
    return q;
  }, [rotationOffset]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (autorotate) {
      spinRef.current += rotateSpeed * delta;
    }
    const spinQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spinRef.current);
    groupRef.current.quaternion.copy(baseQuat).multiply(spinQuat);
  });

  if (!geometry) return null;

  const meshes = [];

  if (viewMode === "solid" || viewMode === "solid-wireframe") {
    meshes.push(
      <mesh key="solid" geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#b7d8ff"
          roughness={0.35}
          metalness={0.15}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
          reflectivity={0.8}
          envMapIntensity={1.1}
          vertexColors
        />
        <Edges scale={1.005} color="#446ba7ff" linewidth={0.8} threshold={5} />
      </mesh>,
    );
  }

  if (viewMode === "wireframe" || viewMode === "solid-wireframe") {
    meshes.push(
      <mesh key="wireframe" geometry={geometry}>
        <meshBasicMaterial
          color="#ffd166"
          wireframe
          transparent
          opacity={0.95}
          toneMapped={false}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </mesh>,
    );
  }

  return (
    <group ref={groupRef} position={[0, floatOffset, 0]}>
      {meshes}
    </group>
  );
}

export const MeshViewerR3F = forwardRef(function MeshViewerR3F(
  {
    stlBase64,
    viewMode = "solid",
    autorotate = true,
    rotateSpeed = 0.4,
    rotationOffset = [Math.PI / 2, 0, 0],
    onInteract,
    canvasStyle,
  },
  ref,
) {
  const { geometry, radius, center } = useStlGeometry(stlBase64);
  const controlsRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(autorotate);
  const autoRotateTimeout = useRef(null);

  useEffect(() => {
    setAutoRotate(autorotate);
  }, [autorotate]);

  const pauseThenResume = (delay = 1500) => {
    setAutoRotate(false);
    if (autoRotateTimeout.current) clearTimeout(autoRotateTimeout.current);
    autoRotateTimeout.current = setTimeout(() => setAutoRotate(true), delay);
  };

  useEffect(
    () => () => {
      if (autoRotateTimeout.current) clearTimeout(autoRotateTimeout.current);
    },
    [],
  );

  const setOrientation = (view) => {
    const controls = controlsRef.current;
    if (!controls) return;
    const cam = controls.object;
    const target = controls.target;
    const r = radius || 10;
    switch (view) {
      case "xy":
        cam.position.set(0, r * 2, r * 0.01);
        break;
      case "xz":
        cam.position.set(0, r * 0.01, r * 2);
        break;
      case "yz":
        cam.position.set(r * 2, r * 0.01, 0);
        break;
      default:
        cam.position.set(r * 1.5, r * 1.5, r * 1.5);
        break;
    }
    cam.lookAt(target);
    controls.update();
    pauseThenResume();
  };

  const pan = (direction) => {
    const controls = controlsRef.current;
    if (!controls) return;
    const cam = controls.object;
    const target = controls.target;
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
    const step = Math.max((radius || 10) * 0.1, 1);
    const forward = new THREE.Vector3();
    cam.getWorldDirection(forward);
    const right = new THREE.Vector3().crossVectors(forward, cam.up).normalize();
    const up = cam.up.clone().normalize();
    const offset = new THREE.Vector3().addScaledVector(right, dx * step).addScaledVector(up, dy * step);
    cam.position.add(offset);
    target.add(offset);
    controls.update();
    pauseThenResume();
  };

  useImperativeHandle(ref, () => ({
    setOrientation,
    pan,
    resumeAutoRotate: pauseThenResume,
  }));

  const groundY = useMemo(() => {
    const r = radius || 10;
    return -r * 1.05;
  }, [radius]);

  const groundScale = useMemo(() => Math.max(20, (radius || 10) * 3), [radius]);
  const cellSize = useMemo(() => Math.max(0.6, (radius || 10) * 0.06), [radius]);
  const sectionSize = useMemo(() => Math.max(2.5, (radius || 10) * 0.35), [radius]);
  const floatOffset = useMemo(() => (radius || 10) * 0.1, [radius]);

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45, near: 0.1, far: 2000 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
      style={canvasStyle}
      onPointerDown={(e) => {
        onInteract?.(e);
        pauseThenResume();
      }}
      onWheel={(e) => {
        onInteract?.(e);
        pauseThenResume();
      }}
      onPointerMove={(e) => {
        if (e.buttons) {
          onInteract?.(e);
          pauseThenResume();
        }
      }}
    >
      <color attach="background" args={["#f5f7fb"]} />
      <ambientLight intensity={0.35} />
      <hemisphereLight args={[0xffffff, 0x1b1f2f, 0.5]} />
      <directionalLight
        position={[8, 12, 10]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />
      <spotLight position={[0, 5, -9]} intensity={0.5} angle={Math.PI / 5} penumbra={0.4} castShadow />
      <Environment preset="studio">
        <Lightformer
          position={[5, 5, -5]}
          scale={[10, 5, 1]}
          intensity={1.25}
          color="#ffffff"
          form="rect"
        />
      </Environment>
      <OrbitControls ref={controlsRef} enableDamping dampingFactor={0.08} makeDefault />
      <FitOnLoad geometry={geometry} controlsRef={controlsRef} />
      {geometry ? (
        <SurfaceMesh
          geometry={geometry}
          viewMode={viewMode}
          autorotate={autoRotate}
          rotateSpeed={rotateSpeed}
          floatOffset={floatOffset}
          rotationOffset={rotationOffset}
        />
      ) : null}
      <ContactShadows
        position={[0, groundY, 0]}
        opacity={0.32}
        scale={groundScale}
        blur={2.5}
        far={groundScale * 0.35}
      />
      <Grid
        position={[0, groundY + 0.2, 0]}
        args={[groundScale, groundScale]}
        cellSize={cellSize}
        cellThickness={0.5}
        sectionSize={sectionSize}
        sectionThickness={1.2}
        sectionColor="#6b7280"
        fadeDistance={groundScale * 1.2}
        fadeStrength={1}
      />
    </Canvas>
  );
});
