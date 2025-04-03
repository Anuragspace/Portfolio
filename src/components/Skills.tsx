
import React from "react";
import { 
  Paintbrush, 
  Code, 
  Lightbulb, 
  LineChart, 
  Zap, 
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
    "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", 
    "Adobe Illustrator", "HTML/CSS", "Basic JavaScript", 
    "React", "Webflow", "Framer"
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Paintbrush className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl">Design Skills</h3>
            </div>
            
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Code className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl">Technical Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
            <p className="text-gray-600">
              I approach design challenges with analytical thinking and creative solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Users className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">User Research</h4>
            <p className="text-gray-600">
              I validate design decisions through comprehensive user research and testing.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
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
