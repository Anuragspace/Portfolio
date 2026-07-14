
// Move from src/features/shared/components/RainbowButton.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-fit",
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,#9b87f5,hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),#9b87f5)] before:[filter:blur(calc(0.8*1rem))]",
        "bg-[linear-gradient(#3E40EF,#3E40EF),linear-gradient(#3E40EF_50%,rgba(62,64,239,0.6)_80%,rgba(62,64,239,0)),linear-gradient(90deg,#9b87f5,hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),#9b87f5)]",
        "dark:bg-[linear-gradient(#3E40EF,#3E40EF),linear-gradient(#3E40EF_50%,rgba(62,64,239,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#9b87f5,hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),#9b87f5)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";
