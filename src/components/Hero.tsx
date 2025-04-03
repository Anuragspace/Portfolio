
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-6 max-w-3xl">
              <Badge className="bg-[#3E40EF]/10 text-[#3E40EF] hover:bg-[#3E40EF]/20 font-medium px-4 py-1.5 text-sm border-0 animate-fade-in">
                UI/UX Designer & Product Designer
              </Badge>
              
              <h1 className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
                Crafting Digital Experiences That <span className="text-[#3E40EF]">Inspire</span>
              </h1>
              
              <p className="text-lg text-gray-600 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                I transform complex problems into elegant, intuitive designs that delight users and drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <Button className="bg-[#3E40EF] hover:bg-[#3E40EF]/90">View Projects</Button>
                <Button variant="outline" className="border-[#3E40EF] text-[#3E40EF] hover:bg-[#3E40EF]/10">Contact Me</Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative z-10">
            <div className="relative mx-auto">
              {/* Rectangular image container with rounded corners */}
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-400 to-[#3E40EF] w-full max-w-[380px] aspect-[4/5] mx-auto shadow-xl">
                {/* Rotating background elements */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 opacity-30 animate-spin-slow">
                    <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-white/30 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-white/30 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border border-white/20 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                
                {/* Wave animation in background */}
                <div className="absolute inset-0 wave-animation opacity-40 z-0"></div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-[#3E40EF]/20 z-10 mix-blend-overlay"></div>
                
                {/* Profile image */}
                <img 
                  src="/lovable-uploads/d5a91165-0502-4c76-a278-ac4e9bf09ad2.png" 
                  alt="Designer portrait" 
                  className="w-full h-full object-cover z-20 relative"
                />
                
                {/* Username badge - partially outside the image container */}
                <div className="absolute bottom-6 -left-5 transform bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-3 animate-float" style={{ animationDelay: "0.4s" }}>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3E40EF]/20">
                    <img 
                      src="/lovable-uploads/d5a91165-0502-4c76-a278-ac4e9bf09ad2.png" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Designer</p>
                    <p className="text-xs text-gray-500">@portfolio</p>
                  </div>
                </div>
                
                {/* Expert badge - partially outside the image container */}
                <div className="absolute top-6 -right-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 animate-float" style={{ animationDelay: "0.5s", animationDuration: "8s" }}>
                  <div className="w-8 h-8 rounded-full bg-[#3E40EF] flex items-center justify-center animate-pulse">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Expert</p>
                    <p className="text-xs text-[#3E40EF]">UI/UX Design</p>
                  </div>
                </div>
              </div>
              
              {/* Background effect blobs */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#3E40EF]/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#3E40EF]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Modern thin arrow down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a
            href="#about"
            className="text-gray-600 hover:text-[#3E40EF] transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3E40EF]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3E40EF]/5 rounded-full blur-3xl"></div>
      
      {/* Interactive particles */}
      <div className="particles-container absolute inset-0 pointer-events-none">
        <div className="particle animate-float" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle animate-float" style={{ top: '25%', left: '80%', animationDelay: '0.5s' }}></div>
        <div className="particle animate-float" style={{ top: '60%', left: '5%', animationDelay: '1s' }}></div>
        <div className="particle animate-float" style={{ top: '70%', left: '90%', animationDelay: '1.5s' }}></div>
        <div className="particle animate-float" style={{ top: '40%', left: '70%', animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute inset-0 dot-pattern opacity-30 z-0"></div>
    </section>
  );
};

export default Hero;
