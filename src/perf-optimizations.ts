
/**
 * Performance optimizations for the application
 * This file contains functions and configurations to improve website performance
 */

// Cache frequently accessed DOM elements
export const cacheDOMElements = () => {
  // Cache footer element since it's frequently accessed in scroll handlers
  if (typeof window !== 'undefined') {
    window._cachedFooter = document.querySelector('footer');
    
    // Update cached elements when DOM changes significantly
    const observer = new MutationObserver(() => {
      window._cachedFooter = document.querySelector('footer');
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }
};

// Optimize image loading
export const optimizeImageLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports 'loading' attribute
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
};

// Debounce function for scroll and resize handlers
export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Apply optimizations only in browser environment
    cacheDOMElements();
    optimizeImageLoading();
    
    // Optimize scroll handlers
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
      if (type === 'scroll' || type === 'resize') {
        const debouncedListener = debounce(listener as Function, 100);
        return originalAddEventListener.call(this, type, debouncedListener as EventListener, options);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  }
};

export default initPerformanceOptimizations;
