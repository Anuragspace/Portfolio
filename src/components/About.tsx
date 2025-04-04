
import React, { useEffect, useState, useRef } from "react";
import RippleAnimation from "./RippleAnimation";
import { Award, Circle, MapPin, GraduationCap, User } from "lucide-react";

const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsHighlighted(true);
          }, 500);
        }
      },
      {
        threshold: 0.3,
      }
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
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="relative h-[400px]">
                <div className="bg-gray-100 rounded-2xl overflow-hidden z-10 relative h-full">
                  <img 
                    src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                    alt="Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#3E40EF]/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3E40EF]/5 rounded-full blur-2xl -z-10"></div>
                
                {/* Rotating design element */}
                <div className="absolute w-32 h-32 border border-[#3E40EF]/30 rounded-full -bottom-4 -left-4 animate-spin-slow"></div>
                <div className="absolute w-24 h-24 border border-[#3E40EF]/20 rounded-full -top-4 -right-4 animate-spin-slow-reverse"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#3E40EF]/10 flex items-center justify-center mr-3 group-hover:bg-[#3E40EF] transition-colors duration-300">
                      <GraduationCap className="h-4 w-4 text-[#3E40EF] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-[#3E40EF]">Education</h4>
                  </div>
                  <p className="text-gray-700">
                    B.Tech in ECE<br />
                    Vellore Institute of Technology, 2022-2026
                  </p>
                </div>
                <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#3E40EF]/10 flex items-center justify-center mr-3 group-hover:bg-[#3E40EF] transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-[#3E40EF] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-[#3E40EF]">Location</h4>
                  </div>
                  <p className="text-gray-700">
                    Based in India<br />
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mt-1">
                <Award className="inline-block mr-2 h-4 w-4" />
                Nice to meet you
              </div>
              
              <div className="overflow-hidden">
                <h3 className="relative">
                  <span className="relative inline-block">
                    I'm a 
                    <span className={`relative mx-1 ${isHighlighted ? 'text-white' : 'text-[#3E40EF]'}`}>
                      <span className={`absolute inset-0 bg-[#3E40EF] rounded-md transition-all duration-1000 ease-in-out ${isHighlighted ? 'w-full' : 'w-0'}`}></span>
                      <span className="relative z-10 px-1">Product Designer</span>
                    </span>
                  </span>
                </h3>
                <h3 className="relative mt-2">
                  <span className="relative inline-block">
                    <span className={`relative ${isHighlighted ? 'text-white' : ''}`}>
                      <span className={`absolute inset-0 bg-[#3E40EF] rounded-md transition-all duration-1000 ease-in-out transition-delay-300 ${isHighlighted ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0.3s' }}></span>
                      <span className="relative z-10 px-1">with a passion for creating user-centered digital experiences</span>
                    </span>
                  </span>
                </h3>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 relative shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-4 right-4 flex gap-2">
                  <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                  <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                </div>
                <p className="text-gray-600 font-mono text-sm mb-4">
                  {'// Personal description'}
                </p>
                <p className="text-gray-700 font-mono">
                  With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
                </p>
                <p className="text-gray-700 font-mono mt-4">
                  I currently serve as Chief Product Officer at Imaginum, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at CSED.
                </p>
                
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-br-lg bg-[#3E40EF]/5 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 rounded-tl-lg bg-[#3E40EF]/5 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              
              <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#3E40EF]/10 flex items-center justify-center mr-3 group-hover:bg-[#3E40EF] transition-colors duration-300">
                    <User className="h-5 w-5 text-[#3E40EF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-[#3E40EF]">About Me</h4>
                </div>
                <p className="text-gray-700">
                  Passionate about creating intuitive digital experiences that solve real-world problems. 
                  I blend creativity with technical expertise to build products that users love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
