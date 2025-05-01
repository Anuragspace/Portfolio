
import React from "react";
import InteractiveTerminal from "../InteractiveTerminal";

const TerminalContent = () => {
  return (
    <div className="h-[660px] lg:h-[450px] bg-[#ffffff] rounded-lg border border-gray-200 p-6 relative shadow-sm overflow-hidden">
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#121212] rounded-t-lg border-b border-gray-350 flex items-center px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
          about.txt
        </div>
      </div>

      {/* Terminal Content with Blinking Cursor and Typing Effect */}
      <div className="mt-6">
        <p className="text-[#424242] font-mono text-base mb-2">
          {'<hello world />'}
        </p>
        
        <div className="space-y-6 text-[#7e7e7e] font-display text-base leading-relaxed pr-2">
          <p className="text-gray-700">
          My design approach transforms complexity into intuitive digital experiences that users genuinely connect with. Through methodical research and creative problem-solving, I uncover core needs and translate them into seamless interfaces. Each design decision balances aesthetic appeal with functional purpose, creating solutions that feel natural and effortless.         
          </p>
          <p className="text-gray-700">
          At Imaginum, I've elevated products by prioritizing user engagement across touchpoints. My CSED work created design systems that amplified technology's social impact. I bridge human needs and technological possibilities through empathetic, purposeful design. 
                   </p>
          
          {/* Interactive terminal with user input */}
          <div className="mt-2 mb-2 w-full max-w-full">
            <InteractiveTerminal className="md:min-w-[400px] w-full font-mono" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalContent;
