import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ServiceModel({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], onLoad }) {
  const modelRef = useRef();
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.envMapIntensity = 1;
          }
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// Preload the model
const modelPath = process.env.NODE_ENV === 'production' 
  ? 'https://project-introduce-company.vercel.app/models/procedurally_made_cyberpunk_building.glb'
  : '/models/procedurally_made_cyberpunk_building.glb';
useGLTF.preload(modelPath);
