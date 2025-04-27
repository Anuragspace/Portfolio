
import { useEffect, useState } from 'react';

/**
 * Custom hook to defer non-critical animations until after page load
 * This helps improve performance by reducing initial render load
 */
export function useOptimizedAnimation() {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      const timeoutId = setTimeout(() => {
        setIsFirstRender(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [isFirstRender]);

  return {
    shouldAnimate: !isFirstRender,
    isFirstRender
  };
}
