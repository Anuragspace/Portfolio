
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const HomeButton = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Show button when user scrolls down and hide when reaching footer
  useEffect(() => {
    // Find the footer element once on mount
    footerRef.current = document.querySelector('footer');
    
    const toggleVisibility = () => {
      // Use debouncing to improve scroll performance
      if (scrollTimeoutRef.current) {
        window.cancelAnimationFrame(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = window.requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          if (footerRef.current) {
            const footerPosition = footerRef.current.getBoundingClientRect().top;
            const hideThreshold = window.innerHeight - 150;
            setVisible(footerPosition > hideThreshold);
          } else {
            setVisible(true);
          }
        } else {
          setVisible(false);
        }
      });
    };

    // Run once on mount to set initial state
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (scrollTimeoutRef.current) {
        window.cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default HomeButton;
