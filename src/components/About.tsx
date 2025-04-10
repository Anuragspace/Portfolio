import { useEffect, useState, useRef } from "react";
import { MapPin, Sparkles, BookOpen } from "lucide-react";
import { Globe } from "@/components/Globe";
import { TextReveal } from "./TextReveal";
import SpinningText from "./SpinningText";


const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showSpinText, setShowSpinText] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        <div className="mb-10">
          <h2 className="mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
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
                      style={{ boxSizing: "border-box" }} // Ensures the border is included in the element's dimensions
                    >
                      <SpinningText 
                        children="ANURAG ADARSH • DESIGNER • UI/UX •" 
                        className="text-white" 
                        duration={15}
                        radius={4} // Adjust radius to match the reduced size
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

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
                <BookOpen className="inline-block mr-2 h-4 w-4" />
                Nice to meet you
              </div>
              
              <div className="relative py-1">
                <div className="text-2xl md:text-3xl font-bold leading-snug">
                  <TextReveal className="text-gray-400">
                    I'm a UI/UX Designer with a passion for creating user-centered digital experiences that bridge the gap between aesthetics and functionality.
                  </TextReveal>
                </div>
              </div>
              
              <div className="bg-[#ffffff] rounded-lg border border-gray-350 p-6 relative shadow-xl group hover:shadow-2xl transition-all duration-300">
                {/* Terminal Header */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-[#121212] rounded-t-lg border-b border-gray-350 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56] hover:brightness-110 transition-all cursor-pointer"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E] hover:brightness-110 transition-all cursor-pointer"></div>
                    <div className="h-3 w-3 rounded-full bg-[#27C93F] hover:brightness-110 transition-all cursor-pointer"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono group-hover:text-white/90 transition-colors">
                    about.txt
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="mt-6 overflow-hidden">
                  <div className="flex items-center mb-3 animate-fade-in">
                    <span className="text-[#424242] font-mono text-sm mr-2">
                      {'$'}
                    </span>
                    <p className="text-[#424242] font-mono text-sm type-animation after:content-['|'] after:ml-1 after:animate-cursor-blink">
                      {'cat about.txt'}
                    </p>
                  </div>
                  <div className="space-y-4 text-[#7e7e7e] font-display text-base leading-relaxed terminal-content opacity-0 animate-terminal-reveal">
                    <p className="reveal-line">
                      With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
                    </p>
                    
                    <p className="reveal-line animation-delay-300">
                      I currently serve as Chief Product Officer at <span className="text-black font-semibold">Imaginum</span>, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at <span className="text-black font-semibold">CSED</span>.
                    </p>
                  </div>
                </div>

                {/* Glowing effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500 group-hover:duration-200"></div>
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
