
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, images.length, interval, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Title with animated underline that moves with slides */}
      <div className="relative z-10 mb-6 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-3">{titles[currentIndex]}</h3>
        <div className="relative h-px w-40 bg-gray-200">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#3E40EF]"
            animate={{ 
              x: `${(currentIndex / (images.length - 1)) * 100}%`,
              width: "30%" 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      
      {/* Image slider */}
      <div className="relative w-full aspect-video mx-auto rounded-xl overflow-hidden" style={{ maxWidth: '85%' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${titles[currentIndex]} slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </AnimatePresence>
        
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <ArrowLeft size={18} className="mx-auto" />
          </button>
          
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <ArrowRight size={18} className="mx-auto" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white w-6" 
                  : "bg-white/50 w-1.5 hover:bg-white/80"
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
