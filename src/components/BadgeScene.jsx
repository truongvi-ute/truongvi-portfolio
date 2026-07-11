import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import BadgeBand from "./BadgeBand";

extend({ MeshLineGeometry, MeshLineMaterial });

// Preload assets để không bị flicker khi render
useGLTF.preload(import.meta.env.BASE_URL + "assets/3d/card.glb");
useTexture.preload(import.meta.env.BASE_URL + "assets/images/badge_avatar.png");
useTexture.preload(import.meta.env.BASE_URL + "assets/images/badge_logo.png");

export default function BadgeScene({ className = "" }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8.7], fov: 25 }}
        style={{ backgroundColor: "transparent" }}
      >
        <ambientLight intensity={Math.PI} />

        <Physics
          debug={false}
          interpolate
          gravity={[0, -40, 0]}
          timeStep={1 / 60}
        >
          <Suspense fallback={null}>
            <BadgeBand />
          </Suspense>
        </Physics>

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
