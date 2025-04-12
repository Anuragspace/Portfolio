
import React, { ReactNode, useRef, useEffect, FC } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'scale' | 'none';
  delay?: number;
}

const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run if window.locomotiveScroll exists and we have a ref
    if (!window.locomotiveScroll || !ref.current) return;

    // Add appropriate animation class
    let animationClass = '';
    switch (animation) {
      case 'fade-up':
        animationClass = 'fade-up-element';
        break;
      case 'scale':
        animationClass = 'scale-element';
        break;
      default:
        animationClass = '';
    }

    if (animationClass) {
      ref.current.classList.add(animationClass);
    }

    // Add data-scroll attribute to track element
    ref.current.setAttribute('data-scroll', '');
    
    // Add delay if specified
    if (delay > 0) {
      ref.current.setAttribute('data-scroll-delay', delay.toString());
    }

    // Call update on locomotiveScroll to recognize new elements
    setTimeout(() => {
      if (window.locomotiveScroll) {
        window.locomotiveScroll.update();
      }
    }, 100);

  }, [animation, delay]);

  return (
    <div 
      ref={ref}
      className={cn(className)} 
      data-scroll
      data-scroll-speed={animation === 'none' ? '0' : '0.1'}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
