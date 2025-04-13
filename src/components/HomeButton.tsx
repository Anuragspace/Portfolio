
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const HomeButton = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  // Show button when user scrolls down and hide when reaching footer
  useEffect(() => {
    // Find the footer element
    footerRef.current = document.querySelector('footer');
    
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        // Check if we've reached the footer
        if (footerRef.current) {
          const footerPosition = footerRef.current.getBoundingClientRect().top;
          if (footerPosition <= window.innerHeight) {
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
    <>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed left-6 bottom-10 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>
      )}
    </>
  );
};

export default HomeButton;
