
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const HomeButton = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  // Show button when user scrolls down and hide when reaching footer
  useEffect(() => {
    // Find the footer element and keep it updated on each scroll
    const toggleVisibility = () => {
      // Re-find footer each time to ensure it exists on the current page
      footerRef.current = document.querySelector('footer');
      
      if (window.scrollY > 300) { // Show earlier
        // Check if we've reached the footer
        if (footerRef.current) {
          const footerPosition = footerRef.current.getBoundingClientRect().top;
          // Use a larger threshold to hide button before reaching footer
          const hideThreshold = window.innerHeight - 150; // Larger margin from footer
          if (footerPosition <= hideThreshold) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        } else {
          setVisible(true);
        }
      } else {
        setVisible(false);
      }
    };

    // Run once on mount to set initial state
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed left-6 bottom-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default HomeButton;
