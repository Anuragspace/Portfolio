import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

interface Poster {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Posters = () => {
  // Optimized carousel settings for better performance
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: true, // Enable drag-free scrolling for smoother interaction
    containScroll: "keepSnaps",
    startIndex: 1,
    duration: 20, // Faster animation for more responsive feel
  });

  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, postersRef] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // Handle active index and optimize loop behavior
  useEffect(() => {
    if (!emblaApi) return;
    
    // Set initial active index
    setActiveIndex(emblaApi.selectedScrollSnap());
    
    // Update active index when selection changes
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    
    // Set up event listeners
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const posters: Poster[] = [
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
  ];

  // Modified auto-scroll logic for better performance
  useEffect(() => {
    if (!emblaApi || !isVisible) return;
    
    // Setup auto scroll with longer interval
    const autoScrollInterval = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0); // Force loop if at the end
      } else {
        emblaApi.scrollNext();
      }
    }, 5000); // Longer interval for smoother performance
    
    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [emblaApi, isVisible]);
  
  return (
    <section ref={postersRef} className="relative bg-gradient-to-b from-white to-gray-50/50 py-8 md:py-16 overflow-hidden">
      {/* Blur effects - extended to cover poster area fully */}
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

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-4 md:gap-8 px-2 md:px-4">
              {posters.map((poster, index) => (
                <motion.div
                  key={index}
                  className={`embla__slide flex-[0_0_80%] sm:flex-[0_0_70%] md:flex-[0_0_38%] lg:flex-[0_0_28%] px-1 md:px-2`}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{
                    scale: activeIndex === index ? 1 : 0.9,
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="group relative aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-500 mx-0.5 md:mx-1">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - Responsive sizing */}
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

export default Posters;
