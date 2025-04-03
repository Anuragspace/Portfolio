
import React from "react";
import { 
  Paintbrush, 
  Code, 
  Lightbulb, 
  LineChart, 
  Users, 
  CheckCircle2 
} from "lucide-react";

const Skills = () => {
  const designSkills = [
    { name: "UI Design", level: 95 },
    { name: "UX Design", level: 90 },
    { name: "Interaction Design", level: 85 },
    { name: "Information Architecture", level: 80 },
    { name: "Wireframing", level: 95 },
    { name: "Prototyping", level: 90 },
  ];

  const technicalSkills = [
    { name: "Figma", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Adobe XD", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Sketch", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Photoshop", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Illustrator", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "HTML/CSS", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "JavaScript", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "React", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Webflow", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" },
    { name: "Framer", icon: "/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#3E40EF]/10 rounded-full flex items-center justify-center mr-4">
                <Paintbrush className="text-[#3E40EF]" size={24} />
              </div>
              <h3 className="text-2xl">Design Skills</h3>
            </div>
            
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name} className="group hover:scale-102 transition-all">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-[#3E40EF] transition-colors">{skill.name}</span>
                    <span className="text-gray-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#3E40EF]/70 to-[#3E40EF] h-3 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#3E40EF]/20"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#3E40EF]/10 rounded-full flex items-center justify-center mr-4">
                <Code className="text-[#3E40EF]" size={24} />
              </div>
              <h3 className="text-2xl">Technical Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3E40EF]/5 transition-colors hover:scale-105 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-white p-1 flex items-center justify-center shadow-sm">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Marquee Animation for Skills */}
        <div className="mt-16 relative">
          <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-8">
            <div className="animate-marquee flex gap-8">
              {[...technicalSkills, ...technicalSkills].map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center gap-3 min-w-[100px]"
                >
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm p-3 flex items-center justify-center border border-gray-100">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#3E40EF]/30 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-[#3E40EF]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
              <Lightbulb className="group-hover:text-white text-[#3E40EF]" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-[#3E40EF] transition-colors">Problem Solving</h4>
            <p className="text-gray-600">
              I approach design challenges with analytical thinking and creative solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#3E40EF]/30 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-[#3E40EF]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
              <Users className="group-hover:text-white text-[#3E40EF]" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-[#3E40EF] transition-colors">User Research</h4>
            <p className="text-gray-600">
              I validate design decisions through comprehensive user research and testing.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#3E40EF]/30 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-[#3E40EF]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
              <LineChart className="group-hover:text-white text-[#3E40EF]" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-[#3E40EF] transition-colors">Data-Driven</h4>
            <p className="text-gray-600">
              I leverage analytics and metrics to inform and improve design outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
