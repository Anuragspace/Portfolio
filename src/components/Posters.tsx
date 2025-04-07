
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "./BlurFade";
import ScrollTrigger from "./ScrollTrigger";
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
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  
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

  const handlePrevClick = () => {
    if (prevButtonRef.current) {
      prevButtonRef.current.click();
    }
  };

  const handleNextClick = () => {
    if (nextButtonRef.current) {
      nextButtonRef.current.click();
    }
  };

  return (
    <section id="posters" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left side content */}
          <div className="md:col-span-4">
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
                <div className="hidden md:flex space-x-3 mt-8">
                  <button 
                    onClick={handlePrevClick}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-colors hover:bg-gray-50"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} className="text-accent" />
                  </button>
                  <button 
                    onClick={handleNextClick}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-colors hover:bg-gray-50"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} className="text-accent" />
                  </button>
                </div>
              </BlurFade>
            </ScrollTrigger>
          </div>
          
          {/* Right side carousel */}
          <div className="md:col-span-8">
            <ScrollTrigger>
              <BlurFade direction="left" duration={0.6} delay={0.2}>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {posters.map((poster) => (
                      <CarouselItem key={poster.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg h-[280px] md:h-[340px]">
                          <img
                            src={poster.image}
                            alt={poster.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div 
                            className={cn(
                              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              "flex flex-col justify-end p-6"
                            )}
                          >
                            <h4 className="font-medium text-white text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              {poster.title}
                            </h4>
                            <p className="text-white/90 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
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
              </BlurFade>
            </ScrollTrigger>
            
            {/* Mobile navigation buttons */}
            <div className="flex md:hidden justify-center space-x-3 mt-6">
              <button 
                onClick={handlePrevClick}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-colors hover:bg-gray-50"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} className="text-accent" />
              </button>
              <button 
                onClick={handleNextClick}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-colors hover:bg-gray-50"
                aria-label="Next slide"
              >
                <ChevronRight size={18} className="text-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posters;
