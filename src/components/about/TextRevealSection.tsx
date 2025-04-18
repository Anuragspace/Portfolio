
import React from "react";
import { BookOpen } from "lucide-react";
import { DesktopTextReveal, MobileTextReveal } from "../TextRevealResponsive";

const TextRevealSection = () => {
  return (
    <div className="mb-6 md:mb-10 w-full relative px-0">
      <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-4 md:mb-5">
        <BookOpen className="inline-block mr-2 h-4 w-4" />
        Nice to meet you
      </div>
      
      <div className="w-full lg:px-0 px-0">
        <div className="w-full max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-relaxed w-full">
            <DesktopTextReveal className="text-gray-700" lineIndex={0} totalLines={3}>
              I'm a UI/UX Designer with a passion for creating beautiful digital products
            </DesktopTextReveal>
            <MobileTextReveal className="text-gray-700" lineIndex={0} totalLines={3}>
              I'm a UI/UX Designer with a passion for creating beautiful digital products
            </MobileTextReveal>
          </h3>
        
          <h3 className="mt-2 md:mt-2 text-2xl md:text-4xl w-full">
            <DesktopTextReveal className="text-gray-700" lineIndex={1} totalLines={3}>
              creating user-centered digital experiences that elevate brand presence
            </DesktopTextReveal>
            <MobileTextReveal className="text-gray-700" lineIndex={1} totalLines={3}>
              creating user-centered digital experiences that elevate brand presence
            </MobileTextReveal>
          </h3>

          <h3 className="mt-2 md:mt-2 mb-2 md:mb-2 text-2xl md:text-4xl w-full">
            <DesktopTextReveal className="text-gray-700" lineIndex={2} totalLines={3}>
              blend aesthetics with functionality and innovation in every project
            </DesktopTextReveal>
            <MobileTextReveal className="text-gray-700" lineIndex={2} totalLines={3}>
              blend aesthetics with functionality and innovation in every project
            </MobileTextReveal>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TextRevealSection;
