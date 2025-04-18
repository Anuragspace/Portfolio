import React from "react";
import { Sparkles } from "lucide-react";
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
    <section className="min-h-[100vh] w-full flex items-center relative overflow-hidden pt-[60px] pb-8 md:pt-0 md:pb-0">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="absolute inset-x-[-42%] inset-y-[-5%] h-[100%] skew-y-12 text-[#3E40EF]/100 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center w-full">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-4 md:space-y-6 max-w-3xl">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-2 animate-fade-in mt-2 sm:mt-0">
                <Sparkles className="inline-block mr-2 h-4 w-4" />
                UI/UX Designer & Product Designer
              </div>
              <h1 className="animate-slide-in font-black text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ animationDelay: "0.1s" }}>
                Crafting Digital 
                <br />
                Experiences That 
                <br />
                <span className="text-[#3E40EF]">Inspire</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 animate-slide-in mt-4" style={{ animationDelay: "0.2s" }}>
                I transform complex problems into elegant, intuitive designs that delight users and drive business growth.
              </p>
              <div className="flex flex-row sm:gap-5 gap-3 sm:pl-2 pt-4 md:pt-6 animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex flex-row w-full max-w-[360px] sm:gap-4 gap-2 mx-auto sm:mx-0">
                  <a href="#projects" className="w-1/2">
                    <RainbowButton 
                      className="w-full h-11 sm:h-12 text-sm sm:text-base transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md px-6 rounded-xl"
                    >
                      View Projects
                    </RainbowButton>
                  </a>
                  <ShinyButton 
                    onClick={triggerConfetti} 
                    className="h-11 sm:h-12 bg-white text-black shadow w-full text-sm sm:text-base px-6 rounded-xl"
                  >
                    Click Me
                  </ShinyButton>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative z-10 mt-6 md:mt-0">
            <div className="relative mx-auto px-4 sm:px-0">
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 w-full max-w-sm aspect-[4/5] mx-auto shadow-xl">
                <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] rotate-animation opacity-10 z-0">
                  <div className="w-full h-full border-[30px] border-[#3E40EF]/20 rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-[#3E40EF]/30 z-10 mix-blend-overlay"></div>
                
                <img 
                  src="/lovable-uploads/anurag.webp" 
                  alt="Designer portrait" 
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
              
              <div className="absolute top-[40px] sm:right-[-30px] right-[0px] bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg z-30 flex items-center gap-4 animate-float" style={{ animationDelay: "0.5s" }}>
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
      </div>
      
      <SocialDock />
      
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
