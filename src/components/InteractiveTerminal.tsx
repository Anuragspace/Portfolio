
import React, { useState, useEffect, useRef, FormEvent } from "react";
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
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

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
      const userInput = inputValue;
      setHasInteracted(true);
      setIsThinking(true);
      setInputValue("");
      
      // Simulate thinking before response
      setTimeout(() => {
        setIsThinking(false);
        setIsTypingResponse(true);
        setCurrentResponseIndex(0);
      }, 1500);
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

  // Custom rectangular cursor component
  const RectCursor = ({ className = "" }) => (
    <div 
      className={`inline-block h-4 w-2 bg-[#3E40EF] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ${className}`}
    />
  );
  
  return (
    <div 
      ref={containerRef}
      onClick={handleContainerClick}
      className={`font-mono text-sm w-full cursor-text ${className}`}
    >
      <div ref={terminalContainerRef} className="space-y-3 h-auto min-h-[250px] md:min-h-[200px]">
        {/* User input area - fully integrated into the visual style */}
        <div className="flex items-center">
          <span className="text-[#27C93F] mr-2">$&gt;</span>
          <form onSubmit={handleSubmit} className="flex-1 flex items-center">
            {!isTypingResponse && !inputValue && (
              <RectCursor className="bg-[#9b87f5] mr-2" />
            )}
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-400 placeholder:opacity-60"
              placeholder={placeholderText}
              autoFocus={false}
            />
          </form>
        </div>

        {/* Response display */}
        {hasInteracted && (
          <div className="flex items-start">
            <span className="text-[#FFBD2E] mr-2">$&gt;</span>
            <motion.div 
              className="text-[#3E40EF] break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {isThinking ? (
                <span className="inline-flex items-center">
                  thinking
                  <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_infinite]">.</span>
                  <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_0.5s_infinite]">.</span>
                  <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_1s_infinite]">.</span>
                </span>
              ) : (
                <>
                  {responseText}
                  {isTypingResponse && (
                    <RectCursor className="bg-[#9b87f5] ml-0.5" />
                  )}
                </>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
