import { cn } from "../../lib/utils";
import React, { useState, useRef, useEffect } from 'react';

/**
 * @typedef {Object} MarqueeProps
 * @property {string} [className] - Optional CSS class name to apply custom styles
 * @property {boolean} [reverse=false] - Whether to reverse the animation direction
 * @property {boolean} [pauseOnHover=false] - Whether to pause the animation on hover
 * @property {React.ReactNode} children - Content to be displayed in the marquee
 * @property {boolean} [vertical=false] - Whether to animate vertically instead of horizontally
 * @property {number} [repeat=2] - Number of times to repeat the content
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
  repeat = 2,
  ...props
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [animationPlayState, setAnimationPlayState] = useState('running');
  const dragInfo = useRef({
    startX: 0,
    currentX: 0,
    scrollLeft: 0,
    animationOffset: 0,
    startTime: 0
  });

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    
    dragInfo.current = {
      startX: clientX,
      currentX: clientX,
      scrollLeft: containerRef.current.scrollLeft,
      animationOffset: 0,
      startTime: Date.now()
    };

    setAnimationPlayState('paused');
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const dx = clientX - dragInfo.current.currentX;
    dragInfo.current.currentX = clientX;
    
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 2;
      let newScrollLeft = containerRef.current.scrollLeft - dx;

      // Handle infinite scroll while dragging
      if (newScrollLeft < 0) {
        newScrollLeft = scrollWidth + newScrollLeft;
      } else if (newScrollLeft > scrollWidth) {
        newScrollLeft = newScrollLeft - scrollWidth;
      }

      containerRef.current.scrollLeft = newScrollLeft;
      dragInfo.current.scrollLeft = newScrollLeft;
      dragInfo.current.animationOffset += dx;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setAnimationPlayState('running');

    // Calculate momentum
    const dragDuration = Date.now() - dragInfo.current.startTime;
    const dragDistance = dragInfo.current.animationOffset;
    const velocity = dragDistance / dragDuration;

    // Apply momentum animation
    if (Math.abs(velocity) > 0.1) {
      const momentum = velocity * 500; // Adjust this multiplier to control momentum strength
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll = currentScroll - momentum;
      
      containerRef.current.style.scrollBehavior = 'smooth';
      containerRef.current.scrollLeft = targetScroll;
      
      setTimeout(() => {
        containerRef.current.style.scrollBehavior = 'auto';
      }, 500);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => pauseOnHover && setAnimationPlayState('paused');
    const handleMouseLeave = () => {
      setAnimationPlayState('running');
      setIsDragging(false);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex overflow-hidden select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "cursor-grabbing": isDragging,
          "cursor-grab": !isDragging,
        },
        className
      )}
      style={{
        "--duration": "30s",
        "--gap": "1rem",
      }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onMouseMove={handleDragMove}
      onTouchMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      onMouseLeave={handleDragEnd}
      {...props}
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
            })}
            style={{
              minWidth: !vertical ? '100%' : 'auto',
              minHeight: vertical ? '100%' : 'auto',
              animationPlayState: animationPlayState
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

Marquee.displayName = "Marquee";
