import React, { useEffect } from 'react';
import { quantum } from 'ldrs';

export function ModelLoader() {
  useEffect(() => {
    quantum.register();
  }, []);

  return (
    <div className="model-loader">
      <l-quantum
        size="45"
        speed="1.75"
        color="#f5222d"
      ></l-quantum>
      <p>Loading 3D Model...</p>
    </div>
  );
}
