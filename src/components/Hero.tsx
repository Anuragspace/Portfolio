
import React from "react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { SocialDock } from "@/components/SocialDock";
import confetti from "canvas-confetti";
import { HeroContent } from "@/features/home/components/HeroContent";
import { HeroImage } from "@/features/home/components/HeroImage";

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
          <HeroContent triggerConfetti={triggerConfetti} />
          <HeroImage />
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
