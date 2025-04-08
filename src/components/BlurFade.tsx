
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const { scroll } = useLocomotiveScroll();
  
  // Combine standard inView with locomotive scroll visibility
  const isInView = (!inView || inViewResult || isVisible);
  
  useEffect(() => {
    // If the Locomotive Scroll instance exists
    if (scroll && ref.current) {
      // Set up scroll trigger for the element
      scroll.on("call", (value: string, way: string, obj: { id: string }) => {
        if (value === "inView" && obj.id === (ref.current as any)?.id) {
          if (way === "enter") {
            setIsVisible(true);
          }
        }
      });
      
      // Generate a unique ID for this element
      const uniqueId = `blur-fade-${Math.random().toString(36).substr(2, 9)}`;
      (ref.current as any).id = uniqueId;
      
      // Add data attributes for locomotive scroll
      (ref.current as any).setAttribute("data-scroll", "");
      (ref.current as any).setAttribute("data-scroll-id", uniqueId);
      (ref.current as any).setAttribute("data-scroll-call", "inView");
      (ref.current as any).setAttribute("data-scroll-offset", "15%");
      
      // Update Locomotive Scroll
      scroll.update();
    }
  }, [scroll]);
  
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };
  
  const combinedVariants = variant || defaultVariants;
  
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
