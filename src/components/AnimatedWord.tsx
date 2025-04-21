
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word }) => {
  return (
    <motion.span
      className="inline-block cursor-pointer"
      whileHover={{
        scale: 1.2,
        // Use a simpler rotation that's compatible with spring animations
        rotate: 5,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }
      }}
      // Add a separate animation variant for more complex rotation
      // that uses the tween animation type instead of spring
      whileTap={{
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 0.5,
          type: "tween" // Use tween instead of spring for multiple keyframes
        }
      }}
    >
      {word}
    </motion.span>
  );
};

export default AnimatedWord;
