
import React from "react";
import { BookOpen } from "lucide-react";
import { DesktopTextReveal, MobileTextReveal } from "@/features/shared/components/magic-ui/TextRevealResponsive";

const TextRevealSection = () => {
  return (
    <div className="mb-6 md:mb-10 w-full relative px-0">
      <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-4 md:mb-5">
        <BookOpen className="inline-block mr-2 h-4 w-4" />
        Welcome to my creative space.
      </div>
      
      <div className="w-full lg:px-0 px-0">
        <div className="w-full ">
          <h3 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-relaxed w-full">
            <DesktopTextReveal className="text-5xl md:text-6xl font-medium leading-relaxed text-gray-700">
            As a UI/UX Designer, I craft user-centered digital experiences that blend aesthetics with functionality, elevating brand presence and driving innovation to create beautiful, intuitive products that resonate with users and enhance every interaction.            </DesktopTextReveal>
            <MobileTextReveal className="text-lg md:text-4xl font-medium leading-relaxed text-gray-700">
              I'm a UI/UX Designer with a passion for creating beautiful digital products creating user-centered digital experiences that elevate brand presence blend aesthetics with functionality and innovation in every project.
            </MobileTextReveal>
          </h3>

      
        </div>
      </div>
    </div>
  );
};

export default TextRevealSection;
