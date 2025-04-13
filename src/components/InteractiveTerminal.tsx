
import React, { useState, useEffect, useRef, KeyboardEvent, FormEvent } from "react";
import { TextCursor } from "lucide-react";
import { motion } from "framer-motion";

interface InteractiveTerminalProps {
  className?: string;
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ className = "" }) => {
  const [inputValue, setInputValue] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const responseMessage = "Seems interested to discuss. Connect on LinkedIn!";
const placeholderText = "type here...";

  // Focus input on container click
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Handle user input submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() && !isTypingResponse) {
      setHasInteracted(true);
      setIsTypingResponse(true);
      setCurrentResponseIndex(0);
      setInputValue("");
    }
  };

  // Handle typing animation for response
  useEffect(() => {
    if (isTypingResponse && currentResponseIndex <= responseMessage.length) {
      const timeout = setTimeout(() => {
        setResponseText(responseMessage.substring(0, currentResponseIndex));
        setCurrentResponseIndex(currentResponseIndex + 1);
        
        // End typing animation
        if (currentResponseIndex === responseMessage.length) {
          setIsTypingResponse(false);
        }
      }, 40); // Typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [isTypingResponse, currentResponseIndex]);

  // Auto-focus the input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={handleContainerClick}
      className={`font-mono text-sm w-full transition duration-300 focus-within:shadow-md cursor-text ${className}`}
    >
      <div className="space-y-2">
        {/* User input area */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#27C93F] mr-2">$&gt;</span>
          <div className="flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-400 placeholder:opacity-60"
              placeholder={placeholderText}
            />
            {showCursor && !isTypingResponse && (
              <TextCursor className="h-4 w-2 ml-1 text-gray-400 animate-pulse" />
            )}
          </div>
        </form>

        {/* Response display */}
        {hasInteracted && (
          <div className="flex items-start">
            <span className="text-[#FFBD2E] mr-2">$&gt;</span>
            <motion.span 
              className="text-[#9b87f5] break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {responseText}
              {isTypingResponse && showCursor && (
                <TextCursor className="h-4 w-2 ml-1 text-[#9b87f5] animate-pulse inline-block" />
              )}
            </motion.span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
