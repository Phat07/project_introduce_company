import { useState, useEffect } from 'react';

export function useScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastKnownScrollPosition = 0;
    const scrollThreshold = 10;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (Math.abs(lastKnownScrollPosition - (isScrolled ? 0 : scrollThreshold)) >= scrollThreshold) {
            setIsScrolled(lastKnownScrollPosition > scrollThreshold);
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return isScrolled;
}
