import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FloatingIconsGroup } from './FloatingIcons';

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
            // Add some metallic and emissive properties to make it more cyberpunk
            child.material.metalness = 0.8;
            child.material.roughness = 0.2;
            if (child.material.color) {
              child.material.emissive = child.material.color.clone();
              child.material.emissiveIntensity = 0.2;
            }
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
    <group>
      <primitive 
        ref={modelRef}
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
      <FloatingIconsGroup />
    </group>
  );
}

// Preload the model
const modelPath = process.env.NODE_ENV === 'production' 
  ? 'https://project-introduce-company.vercel.app/models/procedurally_made_cyberpunk_building.glb'
  : '/models/procedurally_made_cyberpunk_building.glb';
useGLTF.preload(modelPath);
