
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CSED Website",
      description: "A complete redesign of the Computer Science Engineering Department website with improved user flow and modern interface.",
      image: "/placeholder.svg",
      tags: ["UI Design", "UX Design", "Web Development"],
      link: "#",
    },
    {
      id: 2,
      title: "Campus Mart",
      description: "An e-commerce platform designed specifically for university students to buy and sell used items within campus.",
      image: "/placeholder.svg",
      tags: ["Product Design", "Mobile App", "Branding"],
      link: "#",
    },
    {
      id: 3,
      title: "Can Sync",
      description: "A cross-platform productivity application that helps teams collaborate and synchronize their work efficiently.",
      image: "/placeholder.svg",
      tags: ["UX Research", "UI Design", "Prototyping"],
      link: "#",
    },
    {
      id: 4,
      title: "Imaginum Website",
      description: "Corporate website design for a creative agency showcasing their portfolio and services with an immersive experience.",
      image: "/placeholder.svg",
      tags: ["Web Design", "Animation", "Development"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link} 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                    aria-label={`View ${project.title} project`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center font-medium text-accent hover:underline"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
