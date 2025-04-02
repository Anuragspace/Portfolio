
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
      title: "Workshop Series",
      description: "Educational poster series with consistent theme",
      image: "/placeholder.svg",
    },
    {
      id: 9,
      title: "Digital Art Exhibition",
      description: "Promotional material for virtual gallery",
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
    <section id="posters" className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">Posters Showcase</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -mt-6 z-10 pointer-events-none">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Horizontal scroll container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 horizontal-scroll gradient-blur"
          >
            {posters.map((poster) => (
              <div 
                key={poster.id} 
                className="min-w-[300px] md:min-w-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
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
