
"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockProps {
  direction?: "left" | "right" | "middle";
  children: React.ReactNode;
  className?: string;
}

interface DockIconProps {
  children: React.ReactNode;
  className?: string;
}

function useDockHoverAnimation(mouseX: MotionValue<number>, ref: React.RefObject<HTMLDivElement>) {
  const distance = useMotionValue(0);
  const size = useMotionValue(1);

  React.useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementX = rect.left + rect.width / 2;
      const distanceValue = Math.abs(elementX - mouseX.get());
      
      // We set the distance
      distance.set(distanceValue);
      
      // We set the size based on the distance
      const sizeValue = Math.max(1, 1.3 - distanceValue / 200);
      size.set(sizeValue);
    };

    const unsubscribeX = mouseX.on("change", handleMouseMove);

    return () => {
      unsubscribeX();
    };
  }, [mouseX, ref, distance, size]);

  return { size };
}

const DockContext = React.createContext<{ mouseX: MotionValue<number> } | null>(null);

export function Dock({ direction = "middle", children, className }: DockProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  
  const justifyContent = direction === "left" 
    ? "justify-start" 
    : direction === "right" 
      ? "justify-end" 
      : "justify-center";

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(e.clientX);
  }

  function handleMouseLeave() {
    mouseX.set(0);
  }

  return (
    <DockContext.Provider value={{ mouseX }}>
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex h-12 items-center gap-1 rounded-3xl bg-white backdrop-blur-sm p-2 border border-gray-100 shadow-md z-50 hover:shadow-lg transition-shadow",
          justifyContent,
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockIcon({ children, className }: DockIconProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const context = React.useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock");
  }

  const { mouseX } = context;
  const { size } = useDockHoverAnimation(mouseX, ref);
  const height = useSpring(size, { stiffness: 300, damping: 20 });
  const y = useTransform(height, [1, 1.3], [0, -8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale: height }}
      className={cn("flex items-center justify-center px-2", className)}
    >
      {children}
    </motion.div>
  );
}
