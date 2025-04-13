"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useContext, createContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Create a context to track line index
interface RevealContextType {
  lineIndex: number;
  totalLines: number;
}

const RevealContext = createContext<RevealContextType>({ lineIndex: 0, totalLines: 1 });

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  lineIndex?: number;
  totalLines?: number;
}

export const TextReveal: FC<TextRevealProps> = memo(({ 
  children, 
  className,
  lineIndex = 0,
  totalLines = 1
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.4"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  // Calculate optimal number of words per line based on screen size
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setScreenWidth(width);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  // Calculate optimal character count per line for better text wrapping
  const getOptimalWordsPerRow = () => {
    if (screenWidth < 380) return 3;
    if (screenWidth < 480) return 4;
    if (screenWidth < 640) return 5;
    return 8;
  };

  // Group words for more controlled line breaks
  const wordGroups = [];
  const optimalWordsPerRow = getOptimalWordsPerRow();
  
  for (let i = 0; i < words.length; i += optimalWordsPerRow) {
    wordGroups.push(words.slice(i, i + optimalWordsPerRow));
  }

  return (
    <RevealContext.Provider value={{ lineIndex, totalLines }}>
      <div ref={targetRef} className={cn("relative z-0 w-full", className)}>
        <div className="w-full flex flex-col bg-transparent">
          {wordGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-wrap text-2xl md:text-3xl font-bold text-gray-400 w-full gap-x-[3px] md:gap-x-1 mb-1 md:mb-0">
              {group.map((word, i) => {
                // Calculate global word index
                const wordIndex = groupIndex * optimalWordsPerRow + i;
                const wordCount = words.length;
                
                // Adjust overlap for smoother animation between lines
                const startBase = lineIndex / totalLines; 
                const endBase = (lineIndex + 1) / totalLines;
                
                // Improved timing calculation for better text flow
                const segmentSize = (endBase - startBase) / (wordCount + 1);
                
                // Refined factors for more continuous flow on all devices
                const responsiveFactor = isMobile ? 0.8 : 0.6;
                const completionFactor = isMobile ? 1.2 : 1.1;
                
                // More continuous reveal with better rhythm
                const start = startBase + (wordIndex * segmentSize * responsiveFactor);
                const end = start + segmentSize * completionFactor;
              
              return (
                  <Word key={`${groupIndex}-${i}`} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </RevealContext.Provider>
  );
});

TextReveal.displayName = "TextReveal";

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = memo(({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);

  return (
    <span className="relative mx-[1px] md:mx-1 inline-flex">
      <motion.span
        style={{ opacity, color }}
        className="font-semibold whitespace-pre"
      >
        {children}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export default TextReveal;
