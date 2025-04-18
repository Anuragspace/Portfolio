
import React from "react";
import { RainbowButton, ShinyButton } from "@/features/shared/components/magic-ui";
import confetti from "canvas-confetti";

interface HeroButtonsProps {
  triggerConfetti: () => void;
}

export const HeroButtons = ({ triggerConfetti }: HeroButtonsProps) => {
  return (
    <div className="flex flex-row w-full max-w-[480px] sm:gap-4 gap-2 mx-auto sm:mx-0">
      <a href="#projects" className="w-[60%]">
        <RainbowButton 
          className="w-full h-11 sm:h-12 text-sm sm:text-base transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md px-8 rounded-xl whitespace-nowrap"
        >
          View Projects
        </RainbowButton>
      </a>
      <ShinyButton 
        onClick={triggerConfetti} 
        className="h-11 sm:h-12 bg-white text-black shadow w-[40%] text-sm sm:text-base px-4 rounded-xl whitespace-nowrap"
      >
        Click Me
      </ShinyButton>
    </div>
  );
};
