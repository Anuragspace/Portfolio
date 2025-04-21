
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Define a simpler type for Lenis options without namespace issues
type LenisOptions = {
  duration?: number;
  easing?: (t: number) => number;
  direction?: 'vertical' | 'horizontal';
  gestureDirection?: 'vertical' | 'horizontal';
  smooth?: boolean;
  mouseMultiplier?: number;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
  [key: string]: any; // Allow other options
};

export function useLenisScroll({ 
  enabled = true, 
  options = {}
}: { 
  enabled?: boolean; 
  options?: Partial<LenisOptions>
} = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Create Lenis instance with more standard defaults
    lenisRef.current = new Lenis({
      duration: 1.0, // Slightly less duration for more responsive feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Improved easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Better performance on mobile
      touchMultiplier: 2,
      infinite: false,
      ...options
    });

    // Simple RAF loop
    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    };

    // Start animation loop
    requestAnimationFrame(raf);

    // Make lenis available globally for debugging
    if (process.env.NODE_ENV === 'development') {
      (window as any).lenis = lenisRef.current;
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [enabled, options]);

  return lenisRef;
}
