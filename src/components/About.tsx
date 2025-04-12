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
        <div className="mb-6">
          <h2 className="mb-3">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        {/* Added full-width designer introduction with TextReveal that spans across the entire section */}
        <div className="mb-10 relative">
          <div className="relative py-1 max-w-5xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <TextReveal 
                className="text-gray-400" 
                direction="left-to-right" 
                lineByLine={true}
              >
                I am a UI/UX Designer crafting 
              </TextReveal>
            </h3>
            <h3 className="mt-2 md:mt-3">
              <TextReveal 
                className="text-gray-400" 
                direction="left-to-right" 
                lineByLine={true}
              >
                delightful digital experiences with
              </TextReveal>
            </h3>
            <h3 className="mt-2 md:mt-3">
              <TextReveal 
                className="text-gray-400" 
                direction="left-to-right" 
                lineByLine={true}
              >
                a focus on user-centered design
              </TextReveal>
            </h3>
          </div>
        </div>
        
        {/* Main content area with equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Image - adjusted for equal height */}
          <div className="lg:col-span-5 flex order-2 lg:order-1">
            <div 
              ref={imageRef} 
              className="relative w-full h-full cursor-none group"
              onMouseEnter={() => setShowSpinText(true)}
              onMouseLeave={() => setShowSpinText(false)}
            >
              <div className="bg-[#3E40EF] rounded-2xl overflow-hidden z-10 relative h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[480px]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>

                <div className="flex-1 w-full flex items-center justify-center relative">
                  <Globe className="scale-[1.1] translate-y-[30%] -z-10" />
                </div>
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover translate-y-[7%]"
                />

                {/* Spinning Text - Top Left */}
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

          {/* Right Column: Content - matched height with flex column */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="space-y-4 flex flex-col h-full">
              <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium self-start">
                <BookOpen className="inline-block mr-2 h-4 w-4" />
                Nice to meet you
              </div>
              
              <div className="flex-grow bg-[#ffffff] rounded-lg border border-gray-200 p-6 relative shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#3E40EF]/20 group">
                {/* Terminal Header with interactive buttons */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-[#121212] rounded-t-lg border-b border-gray-200 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56] cursor-pointer hover:brightness-110 transition-all duration-200 hover:scale-110"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E] cursor-pointer hover:brightness-110 transition-all duration-200 hover:scale-110"></div>
                    <div className="h-3 w-3 rounded-full bg-[#27C93F] cursor-pointer hover:brightness-110 transition-all duration-200 hover:scale-110"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm font-mono group-hover:text-white/80 transition-colors duration-300">
                    <span className="hidden sm:inline">~/portfolio/</span>about.txt
                  </div>
                </div>

                {/* Terminal Content with typing animation */}
                <div className="mt-6">
                  <div className="flex items-center text-[#424242] font-mono text-sm mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#3E40EF] mr-2">$</span>
                    <span className="inline-block">cat about.txt</span>
                    <span className="inline-block w-2 h-4 bg-[#3E40EF] animate-pulse ml-2"></span>
                  </div>
                  
                  <div className="space-y-4 text-[#7e7e7e] font-display text-base leading-relaxed relative overflow-hidden">
                    {/* First paragraph with hover effect and subtle animation */}
                    <p className="group-hover:text-[#5f5f5f] transition-colors relative transform hover:translate-x-1 hover:text-black transition-all duration-300">
                      With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
                      <span className="absolute h-full w-1 bg-[#3E40EF]/10 left-[-10px] top-0 group-hover:bg-[#3E40EF]/30 transition-colors duration-300"></span>
                    </p>
                    
                    {/* Second paragraph with highlight effect on key terms */}
                    <p className="group-hover:text-[#5f5f5f] transition-colors relative transform hover:translate-x-1 hover:text-black transition-all duration-300">
                      I currently serve as Chief Product Officer at{" "}
                      <span className="text-black font-semibold relative inline-block group-hover:text-[#3E40EF] transition-colors duration-300">
                        Imaginum
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3E40EF] group-hover:w-full transition-all duration-500"></span>
                      </span>
                      , where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at{" "}
                      <span className="text-black font-semibold relative inline-block group-hover:text-[#3E40EF] transition-colors duration-300">
                        CSED
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3E40EF] group-hover:w-full transition-all duration-500"></span>
                      </span>
                      .
                      <span className="absolute h-full w-1 bg-[#3E40EF]/10 left-[-10px] top-0 group-hover:bg-[#3E40EF]/30 transition-colors duration-300"></span>
                    </p>
                    
                    {/* Terminal prompt at the end with blinking cursor */}
                    <div className="flex items-center text-[#424242] font-mono text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#3E40EF] mr-2">$</span>
                      <span className="inline-block w-2 h-4 bg-[#3E40EF] animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Boxes: Education, Location, Experience */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
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
