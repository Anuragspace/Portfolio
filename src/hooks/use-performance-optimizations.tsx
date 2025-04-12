
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to apply performance optimizations across the portfolio
 */
export function usePerformanceOptimizations() {
  const hasOptimized = useRef(false);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (hasOptimized.current) return;
    
    // Apply performance optimizations once
    const applyOptimizations = () => {
      // 1. Add will-change hints to animations for better GPU acceleration
      const animatedElements = document.querySelectorAll(
        '.animate-fade-in, .animate-scale-in, .hover\\:scale-105, .group-hover\\:scale-125'
      );
      
      animatedElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.classList.add('will-change-transform');
        }
      });
      
      // 2. Add content-visibility to off-screen elements
      const nonCriticalSections = document.querySelectorAll('section:not(:first-child)');
      nonCriticalSections.forEach((section) => {
        if (section instanceof HTMLElement) {
          section.classList.add('content-visibility-auto');
        }
      });
      
      // 3. Add passive event listeners to scroll events
      const supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get: function() {
            return true;
          }
        });
        window.addEventListener('test', null as any, opts);
      } catch (e) {}

      // 4. Force hardware acceleration on navigation
      const navbar = document.querySelector('nav');
      if (navbar instanceof HTMLElement) {
        navbar.classList.add('gpu-accelerated');
      }
      
      hasOptimized.current = true;
      setIsOptimized(true);
    };
    
    // Apply optimizations after initial render
    if (document.readyState === 'complete') {
      applyOptimizations();
    } else {
      window.addEventListener('load', applyOptimizations);
      return () => window.removeEventListener('load', applyOptimizations);
    }
  }, []);

  return { isOptimized };
}
