# 3D Models Directory

This directory contains GLB files for Three.js models used in the project.

## Usage

To use a model in your Three.js scene:

```jsx
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/your-model.glb');
  return <primitive object={gltf.scene} />;
}
```

## File Structure

```
models/
├── README.md
└── your-model.glb
```

## Best Practices

1. Keep GLB files optimized and compressed
2. Use descriptive filenames
3. Include textures in the GLB file when possible
4. Test models for mobile performance
