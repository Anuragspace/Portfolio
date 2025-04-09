
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
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  // Define longestWord to set fixed width
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-1 relative" style={{ minWidth: `${longestWord.length}ch` }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn(className, "absolute left-0")}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">{longestWord}</span>
    </div>
  );
}
