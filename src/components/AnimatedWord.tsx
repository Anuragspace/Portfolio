
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
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 0.3,
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
