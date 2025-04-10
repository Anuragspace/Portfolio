import React from "react";
import { Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RainbowButton } from "@/components/RainbowButton";
import { ShinyButton } from "@/components/ShinyButton";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { SocialDock } from "@/components/SocialDock";
import confetti from "canvas-confetti";

const Hero = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF']
    });
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Add the AnimatedGridPattern with mask and skew effect */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="absolute inset-x-[-42%] inset-y-[-5%] h-[100%] skew-y-12 text-[#3E40EF]/100 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />




      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-2 animate-fade-in">
                <Sparkles className="inline-block mr-2 h-4 w-4" />
                UI/UX Designer & Product Designer
              </div>
              <h1 className="animate-slide-in font-black"  style={{ animationDelay: "0.1s" }}>
                Crafting Digital Experiences That <span className="text-[#3E40EF]">Inspire</span>
              </h1>
              <p className="text-lg text-gray-600 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                I transform complex problems into elegant, intuitive designs that delight users and drive business growth.
              </p>
              <div className="flex flex-row gap-5 sm:pl-2 pt-4 animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <a href="#projects" className="flex-1 max-w-[180px]">
                  <RainbowButton className="w-full">
                    View Projects
                  </RainbowButton>
                </a>
                <ShinyButton 
                  onClick={triggerConfetti} 
                  className="h-11 bg-white text-black shadow w-[180px]"
                >
                  Click Me
                </ShinyButton>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative z-10">
            <div className="relative mx-auto">
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 w-full max-w-sm aspect-[4/5] mx-auto shadow-xl">
                <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] rotate-animation opacity-10 z-0">
                  <div className="w-full h-full border-[30px] border-[#3E40EF]/20 rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-[#3E40EF]/30 z-10 mix-blend-overlay"></div>
                
                <img 
                  src="/lovable-uploads/anurag.webp" 
                  alt="Designer portrait" 
                  rel="preload"
                  className="w-full h-full object-cover z-20 relative"
                />
              </div>
              
              <div className="absolute bottom-[30px] left-[-60px] bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg z-30 flex items-center gap-4 animate-float" style={{ animationDelay: "0.4s" }}>
                  <span className="text-3xl" role="img" aria-label="waving hand">👋</span>
                
                <div className="text-left">
                  <p className="font-bold text-gray-800">Anurag Adarsh</p>
                  <p className="text-xs text-gray-500">Engineering Student</p>
                </div>
              </div>
              
              <div className="absolute top-[40px] right-[-30px] bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg z-30 flex items-center gap-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-10 h-10 rounded-full bg-[#3E40EF] flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Expert</p>
                  <p className="text-xs text-[#3E40EF]">UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-50">
          <SocialDock />
        </div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3E40EF]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3E40EF]/5 rounded-full blur-3xl"></div>
      
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
