import React, { useState, useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-x-auto overflow-y-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] cursor-grab select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "cursor-grabbing": isDragging,
        },
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
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
