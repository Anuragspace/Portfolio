
import React from "react";
import { Sparkles } from "lucide-react";

export const HeroImage = () => {
  return (
    <div className="lg:col-span-5 relative z-10 mt-6 md:mt-0">
      <div className="relative mx-auto px-4 sm:px-0">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 w-full max-w-sm aspect-[4/5] mx-auto shadow-xl">
          <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] rotate-animation opacity-10 z-0">
            <div className="w-full h-full border-[30px] border-[#3E40EF]/20 rounded-full"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-[#3E40EF]/30 z-10 mix-blend-overlay"></div>
          
          <img 
            src="\images\anurag.webp" 
            alt="Anurag Adarsh Potrailt image" 
            fetchPriority="high"
            className="w-full h-full object-cover z-20 relative hero-image"
          />
        </div>
        
        <div className="absolute bottom-[30px] sm:left-[-60px] left-[0px] bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg z-30 flex items-center gap-4 animate-float" style={{ animationDelay: "0.4s" }}>
          <span className="text-3xl" role="img" aria-label="waving hand">👋</span>
          <div className="text-left">
            <p className="font-bold text-gray-800">Anurag Adarsh</p>
            <p className="text-xs text-gray-500">Engineering Student</p>
          </div>
        </div>
        
        <div className="absolute top-[25px] lg:top-[40px] sm:right-[-30px] right-[0px] bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg z-30 flex items-center gap-4 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-10 h-10 rounded-full bg-[#3E40EF] flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-left">
            <p className="font-bold text-gray-800">UI/UX Designer</p>
            <p className="text-xs text-[#3E40EF]">Intuitive Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};
