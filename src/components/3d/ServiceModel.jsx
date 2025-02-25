import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ServiceModel({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const modelRef = useRef();
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    // Optimize model
    scene.traverse((child) => {
      if (child.isMesh) {
        // Optimize geometries
        child.geometry.attributes.position.needsUpdate = false;
        child.geometry.attributes.normal.needsUpdate = false;
        child.geometry.attributes.uv.needsUpdate = false;

        // Optimize materials
        child.material.side = THREE.FrontSide;
        child.material.needsUpdate = false;
        
        // Disable shadows if not needed
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Adjust speed by changing the multiplier
    }
  });

  return (
    <group ref={modelRef} dispose={null} scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/procedurally_made_cyberpunk_building.glb');
