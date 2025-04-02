
import React from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
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
      ]
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
      ]
    },
    {
      id: 3,
      role: "UI/UX Design Intern",
      company: "Tech Innovations",
      period: "Jun 2019 - Feb 2020",
      description: [
        "Created wireframes and prototypes for mobile applications",
        "Assisted in usability testing and incorporating feedback into designs",
        "Developed UI components and design guidelines",
        "Collaborated with development team for successful implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="timeline-container pl-12 md:pl-0">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative mb-16 md:pl-12 md:ml-12 ${
                index % 2 === 0 ? 'md:ml-0 md:mr-12 md:pl-0 md:pr-12 md:text-right' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute w-6 h-6 bg-accent rounded-full top-0 transform -translate-y-1/2 z-10 
                            border-4 border-white left-[-15px] md:left-[-3px] 
                            md:left-auto md:right-auto
                            md:left-[-12px]">
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm md:w-[calc(100%-24px)]">
                <div className="inline-flex items-center bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-accent font-medium mb-4">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="min-w-5 mt-1 mr-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
