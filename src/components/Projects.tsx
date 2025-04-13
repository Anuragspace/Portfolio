
import React, { memo } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { RainbowButton } from "@/components/RainbowButton";
import { WhiteRainbowButton } from "@/components/WhiteRainbowButton";
import { motion, LazyMotion, domAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Memoized project card for better performance
const ProjectCard = memo(({ project, index }: { project: Project; index: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full"
    >
      <motion.div 
        className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 md:p-5 bg-white relative"
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.2 }
        }}
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4`}>
          {/* Text Content Section - 40% */}
          <div 
            className={`relative w-full md:w-[40%] p-4 md:p-6 flex flex-col justify-between rounded-xl overflow-hidden ${
              index % 2 === 0 
                ? 'bg-[#fafafa] text-gray-800' 
                : 'bg-[#3E40EF] text-white'
            }`}
          >
            <div>
              <div className="mb-3">
                <span 
                  className={`block text-sm mb-1 font-medium ${
                    index % 2 === 0 ? 'text-[#3E40EF]' : 'text-blue-100'
                  }`}
                >
                  {project.year}
                </span>
                <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
              </div>
              
              <p className={`mb-4 ${index % 2 === 0 ? 'text-gray-600' : 'text-blue-100'} text-sm md:text-base`}>
                {project.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
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
            
            {/* Project Buttons */}
            {index === 0 || index === 2 ? (
              <div className="relative w-full">
                <RainbowButton className="mt-auto w-full justify-center sm:justify-between">
                  <Link to={`/projects/${project.id}`} className="flex items-center text-sm">
                    View Project
                    <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </RainbowButton>
              </div>
            ) : (
              <div className="relative w-full">
                <WhiteRainbowButton className="mt-auto w-full justify-center sm:justify-between">
                  <Link to={`/projects/${project.id}`} className="flex items-center text-sm">
                    View Project
                    <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </WhiteRainbowButton>
              </div>
            )}
            
            {/* Animated circular element */}
            <div 
              className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-0 group-hover:scale-100 ${
                index % 2 === 0 ? 'bg-[#3E40EF]' : 'bg-white'
              }`}
            />

            {/* Border Beam Effect */}
            <BorderBeam 
              colorFrom={index % 2 === 0 ? "#3E40EF" : "#ffffff"} 
              colorTo={index % 2 === 0 ? "#6366F1" : "#D6BCFA"} 
              size={32} 
              duration={8}
              delay={index * 0.5}
              reverse={index % 2 !== 0}
            />
          </div>
          
          {/* Image Section - 60% */}
          <div className="w-full md:w-[60%] h-full overflow-hidden rounded-xl md:mx-0 mt-1 md:mt-0 order-first md:order-none">
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

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
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section-padding py-14 md:py-16 bg-gray-50 relative overflow-hidden">
        {/* Background patterns - lighter for performance */}
        <AnimatedGridPattern
          numSquares={24}
          maxOpacity={0.08}
          duration={4}
          repeatDelay={2}
          className="absolute inset-x-[-20%] inset-y-[0%] w-[60%] h-[60%] skew-y-12 text-[#3E40EF]/80 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />

        <div className="container-custom">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-4">My Design Work That Stands Out</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Crafting intuitive digital experiences that solve real problems and delight users across platforms and industries.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#3E40EF]"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(Projects);
