
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Peingpo Builder",
      year: "2024",
      description: "I came up with a system that lets companies limit unauthorized users' access, while giving users total freedom to create and close their projects. And it's all in an easy-to-use platform.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["UI Design", "UX Design", "Web Development"],
      link: "#",
    },
    {
      id: 2,
      title: "MyBet Apps",
      year: "2021",
      description: "MyBet Apps is an online Event booking app that had a bad UI/UX design. I noticed the usability problems and created a precise but completely revamped UI to increase user satisfaction and engagement.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      tags: ["Product Design", "Mobile App", "Branding"],
      link: "#",
    },
    {
      id: 3,
      title: "RunOn",
      year: "2019",
      description: "RunOn is a running tracking app with many features, but most users didn't know it existed. Its landing page didn't convey its advanced technology and benefits, leading to low traffic and poor user conversions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["UX Research", "UI Design", "Prototyping"],
      link: "#",
    },
    {
      id: 4,
      title: "Imaginum Website",
      year: "2023",
      description: "Corporate website design for a creative agency showcasing their portfolio and services with an immersive experience that helps visitors understand the company's values and capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tags: ["Web Design", "Animation", "Development"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4">My Design Work That Stands Out</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Crafting intuitive digital experiences that solve real problems and delight users across platforms and industries.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#3E40EF]"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 bg-white"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Text Content Section - 40% */}
                <div 
                  className={`w-full md:w-[40%] p-8 flex flex-col justify-between rounded-xl ${
                    index % 2 === 0 
                      ? 'bg-[#eee] text-gray-800' 
                      : 'bg-[#3E40EF] text-white'
                  }`}
                >
                  <div>
                    <div className="mb-4">
                      <span 
                        className={`block text-sm mb-1 font-medium ${
                          index % 2 === 0 ? 'text-[#3E40EF]' : 'text-blue-100'
                        }`}
                      >
                        {project.year}
                      </span>
                      <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
                    </div>
                    
                    <p className={`mb-6 ${index % 2 === 0 ? 'text-gray-600' : 'text-blue-100'}`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            index % 2 === 0 
                              ? 'bg-gray-100 text-gray-700' 
                              : 'bg-blue-100/20 text-white'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant={index % 2 === 0 ? "default" : "outline"}
                    className={`w-fit mt-auto group ${
                      index % 2 === 0 
                        ? 'bg-[#3E40EF] hover:bg-[#3030C0] text-white' 
                        : 'border-white text-white hover:bg-white hover:text-[#3E40EF]'
                    }`}
                    asChild
                  >
                    <a href={project.link} className="flex items-center">
                      {index % 2 === 0 ? 'View Project' : 'Show Case'}
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
                
                {/* Image Section - 60% */}
                <div className="w-full md:w-[60%] h-full overflow-hidden rounded-xl ml-0 md:ml-4 mt-4 md:mt-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 rounded-xl" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
