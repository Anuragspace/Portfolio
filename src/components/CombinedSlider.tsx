
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface CombinedSliderProps {
  images: string[];
  titles: string[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

const CombinedSlider = ({
  images,
  titles,
  autoplay = true,
  interval = 5000,
  className,
}: CombinedSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressControls = useAnimation();

  // Track touch events for swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle autoplay with longer intervals for slower transitions
  useEffect(() => {
    if (!autoplay || isPaused || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, images.length, interval, isPaused]);

  // Animate progress bar with slower progress
  useEffect(() => {
    const duration = interval / 1000; // Convert to seconds for animation
    
    if (!isPaused && autoplay) {
      // Reset first then animate
      progressControls.set({ scaleX: 0 });
      progressControls.start({
        scaleX: 1,
        transition: { duration, ease: "linear" }
      });
    } else {
      progressControls.stop();
    }
    
    return () => progressControls.stop();
  }, [currentIndex, isPaused, progressControls, interval, autoplay]);

  // Handle swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  // Handle mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    
    const handleMouseMove = (e: MouseEvent) => {
      setTouchEnd(e.clientX);
    };
    
    const handleMouseUp = () => {
      if (touchStart - touchEnd > 50) {
        // Drag left
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      
      if (touchStart - touchEnd < -50) {
        // Drag right
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (images.length === 0) return null;

  return (
    <div 
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={sliderRef}
    >
      {/* Title with animated underline that moves with slides */}
      <div className="relative z-10 mb-6 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-3 font-manrope">{titles[currentIndex]}</h3>
        <div className="relative h-0.5 w-60 bg-gray-200 overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#3E40EF] origin-left"
            animate={progressControls}
            initial={{ scaleX: 0 }}
          />
        </div>
      </div>
      
      {/* Image slider - wider with less padding */}
      <div 
        className="relative w-full aspect-video mx-auto rounded-xl overflow-hidden cursor-grab active:cursor-grabbing" 
        style={{ maxWidth: '100%' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${titles[currentIndex]} slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            loading="lazy"
            draggable="false"
            style={{ boxShadow: 'none' }}
          />
        </AnimatePresence>
        
        {/* Indicators - simplified for only 2 slides */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white w-10" 
                  : "bg-white/50 w-10 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedSlider;
