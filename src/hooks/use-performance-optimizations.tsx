
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useIsLowPoweredDevice, useReducedAnimations } from './use-optimized-animation';

export function usePerformanceOptimizations() {
  const hasOptimized = useRef(false);
  const [isOptimized, setIsOptimized] = useState(false);
  const isLowPowered = useIsLowPoweredDevice();
  const prefersReducedMotion = useReducedAnimations();

  // Apply optimizations as early as possible with useLayoutEffect
  useLayoutEffect(() => {
    if (hasOptimized.current) return;
    
    const addWillChangeHints = () => {
      // Add will-change hints only to elements that will animate
      document.querySelectorAll(
        '.animate-fade-in, .animate-scale-in, .hover\\:scale-105, .skills-scroll-container, .embla__container'
      ).forEach((el) => {
        if (el instanceof HTMLElement) {
          el.classList.add('will-change-transform');
          el.style.transform = 'translateZ(0)'; // Force GPU acceleration
        }
      });
    };
    
    // Apply only minimal optimizations first
    addWillChangeHints();
    
    // Mark as optimized
    hasOptimized.current = true;
    setIsOptimized(true);
  }, []);
  
  // More comprehensive optimizations after initial render
  useEffect(() => {
    if (!isOptimized) return;
    
    // Optimizations based on device capability
    const applyDeviceSpecificOptimizations = () => {
      if (isLowPowered || prefersReducedMotion) {
        // For low-powered devices, disable heavy animations
        document.documentElement.classList.add('reduce-animations');
        
        // Reduce animation duration
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
          .animate-fade-in, .animate-scale-in {
            animation-duration: 0.2s !important;
          }
          .transition-all, .transition-transform, .transition-opacity {
            transition-duration: 0.2s !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
    };
    
    const optimizeImages = () => {
      // Apply loading="lazy" to images below the fold
      const images = document.querySelectorAll('img:not([loading])');
      let index = 0;
      
      images.forEach((img) => {
        if (index > 3) { // Skip first few images (above the fold)
          img.setAttribute('loading', 'lazy');
        }
        index++;
      });
    };
    
    // Optimize scroll handlers by using passive listeners
    const optimizeEventListeners = () => {
      // Override addEventListener to force passive: true for scroll and touch events
      const originalAddEventListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
        let newOptions = options;
        
        // Force passive: true for scroll/touch events unless explicitly set to false
        if (passiveEvents.includes(type)) {
          if (typeof options === 'object') {
            newOptions = { 
              ...options, 
              passive: options.passive === false ? false : true 
            };
          } else {
            newOptions = { passive: true };
          }
        }
        
        return originalAddEventListener.call(this, type, listener, newOptions);
      };
    };
    
    // Delay non-critical optimizations
    setTimeout(() => {
      applyDeviceSpecificOptimizations();
      optimizeImages();
      optimizeEventListeners();
    }, 100);
    
    // Cleanup function could reset overrides if needed
    return () => {
      // Cleanup code here if needed
    };
  }, [isOptimized, isLowPowered, prefersReducedMotion]);

  return { isOptimized };
}
