import React, { useEffect, useRef, useState } from "react";
import { PiCursorFill } from "react-icons/pi";

const CustomCursor: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => {
      setShowCursor(window.innerWidth > 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!showCursor) return;
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    >
      <PiCursorFill
        size={28}
        style={{
          color: "#3E40EF", // violet
          stroke: "#fff",
          strokeWidth: 5,
        }}
      />
    </div>
  );
};

export default CustomCursor;