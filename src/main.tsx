
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/performance-optimizations.css'
import { initPerformanceOptimizations } from './perf-optimizations.ts'

// Apply core performance optimizations immediately
if (typeof window !== 'undefined') {
  // Add requestIdleCallback polyfill for older browsers
  if (!('requestIdleCallback' in window)) {
    (window as any).requestIdleCallback = function(callback: Function) {
      const start = Date.now();
      return setTimeout(function() {
        callback({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    
    (window as any).cancelIdleCallback = function(id: number) {
      clearTimeout(id);
    };
  }
  
  // Initialize performance optimizations
  initPerformanceOptimizations();
}

// Create app with concurrent mode for better performance
const root = createRoot(document.getElementById("root")!);

// Remove development-only logging in production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.debug = () => {};
}

root.render(<App />);
