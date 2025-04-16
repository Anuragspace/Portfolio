
import React from "react";
import InteractiveTerminal from "../InteractiveTerminal";

const TerminalContent = () => {
  return (
    <div className="h-[450px] bg-[#ffffff] rounded-lg border border-gray-200 p-6 relative shadow-sm overflow-hidden">
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
        <p className="text-[#424242] font-mono text-sm mb-2">
          {'// <hello world />'}
        </p>
        
        <div className="space-y-4 text-[#7e7e7e] font-display text-base leading-relaxed h-[320px] overflow-hidden pr-2">
          <p>
            With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
          </p>
          
          <p>
            I currently serve as Chief Product Officer at <span className="text-black font-semibold">Imaginum</span>, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at <span className="text-black font-semibold">CSED</span>.
          </p>
          
          {/* Interactive terminal with user input */}
          <div className="mt-6 mb-2 w-full max-w-full">
            <InteractiveTerminal className="md:min-w-[400px] w-full font-mono" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalContent;
