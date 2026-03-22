import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, TorusKnot, MeshWobbleMaterial, PerspectiveCamera, OrbitControls, ContactShadows } from '@react-three/drei';

const TechObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group scale={1}>
        <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]}>
                <MeshWobbleMaterial 
                    color="#10B981" 
                    speed={2} 
                    factor={0.5} 
                    roughness={0} 
                    metalness={1}
                />
            </TorusKnot>
        </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={50} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#10B981" intensity={1} />
        
        <TechObject />
        
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.15} far={10} color="#10B981" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
