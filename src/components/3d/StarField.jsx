import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarField({ count = 2000 }) {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance = Math.random() * 20 - 10; // -10 to 10
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      let x = distance * Math.sin(phi) * Math.cos(theta);
      let y = distance * Math.sin(phi) * Math.sin(theta);
      let z = distance * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  const particlesColors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#4cc9ff');
    const color2 = new THREE.Color('#00ffff');
    const color3 = new THREE.Color('#0066cc');
    
    for (let i = 0; i < count; i++) {
      const mixRatio1 = Math.random();
      const mixRatio2 = Math.random();
      const finalColor = new THREE.Color()
        .copy(color1)
        .lerp(color2, mixRatio1)
        .lerp(color3, mixRatio2);
      
      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesColors.length / 3}
          array={particlesColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default StarField;
