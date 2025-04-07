
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  
  // Find the longest word to set fixed width
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-1 relative" style={{ minWidth: `${longestWord.length}ch` }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className, "absolute left-0")}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible text to maintain consistent width */}
      <span className="opacity-0">{longestWord}</span>
    </div>
  );
}
