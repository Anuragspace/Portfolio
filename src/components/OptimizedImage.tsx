
import { useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className,
  width,
  height
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset on src change
    setIsLoaded(false);
    setError(false);
    
    // Preload image
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
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
            "w-full h-full object-cover transition-opacity duration-300 gpu-accelerated will-change-opacity",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          style={{ width, height }}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";
