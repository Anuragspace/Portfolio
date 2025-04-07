
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { BlurFade } from "./BlurFade";
import { BorderBeam } from "./BorderBeam";
import { WordRotate } from "./WordRotate";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  keywords: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Chief Product Officer",
      company: "Imaginum",
      period: "Jan 2022 - Present",
      description: [
        "Leading a team of designers and developers to create innovative digital products",
        "Establishing product strategy and design system implementation",
        "Conducting user research and validating design decisions through testing",
        "Collaborating with stakeholders to align design with business objectives"
      ],
      keywords: ["Leadership", "Innovation", "Strategy", "User-centered"]
    },
    {
      id: 2,
      role: "Tech & Design Head",
      company: "CSED",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Revamped the department website resulting in 40% increase in student engagement",
        "Led design sprints and workshops to solve complex UX challenges",
        "Implemented responsive design principles for cross-device consistency",
        "Mentored junior designers and provided constructive feedback"
      ],
      keywords: ["Mentorship", "Problem-solving", "Engagement", "Technical"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent"></div>
          <p className="mt-4 text-gray-600 max-w-2xl">My professional journey through design leadership and innovation</p>
        </div>
        
        <div className="timeline-container pl-12 md:pl-0">
          {experiences.map((exp, index) => (
            <BlurFade 
              key={exp.id}
              direction={index % 2 === 0 ? "left" : "right"} 
              duration={0.6}
              delay={index * 0.2}
              className={`relative mb-16 ${
                index % 2 === 0 
                  ? 'md:ml-0 md:mr-auto md:pr-12 md:pl-0 md:text-right md:w-3/5' 
                  : 'md:ml-auto md:mr-0 md:pl-12 md:pr-0 md:text-left md:w-3/5'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-accent rounded-full top-0 transform -translate-y-1/2 z-10 
                             border-4 border-white timeline-dot
                             left-[-15px] md:left-[-12px] group-hover:scale-110 transition-transform">
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-md group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <BorderBeam 
                  size={60} 
                  duration={8} 
                  colorFrom={index % 2 === 0 ? "#3E40EF" : "#9b87f5"} 
                  colorTo={index % 2 === 0 ? "#9b87f5" : "#3E40EF"} 
                  reverse={index % 2 === 0}
                />
                
                <div className="inline-flex items-center bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-accent font-medium mb-2">{exp.company}</p>
                
                <div className="mb-4">
                  <WordRotate 
                    words={exp.keywords} 
                    duration={2000} 
                    className="text-sm font-medium text-accent/80 inline-flex items-center"
                    motionProps={{
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                </div>
                
                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className={`flex items-start group/item ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`min-w-5 mt-1 ${index % 2 === 0 ? 'md:ml-2' : 'mr-2'}`}>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover/item:scale-150 transition-transform"></div>
                      </div>
                      <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
