
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenisScroll({ 
  enabled = true, 
  options = {}
}: { 
  enabled?: boolean; 
  options?: Partial<Lenis.LenisOptions>
} = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Create Lenis instance with optimized defaults
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Improved easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
      infinite: false,
      ...options
    });

    // RAF animation loop with timestamp for consistent animations
    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    };

    // Start animation loop
    requestAnimationFrame(raf);

    // Create scroll restoration handler
    const scrollRestoration = () => {
      history.scrollRestoration = 'manual';
    };
    window.addEventListener('load', scrollRestoration);

    // Pause during route transitions to prevent conflicts
    const pauseScroll = () => {
      if (lenisRef.current) lenisRef.current.stop();
    };
    
    const resumeScroll = () => {
      if (lenisRef.current) lenisRef.current.start();
    };

    window.addEventListener('popstate', pauseScroll);
    window.addEventListener('pushstate', pauseScroll);
    
    // Document visibility change handler (for performance)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (lenisRef.current) lenisRef.current.stop();
      } else {
        if (lenisRef.current) lenisRef.current.start();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Make lenis available globally for debugging
    if (process.env.NODE_ENV === 'development') {
      (window as any).lenis = lenisRef.current;
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      window.removeEventListener('load', scrollRestoration);
      window.removeEventListener('popstate', pauseScroll);
      window.removeEventListener('pushstate', pauseScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, options]);

  return lenisRef;
}
