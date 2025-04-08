
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "./BlurFade";
import ScrollTrigger from "./ScrollTrigger";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Poster {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Posters = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
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

  const handlePrev = () => {
    if (prevRef.current) {
      prevRef.current.click();
    }
  };

  const handleNext = () => {
    if (nextRef.current) {
      nextRef.current.click();
    }
  };

  return (
    <section id="posters" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left side content */}
          <div className="md:col-span-3">
            <ScrollTrigger>
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
            </ScrollTrigger>
          </div>
          
          {/* Right side carousel */}
          <div className="md:col-span-9">
            <ScrollTrigger>
              <BlurFade direction="left" duration={0.6} delay={0.2}>
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {posters.map((poster) => (
                        <CarouselItem key={poster.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                          <motion.div 
                            className="group relative overflow-hidden rounded-xl shadow-md h-[320px] md:h-[380px]"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <img
                              src={poster.image}
                              alt={poster.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div 
                              className={cn(
                                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                "flex flex-col justify-end p-6"
                              )}
                            >
                              <h4 className="font-medium text-white text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {poster.title}
                              </h4>
                              <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {poster.description}
                              </p>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious 
                      ref={prevRef}
                      className="hidden"
                    />
                    <CarouselNext 
                      ref={nextRef}
                      className="hidden"
                    />
                  </Carousel>
                  
                  {/* Navigation buttons positioned at edges */}
                  <button 
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} className="text-accent" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} className="text-accent" />
                  </button>
                </div>
              </BlurFade>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posters;
