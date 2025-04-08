
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { BlurFade } from "./BlurFade";
import { BorderBeam } from "./BorderBeam";
import { WordRotate } from "./WordRotate";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  keywords: string[];
  theme: string;
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
      keywords: ["Leadership", "Innovation", "Strategy", "User-centered"],
      theme: "Strategy"
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
      keywords: ["Mentorship", "Problem-solving", "Engagement", "Technical"],
      theme: "Engagement"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-violet-50">
      <div className="container-custom max-w-4xl">
        <div className="mb-16">
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent"></div>
          <p className="mt-4 text-gray-600">My professional journey through design leadership and innovation</p>
        </div>
        
        <div className="timeline-container relative pl-0 md:pl-0">
          {/* Timeline vertical line - moved more to the left */}
          <div className="absolute left-[10px] top-0 bottom-0 w-0.5 bg-accent/80 md:left-[10px]"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-20">
              {/* Timeline dot - moved more to the left */}
              <div className="absolute left-[10px] w-[14px] h-[14px] bg-accent rounded-full transform -translate-x-1/2 z-10 
                             border-2 border-white shadow-md md:left-[10px] md:w-[18px] md:h-[18px]">
              </div>
              
              {/* Experience card */}
              <BlurFade 
                direction="right"
                duration={0.6}
                delay={index * 0.2}
                className="ml-8 md:ml-12"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <BorderBeam 
                        size={70} 
                        duration={8} 
                        colorFrom="#3E40EF" 
                        colorTo="#9b87f5" 
                        reverse={index % 2 === 0}
                      />
                      
                      <div className="p-6">
                        {/* Date badge */}
                        <div className="inline-flex items-center bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        
                        {/* Role and company */}
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-accent font-medium mb-4">{exp.company}</p>
                        
                        {/* Theme tag */}
                        <div className="text-violet-700 font-medium text-sm mb-4">{exp.theme}</div>
                        
                        {/* Rotating keywords */}
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
                        
                        {/* Description list */}
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start group/item">
                              <div className="min-w-5 mt-1.5 mr-2.5">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover/item:scale-150 transition-transform"></div>
                              </div>
                              <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
