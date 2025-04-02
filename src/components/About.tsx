
import React from "react";
import RippleAnimation from "./RippleAnimation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-violet"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden z-10 relative">
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full object-cover aspect-[4/5]" 
                />
                <div className="absolute inset-0 z-0">
                  <RippleAnimation />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-primary-violet/10 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border border-primary-violet/30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-violet/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-violet/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary-violet/10 text-primary-violet rounded-full text-sm font-medium">
                Nice to meet you
              </div>
              
              <h3>I'm a Product Designer with a passion for creating user-centered digital experiences</h3>
              
              <p className="text-gray-600">
                With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
              </p>
              
              <p className="text-gray-600">
                I currently serve as Chief Product Officer at Imaginum, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at CSED.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary-violet/20 transition-all hover:shadow-md">
                  <h4 className="text-lg font-bold mb-2 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-violet/10 flex items-center justify-center mr-2">
                      <span className="w-3 h-3 rounded-full bg-primary-violet"></span>
                    </span>
                    Education
                  </h4>
                  <p className="text-gray-600">Bachelor's in Design<br />
                  University of Design, 2018-2022</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary-violet/20 transition-all hover:shadow-md">
                  <h4 className="text-lg font-bold mb-2 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-violet/10 flex items-center justify-center mr-2">
                      <span className="w-3 h-3 rounded-full bg-primary-violet"></span>
                    </span>
                    Location
                  </h4>
                  <p className="text-gray-600">Based in New York<br />
                  Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-8 h-8 border border-primary-violet/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-primary-violet/10 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }}></div>
    </section>
  );
};

export default About;
