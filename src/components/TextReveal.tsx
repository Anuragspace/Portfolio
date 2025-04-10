"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  linesPerView?: number; // Number of lines to show per view (for mobile)
}

export const TextReveal: FC<TextRevealProps> = ({ 
  children, 
  className,
  linesPerView = 2 // Default to 2 lines per view for mobile
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    if (typeof children !== "string") return;
    
    if (isMobile) {
      const words = children.split(" ");
      const mobileLines: string[] = [];
      let currentLine = "";
      
      words.forEach(word => {
        if (currentLine.split(" ").length >= 3 && currentLine.length > 0) {
          mobileLines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine += (currentLine ? " " : "") + word;
        }
      });
      
      if (currentLine) {
        mobileLines.push(currentLine.trim());
      }
      
      setLines(mobileLines);
    } else {
      setLines([children]);
    }
  }, [children, isMobile]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.5"], // More responsive animation
  });

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="mx-auto flex flex-col items-start bg-transparent">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden my-1 relative">
            <LineReveal 
              line={line} 
              scrollYProgress={scrollYProgress} 
              lineIndex={lineIndex} 
              totalLines={lines.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface LineRevealProps {
  line: string;
  scrollYProgress: MotionValue<number>;
  lineIndex: number;
  totalLines: number;
}

const LineReveal: FC<LineRevealProps> = ({ 
  line, 
  scrollYProgress, 
  lineIndex, 
  totalLines 
}) => {
  const words = line.split(" ");
  
  const lineStart = lineIndex / (totalLines * 1.5);
  const lineEnd = lineStart + (1 / (totalLines * 1.5));
  
  const lineOpacity = useTransform(
    scrollYProgress, 
    [lineStart, lineEnd], 
    [0, 1]
  );
  
  const lineX = useTransform(
    scrollYProgress, 
    [lineStart, lineEnd], 
    [20, 0]
  );

  return (
    <motion.div 
      style={{ 
        opacity: lineOpacity,
        x: lineX,
      }}
      className="flex flex-wrap text-2xl sm:text-3xl font-bold"
    >
      {words.map((word, wordIndex) => {
        const wordStart = lineStart + (wordIndex / (words.length * 5));
        const wordEnd = wordStart + (1 / (words.length * 3));
        
        return (
          <Word 
            key={wordIndex} 
            progress={scrollYProgress} 
            range={[wordStart, wordEnd]}
          >
            {word}
          </Word>
        );
      })}
    </motion.div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]); // Fade-in effect
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]); // Light gray to black

  return (
    <span className="relative mx-1">
      <motion.span
        style={{ opacity, color }}
        className="font-semibold transition-colors duration-500"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
