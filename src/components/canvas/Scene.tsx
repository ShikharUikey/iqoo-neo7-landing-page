'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import PhoneModel from './PhoneModel';
import { Suspense } from 'react';

interface SceneProps {
  scrollProgressRef: React.MutableRefObject<number>;
}

export default function Scene({ scrollProgressRef }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]} // Support retina displays, max 2x for performance
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        
        {/* Ambient and directional light for premium studio feel */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          color="#ffffff"
          castShadow
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={1} 
          color="#FF6A00" // Subtle orange studio fill light
        />
        <directionalLight 
          position={[0, -5, 5]} 
          intensity={0.5} 
          color="#2E7DFF" // Subtle blue studio rim light
        />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <PhoneModel scrollProgressRef={scrollProgressRef} />
        </Float>
        
        {/* Preload all assets for performance */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
