
import React, { ReactNode, FC } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive values move slower, negative values move faster
  direction?: 'vertical' | 'horizontal';
  bgImage?: string;
}

const ParallaxSection: FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'vertical',
  bgImage
}) => {
  return (
    <div 
      className={cn('relative overflow-hidden', className)}
      data-scroll-section
    >
      {bgImage && (
        <div 
          className="absolute inset-0 w-full h-full -z-10"
          data-scroll
          data-scroll-speed={speed * 0.5}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)',
          }}
        />
      )}
      
      <div 
        data-scroll
        data-scroll-speed={speed}
        data-scroll-direction={direction}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
