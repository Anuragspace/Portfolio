
import { useState, useEffect, memo } from 'react';

interface ImageWithPreloadProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageWithPreload = memo(({ src, alt, className, width, height }: ImageWithPreloadProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
});

ImageWithPreload.displayName = 'ImageWithPreload';

export default ImageWithPreload;
