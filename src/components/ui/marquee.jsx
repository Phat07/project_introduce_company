import React, { useState, useRef, useEffect } from 'react';
import { cn } from "../../lib/utils";

/**
 * @typedef {Object} MarqueeProps
 * @property {string} [className] - Optional CSS class name to apply custom styles
 * @property {boolean} [reverse=false] - Whether to reverse the animation direction
 * @property {boolean} [pauseOnHover=false] - Whether to pause the animation on hover
 * @property {React.ReactNode} children - Content to be displayed in the marquee
 * @property {boolean} [vertical=false] - Whether to animate vertically instead of horizontally
 * @property {number} [repeat=4] - Number of times to repeat the content
 */

/**
 * Marquee component for continuous scrolling content
 * @param {MarqueeProps} props
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    velocity: 0,
    timestamp: 0
  });
  const animationFrameRef = useRef(null);

  const startDragging = (clientX) => {
    setIsDragging(true);
    const { offsetLeft, scrollLeft } = containerRef.current;
    dragInfo.current = {
      startX: clientX - offsetLeft,
      scrollLeft,
      lastX: clientX,
      velocity: 0,
      timestamp: Date.now()
    };
  };

  const onDrag = (clientX) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const dt = now - dragInfo.current.timestamp;
    const dx = clientX - dragInfo.current.lastX;
    
    dragInfo.current.velocity = dx / dt;
    dragInfo.current.lastX = clientX;
    dragInfo.current.timestamp = now;

    const walk = (clientX - dragInfo.current.startX) * 2;
    containerRef.current.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const stopDragging = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const startVelocity = dragInfo.current.velocity * 100;
    let lastTimestamp = Date.now();

    const animate = () => {
      const now = Date.now();
      const dt = now - lastTimestamp;
      lastTimestamp = now;

      if (Math.abs(dragInfo.current.velocity) > 0.01) {
        containerRef.current.scrollLeft -= dragInfo.current.velocity * dt;
        dragInfo.current.velocity *= 0.95; // Deceleration factor
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (Math.abs(startVelocity) > 0.1) {
      dragInfo.current.velocity = startVelocity;
      animate();
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDragging(e.pageX);
  };

  const handleTouchStart = (e) => {
    startDragging(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    onDrag(e.pageX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      onDrag(e.touches[0].clientX);
    }
  };

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-x-auto overflow-y-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "cursor-grabbing": isDragging,
          "cursor-grab": !isDragging,
        },
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={stopDragging}
      onTouchEnd={stopDragging}
      onMouseLeave={stopDragging}
      style={{
        scrollBehavior: isDragging ? 'auto' : 'smooth',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical && !isDragging,
              "animate-marquee-vertical flex-col": vertical && !isDragging,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
              "animation-none": isDragging,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
