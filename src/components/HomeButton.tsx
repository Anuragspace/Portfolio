
import { useState, useEffect, useRef, memo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const HomeButton = memo(() => {
  const [visible, setVisible] = useState(false);
  const previousScrollY = useRef(0);
  const ticking = useRef(false);
  
  useEffect(() => {
    // Cache the footer element to avoid DOM queries on every scroll
    const footer = document.querySelector('footer');
    
    const toggleVisibility = () => {
      if (!ticking.current) {
        ticking.current = true;
        
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only update state if there's a significant change (reduce state updates)
          if (Math.abs(currentScrollY - previousScrollY.current) > 50) {
            if (currentScrollY > 300) {
              if (footer) {
                const footerPosition = footer.getBoundingClientRect().top;
                const hideThreshold = window.innerHeight - 150;
                
                if (footerPosition > hideThreshold && !visible) {
                  setVisible(true);
                } else if (footerPosition <= hideThreshold && visible) {
                  setVisible(false);
                }
              } else if (!visible) {
                setVisible(true);
              }
            } else if (visible) {
              setVisible(false);
            }
            
            previousScrollY.current = currentScrollY;
          }
          
          ticking.current = false;
        });
      }
    };

    // Set initial state
    toggleVisibility();
    
    // Optimize scroll listener with passive option
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [visible]);

  const scrollToTop = () => {
    // Use Lenis scroll if available, fallback to native
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
          aria-label="Back to top"
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
        >
          <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </m.button>
      )}
    </AnimatePresence>
  );
});

HomeButton.displayName = "HomeButton";

// Add TypeScript global declaration for Lenis
declare global {
  interface Window {
    lenis?: any;
  }
}

export default HomeButton;
