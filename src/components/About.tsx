
import React from "react";
import RippleAnimation from "./RippleAnimation";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden z-10 relative border-2 border-[#3E40EF]/10">
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full object-cover aspect-[4/5]" 
                />
                <RippleAnimation />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#3E40EF]/30 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#3E40EF]/20 rounded-full blur-sm"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#3E40EF]/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3E40EF]/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
                Nice to meet you
              </div>
              
              <h3>I'm a Product Designer with a passion for creating user-centered digital experiences</h3>
              
              <p className="text-gray-600">
                With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
              </p>
              
              <p className="text-gray-600">
                I currently serve as Chief Product Officer at Imaginum, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at CSED.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Education</h4>
                  <p className="text-gray-600">Bachelor's in Design<br />
                  University of Design, 2018-2022</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Location</h4>
                  <p className="text-gray-600">Based in New York<br />
                  Available for remote work</p>
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
