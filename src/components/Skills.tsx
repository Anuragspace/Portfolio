
import React from "react";
import { 
  Paintbrush, 
  PenTool,
  LayoutGrid,
  Layers,
  Code, 
  Lightbulb, 
  LineChart, 
  Zap
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
    "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", 
    "Adobe Illustrator", "HTML/CSS", "Basic JavaScript", 
    "React", "Webflow", "Framer", "Principle", "InVision",
    "Zeplin", "Marvel", "ProtoPie", "After Effects"
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        {/* Scrolling Technical Skills */}
        <div className="relative mb-16 py-6 overflow-hidden">
          {/* Gradient overlay left */}
          <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {technicalSkills.concat(technicalSkills).map((skill, index) => (
              <div 
                key={`${skill}-${index}`}
                className="px-5 py-3 bg-white rounded-full shadow-sm flex items-center gap-2 border border-gray-200"
              >
                <Code className="h-4 w-4 text-accent" />
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlay right */}
          <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* UI/UX Design - Tall left box */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Paintbrush className="text-accent h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-5">UI/UX Design</h3>
            <div className="space-y-5 flex-grow">
              {designSkills.slice(0, 3).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Interaction Design - Top right box */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-2xl shadow-md p-6">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <LayoutGrid className="text-accent h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interaction Design</h3>
            <p className="text-gray-600 mb-4">Creating intuitive interfaces with smooth transitions and meaningful animations that enhance user experience.</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {["Micro-interactions", "Motion Design", "User Flows", "Site Mapping"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Prototyping - Bottom right box */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-2xl shadow-md p-6">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Layers className="text-accent h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Prototyping</h3>
            <p className="text-gray-600 mb-4">Building interactive prototypes to test and validate design solutions before development.</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {["High-fidelity", "Low-fidelity", "Interactive", "User Testing"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Wireframing - Bottom right box */}
          <div className="col-span-12 md:col-span-3 bg-white rounded-2xl shadow-md p-6">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <PenTool className="text-accent h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Wireframing</h3>
            <p className="text-gray-600">Creating structural blueprints to establish hierarchy and layout.</p>
            <div className="mt-auto pt-4">
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all duration-700"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
            <p className="text-gray-600">
              I approach design challenges with analytical thinking and creative solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Learner</h4>
            <p className="text-gray-600">
              Quickly adapt to new design tools and technologies to stay current with industry trends.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <LineChart className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Data-Driven</h4>
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
