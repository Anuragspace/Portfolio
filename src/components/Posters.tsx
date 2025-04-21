
import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedAnimations } from "@/hooks/use-optimized-animation";
import { OptimizedImage } from "./OptimizedImage";

interface Poster {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Posters = () => {
  // Check if user prefers reduced motion
  const reduceMotion = useReducedAnimations();
  
  // Optimized carousel settings with reduced animations for better performance
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false, // Changed to false to reduce CPU usage
    containScroll: "keepSnaps",
    startIndex: 1,
    duration: reduceMotion ? 10 : 20, // Faster animations for reduced motion
  });

  const [activeIndex, setActiveIndex] = useState(1);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  // Posters data - memoized to prevent recreating on every render
  const posters = useMemo(() => [
    {
      id: 1,
      title: "Tech Conference 2023",
      description: "Event poster design with modern typographic layout",
      image: "/images/1.webp",
    },
    {
      id: 2,
      title: "Summer Music Festival",
      description: "Vibrant poster design for annual music event",
      image: "/images/3.jpg",
    },
    {
      id: 3,
      title: "Product Launch",
      description: "Minimalist design highlighting new product features",
      image: "/images/im3.jpg",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      description: "Series of coordinated visuals for digital campaign",
      image: "/images/accept letter.png",
    },
    {
      id: 5,
      title: "Annual Report",
      description: "Corporate visual design with data visualization",
      image: "/images/IMG2.webp",
    },
    {
      id: 6,
      title: "Sustainability Initiative",
      description: "Campaign promoting environmental awareness",
      image: "/images/Instagram post - 5.png",
    },
  ], []);

  // Optimize auto-scroll logic - memoized scrollNext function
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    
    if (!emblaApi.canScrollNext()) {
      emblaApi.scrollTo(0);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  
  // Update active index when selection changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  
  // Auto-scroll with optimized interval and visibility-based pausing
  useEffect(() => {
    if (!emblaApi || !autoScrollEnabled) return;
    
    // Function to check if page is visible
    const isPageVisible = () => 
      document.visibilityState === 'visible';
    
    // Only auto-scroll when page is visible
    let scrollInterval: number;
    
    const startAutoScroll = () => {
      if (isPageVisible() && autoScrollEnabled) {
        scrollInterval = window.setInterval(scrollNext, 5000);
      }
    };
    
    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };
    
    // Start initial interval
    startAutoScroll();
    
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
      if (isPageVisible()) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    });
    
    // Clean up interval on component unmount
    return () => {
      stopAutoScroll();
      document.removeEventListener('visibilitychange', () => {});
    };
  }, [emblaApi, autoScrollEnabled, scrollNext]);
  
  // Handle mouse interactions - pause on hover
  const handleMouseEnter = useCallback(() => {
    setAutoScrollEnabled(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoScrollEnabled(true);
  }, []);
  
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50/50 py-8 md:py-16 overflow-hidden">
      {/* Blur effects */}
      <div className="absolute left-0 top-1/4 bottom-0 w-[50px] md:w-[80px] bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
      <div className="absolute right-0 top-1/4 bottom-0 w-[50px] md:w-[80px] bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Graphic Design Skills</h2>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base text-gray-600">
            Showcasing visual storytelling through diverse design projects that
            combine aesthetics with strategic communication.
          </p>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-4 md:gap-8 px-2 md:px-4">
              {posters.map((poster, index) => (
                <div
                  key={index}
                  className={`embla__slide flex-[0_0_80%] sm:flex-[0_0_70%] md:flex-[0_0_38%] lg:flex-[0_0_28%] px-1 md:px-2`}
                >
                  <AnimatePresence>
                    <motion.div
                      layout={false} // Disable layout animations
                      initial={{ scale: 0.95, opacity: 0.5 }}
                      animate={{
                        scale: activeIndex === index ? 1 : 0.95,
                        opacity: activeIndex === index ? 1 : 0.7,
                      }}
                      transition={{ 
                        duration: reduceMotion ? 0.2 : 0.4,
                        type: "tween" // Use tween instead of spring for better performance
                      }}
                      className="group relative aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 mx-0.5 md:mx-1"
                      style={{
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)'
                      }}
                    >
                      <OptimizedImage
                        src={poster.image}
                        alt={poster.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                          <h4 className="font-semibold text-white text-base md:text-lg mb-1 md:mb-2">
                            {poster.title}
                          </h4>
                          <p className="text-white/80 text-xs md:text-sm">{poster.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/80 shadow-lg flex items-center justify-center z-20 hover:bg-black transition-colors duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/80 shadow-lg flex items-center justify-center z-20 hover:bg-black transition-colors duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Posters);
