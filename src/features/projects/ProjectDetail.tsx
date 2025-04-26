import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Lightbulb, ExternalLink, Figma, Code2, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { DesktopTextReveal, MobileTextReveal } from "@/features/shared/components/magic-ui/TextRevealResponsive";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import ProblemSolutionRow from "@/components/ProblemSolutionRow";
import ProjectDetailsGrid from "@/components/ProjectDetailsGrid";
import { OptimizedImage } from "@/components/OptimizedImage"; // <-- Add this import

const projectsData = [
  // Mock data for projects
  {
    id: "csedvit",
    title: "CSED VIT – Official Club Website",
    year: "2024",
    description: "I led the complete redesign of the official CSED VIT website to give the club a bold digital identity. The goal was to create a clean, modern, and standout UI that felt interactive and engaging across devices. I handled the full UX process—research, wireframing, prototyping, and final implementation—focusing on smooth transitions and intuitive navigation. The result is a responsive, scalable platform that effectively showcases our events, teams, and mission.",
    image: "/images/csedh.webp",
    tags: ["UI Design", "UX Design", "Web Development"],
    role: ["Lead Designer"],
    tools: ["Figma", "VantaJS", "HTML-CSS"],
    category: "UI/UX Website Design",
    liveUrl: "https://csedvit.com",
    githubUrl: "https://github.com/example",
    impact: "Increased user engagement by 150% and reduced project setup time by 60%",
    problem: "The current CSED website does not provide an intuitive, comprehensive platform to effectively showcase the club's diverse activities, projects, and events, making it challenging for users to engage and stay updated.",
    solution: "Design and develop a modern, user-friendly website that highlights CSED's initiatives, events, and projects. The solution will focus on seamless navigation, interactive features, and an attractive layout to enhance engagement.",
    designProcess: ["/images/csedp.webp"],
    designElements: ["/images/csede.webp"],
    finalDesign: ["/images/csedf.webp"],
    figmaEmbedUrl: "https://embed.figma.com/design/q1REgcRqi7YvprzjqT7nPj/CSED-Website?node-id=0-1&embed-host=share",
  },
  {
    id: "campusmart",
    title: "Campus Mart – Your College Marketplace",
    year: "2025",
    description: "Campus Mart is a student-centric web platform designed to simplify on-campus buying, selling, and exchanging of goods. Tailored for college communities, it offers a secure and intuitive space where students can list items, browse deals, and connect with peers. From textbooks and tech to bikes and everyday essentials, Campus Mart brings the campus marketplace online—making student life more affordable, convenient, and connected.",
    image: "/images/campusm.webp",
    tags: ["Product Design", "Mobile App", "Branding"],
    role: ["UI Designer"],
    tools: ["Figma"],
    category: "UI/UX | Web-APP",
    liveUrl: "https://example.com/mybet",
    githubUrl: "https://github.com/example/mybet",
    impact: "Improved user retention by 75% and increased booking conversion rate by 45%",
    problem: "Students often struggle to find a reliable and convenient way to buy or sell second-hand items within the campus, leading to missed opportunities, wasted resources, and increased expenses.",
    solution: "Campus Mart provides a dedicated online marketplace for students to securely buy, sell, and exchange goods within their college community. It streamlines transactions, fosters peer connections, and promotes sustainable, affordable student living.",
    designProcess: ["/images/campusp.webp"],
    designElements: [
      "/images/campuse.webp"],
    finalDesign: ["/images/campusf.webp"]
  },
  {
    id: "cabsync",
    title: "CabSync – Ride Together",
    year: "2019",
    description: "CabSync is a student-focused cab pooling platform designed to simplify and secure transportation to and from campus. It connects students with similar routes and travel times, enabling them to share cabs efficiently. By fostering ride-sharing within the college community, CabSync helps reduce travel costs, ease planning, and promote eco-friendly commuting.",
    image: "/images/cabm.webp",
    tags: ["UX Research", "UI Design", "Prototyping"],
    role: ["UX Designer", "Researcher"],
    tools: ["Sketch", "Principle", "Maze"],
    category: "Mobile App UI/UX",
    liveUrl: "https://example.com/runon",
    githubUrl: "https://github.com/example/runon",
    impact: "Increased landing page conversion by 120% and app downloads by 85% in the first quarter after launch",
    problem: "Students often face difficulty finding safe, affordable, and timely transportation options, especially during peak hours, late nights, or urgent travel situations.",
    solution: "CabSync offers a centralized platform for students to coordinate and share cabs with trusted peers. It ensures cost-effective, secure, and hassle-free travel, making daily commutes smarter and more sustainable.",
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
    id: "imaginum",
    title: "Imaginum Website",
    year: "2025",
    description: "The Imaginum website was crafted to reflect the studio’s creative and tech-driven identity. Designed with a clean, minimal aesthetic, it offers an immersive experience that captures the brand’s essence. The layout emphasizes clarity, storytelling, and smooth transitions to showcase services, team, and selected work. I led the product, UX strategy, and visual direction—ensuring the site feels both modern and purposeful. The result is a high-performance, responsive website that communicates value and builds trust through design",
    image: "/images/imagim.webp",
    tags: ["UI/UX", "Wireframe", "User Research"],
    role: ["Lead Designer"],
    tools: ["Saas WebDesign", "UI/UX", "Figma"],
    category: "Website UI/UX Design",
    liveUrl: "https://vercel.imaginum.app",
    githubUrl: "https://github.com/example/imaginum",
    impact: "Increased average session duration by 145% and reduced bounce rate by 35%",
    problem: "The team needed a bold digital presence to differentiate Imaginum in a competitive creative tech space, while effectively communicating its unique design-driven approach, values, and growing portfolio of innovative projects.",
    solution: "Designed and developed a visually striking, interactive website using clean UI, smooth micro-interactions, and strategic content flow—creating an engaging user journey that showcases Imaginum’s expertise, story, and service offerings with clarity and flair",
    designProcess: ["/images/imagip.webp"],
    designElements: ["/images/imagie.webp"],
    finalDesign: ["/images/imagif.webp"],
    figmaEmbedUrl: "https://embed.figma.com/design/msCrgpYsRe3bsrGf4wJkld/Imaginum-Website-UI?node-id=0-1&embed-host=share",

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
      
      {/* Banner Section */}
      <section className="relative pt-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-lg relative shadow-xl w-full">
              <div className="h-[55vh] md:h-[70vh] lg:h-[75vh]">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white font-manrope"
                  >
                    {project.title}
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-manrope">Project Overview</h2>
            <div className="text-lg md:text-4xl font-medium leading-relaxed text-gray-700">
              <DesktopTextReveal className="hidden md:block" lineIndex={0} totalLines={1}>
              {project.description}              
              </DesktopTextReveal>
              <MobileTextReveal className="block md:hidden" lineIndex={0} totalLines={1}>
              {project.description}     
              </MobileTextReveal>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-12">
          <div className="w-full h-px bg-gray-100"></div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="mt-1 mb-3 md:mt-2 md:mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ProblemSolutionRow 
              problem={project.problem}
              solution={project.solution}
            />
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ProjectDetailsGrid items={projectDetailsItems} />
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-12 md:py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
            <div>
              <h2 className="text-3xl font-bold mb-8 font-manrope text-center">Design Process</h2>
              <div className="aspect-video rounded-lg overflow-hidden w-full">
                <OptimizedImage
                  src={project.designProcess[0]}
                  alt="Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 font-manrope text-center">Design Elements</h2>
              <div className="aspect-video rounded-lg overflow-hidden w-full">
                <OptimizedImage
                  src={project.designElements[0]}
                  alt="Design Elements"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 font-manrope text-center">Final Design</h2>
              <div className="rounded-lg overflow-hidden w-full">
                <OptimizedImage
                  src={project.finalDesign[0]}
                  alt="Final Design"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {project.figmaEmbedUrl && (
              <div>
                <h2 className="text-3xl font-bold mb-8 font-manrope text-center">Figma File</h2>
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={project.figmaEmbedUrl}
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
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
