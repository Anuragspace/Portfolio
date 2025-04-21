
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartProps {
  x: number;
  delay: number;
}

const BubblingHeart: React.FC<HeartProps> = ({ x, delay }) => {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      initial={{ x, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        y: [-40, -100], 
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        x: x + Math.sin(Date.now() / 500) * 30
      }}
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeOut"
      }}
    >
      <Heart className="text-red-500 fill-red-500" size={16} />
    </motion.div>
  );
};

interface BubblingHeartsProps {
  isAnimating: boolean;
}

const BubblingHearts: React.FC<BubblingHeartsProps> = ({ isAnimating }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);
  
  useEffect(() => {
    if (isAnimating) {
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 60,
        delay: i * 0.05
      }));
      
      setHearts(newHearts);
      
      const timer = setTimeout(() => {
        setHearts([]);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  
  return (
    <div className="relative">
      <AnimatePresence>
        {hearts.map((heart) => (
          <BubblingHeart key={heart.id} x={heart.x} delay={heart.delay} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BubblingHearts;
