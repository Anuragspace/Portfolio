
/**
 * Performance optimizations for the application
 * This file contains functions and configurations to improve website performance
 */

// Detect low-end devices
const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return (
    // Check for device memory API
    ((navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory < 4) ||
    // Check CPU cores
    ((navigator as any).hardwareConcurrency !== undefined && (navigator as any).hardwareConcurrency < 4) ||
    // Check for older mobile devices
    /android 4|android 5|iphone os 9|iphone os 10/i.test(navigator.userAgent)
  );
};

// Cache frequently accessed DOM elements
export const cacheDOMElements = () => {
  // Cache footer element since it's frequently accessed in scroll handlers
  if (typeof window !== 'undefined') {
    // Use a WeakMap to store DOM elements - better for garbage collection
    window._domCache = new WeakMap<any, Element>();
    
    // Cache common elements using symbol keys for better uniqueness
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('nav');
    
    // Use symbol keys instead of strings
    const FOOTER_KEY = Symbol('footer');
    const NAVBAR_KEY = Symbol('navbar');
    
    if (footer) window._domCache.set(FOOTER_KEY, footer);
    if (navbar) window._domCache.set(NAVBAR_KEY, navbar);
    
    // Update cached elements when DOM changes significantly using IntersectionObserver
    // This is more efficient than MutationObserver
    const observeAndCache = (selector: string, key: symbol) => {
      const observer = new IntersectionObserver(() => {
        const element = document.querySelector(selector);
        if (element) window._domCache.set(key, element);
      });
      
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
        window._domCache.set(key, element);
      }
    };
    
    observeAndCache('footer', FOOTER_KEY);
    observeAndCache('nav', NAVBAR_KEY);
    
    return () => {};
  }
  
  return () => {};
};

// Optimize image loading with priority for above-fold images
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback to defer non-critical work
  const useIdleCallback = 'requestIdleCallback' in window;
  
  const optimize = () => {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports 'loading' attribute
      const images = document.querySelectorAll('img:not([loading])');
      
      // Get viewport height to determine "above the fold"
      const viewportHeight = window.innerHeight;
      
      // Process images
      images.forEach(img => {
        // Check if image is above the fold
        const rect = img.getBoundingClientRect();
        const isAboveTheFold = rect.top < viewportHeight * 1.5;
        
        if (isAboveTheFold) {
          // Priority loading for above-fold images
          img.setAttribute('fetchpriority', 'high');
          img.setAttribute('loading', 'eager');
        } else {
          // Lazy loading for below-fold images
          img.setAttribute('loading', 'lazy');
          img.setAttribute('fetchpriority', 'low');
        }
      });
    }
  };
  
  // Use requestIdleCallback if available
  if (useIdleCallback) {
    (window as any).requestIdleCallback(optimize);
  } else {
    // Fallback to setTimeout
    setTimeout(optimize, 200);
  }
};

// Improved debounce function with immediate option for smoother interactions
export const debounce = (func: Function, wait: number, immediate = false) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: any[]) {
    const callNow = immediate && !timeout;
    
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
};

// Throttle function for scroll handlers
export const throttle = (callback: Function, delay: number) => {
  let isThrottled = false;
  
  return function throttledFunction(...args: any[]) {
    if (isThrottled) return;
    
    isThrottled = true;
    callback(...args);
    
    // Use rAF for smoother performance in visual updates
    requestAnimationFrame(() => {
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    });
  };
};

// Apply passive event listeners for better scrolling
const applyPassiveEventListeners = () => {
  if (typeof window === 'undefined') return;
  
  // Elements that handle many scroll events
  const scrollableElements = [
    window,
    document,
    document.documentElement,
    document.body,
    document.querySelector('.embla'),
    document.querySelector('.skills-scroll-container')
  ].filter(Boolean);
  
  scrollableElements.forEach(element => {
    if (!element) return;
    
    // Remove any non-passive listeners and replace with passive ones
    const originalAddEventListener = element.addEventListener;
    
    element.addEventListener = function(type, listener, options) {
      let newOptions = options;
      if (type === 'scroll' || type === 'touchmove' || type === 'wheel' || type === 'touchstart') {
        if (typeof options === 'object') {
          if (options.passive !== false) { // Only override if not explicitly set to false
            newOptions = { ...options, passive: true };
          }
        } else {
          newOptions = { passive: true };
        }
      }
      
      return originalAddEventListener.call(this, type, listener, newOptions);
    };
  });
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Check if this is a low-end device
    const isLowEnd = isLowEndDevice();
    
    // Apply immediate optimizations
    cacheDOMElements();
    applyPassiveEventListeners();
    
    // Apply dependent optimizations after a short delay
    setTimeout(() => {
      optimizeImageLoading();
    }, 100);
    
    // Add low-end device class if needed
    if (isLowEnd) {
      document.documentElement.classList.add('reduce-animations');
    }
    
    // Add font display swap for better loading performance
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Manrope';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }
};

export default initPerformanceOptimizations;
