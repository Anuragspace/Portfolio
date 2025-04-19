
import React from "react";
import InteractiveTerminal from "../InteractiveTerminal";

const TerminalContent = () => {
  return (
    <div className="h-[580px] lg:h-[450px] bg-[#ffffff] rounded-lg border border-gray-200 p-6 relative shadow-sm overflow-hidden">
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
          I'm a UI/UX designer with over 5 years of experience creating intuitive, user-centered digital products. My journey spans working with both startups and established teams, where I focus on aligning user needs with business goals to design experiences that are not only visually engaging but also deeply functional.          </p>
          
          <p className="text-gray-700">
          I lead product and design at Imaginum, overseeing strategy and execution of digital solutions. Previously, I was Tech & Design Head at CSED, shaping meaningful design for socially-driven tech. I’m passionate about solving real-world problems and bringing ideas to life with clarity and empathy.
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
