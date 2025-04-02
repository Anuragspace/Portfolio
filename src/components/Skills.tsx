
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
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
    { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
    { name: "Sketch", logo: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
    { name: "Adobe Photoshop", logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
    { name: "Adobe Illustrator", logo: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" },
    { name: "HTML/CSS", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow-1.svg" },
    { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer.svg" },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary-violet"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design Skills - Interactive Cards */}
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-violet/10 rounded-full flex items-center justify-center mr-4">
                <Paintbrush className="text-primary-violet" size={24} />
              </div>
              <h3 className="text-2xl">Design Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {designSkills.map((skill) => (
                <div key={skill.name} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary-violet font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-primary-violet h-3 rounded-full relative group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-violet/80 to-primary-violet/100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-violet/10 rounded-full flex items-center justify-center mr-4">
                <Code className="text-primary-violet" size={24} />
              </div>
              <h3 className="text-2xl">Technical Skills</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="overflow-hidden relative">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                
                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
                
                {/* Scrolling logos */}
                <div className="flex space-x-12 animate-marquee">
                  {[...technicalSkills, ...technicalSkills].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center min-w-20">
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="text-sm text-gray-600">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary-violet/20 group">
            <div className="w-12 h-12 bg-primary-violet/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-violet/20 transition-colors">
              <Lightbulb className="text-primary-violet" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
            <p className="text-gray-600">
              I approach design challenges with analytical thinking and creative solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary-violet/20 group">
            <div className="w-12 h-12 bg-primary-violet/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-violet/20 transition-colors">
              <Users className="text-primary-violet" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">User Research</h4>
            <p className="text-gray-600">
              I validate design decisions through comprehensive user research and testing.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary-violet/20 group">
            <div className="w-12 h-12 bg-primary-violet/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-violet/20 transition-colors">
              <LineChart className="text-primary-violet" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Data-Driven</h4>
            <p className="text-gray-600">
              I leverage analytics and metrics to inform and improve design outcomes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-primary-violet/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-primary-violet/10 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
    </section>
  );
};

export default Skills;
