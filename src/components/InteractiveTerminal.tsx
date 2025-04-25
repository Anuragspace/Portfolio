import React, { useState, useEffect, useRef, FormEvent } from "react";
import { motion } from "framer-motion";

interface InteractiveTerminalProps {
  className?: string;
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ className = "" }) => {
  // Combined state for terminal status
  const [terminalState, setTerminalState] = useState({
    isThinking: false,
    isTypingResponse: false,
    hasInteracted: false,
    currentResponseIndex: 0
  });

  // Input and response states
  const [inputValue, setInputValue] = useState("");
  const [responseText, setResponseText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // Constants
  const RESPONSES = [
    "Interested in the conversation? Let's connect on linkedin!🚀 ",
    <a 
      key="linkedin" 
      href="https://www.linkedin.com/in/adarshanurag/" 
      className="underline hover:text-blue-600 transition-colors inline-flex items-center"  
      target="_blank"  
      rel="noopener noreferrer"
    >
      <svg
        className="w-4 h-4 translate-y-[2px]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
           
      </svg>
    </a>
  ];
  const TYPING_SPEED = 40;
  const THINKING_DELAY = 1500;

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Handle typing animation
  useEffect(() => {
    const { isTypingResponse, currentResponseIndex } = terminalState;
    if (!isTypingResponse) return;

    const fullMessage = RESPONSES.map(r => typeof r === 'string' ? r : r.props.children).join('');
    
    if (currentResponseIndex <= fullMessage.length) {
      const timeout = setTimeout(() => {
        setResponseText(fullMessage.substring(0, currentResponseIndex));
        setTerminalState(prev => ({
          ...prev,
          currentResponseIndex: prev.currentResponseIndex + 1,
          isTypingResponse: currentResponseIndex < fullMessage.length
        }));
      }, TYPING_SPEED);
      
      return () => clearTimeout(timeout);
    }
  }, [terminalState.isTypingResponse, terminalState.currentResponseIndex]);

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || terminalState.isTypingResponse) return;

    setTerminalState(prev => ({
      ...prev,
      hasInteracted: true,
      isThinking: true
    }));

    setTimeout(() => {
      setTerminalState(prev => ({
        ...prev,
        isThinking: false,
        isTypingResponse: true,
        currentResponseIndex: 0
      }));
    }, THINKING_DELAY);
  };

  // Custom cursor component
  const RectCursor = ({ className = "" }) => (
    <div 
      className={`inline-block h-4 w-2 bg-[#3E40EF] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ${className}`}
    />
  );

  return (
    <div 
      onClick={() => inputRef.current?.focus()}
      className={`font-mono text-sm w-full cursor-text ${className}`}
    >
      <div className="h-[250px] overflow-y-auto relative">
        <div className="absolute inset-0">
          {/* Input area */}
          <div className="flex items-center">
            <span className="text-[#27C93F] mr-2 whitespace-nowrap">$&gt;</span>
            <form onSubmit={handleSubmit} className="flex-1 flex items-center relative">
              <div className="flex-1 flex items-center overflow-x-hidden">
                <span className="text-gray-800 whitespace-pre">{inputValue}</span>
                {!terminalState.isTypingResponse && !terminalState.isThinking && (
                  <RectCursor className="bg-[#3E40EF] shrink-0" />
                )}
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="absolute opacity-0 w-full"
                placeholder="type and hit enter ..."
                autoFocus={false}
                disabled={terminalState.isTypingResponse || terminalState.isThinking}
              />
            </form>
          </div>

          {/* Response area */}
          {terminalState.hasInteracted && (
            <div className="flex items-start mt-3">
              <span className="text-[#FFBD2E] mr-2 whitespace-nowrap">$&gt;</span>
              <motion.div 
                className="text-[#3E40EF] break-words flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {terminalState.isThinking ? (
                  <span className="inline-flex items-center">
                    thinking
                    <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_infinite]">.</span>
                    <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_0.5s_infinite]">.</span>
                    <span className="inline-flex ml-0.5 animate-[pulse_1.5s_ease-in-out_1s_infinite]">.</span>
                  </span>
                ) : (
                  <>
                    {RESPONSES.map((response, index) => 
                      typeof response === 'string' ? 
                        response.substring(0, Math.max(0, terminalState.currentResponseIndex - 
                          RESPONSES.slice(0, index).reduce((acc, r) => 
                            acc + (typeof r === 'string' ? r.length : r.props.children.length), 0
                          ))) : 
                        terminalState.currentResponseIndex > 
                          RESPONSES.slice(0, index).reduce((acc, r) => 
                            acc + (typeof r === 'string' ? r.length : r.props.children.length), 0
                          ) && response
                    )}
                    {terminalState.isTypingResponse && (
                      <RectCursor className="bg-[#3E40EF] ml-0.5 shrink-0" />
                    )}
                  </>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
