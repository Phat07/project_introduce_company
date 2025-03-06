import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import { cn } from "../../lib/utils.js";

const MOVEMENT_DAMPING = 1400;

function Globe({ className }) {
  const phi = useRef(0);
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const width = useRef(0);
  const globeInstance = useRef(null);
  const frameRef = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const config = useMemo(() => ({
    width: 180,
    height: 180,
    devicePixelRatio: 0.75,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 5000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [39.9042, 116.4074], size: 0.08 },
    ],
  }), []);

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width.current = 180;
        canvasRef.current.width = width.current;
        canvasRef.current.height = width.current;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!globeInstance.current) {
      globeInstance.current = createGlobe(canvasRef.current, {
        ...config,
        width: width.current,
        height: width.current,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi.current += 0.002;
          }
          state.phi = phi.current + rs.get();
          state.width = width.current;
          state.height = width.current;
        },
      });

      const animate = () => {
        if (globeInstance.current) {
          globeInstance.current.render();
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      animate();
      canvasRef.current.style.opacity = "1";
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (globeInstance.current) {
        globeInstance.current.destroy();
        globeInstance.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
  }, [config, rs]);

  return (
    <div className={cn("relative w-full h-full select-none", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-500"
        style={{ contain: "layout paint size" }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

export default Globe;
