
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    offset: ["start 0.75", "start 0.35"], // Adjusted for more visible area
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full hidden md:block", className)}>
      <div className="w-full flex flex-wrap bg-transparent">
        {words.map((word, i) => {
          const startBase = lineIndex / totalLines; 
          const endBase = (lineIndex + 1) / totalLines;
          const segmentSize = (endBase - startBase) / (words.length + 1);
          
          // Much slower animation timing for a more deliberate reveal
          // Significantly reduced factors for slower, more controlled animation
          const start = startBase + (i * segmentSize * 0.02); // Reduced from 0.04 to 0.02
          const end = start + (segmentSize * 0.08);  // Reduced from 0.15 to 0.08
          
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
    offset: ["start 0.8", "start 0.4"], // Adjusted to trigger earlier on mobile
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

  // Improve word grouping for mobile - create more natural sentence breaks
  const getOptimalWordsPerRow = () => {
    if (screenWidth < 320) return 3;
    if (screenWidth < 375) return 3;
    if (screenWidth < 400) return 4;
    return 5;
  };

  // Group words for more natural line breaks on mobile
  const wordGroups = [];
  const optimalWordsPerRow = getOptimalWordsPerRow();
  
  for (let i = 0; i < words.length; i += optimalWordsPerRow) {
    wordGroups.push(words.slice(i, i + optimalWordsPerRow));
  }

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full block md:hidden", className)}>
      <div className="w-full flex flex-col bg-transparent">
        {wordGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-wrap text-[18px] font-bold text-gray-400 w-full gap-x-[3px] mb-1 md:mb-0.5">
            {group.map((word, i) => {
              // Calculate global word index
              const wordIndex = groupIndex * optimalWordsPerRow + i;
              const wordCount = words.length;
              
              // Even slower animation timing for mobile
              const startBase = lineIndex / totalLines; 
              const endBase = (lineIndex + 1) / totalLines;
              const segmentSize = (endBase - startBase) / (wordCount + 1);
              
              // Much slower animation timing for mobile with more natural spacing
              const start = startBase + (wordIndex * segmentSize * 0.02); // Reduced from 0.04 to 0.02
              const end = start + (segmentSize * 0.08);  // Reduced from 0.15 to 0.08
            
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
  // Slowed down transition with smoother effect
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  const y = useTransform(progress, range, [6, 0]); // Add subtle upward movement

  return (
    <span className="relative mx-[1px] md:mx-1 inline-flex">
      <motion.span
        style={{ opacity, color, y }}
        className="font-manrope font-semibold whitespace-pre text-[20px] md:text-[26px]"
      >
        {children}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export { Word };
