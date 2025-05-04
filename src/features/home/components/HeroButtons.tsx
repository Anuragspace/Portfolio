
import React, { useState } from "react";
import { RainbowButton, ShinyButton } from "@/features/shared/components/magic-ui";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

interface HeroButtonsProps {
  triggerConfetti: () => void;
}

export const HeroButtons = ({ triggerConfetti }: HeroButtonsProps) => {
  const animatedWords = "Love❤️ this? Explore my portfolio".split(" ");
  const [showAnimatedText, setShowAnimatedText] = useState(false);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAnimatedText && currentWordIdx < animatedWords.length) {
      timer = setTimeout(() => {
        setCurrentWordIdx((idx) => idx + 1);
      }, 700); // Adjust speed here
    } else if (showAnimatedText && currentWordIdx === animatedWords.length) {
      // After last word, revert to "Click Me" after a short delay
      timer = setTimeout(() => {
        setShowAnimatedText(false);
        setCurrentWordIdx(0);
      }, 10);
    }
    return () => clearTimeout(timer);
  }, [showAnimatedText, currentWordIdx, animatedWords.length]);

  const handleButtonClick = () => {
    triggerConfetti();
    setShowAnimatedText(true);
    setCurrentWordIdx(0);
  };

  return (
    <div className="flex flex-row w-full max-w-[480px] sm:gap-4 gap-2 mx-auto sm:mx-0">
      <a href="#projects" className="w-[50%] sm:w-[40%]">
        <RainbowButton 
          className="w-full h-11 sm:h-12 text-sm sm:text-base transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md px-8 rounded-xl whitespace-nowrap"
        >
          View Projects
        </RainbowButton>
      </a>
      <ShinyButton 
        onClick={handleButtonClick}
        className="h-11 sm:h-12 bg-white text-black shadow w-[50%] sm:w-[40%] text-sm sm:text-base px-4 rounded-xl whitespace-nowrap"
      >
        <AnimatePresence mode="wait" initial={false}>
          {!showAnimatedText ? (
            <motion.span
              key="click-me"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              Click Me
            </motion.span>
          ) : (
            <motion.span
              key={animatedWords[currentWordIdx]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {animatedWords[currentWordIdx]}
            </motion.span>
          )}
        </AnimatePresence>
      </ShinyButton>
    </div>
  );
};
