'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface PhoneModelProps {
  scrollProgressRef: React.MutableRefObject<number>;
}

export default function PhoneModel({ scrollProgressRef }: PhoneModelProps) {
  const group = useRef<THREE.Group>(null);
  
  // We use one of the frames as a static screen texture for the placeholder
  const screenTexture = useTexture('/frames/ezgif-frame-080.jpg');

  useFrame((state) => {
    if (!group.current) return;
    
    const progress = scrollProgressRef.current;
    
    // Smoothly interpolate current rotation/position to target based on progress
    let targetRotationY = 0;
    let targetRotationX = 0;
    let targetRotationZ = 0;
    let targetPositionY = 0;
    let targetPositionZ = 0;
    
    if (progress < 0.15) {
      // Intro: Slightly tilted, floating
      targetRotationX = -0.1;
      targetRotationY = progress * Math.PI * 4; 
    } else if (progress < 0.3) {
      // Crafted with Precision: Show back
      targetRotationY = Math.PI; 
      targetRotationX = 0.2;
      targetPositionZ = 1;
    } else if (progress < 0.45) {
      // Flagship Performance: Rotate to side profile
      targetRotationY = Math.PI / 2;
      targetRotationX = 0;
      targetPositionZ = 0;
    } else if (progress < 0.6) {
      // Cooling: Slight tilt to show back again
      targetRotationY = Math.PI * 1.2;
      targetRotationX = 0.1;
      targetPositionZ = 2; // Closer
    } else if (progress < 0.75) {
      // Display: Show front, very close
      targetRotationY = 0;
      targetRotationX = 0;
      targetPositionZ = 3.5;
    } else if (progress < 0.9) {
      // Camera: Show camera module closely
      targetRotationY = Math.PI + 0.3;
      targetRotationX = 0.2;
      targetPositionY = -1.5;
      targetPositionZ = 2.5;
    } else {
      // Finale: Spin and settle front
      targetRotationY = (progress - 0.9) * Math.PI * 10;
      targetRotationX = 0;
      targetPositionY = 0;
      targetPositionZ = 0;
    }

    // Apply with dampening (lerp) for buttery smooth movement
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRotationZ, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPositionY, 0.05);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetPositionZ, 0.05);
    
    // Add a continuous gentle float effect on top of the calculated position
    group.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002;
  });

  return (
    <group ref={group}>
      {/* Main Body (Interstellar Black) */}
      <RoundedBox args={[3.2, 6.9, 0.35]} radius={0.3} smoothness={8}>
        <meshStandardMaterial 
          color="#111111" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={2} 
        />
      </RoundedBox>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.18]}>
        <planeGeometry args={[3.0, 6.7]} />
        <meshBasicMaterial map={screenTexture} toneMapped={false} />
      </mesh>
      
      {/* Camera Module Frame */}
      <RoundedBox args={[1.4, 2.0, 0.1]} radius={0.2} position={[-0.7, 2.1, -0.2]}>
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          color="#222"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Camera Lenses */}
      {/* Main Lens */}
      <mesh position={[-0.7, 2.6, -0.26]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0} />
      </mesh>
      <mesh position={[-0.7, 2.6, -0.28]}>
        <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
        <meshBasicMaterial color="#111" />
      </mesh>

      {/* Secondary Lens */}
      <mesh position={[-0.7, 1.8, -0.26]}>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0} />
      </mesh>
      <mesh position={[-0.7, 1.8, -0.28]}>
        <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
        <meshBasicMaterial color="#111" />
      </mesh>
    </group>
  );
}
