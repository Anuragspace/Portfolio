
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word }) => {
  return (
    <motion.span
      className="inline-block cursor-pointer will-change-transform"
      whileHover={{
        scale: 1.1,
        rotate: 3,
        transition: {
          type: "tween",
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 300
        }
      }}
    >
      {word}
    </motion.span>
  );
};

export default AnimatedWord;
