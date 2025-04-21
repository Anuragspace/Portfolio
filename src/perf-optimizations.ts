
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

// Optimize image loading with priority for above-fold images
export const optimizeImageLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports 'loading' attribute
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        // Priority loading for hero images
        if (img.closest('.hero-image') || img.closest('.primary-banner')) {
          img.setAttribute('fetchpriority', 'high');
        } else {
          img.setAttribute('loading', 'lazy');
        }
      }
    });
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

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Apply optimizations only in browser environment
    cacheDOMElements();
    optimizeImageLoading();

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
