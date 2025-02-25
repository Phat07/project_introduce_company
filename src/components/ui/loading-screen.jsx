import React from 'react';
import { bouncyArc } from 'ldrs';
import './loading-screen.css';

bouncyArc.register();

const TypewriterText = ({ text }) => {
  return (
    <div className="typewriter">
      <h1 className="loading-title">{text}</h1>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <TypewriterText text="ThanhCongSolutions" />
        <l-bouncy-arc
          size="70"
          speed="1.65"
          color="black"
        ></l-bouncy-arc>
      </div>
    </div>
  );
};

export default LoadingScreen;
