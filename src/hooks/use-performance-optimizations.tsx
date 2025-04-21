
import { useEffect, useRef, useState } from 'react';

export function usePerformanceOptimizations() {
  const hasOptimized = useRef(false);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (hasOptimized.current) return;
    
    const applyOptimizations = () => {
      // Add will-change hints to animations
      document.querySelectorAll(
        '.animate-fade-in, .animate-scale-in, .hover\\:scale-105'
      ).forEach((el) => {
        if (el instanceof HTMLElement) {
          el.classList.add('will-change-transform');
        }
      });
      
      // Add content-visibility to off-screen sections
      document.querySelectorAll('section:not(:first-child)').forEach((section) => {
        if (section instanceof HTMLElement) {
          section.classList.add('content-visibility-auto');
        }
      });
      
      // Force hardware acceleration on navigation
      const navbar = document.querySelector('nav');
      if (navbar instanceof HTMLElement) {
        navbar.classList.add('gpu-accelerated');
      }
      
      hasOptimized.current = true;
      setIsOptimized(true);
    };
    
    if (document.readyState === 'complete') {
      applyOptimizations();
    } else {
      window.addEventListener('load', applyOptimizations);
      return () => window.removeEventListener('load', applyOptimizations);
    }
  }, []);

  return { isOptimized };
}
