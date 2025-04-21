import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartProps {
  x: number;
  delay: number;
}

const BubblingHeart: React.FC<HeartProps> = ({ x, delay }) => {
  return (
    <m.div
      className="absolute bottom-0 pointer-events-none"
      initial={{ x, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        y: [-20, -80], 
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        x: x + Math.sin(Date.now() / 1000) * 20
      }}
      transition={{
        duration: 2,
        delay: delay,
        ease: "easeOut"
      }}
    >
      <Heart className="text-red-500 fill-red-500" size={16} />
    </m.div>
  );
};

interface BubblingHeartsProps {
  isAnimating: boolean;
}

const BubblingHearts: React.FC<BubblingHeartsProps> = ({ isAnimating }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);
  
  useEffect(() => {
    if (isAnimating) {
      const newHearts = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 40 - 20,
        delay: i * 0.1
      }));
      
      setHearts(newHearts);
      
      const timer = setTimeout(() => {
        setHearts([]);
      }, 3000);
      
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
