
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useContext, createContext } from "react";
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
    offset: ["start 0.9", "start 0.4"], // Adjusted for smoother reveal with a longer scroll distance
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <RevealContext.Provider value={{ lineIndex, totalLines }}>
      <div ref={targetRef} className={cn("relative z-0 w-full", className)}>
        <div className="w-full flex flex-wrap bg-transparent">
          {words.map((word, i) => {
            // Calculate start and end points for each word based on total words
            // Overlap ranges slightly for smoother word-to-word transitions
            const start = i / (words.length * 1.2);
            const end = start + 1.2 / words.length;
            
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
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
  // Smoother transitions with better contrast
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  const y = useTransform(progress, range, [5, 0]); // More subtle upward movement

  return (
    <span className="relative mx-[1px] md:mx-[3px] inline-flex">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity, color, y }}
        className="font-semibold whitespace-pre"
      >
        {children}{" "}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export default TextReveal;
