import React, { useEffect, useState } from "react";
import RippleAnimation from "./RippleAnimation";
import { Award, Circle, Sparkles } from "lucide-react";

const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // Start the highlight animation after component mounts
    const timer = setTimeout(() => {
      setIsHighlighted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"> {/* Adjusted grid layout */}
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[450px]"> {/* Adjusted height */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden z-10 relative h-full">
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
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
            <div className="space-y-4"> {/* Reduced spacing */}
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
                <Award className="inline-block mr-2 h-4 w-4" />
                Nice to meet you
              </div>
              
              <div className="relative">
                <div className={`absolute inset-0 bg-[#3E40EF] rounded-md transition-all duration-1000 ease-in-out ${isHighlighted ? 'w-full' : 'w-0'}`}></div>
                <h3 className={`relative transition-colors duration-1000 ease-in-out ${isHighlighted ? 'text-white z-10 px-2 py-1' : ''}`}>
                  I'm a <span className={`transition-colors duration-1000 ${isHighlighted ? 'text-white' : 'text-[#3E40EF]'}`}>UI/XU Designer</span> with a passion for creating user-centered digital experiences
                </h3>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-7 relative shadow-md">
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
              </div>
            </div>
          </div>

          {/* Lower Boxes: Education, Location, Experience */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2"> {/* Full width below image */}
            {/* Education Box */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-start gap-4">
              <Award className="h-6 w-6 text-[#3E40EF]" /> {/* Icon */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Education</h4>
                <p className="text-gray-700">
                  B.Tech in ECE<br />
                  Vellore Institute of Technology, 2022-2026
                </p>
              </div>
            </div>

            {/* Location Box */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-start gap-4">
              <Circle className="h-6 w-6 text-[#3E40EF]" /> {/* Icon */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Location</h4>
                <p className="text-gray-700">
                  Based in India<br />
                  Available for remote work
                </p>
              </div>
            </div>

            {/* Experience Box */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-[#3E40EF]" /> {/* Icon */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Experience</h4>
                <p className="text-gray-700">
                  Chief Product Officer at Imaginum<br />
                  Tech & Design Head at CSED
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
