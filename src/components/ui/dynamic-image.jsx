import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Create a texture cache
const textureCache = new Map();

const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    if (textureCache.has(url)) {
      resolve(textureCache.get(url));
      return;
    }

    const loader = new TextureLoader();
    loader.crossOrigin = 'anonymous';
    loader.load(
      url,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 16;
        texture.needsUpdate = true;
        textureCache.set(url, texture);
        resolve(texture);
      },
      undefined,
      reject
    );
  });
};

const ImagePlane = ({ imageUrl }) => {
  const meshRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [texture, setTexture] = useState(null);
  
  useEffect(() => {
    let isMounted = true;

    const loadTexture = async () => {
      try {
        const tex = await preloadImage(imageUrl);
        if (isMounted) {
          setTexture(tex);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error loading texture:', error);
      }
    };

    loadTexture();
    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  useFrame(({ clock }) => {
    if (meshRef.current && isLoaded) {
      const time = clock.getElapsedTime();
      meshRef.current.material.uniforms.time.value = time;
    }
  });

  const shaderConfig = useMemo(() => ({
    vertexShader: `
      varying vec2 vUv;
      uniform float time;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        float frequency1 = 2.0;
        float frequency2 = 1.2;
        float waveSpeed = 2.0;
        
        float baseAmplitude = mix(0.1, 0.4, (pos.x + 1.0) * 0.5);
        float wave = sin(pos.x * frequency1 + time * waveSpeed) * baseAmplitude;
        wave += sin(pos.x * frequency2 + time * waveSpeed * 1.3) * baseAmplitude * 0.5;
        wave += cos(pos.y * 3.0 + time) * baseAmplitude * 0.3;
        
        float verticalWave = sin(time * 1.5 + pos.x * 2.0) * 0.1;
        pos.y += verticalWave;
        
        float edgeFactor = smoothstep(-1.0, 1.0, pos.x);
        pos.z += wave * edgeFactor;
        
        float twist = sin(time * 0.7) * 0.1 * edgeFactor;
        pos.y += twist * pos.x;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D texture1;
      uniform float time;
      
      void main() {
        vec2 uv = vUv;
        
        float distortionStrength = 0.02;
        uv.x += sin(uv.y * 5.0 + time) * distortionStrength * (1.0 - uv.x);
        uv.y += cos(uv.x * 5.0 + time * 0.8) * distortionStrength;
        
        vec4 color = texture2D(texture1, uv);
        
        float edgeLight = sin(uv.x * 3.14159 + time) * 0.15 + 0.85;
        float depthLight = mix(1.0, 1.2, uv.x);
        color.rgb *= edgeLight * depthLight;
        
        gl_FragColor = color;
      }
    `
  }), []);

  if (!isLoaded || !texture) return null;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, -0.1, 0]}>
      <planeGeometry args={[3, 2, 96, 96]} />
      <shaderMaterial
        uniforms={{
          texture1: { value: texture },
          time: { value: 0 }
        }}
        vertexShader={shaderConfig.vertexShader}
        fragmentShader={shaderConfig.fragmentShader}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  );
};

const DynamicImage = ({ imageUrl, className }) => {
  // Preload image when component mounts
  useEffect(() => {
    preloadImage(imageUrl);
  }, [imageUrl]);

  return (
    <motion.div
      className={`relative w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <ImagePlane imageUrl={imageUrl} />
      </Canvas>
    </motion.div>
  );
};

export default DynamicImage;
