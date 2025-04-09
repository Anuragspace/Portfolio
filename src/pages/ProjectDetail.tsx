import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/RainbowButton";
import { BlurFade } from "@/components/BlurFade";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Fetch project data based on id
  const project = {
    id: 1,
    title: "Peingpo Builder",
    year: "2024",
    description: "I came up with a system that lets companies limit unauthorized users' access, while giving users total freedom to create and close their projects. And it's all in an easy-to-use platform.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    tags: ["UI Design", "UX Design", "Web Development"],
    role: ["Lead Designer", "Frontend Developer"],
    tools: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    impact: "Increased user engagement by 150% and reduced project setup time by 60%"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 text-[#3E40EF]/100"
        />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <BlurFade direction="up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {project.impact}
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Role & Responsibilities</h3>
                <ul className="space-y-2">
                  {project.role.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <RainbowButton className="w-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Project
                  </a>
                </RainbowButton>

                <Button variant="outline" className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <p>{project.description}</p>
              {/* Add more content sections here */}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Button variant="ghost" asChild>
              <Link to="/#projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;