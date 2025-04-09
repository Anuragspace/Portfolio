
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
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">My professional journey through design leadership and innovation</p>
        </div>
        
        <div className="timeline-container relative pl-8 md:pl-12">
          {/* Timeline vertical line */}
          <div className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/10 via-accent to-accent/10"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8">
              {/* Timeline dot with pulse effect */}
              <div className="absolute -left-[42px] top-1">
                <div className="relative w-4 h-4 bg-accent rounded-full ring-2 ring-white shadow-md 
                              hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 animate-ping bg-accent rounded-full opacity-20"></div>
                </div>
              </div>
              
              {/* Experience card */}
              <div className="ml-8">
                <Card className="group overflow-hidden border border-gray-100 shadow-md hover:shadow-xl 
                               hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                        <div>
                          {/* Date badge */}
                          <div className="inline-flex items-center bg-accent/5 text-accent rounded-full 
                                        px-4 py-1.5 text-sm font-medium mb-3 hover:bg-accent/10 transition-colors">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          
                          {/* Role and company */}
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-accent 
                                       transition-colors">{exp.role}</h3>
                          <p className="text-accent font-semibold text-lg">{exp.company}</p>
                        </div>

                        {/* Keywords with better styling */}
                        <div className="flex flex-wrap gap-2 md:max-w-[40%] justify-start md:justify-end">
                          {exp.keywords.map((keyword, i) => (
                            <span key={i} 
                                  className="inline-flex items-center bg-gray-50 text-gray-600 rounded-full 
                                           px-4 py-1.5 text-sm font-medium hover:bg-accent/5 hover:text-accent 
                                           cursor-pointer transition-all duration-300 hover:scale-105">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Description list with enhanced interactivity */}
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start group/item hover:bg-gray-50/50 
                                                p-2 rounded-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent/30 rounded-full 
                                          group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300" />
                            <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

};

export default Experience;