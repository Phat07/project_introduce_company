import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ICON_CONFIG = {
  sign: {
    scale: 0.5,
    orbitRadius: 3,
    orbitSpeed: 0.5,
    floatAmplitude: 0.2,
    floatFrequency: 2,
  },
  wifi: {
    scale: 0.5,
    orbitRadius: 3,
    orbitSpeed: -0.3,
    floatAmplitude: 0.2,
    floatFrequency: 1.5,
  }
};

export function FloatingIcon({ type, phase = 0 }) {
  const modelRef = useRef();
  const time = useRef(phase);
  
  const config = ICON_CONFIG[type];
  const modelPath = `/models/${type}.glb`;
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Keep original materials but enhance them slightly
          if (child.material) {
            child.material.envMapIntensity = 1;
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      time.current += delta;

      // Orbital motion
      const angle = time.current * config.orbitSpeed;
      modelRef.current.position.x = Math.cos(angle) * config.orbitRadius;
      modelRef.current.position.z = Math.sin(angle) * config.orbitRadius;
      
      // Floating motion
      modelRef.current.position.y = Math.sin(time.current * config.floatFrequency) * config.floatAmplitude;
      
      // Self rotation
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene.clone()}
      scale={config.scale}
    />
  );
}

export function FloatingIconsGroup() {
  return (
    <>
      <FloatingIcon type="sign" phase={0} />
      <FloatingIcon type="wifi" phase={Math.PI} />
    </>
  );
}

// Preload models
useGLTF.preload('/models/sign.glb');
useGLTF.preload('/models/wifi.glb');
