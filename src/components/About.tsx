import { useEffect, useState, useRef } from "react";
import { MapPin, Sparkles, BookOpen } from "lucide-react";
import { Globe } from "@/components/Globe";
import { DesktopTextReveal, MobileTextReveal } from "./TextRevealResponsive";
import SpinningText from "./SpinningText";
import InteractiveTerminal from "./InteractiveTerminal";

const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showSpinText, setShowSpinText] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Terminal text content
  const terminalLines = [
    "Hello! Welcome to my portfolio.",
    "Interested to discuss something? Connect with me on LinkedIn!"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Add a small delay to make the animation more noticeable
          setTimeout(() => {
            setIsHighlighted(true);
          }, 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-8 md:mb-10">
          <h2 className="mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        {/* Text introduction that spans full width - Now wider and synchronized */}
        <div className="mb-6 md:mb-10 w-full relative px-0">
          <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-4 md:mb-5">
            <BookOpen className="inline-block mr-2 h-4 w-4" />
            Nice to meet you
          </div>
          
          <div ref={textContainerRef} className="w-full lg:px-0 px-0">
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold leading-snug w-full">
                <DesktopTextReveal className="text-gray-400" lineIndex={0} totalLines={3}>
                  I'm a UI/UX Designer with a passion for creating beautiful digital products
                </DesktopTextReveal>
                <MobileTextReveal className="text-gray-400" lineIndex={0} totalLines={3}>
                  I'm a UI/UX Designer with a passion for creating beautiful digital products
                </MobileTextReveal>
              </h3>
            
              <h3 className="mt-1 md:mt-1 w-full">
                <DesktopTextReveal className="text-gray-400" lineIndex={1} totalLines={3}>
                  creating user-centered digital experiences that elevate brand presence
                </DesktopTextReveal>
                <MobileTextReveal className="text-gray-400" lineIndex={1} totalLines={3}>
                  creating user-centered digital experiences that elevate brand presence
                </MobileTextReveal>
              </h3>

              <h3 className="mt-1 md:mt-1 mb-2 md:mb-2 w-full">
                <DesktopTextReveal className="text-gray-400" lineIndex={2} totalLines={3}>
                  blend aesthetics with functionality and innovation in every project
                </DesktopTextReveal>
                <MobileTextReveal className="text-gray-400" lineIndex={2} totalLines={3}>
                  blend aesthetics with functionality and innovation in every project
                </MobileTextReveal>
              </h3>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div 
              ref={imageRef} 
              className="relative h-[450px] cursor-none group"
              onMouseEnter={() => setShowSpinText(true)}
              onMouseLeave={() => setShowSpinText(false)}
            >
              <div className="bg-[#3E40EF] rounded-2xl overflow-hidden z-10 relative h-full">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>

                <div className="flex-1 w-full flex items-center justify-center relative">
                  <Globe className="scale-[1.1] translate-y-[30%] -z-10" />
                </div>
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover translate-y-[7%]"
                />

                {/* Spinning Text - Top Right */}
                {showSpinText && (
                  <div className="absolute top-6 left-6 flex -z-20 cursor-none">
                    <div 
                      className="w-28 h-28 rounded-full border-2 border-white/50 flex items-center justify-center"
                      style={{ boxSizing: "border-box" }} 
                    >
                      <SpinningText 
                        children="ANURAG ADARSH • DESIGNER • UI/UX •" 
                        className="text-white" 
                        duration={15}
                        radius={4}
                        followCursor={true}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#3E40EF]/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3E40EF]/5 rounded-full blur-2xl -z-10"></div>
              
              {/* Rotating design elements */}
              <div className="absolute w-32 h-32 border border-[#3E40EF]/30 rounded-full -bottom-4 -left-4 animate-spin-slow"></div>
              <div className="absolute w-24 h-24 border border-[#3E40EF]/20 rounded-full -top-4 -right-4 animate-spin-slow-reverse"></div>
            </div>
          </div>

          {/* Right Column: Terminal Content */}
          <div className="lg:col-span-7">
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
          </div>

          {/* Lower Boxes: Education, Location, Experience */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-0">
            {/* Education Box */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Education</h4>
                  <p className="text-gray-700 text-sm">
                    B.Tech in ECE<br />
                    Vellore Institute of Technology, 2022-2026
                  </p>
                </div>
              </div>
            </div>

            {/* Location Box */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Location</h4>
                  <p className="text-gray-700 text-sm">
                    Based in India<br />
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Box */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Experience</h4>
                  <p className="text-gray-700 text-sm">
                    Chief Product Officer at Imaginum<br />
                    Tech & Design Head at CSED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
