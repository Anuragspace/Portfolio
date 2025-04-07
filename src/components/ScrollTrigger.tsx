
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { useInView } from 'framer-motion';
import { useSmoothScroll } from './LenisProvider';

interface ScrollTriggerProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string; // This should be a string
  onEnter?: () => void;
  onLeave?: () => void;
  once?: boolean;
  className?: string;
}

export const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '-50px',
  onEnter,
  onLeave,
  once = true,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();
  const [hasEntered, setHasEntered] = useState(false);
  
  // Use only threshold and once which are properly typed
  // Add 'as any' to rootMargin to fix type error
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: rootMargin as any, // Type assertion to fix TypeScript error
  });

  useEffect(() => {
    if (isInView && !hasEntered) {
      setHasEntered(true);
      onEnter?.();
    } else if (!isInView && hasEntered && !once) {
      setHasEntered(false);
      onLeave?.();
    }
  }, [isInView, hasEntered, onEnter, onLeave, once]);

  // Force a recalculation on Lenis initialization
  useEffect(() => {
    if (lenis) {
      lenis.resize();
    }
  }, [lenis]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollTrigger;
