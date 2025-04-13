
import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { TextCursor, Send } from "lucide-react";

interface InteractiveTerminalProps {
  className?: string;
  placeholder?: string;
  responseMessage?: string;
  messageColor?: string;
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  className = "",
  placeholder = "Type something here...",
  responseMessage = "Seems you're interested to discuss! Connect with me on LinkedIn.",
  messageColor = "#3E40EF"
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Handle typing animation for response
  useEffect(() => {
    if (!showResponse) return;
    
    if (currentCharIndex < responseMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedResponse(responseMessage.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 50); // Typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, responseMessage, showResponse]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== "") {
      setIsTyping(false);
      setShowResponse(true);
      setCurrentCharIndex(0);
      setDisplayedResponse("");
    }
  };

  return (
    <div className={`font-mono text-sm ${className}`}>
      {/* User input line */}
      <div className="flex items-center mb-2">
        <span className="text-[#27C93F] mr-2">$&gt;</span>
        {!showResponse ? (
          <div className="flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={placeholder}
              className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400"
              disabled={showResponse}
            />
            {showCursor && !showResponse && (
              <TextCursor className="h-4 w-2 ml-1 text-gray-400 animate-pulse" />
            )}
          </div>
        ) : (
          <span>{inputValue}</span>
        )}
      </div>
      
      {/* Response line */}
      {showResponse && (
        <div className="flex items-center">
          <span className="text-[#FFBD2E] mr-2">$&gt;</span>
          <span style={{ color: messageColor }}>{displayedResponse}</span>
          {currentCharIndex < responseMessage.length && showCursor && (
            <TextCursor className="h-4 w-2 ml-1 text-gray-400 animate-pulse" />
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveTerminal;
