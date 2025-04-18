import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Lightbulb, ExternalLink, Figma, Code2, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { DesktopTextReveal, MobileTextReveal } from "@/components/TextRevealResponsive";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import ProblemSolutionRow from "@/components/ProblemSolutionRow";
import ProjectDetailsGrid from "@/components/ProjectDetailsGrid";

const projectsData = [
  // Mock data for projects
  {
    id: "1",
    title: "Peingpo Builder",
    year: "2024",
    description: "I came up with a system that lets companies limit unauthorized users' access, while giving users total freedom to create and close their projects. And it's all in an easy-to-use platform.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    tags: ["UI Design", "UX Design", "Web Development"],
    role: ["Lead Designer", "Frontend Developer"],
    tools: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Application",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    impact: "Increased user engagement by 150% and reduced project setup time by 60%",
    problem: "Companies needed to maintain security for private projects while giving users the freedom to manage their own workspaces. Existing solutions were either too restrictive or lacked proper access controls.",
    solution: "Peingpo Builder implements a role-based permission system with customizable access levels. This allows organizations to define security policies while users can freely create and manage projects within those guardrails.",
    designProcess: [
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ]
  },
  {
    id: "2",
    title: "MyBet Apps",
    year: "2021",
    description: "MyBet Apps is an online Event booking app that had a bad UI/UX design. I noticed the usability problems and created a precise but completely revamped UI to increase user satisfaction and engagement.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    tags: ["Product Design", "Mobile App", "Branding"],
    role: ["UX Researcher", "UI Designer"],
    tools: ["Figma", "Adobe XD", "InVision"],
    category: "Mobile Application",
    liveUrl: "https://example.com/mybet",
    githubUrl: "https://github.com/example/mybet",
    impact: "Improved user retention by 75% and increased booking conversion rate by 45%",
    problem: "The original app had confusing navigation, inconsistent visual elements, and a complex booking process that frustrated users and led to high abandonment rates.",
    solution: "A complete UX overhaul focused on simplifying the booking flow, creating a consistent visual language, and implementing intuitive navigation patterns tailored to user behavior.",
    designProcess: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "3",
    title: "RunOn",
    year: "2019",
    description: "RunOn is a running tracking app with many features, but most users didn't know it existed. Its landing page didn't convey its advanced technology and benefits, leading to low traffic and poor user conversions.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["UX Research", "UI Design", "Prototyping"],
    role: ["UX Designer", "Researcher"],
    tools: ["Sketch", "Principle", "Maze"],
    category: "Web & Mobile App",
    liveUrl: "https://example.com/runon",
    githubUrl: "https://github.com/example/runon",
    impact: "Increased landing page conversion by 120% and app downloads by 85% in the first quarter after launch",
    problem: "The original landing page failed to communicate the app's value proposition effectively. Users couldn't quickly understand the benefits or features that differentiated RunOn from competitors.",
    solution: "Created a new landing page experience with clear product benefits, engaging visuals of the app in action, and a streamlined sign-up process optimized for conversion.",
    designProcess: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1551651653-c5dcb914d809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "4",
    title: "Imaginum Website",
    year: "2023",
    description: "Corporate website design for a creative agency showcasing their portfolio and services with an immersive experience that helps visitors understand the company's values and capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    tags: ["Web Design", "Animation", "Development"],
    role: ["Lead Designer", "Front-end Developer"],
    tools: ["Webflow", "GSAP", "Figma"],
    category: "Website",
    liveUrl: "https://example.com/imaginum",
    githubUrl: "https://github.com/example/imaginum",
    impact: "Increased average session duration by 145% and reduced bounce rate by 35%",
    problem: "The client needed a website that would stand out in a saturated market of creative agencies while effectively showcasing their unique approach and portfolio of work.",
    solution: "Developed an interactive website with subtle animations, immersive scrolling experiences, and a thoughtful information architecture that guides visitors through the agency's story and work.",
    designProcess: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && isVisible) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isVisible]);

  useEffect(() => {
    if (id) {
      const currentProject = projectsData.find(p => p.id === id);
      if (currentProject) {
        setProject(currentProject);
        
        const currentIndex = projectsData.findIndex(p => p.id === id);
        const nextIndex = (currentIndex + 1) % projectsData.length;
        setNextProject(projectsData[nextIndex]);
      }
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#3E40EF]">Loading project details...</div>
      </div>
    );
  }

  const projectDetailsItems = [
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    {
      label: "Tools",
      value: project.tools.map(tool => ({
        name: tool,
        icon: tool.toLowerCase().includes('figma') ? <Figma className="h-5 w-5" /> :
              tool.toLowerCase().includes('react') ? <Code2 className="h-5 w-5" /> : null
      }))
    },
    { 
      label: "Website", 
      value: "Visit Website",
      isLink: true,
      linkUrl: project.liveUrl
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <ProjectPageHeader />
      
      <section className="relative pt-20 w-full">
        <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-2 w-full">
          <div className="w-full max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-lg relative shadow-xl w-full">
              <div className="h-[60vh] md:h-[80vh]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white font-manrope"
                  >
                    {project.title}
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug w-full mb-6">
              <DesktopTextReveal className="text-gray-400" lineIndex={0} totalLines={1}>
                {project.description}
              </DesktopTextReveal>
              <MobileTextReveal className="text-gray-400" lineIndex={0} totalLines={1}>
                {project.description}
              </MobileTextReveal>
            </h3>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-16">
          <div className="w-full h-px bg-gray-100"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <ProblemSolutionRow 
            problem={project.problem}
            solution={project.solution}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProjectDetailsGrid items={projectDetailsItems} />
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-24">
            <div>
              <h2 className="text-4xl font-bold mb-12 font-manrope text-center">Design Process</h2>
              <div className="aspect-video rounded-lg overflow-hidden max-w-5xl mx-auto">
                <img 
                  src={project.designProcess[0]} 
                  alt="Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-12 font-manrope text-center">Design Elements</h2>
              <div className="aspect-video rounded-lg overflow-hidden max-w-5xl mx-auto">
                <img 
                  src={project.designElements[0]} 
                  alt="Design Elements"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-12 font-manrope text-center">Final Design</h2>
              <div className="aspect-video rounded-lg overflow-hidden max-w-5xl mx-auto">
                <img 
                  src={project.finalDesign[0]} 
                  alt="Final Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link 
              to="/#projects" 
              className="flex items-center text-gray-700 hover:text-[#3E40EF] transition-colors font-medium font-manrope"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
            
            {nextProject && (
              <Link 
                to={`/projects/${nextProject.id}`} 
                className="flex items-center text-[#3E40EF] hover:text-[#3E40EF]/80 transition-colors font-medium font-manrope"
              >
                <span>Next Project</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <HomeButton />
    </div>
  );
};

export default ProjectDetail;
