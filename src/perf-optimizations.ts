
/**
 * Performance optimizations for the application
 * This file contains functions and configurations to improve website performance
 */
import smoothscroll from 'smoothscroll-polyfill';

// Type declaration for window properties
declare global {
  interface Window {
    _cachedFooter?: HTMLElement | null;
    _cachedNavbar?: HTMLElement | null;
    _cachedHero?: HTMLElement | null;
  }
}

// Cache frequently accessed DOM elements
export const cacheDOMElements = () => {
  // Cache elements since they're frequently accessed in scroll handlers
  if (typeof window !== 'undefined') {
    window._cachedFooter = document.querySelector('footer');
    window._cachedNavbar = document.querySelector('nav');
    window._cachedHero = document.querySelector('#hero');
    
    // Update cached elements when DOM changes significantly
    const observer = new MutationObserver(() => {
      window._cachedFooter = document.querySelector('footer');
      window._cachedNavbar = document.querySelector('nav');
      window._cachedHero = document.querySelector('#hero');
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

// Optimize scroll behavior
export const optimizeScrolling = () => {
  // Polyfill for smooth scrolling in all browsers
  smoothscroll.polyfill();

  // Use passive event listeners for scroll events
  document.addEventListener('scroll', () => {}, { passive: true });

  // Apply touch-action improvements for touch devices
  document.body.style.touchAction = 'manipulation';

  // Add will-change hints to elements that will animate during scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-in, .slide-up');
  animatedElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.classList.add('will-change-transform');
    }
  });

  // Reduce scroll jank by disabling animations during scroll
  let scrollTimeout: ReturnType<typeof setTimeout>;
  let isScrolling = false;
  
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      isScrolling = true;
      document.body.classList.add('is-scrolling');
    }
    
    clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      document.body.classList.remove('is-scrolling');
    }, 100);
  }, { passive: true });
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Apply optimizations only in browser environment
    cacheDOMElements();
    optimizeImageLoading();
    optimizeScrolling();

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
