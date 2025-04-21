
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to defer non-critical animations until after page load
 * and optimize animation performance
 */
export function useOptimizedAnimation(delayMs: number = 200) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    if (hasAnimated.current) return;
    
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Determine if we should use requestIdleCallback
      const useIdleCallback = 'requestIdleCallback' in window;
      
      // Use either requestIdleCallback or setTimeout based on browser support
      if (useIdleCallback) {
        (window as any).requestIdleCallback(() => {
          setTimeout(() => {
            setShouldAnimate(true);
            hasAnimated.current = true;
          }, delayMs);
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          setShouldAnimate(true);
          hasAnimated.current = true;
        }, delayMs + 100); // Slightly longer delay for setTimeout
      }
    }
  }, [delayMs]);
  
  return {
    shouldAnimate,
    hasAnimated: hasAnimated.current
  };
}

// Utility function to detect if device is low-powered
export function useIsLowPoweredDevice() {
  const [isLowPowered, setIsLowPowered] = useState(false);
  
  useEffect(() => {
    // Simple heuristics to detect low-powered devices
    const isLowPower = 
      // Check for older devices through user agent
      /android 4/i.test(navigator.userAgent) ||
      // Check for battery API
      (navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory < 4 ||
      (navigator as any).hardwareConcurrency !== undefined && (navigator as any).hardwareConcurrency < 4;
    
    setIsLowPowered(isLowPower);
  }, []);
  
  return isLowPowered;
}

// Utility for reducing animation intensity 
export function useReducedAnimations() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isLowPowered = useIsLowPoweredDevice();
  
  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    
    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);
  
  return prefersReducedMotion || isLowPowered;
}
