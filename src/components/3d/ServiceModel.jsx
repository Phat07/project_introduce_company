import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function ServiceModel({ modelPath, scale = 0.5, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Slow rotation
    }
  });

  return (
    <group ref={group} dispose={null} scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/procedurally_made_cyberpunk_building.glb');
