
import { useState, useEffect, memo, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useIsLowPoweredDevice } from "@/hooks/use-optimized-animation";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className,
  width,
  height,
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isLowPowered = useIsLowPoweredDevice();
  
  useEffect(() => {
    // Skip preloading for low-powered devices
    if (isLowPowered && !priority) return;
    
    // Reset state on src change
    setIsLoaded(false);
    setError(false);
    
    // For priority images or already cached images, load immediately
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
    
    // For non-priority images, use IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setError(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading when within 200px
    );
    
    const currentRef = document.getElementById(`img-${src.replace(/[^a-zA-Z0-9]/g, '-')}`);
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [src, priority, isLowPowered]);

  // Generate a unique ID for the image placeholder
  const imageId = `img-${src.replace(/[^a-zA-Z0-9]/g, '-')}`;
  
  const imgStyles: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s',
    willChange: 'opacity',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  };

  // Reduced animation for low-powered devices
  if (isLowPowered) {
    imgStyles.transition = 'opacity 0.15s';
  }

  return (
    <div id={imageId} className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ width, height }}
        />
      )}
      
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
          Unable to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover",
            isLowPowered ? "" : "transform-gpu"
          )}
          style={imgStyles}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          width={width}
          height={height}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";
