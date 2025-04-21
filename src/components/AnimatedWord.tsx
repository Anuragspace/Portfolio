
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isHovered ? 'hovered' : 'normal'}
          initial={{ y: isHovered ? -20 : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedWord;
