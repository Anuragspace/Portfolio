
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Poster {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Posters = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
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
    },
    {
      id: 7,
      title: "Brand Identity",
      description: "Visual system for emerging tech startup",
      image: "/placeholder.svg",
    },
    {
      id: 8,
      title: "Digital Art Exhibition",
      description: "Promotional material for virtual gallery",
      image: "/placeholder.svg",
    },
    {
      id: 9,
      title: "Workshop Series",
      description: "Educational poster series with consistent theme",
      image: "/placeholder.svg",
    },
    {
      id: 10,
      title: "App Launch",
      description: "Visual assets for mobile application release",
      image: "/placeholder.svg",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="posters" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">Posters Showcase</h2>
          <div className="w-24 h-1 bg-accent"></div>
          <p className="mt-4 text-gray-600 max-w-2xl">A collection of my best design work across various mediums and clients</p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-4 right-4 -mt-6 z-10 pointer-events-none">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-accent" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-accent" />
            </button>
          </div>
          
          {/* Horizontal scroll container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 horizontal-scroll gradient-blur snap-x snap-mandatory"
            style={{scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem'}}
          >
            {posters.map((poster) => (
              <div 
                key={poster.id} 
                className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-gray-100 card-hover snap-start"
              >
                <div className="aspect-[3/4] overflow-hidden relative bg-white">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="font-bold text-lg">{poster.title}</h4>
                      <p className="text-white/80 text-sm">{poster.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-1">{poster.title}</h3>
                  <p className="text-gray-600 text-sm">{poster.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posters;
