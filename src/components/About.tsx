
import React, { useEffect, useState, useRef } from "react";
import RippleAnimation from "./RippleAnimation";
import { Award, MapPin, Sparkles, BookOpen } from "lucide-react";
import { Globe } from "@/components/Globe";
import TextReveal from "./TextReveal";
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
              className="relative h-[430px] cursor-none"
              onMouseEnter={() => setShowSpinText(true)}
              onMouseLeave={() => setShowSpinText(false)}
            >
              <div className="bg-[#3E40EF] rounded-2xl overflow-hidden z-10 relative h-full">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>

                <div className="flex-1 w-full flex items-center justify-center relative ">
                  <Globe className="scale-[1.1] translate-y-[30%] -z-10" />
                </div>
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover translate-y-[7%]"
                />
                
                {showSpinText && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 cursor-none">
                    <div className="w-40 h-40 rounded-full border-2 border-white/50 flex items-center justify-center">
                      <SpinningText 
                        children="ANURAG ADARSH • DESIGNER • DEVELOPER •" 
                        className="text-white" 
                        duration={15}
                        radius={4.5}
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
                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                  I'm a <span className="text-[#3E40EF]">UI/UX Designer</span>
                </h3>
                <div className="mt-4 mb-6">
                  <TextReveal className="text-lg md:text-xl leading-relaxed">
                    with a passion for creating user-centered digital experiences
                  </TextReveal>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 relative shadow-md">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-600 font-mono text-sm mb-3">
                  {'// Personal description'}
                </p>
                <p className="text-gray-700 font-mono text-sm leading-relaxed mb-3">
                  With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
                </p>
                <p className="text-gray-700 font-mono text-sm leading-relaxed">
                  I currently serve as Chief Product Officer at Imaginum, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at CSED.
                </p>
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
