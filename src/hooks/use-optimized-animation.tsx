
import { useEffect, useRef } from 'react';

/**
 * Custom hook to defer non-critical animations until after page load
 * This helps improve performance by reducing initial render load
 */
export function useOptimizedAnimation() {
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    // Flag to track if animations should run
    if (isFirstRender.current) {
      // Set a timeout to allow the main content to load and render first
      const timeoutId = setTimeout(() => {
        isFirstRender.current = false;
      }, 300);
      
      return () => clearTimeout(timeoutId);
    }
  }, []);
  
  return {
    shouldAnimate: !isFirstRender.current,
    isFirstRender: isFirstRender.current
  };
}
