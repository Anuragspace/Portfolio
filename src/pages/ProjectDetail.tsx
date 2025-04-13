import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/RainbowButton";
import { BlurFade } from "@/components/BlurFade";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { DesktopTextReveal, MobileTextReveal } from "@/components/TextRevealResponsive";
import ProblemSolution from "@/components/ProblemSolution";
import ProjectDetailsList from "@/components/ProjectDetailsList";
import ProjectSlider from "@/components/ProjectSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import { motion } from "framer-motion";

// Mock data for projects
const projectsData = [
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
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
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
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1529119513321-351b5b39ae97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "3",
    title: "RunOn",
    year: "2019",
    description: "RunOn is a running tracking app with many features, but most users didn't know it existed. Its landing page didn't convey its advanced technology and benefits, leading to low traffic and poor user conversions.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1551651653-c5dcb914d809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "4",
    title: "Imaginum Website",
    year: "2023",
    description: "Corporate website design for a creative agency showcasing their portfolio and services with an immersive experience that helps visitors understand the company's values and capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80"
    ],
    designElements: [
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
    ],
    finalDesign: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  
  // Fetch project data based on id
  useEffect(() => {
    if (id) {
      const currentProject = projectsData.find(p => p.id === id);
      if (currentProject) {
        setProject(currentProject);
        
        // Find next project (cycle back to first if this is the last)
        const currentIndex = projectsData.findIndex(p => p.id === id);
        const nextIndex = (currentIndex + 1) % projectsData.length;
        setNextProject(projectsData[nextIndex]);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#3E40EF]">Loading project details...</div>
      </div>
    );
  }

  // Prepare project details for display
  const projectDetails = [
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    { label: "Tools", value: project.tools },
    { 
      label: "Website", 
      value: "Visit Website", 
      isLink: true,
      linkUrl: project.liveUrl 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with Banner */}
      <section className="relative h-[85vh] overflow-hidden pt-20">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-24">
            <BlurFade direction="up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                {project.impact}
              </p>
              
              {/* Hero buttons with equal width */}
              <div className="flex flex-wrap gap-4">
                <RainbowButton className="w-36">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center"
                  >
                    Visit Site
                  </a>
                </RainbowButton>
                
                <Button variant="outline" className="w-36 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center"
                  >
                    View Code
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Project Description with Text Reveal Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Project Overview</h2>
            
            {/* Text Reveal Animation (Different for Mobile/Desktop) */}
            <DesktopTextReveal lineIndex={0} totalLines={5} className="mb-6">
              {project.description}
            </DesktopTextReveal>
            
            <MobileTextReveal lineIndex={0} totalLines={5} className="mb-6">
              {project.description}
            </MobileTextReveal>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Challenge & Solution</h2>
          <ProblemSolution 
            problem={project.problem}
            solution={project.solution}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Project Details</h2>
          <ProjectDetailsList 
            items={projectDetails}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ProjectSlider 
            images={project.designProcess}
            title="Design Process"
            className="max-w-5xl mx-auto mb-24"
          />
          
          <ProjectSlider 
            images={project.designElements}
            title="Design Elements"
            className="max-w-5xl mx-auto mb-24"
          />
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Final Design</h2>
            <motion.img 
              src={project.finalDesign[0]}
              alt="Final design"
              className="w-full h-auto rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Button variant="ghost" asChild className="rounded-full">
              <Link to="/#projects" className="flex items-center px-6 py-3">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            {nextProject && (
              <Button variant="default" asChild className="rounded-full bg-[#3E40EF] hover:bg-[#3E40EF]/90">
                <Link to={`/projects/${nextProject.id}`} className="flex items-center px-6 py-3">
                  <span>Next Project: {nextProject.title}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Home Button - Side floating button for back to top */}
      <HomeButton />
    </div>
  );
};

export default ProjectDetail;