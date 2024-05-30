import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Druid = ({ isMobile }) => {
  const { scene } = useGLTF("./model.gltf");

  scene.traverse((child) => {
    if (child.isMesh) {
      const geometry = child.geometry;
      const position = geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        if (isNaN(position.getX(i)) || isNaN(position.getY(i)) || isNaN(position.getZ(i))) {
          console.error('NaN found in geometry positions');
          return;
        }
      }
    }
  });

  return (
    <primitive
      object={scene}
      scale={isMobile ? 7 : 3}
      position={isMobile ? [0, -10.25, 0] : [0, -4.25, 0]}
      rotation={[0, 1.3, 0]}
    />
  );
};

const DruidCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />


        {/* Bottom lighting */}
        <spotLight intensity={10} color='pink' position={[-3, -5, 3]} />
        <spotLight intensity={10} color='pink' position={[3, -5, 0]} />
        <spotLight intensity={10} color='pink' position={[3, -5, -3]} />
        {/* Top lighting */}
        <spotLight intensity={10} color='yellow' position={[-3, 5, 3]} />
        <spotLight intensity={10} color='orange' position={[3, 5, 0]} />
        <spotLight intensity={10} color='yellow' position={[3, 5, -3]} />
        <Druid isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DruidCanvas;
