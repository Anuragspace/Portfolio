
import React from "react";
import { ArrowDownCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-2 animate-fade-in">
                <Sparkles className="inline-block mr-2 h-4 w-4" />
                UI/UX Designer & Product Designer
              </div>
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
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 w-full max-w-md aspect-[4/5] mx-auto shadow-xl">
                {/* Background wave animation */}
                <div className="absolute inset-0 wave-animation opacity-50 z-0"></div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-[#3E40EF]/30 z-10 mix-blend-overlay"></div>
                
                {/* Profile image */}
                <img 
                  src="/lovable-uploads/cc66957f-7e86-4b8a-ba75-8395bbeed544.png" 
                  alt="Designer portrait" 
                  className="w-full h-full object-cover z-20 relative"
                />
                
                {/* Username badge like in the reference */}
                <div className="absolute bottom-6 left-0 transform -translate-x-1/4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-3 animate-slide-in" style={{ animationDelay: "0.4s" }}>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3E40EF]/20">
                    <img 
                      src="/lovable-uploads/cc66957f-7e86-4b8a-ba75-8395bbeed544.png" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Designer</p>
                    <p className="text-xs text-gray-500">@portfolio</p>
                  </div>
                </div>
                
                {/* Expert badge like in the reference */}
                <div className="absolute top-6 right-0 transform translate-x-1/4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 animate-slide-in" style={{ animationDelay: "0.5s" }}>
                  <div className="w-8 h-8 rounded-full bg-[#3E40EF] flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Expert</p>
                    <p className="text-xs text-[#3E40EF]">UI/UX Design</p>
                  </div>
                </div>
              </div>
              
              {/* Background blob */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#3E40EF]/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#3E40EF]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a
            href="#about"
            className="text-[#3E40EF] hover:text-[#3E40EF]/70 animate-bounce transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
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
