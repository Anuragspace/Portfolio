
import React, { useState, useEffect } from "react";
import { TextCursor } from "lucide-react";

interface TerminalTextProps {
  textToType: string[];
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
  className?: string;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  textToType,
  typingSpeed = 50,
  cursorBlinkSpeed = 500,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Handle typing animation
  useEffect(() => {
    if (currentLineIndex >= textToType.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = textToType[currentLineIndex];
    
    if (currentCharIndex >= currentLine.length) {
      // Finished typing current line
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
        setDisplayedText([...displayedText, ""]);
      }, 1000); // Pause before starting next line
      
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const newDisplayedText = [...displayedText];
      newDisplayedText[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
      setDisplayedText(newDisplayedText);
      setCurrentCharIndex(currentCharIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex, textToType, displayedText, typingSpeed]);

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <div className={`font-mono ${className}`}>
      {displayedText.map((line, index) => (
        <div key={index} className="flex items-center">
          {index === 0 && (
            <span className="text-[#27C93F] mr-2">$&gt;</span>
          )}
          {index === 1 && (
            <span className="text-[#FFBD2E] mr-2">$&gt;</span>
          )}
          <span>{line}</span>
          {index === currentLineIndex && !isTypingComplete && showCursor && (
            <TextCursor className="h-4 w-2 ml-1 text-gray-400 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalText;
