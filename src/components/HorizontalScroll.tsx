
import React, { ReactNode, useRef, FC, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const HorizontalScroll: FC<HorizontalScrollProps> = ({
  children,
  className,
  speed = 0.1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.locomotiveScroll || !containerRef.current) return;
    
    // Update locomotive scroll to recognize this horizontal section
    setTimeout(() => {
      if (window.locomotiveScroll) {
        window.locomotiveScroll.update();
      }
    }, 100);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      data-scroll-section
      data-scroll-direction="horizontal"
    >
      <div 
        className="flex"
        data-scroll
        data-scroll-speed={speed}
        data-scroll-direction="horizontal"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
