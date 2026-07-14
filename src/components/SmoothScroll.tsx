import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth scrolling
    const lenis = new Lenis({
      duration: 1.0, // standard duration for snappy but smooth feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Save instance globally for navbar scroll trigger access
    window.lenis = lenis;

    // Render loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Add Lenis classes to HTML element to control scroll-behavior conflicts
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = undefined;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return null;
};

export default SmoothScroll;
