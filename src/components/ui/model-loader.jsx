import React, { useEffect } from 'react';
import { quantum } from 'ldrs';
import './model-loader.css';

export function ModelLoader() {
  useEffect(() => {
    quantum.register();
  }, []);

  return (
    <div className="model-loader">
      <l-quantum
        size="45"
        speed="1.75"
        color="#FF6D00"
      ></l-quantum>
      <p className="loading-text">Loading ...</p>
    </div>
  );
}
