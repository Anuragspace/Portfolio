
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "./BlurFade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";

interface Poster {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Posters = () => {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scroll } = useLocomotiveScroll();
  
  const posters: Poster[] = [
    {
      id: 1,
      title: "Tech Conference 2023",
      description: "Event poster design with modern typographic layout",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Summer Music Festival",
      description: "Vibrant poster design for annual music event",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Product Launch",
      description: "Minimalist design highlighting new product features",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      description: "Series of coordinated visuals for digital campaign",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Annual Report",
      description: "Corporate visual design with data visualization",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Sustainability Initiative",
      description: "Campaign promoting environmental awareness",
      image: "/placeholder.svg",
    }
  ];

  useEffect(() => {
    // Update locomotive scroll when component mounts
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);

  const handlePrevClick = () => {
    if (prevButtonRef.current) {
      prevButtonRef.current.click();
      setActiveIndex(prev => (prev === 0 ? posters.length - 1 : prev - 1));
    }
  };

  const handleNextClick = () => {
    if (nextButtonRef.current) {
      nextButtonRef.current.click();
      setActiveIndex(prev => (prev === posters.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section 
      id="posters" 
      ref={sectionRef} 
      className="section-padding bg-white overflow-hidden relative"
      data-scroll-section
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left side content */}
          <div className="md:col-span-4" data-scroll data-scroll-speed="0.2">
            <BlurFade direction="right" duration={0.6}>
              <h2 className="mb-4 text-3xl md:text-4xl">Graphic Design Skills</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-gray-600 mb-4">
                Showcasing visual storytelling through diverse design projects that 
                combine aesthetics with strategic communication.
              </p>
              <p className="text-gray-600 mb-6">
                Each piece demonstrates my approach to color, composition, and typography
                to create impactful visual experiences.
              </p>
            </BlurFade>
          </div>
          
          {/* Right side carousel */}
          <div className="md:col-span-8 relative" data-scroll data-scroll-speed="0.1">
            <BlurFade direction="left" duration={0.6} delay={0.2}>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                  onSelect={(api) => {
                    if (api) {
                      setActiveIndex(api.selectedScrollSnap());
                    }
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {posters.map((poster, index) => (
                      <CarouselItem 
                        key={poster.id} 
                        className="pl-4 md:basis-1/2 lg:basis-2/5 transition-all duration-300"
                      >
                        <div 
                          className={cn(
                            "group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500",
                            "h-[480px] md:h-[580px]", // Taller posters for 1080x1350 aspect ratio
                            activeIndex === index 
                              ? "scale-[1.05] z-10" 
                              : "scale-[0.85] opacity-70 blur-[1px]"
                          )}
                        >
                          <img
                            src={poster.image}
                            alt={poster.title}
                            className={cn(
                              "h-full w-full object-cover transition-transform duration-700",
                              "group-hover:scale-105"
                            )}
                          />
                          <div 
                            className={cn(
                              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              "flex flex-col justify-end p-8"
                            )}
                          >
                            <h4 className="font-medium text-white text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {poster.title}
                            </h4>
                            <p className="text-white/90 text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                              {poster.description}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious 
                    ref={prevButtonRef}
                    data-carousel-prev
                    className="hidden"
                  />
                  <CarouselNext 
                    ref={nextButtonRef}
                    data-carousel-next
                    className="hidden"
                  />
                </Carousel>
                
                {/* Custom navigation buttons at edges */}
                <button 
                  onClick={handlePrevClick}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full
                           bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl
                           flex items-center justify-center transition-all duration-200
                           hover:bg-accent hover:text-white hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} className="text-current" />
                </button>
                <button 
                  onClick={handleNextClick}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-14 h-14 rounded-full
                           bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl
                           flex items-center justify-center transition-all duration-200
                           hover:bg-accent hover:text-white hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} className="text-current" />
                </button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posters;
