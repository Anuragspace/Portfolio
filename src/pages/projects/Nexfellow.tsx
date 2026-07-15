import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase, Tag, Wrench, X } from "lucide-react";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import { OptimizedImage } from "@/components/OptimizedImage";

const Nexfellow = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const metadata = {
    title: "Nexfellow",
    tagline: "Student Growth, Gamification & Identity Verification Platform.",
    description: "Designing intuitive user flows, verification boards, contest widgets, and administration consoles to boost student fellowship engagement.",
    year: "2025",
    image: "/images/nexfellow/admin panel_nf8.png", // Admin dashboard for hero banner
    liveUrl: "https://nexfellow.com/",
    duration: "3 Months (May 2025 - July 2025)",
    designer: "Anurag Adarsh (Product / UI/UX Designer)",
    company: "Nexfellow",
    category: "Mentorship & E-Learning Platform",
    tools: "Figma"
  };

  // Lock background body scroll when Zoom Modal is active
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [activeImage]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
        {/* Sticky Header */}
        <ProjectPageHeader />

        {/* Back Button Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#3E40EF] transition-colors group font-medium text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        {/* Case Study Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Title Block */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3E40EF]/5 text-[#3E40EF] rounded-full text-xs font-semibold uppercase tracking-wider">
                Featured Internship Project
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                {metadata.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-4xl leading-relaxed">
                {metadata.tagline} {metadata.description}
              </p>
            </div>

            {/* Tall Hero Banner Image (Clickable for zoom) */}
            <div 
              onClick={() => setActiveImage(metadata.image)}
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative group mt-8 cursor-zoom-in"
            >
              <OptimizedImage
                src={metadata.image}
                alt={`${metadata.title} Case Study Cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />
            </div>
          </motion.div>
        </section>

        {/* Project Metadata Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-gray-100 my-8 bg-gray-50/50 rounded-2xl px-6 md:px-8"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Duration</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.duration}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">My Role</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.designer}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Company</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.company}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Tag className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Category</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.category}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Wrench className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Design Tools</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.tools}</p>
            </div>

            <div className="space-y-1.5 flex flex-col justify-center">
              <a
                href={metadata.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#3E40EF] text-white rounded-full text-xs font-semibold hover:bg-[#3E40EF]/90 transition-all shadow-sm hover:shadow-md hover:scale-[1.03]"
              >
                <span>Platform Link</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Project Case Study Core Structure */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-32">
          
          {/* Section 1: Login and Sign Up Pages */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Login and Sign Up Pages
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Creating a seamless gateway for students. The onboarding experience focuses on university validation, setting up a secure and fast registration flow to verify eligible fellowship candidates.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/loginsignup_nf1.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/loginsignup_nf1.png" 
                alt="Login and Sign Up dashboard mockups" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Gamified Quiz Flow */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Gamified Assessment Quiz Flow
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Designing interactive quiz templates. Gamifying the skill assessment steps ensures student candidates remain engaged while the platform maps their strengths for fellowship assignment.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/quizflow_nf2.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/quizflow_nf2.png" 
                alt="Gamified assessment quiz flow design" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Context & Leaderboard UI */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Context & Leaderboard UI
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Promoting peer support and active learning. The standings dashboard tracks student score metrics, active study streaks, and ranks them on dynamic leaderboard tables.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/context_leaderboard_nf3.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/context_leaderboard_nf3.png" 
                alt="Leaderboard and accomplishment panels" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 4: Workspace Panel */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Workspace Panel & Context Switching
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Formulating cohesive learning spaces. The context panel allows fellows to toggle between study tracks, active code challenges, and peer discussion panels side-by-side.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/context panel_nf4.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/context panel_nf4.png" 
                alt="Workspace Context Panel" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 5: Modal Notification Streams */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Modal Notification Streams
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Keeping students updated. The overlay alerts panel acts as a unified feed for mentorship feedback, deadline reminders, grades, and peer direct chats.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/Notifications_nf5.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/Notifications_nf5.png" 
                alt="Overlay Notifications panel interface" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6: Applicant Verification */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Applicant Verification & Update Boards
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Establishing credential integrity. The identity verification dashboard tracks applicant submissions, accompanied by a 'What's New' panel displaying latest features.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/getverified and whats new_nf6.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/getverified and whats new_nf6.png" 
                alt="Identity Verification and updates log dashboard" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 7: Central Challenges */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                CENTRAL Challenges & Coding Contests
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Driving competitive learning. The hub aggregates hackathons, certificate contests, and coding marathons, letting fellows enroll and review requirements in one place.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/challenges_contest_nf7.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/challenges_contest_nf7.png" 
                alt="Contests and Competitive Challenges portal" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 8: Platform Administration Panel */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Platform Administration Panel
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Empowering platform managers. The admin console aggregates user management statistics, student growth metrics, verification reviews, and backend system settings.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/nexfellow/admin panel_nf8.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/nexfellow/admin panel_nf8.png" 
                alt="Backend Admin Panel Dashboard console" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

        </section>

        {/* Designer Reflection / Note to Partners (Creative Asymmetric Layout) */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 mb-12 border-t border-gray-100 mt-20 relative">
          {/* Soft background glow */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#3E40EF]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden shadow-md shadow-[#3E40EF]/10 border border-gray-100 flex-shrink-0">
                  <OptimizedImage
                    src="/images/profilepiclinkedin.png"
                    alt="Anurag Adarsh"
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900">Anurag Adarsh</h3>
                  <p className="text-xs text-[#3E40EF] font-semibold tracking-wider uppercase">Product / UI/UX Designer</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-500 border-l-2 border-[#3E40EF]/20 pl-4 py-1">
                <p>Bridging creative product strategy with technical front-end layouts.</p>
                <p className="text-xs text-gray-400">Available for design opportunities.</p>
              </div>
            </div>

            {/* Right Column: Message Letter */}
            <div className="lg:col-span-8 space-y-6 relative">
              <span className="absolute -top-12 -left-6 text-9xl font-serif text-[#3E40EF]/10 select-none pointer-events-none">“</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Designing for Impact, Learning Through Execution
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  During my 3-month tenure as a UI/UX Design Intern at Nexfellow, I had the privilege of mapping high-fidelity student user flows, designing administrative pipelines, and building modular dashboard grids. This experience taught me how to align complex user features with clean interface hierarchies.
                </p>
                <p>
                  Collaborative feedback cycles with growth managers and developers shaped my workflow, teaching me to iterate rapidly to solve real UX blockers. From gamified assessment pages to admin analytics, my goal was always to design an engaging, highly functional product experience.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Lightbox / Zoom Portal Modal (Scrollable, hides scrollbars, locks background page scroll) */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 overflow-y-auto no-scrollbar p-4 md:p-8 cursor-zoom-out"
              onClick={() => setActiveImage(null)}
              data-lenis-prevent="true"
            >
              {/* Floating Header Actions (Fixed at the top right) */}
              <div className="fixed top-6 right-6 flex items-center gap-3 z-50">
                {/* Floating Zoom Magnification Pill */}
                <div 
                  className="flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-white text-xs font-semibold select-none gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setZoomLevel(prev => Math.max(1, prev - 1))}
                    disabled={zoomLevel === 1}
                    className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer font-bold text-sm w-5 h-5 flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="min-w-[20px] text-center">{zoomLevel}x</span>
                  <button 
                    onClick={() => setZoomLevel(prev => Math.min(3, prev + 1))}
                    disabled={zoomLevel === 3}
                    className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer font-bold text-sm w-5 h-5 flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => setActiveImage(null)}
                  className="text-white/70 hover:text-white transition-all p-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:scale-110 duration-200 cursor-pointer"
                  aria-label="Close image zoom"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Zoom Content wrapper (allows standard vertical and horizontal scroll contexts) */}
              <div
                className="min-h-full flex items-start justify-center py-10 md:py-16"
                onClick={() => setActiveImage(null)} // Click outside to close
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="relative transition-all duration-300 ease-out"
                  style={{
                    width: zoomLevel === 1 ? "100%" : zoomLevel === 2 ? "180%" : "260%",
                    maxWidth: zoomLevel === 1 ? "896px" : "none", // 896px = max-w-4xl
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent close on clicking the image container
                    // Toggle zoom on click between 1x and 2x
                    setZoomLevel(prev => prev === 1 ? 2 : 1);
                  }}
                >
                  <img
                    src={activeImage}
                    alt="Zoomed product mockup"
                    className="w-full h-auto object-contain rounded-xl select-none shadow-2xl border border-white/5 mx-auto transition-all duration-300"
                    style={{
                      cursor: zoomLevel === 1 ? "zoom-in" : "zoom-out"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Home Sticky Button */}
        <HomeButton />

        {/* Footer */}
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default Nexfellow;
