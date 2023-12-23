import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
const Ring = ({ isMobile }) => {
  const computer = useGLTF("./ring/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={95} groundColor="black" />
      <spotLight
        position={[-30, 50, 10]}
        angle={0.52}
        penumbra={1}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 5 : 5.2}
        position={isMobile ? [0, -0.1, -0.15] : [0, -0.25, 0.2]}
        rotation={[-0.01, -0.2, -0.1, -0.1]}
      />
    </mesh>
  );
};

const RingCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 3, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ring isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RingCanvas;
