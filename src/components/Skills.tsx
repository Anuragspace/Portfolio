
import React from "react";
import { 
  PaintBrush, 
  PenTool,
  MousePointerClick,
  Layers,
  Code,
  Figma,
  LayoutGrid,
  Columns,
  PenSquare,
  Lightbulb
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
    { name: "Figma", icon: <Figma className="h-5 w-5" /> },
    { name: "Adobe XD", icon: <PenSquare className="h-5 w-5" /> },
    { name: "Sketch", icon: <PenTool className="h-5 w-5" /> },
    { name: "Adobe Photoshop", icon: <Layers className="h-5 w-5" /> },
    { name: "Adobe Illustrator", icon: <PaintBrush className="h-5 w-5" /> },
    { name: "HTML/CSS", icon: <Code className="h-5 w-5" /> },
    { name: "JavaScript", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "React", icon: <LayoutGrid className="h-5 w-5" /> },
    { name: "Webflow", icon: <Columns className="h-5 w-5" /> },
    { name: "Framer", icon: <MousePointerClick className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        {/* Scrolling Technical Skills */}
        <div className="relative mb-14 py-6 overflow-hidden">
          {/* Gradient overlay left */}
          <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {technicalSkills.concat(technicalSkills).map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`}
                className="px-6 py-3 bg-white rounded-full shadow-md flex items-center gap-3 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-accent">{skill.icon}</span>
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlay right */}
          <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
        
        {/* Bento Grid Layout - New design matching reference */}
        <div className="grid grid-cols-12 gap-5">
          {/* UI/UX Design - Tall left box */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-2xl shadow-md p-8 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
            {/* Background gradient circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 group-hover:bg-accent/10 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full -ml-24 -mb-24 group-hover:bg-accent/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                <PaintBrush className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">UI/UX Design</h3>
              <p className="text-gray-600 mb-8">Creating intuitive and visually appealing interfaces that enhance user experience and achieve business goals.</p>
              
              <div className="space-y-6 mt-auto">
                {designSkills.slice(0, 3).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className="bg-accent h-2.5 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pattern decoration */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interaction Design - Top right box */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-2xl shadow-md p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                <MousePointerClick className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interaction Design</h3>
              <p className="text-gray-600 mb-6">Creating intuitive interfaces with smooth transitions and meaningful animations that enhance user experience.</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {["Micro-interactions", "Motion Design", "User Flows", "Site Mapping"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-accent/5 rounded-full text-sm font-medium group-hover:bg-accent/10 transition-all duration-300 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Prototyping - Bottom left of the right column */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3.5 bg-white rounded-2xl shadow-md p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                <Layers className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Prototyping</h3>
              <p className="text-gray-600 mb-4">Building interactive prototypes to test and validate design solutions.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["High-fidelity", "Low-fidelity", "Interactive", "User Testing"].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-accent/5 rounded-full text-xs font-medium group-hover:bg-accent/10 transition-all duration-300 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Wireframing - Bottom right */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3.5 bg-white rounded-2xl shadow-md p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                <PenTool className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wireframing</h3>
              <p className="text-gray-600 mb-4">Creating structural blueprints to establish hierarchy and layout.</p>
              <div className="mt-6 pt-2">
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3">
                  <div
                    className="bg-accent h-2.5 rounded-full transition-all duration-700"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Beginner</span>
                  <span className="text-xs font-medium text-accent">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
