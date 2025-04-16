
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface TextRevealResponsiveProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  lineIndex?: number;
  totalLines?: number;
}

// Desktop-optimized component with improved, consistent line breaks
export const DesktopTextReveal: FC<TextRevealResponsiveProps> = memo(({ 
  children, 
  className,
  lineIndex = 0,
  totalLines = 1
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"], // Adjusted for smoother, longer reveal
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full hidden md:block", className)}>
      <div className="w-full flex flex-wrap bg-transparent px-0">
        {words.map((word, i) => {
          const startBase = lineIndex / totalLines; 
          const endBase = (lineIndex + 1) / totalLines;
          const segmentSize = (endBase - startBase) / words.length;
          
          // Adjusted timing for smoother, more natural reveal with overlap
          const start = Math.max(0, startBase + (i * segmentSize * 0.8)); 
          const end = Math.min(1, start + (segmentSize * 1.5));  
          
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
});

DesktopTextReveal.displayName = "DesktopTextReveal";

// Mobile-optimized component with improved text wrapping
export const MobileTextReveal: FC<TextRevealResponsiveProps> = memo(({ 
  children, 
  className,
  lineIndex = 0,
  totalLines = 1
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"], // Adjusted to trigger earlier on mobile
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");
  
  // Calculate optimal number of words per line for mobile
  const [screenWidth, setScreenWidth] = useState(0);
  
  useEffect(() => {
    const checkResponsive = () => {
      setScreenWidth(window.innerWidth);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  // Improve word grouping for mobile - create more natural line breaks
  const getOptimalWordsPerRow = () => {
    if (screenWidth < 320) return 3;
    if (screenWidth < 375) return 4;
    if (screenWidth < 400) return 5;
    return 6;
  };

  // Group words for more natural line breaks on mobile
  const wordGroups = [];
  const optimalWordsPerRow = getOptimalWordsPerRow();
  
  for (let i = 0; i < words.length; i += optimalWordsPerRow) {
    wordGroups.push(words.slice(i, i + optimalWordsPerRow));
  }

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full block md:hidden", className)}>
      <div className="w-full flex flex-col bg-transparent px-0">
        {wordGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-wrap text-xl font-bold text-gray-400 w-full gap-x-[2px] mb-2">
            {group.map((word, i) => {
              // Calculate global word index
              const wordIndex = groupIndex * optimalWordsPerRow + i;
              const wordCount = words.length;
              
              // Adjusted timing for more natural reveal
              const startBase = lineIndex / totalLines; 
              const endBase = (lineIndex + 1) / totalLines;
              const segmentSize = (endBase - startBase) / wordCount;
              
              // More natural animation timing with overlap
              const start = Math.max(0, startBase + (wordIndex * segmentSize * 0.7));
              const end = Math.min(1, start + (segmentSize * 1.5));
            
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
  );
});

MobileTextReveal.displayName = "MobileTextReveal";

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = memo(({ children, progress, range }) => {
  // Smoother transitions with better contrast
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  const y = useTransform(progress, range, [5, 0]); // Subtle upward movement

  return (
    <span className="relative mx-[2px] md:mx-[3px] inline-flex">
      <motion.span
        style={{ opacity, color, y }}
        className="font-manrope font-semibold whitespace-pre text-lg md:text-xl lg:text-2xl"
      >
        {children}{" "}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export { Word };
