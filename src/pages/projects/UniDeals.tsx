import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase, Tag, Wrench, ChevronLeft, ChevronRight, X } from "lucide-react";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import { OptimizedImage } from "@/components/OptimizedImage";

const UniDeals = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const metadata = {
    title: "UniDeals",
    tagline: "Your campus marketplace to buy and sell peer products fast and securely.",
    description: "A clean and trusted student ecosystem designed to exchange books, electronics, and daily essentials within university borders.",
    year: "2025",
    image: "/images/unideals/banner.png", // Full homepage banner for hero
    liveUrl: "https://unideals.in/",
    duration: "4-6 Months",
    designer: "Anurag Adarsh (Product Design Lead)",
    devTeam: "Sarthak & Kamal (Full Stack Developers)",
    category: "P2P Marketplace Web-App",
    tools: "Figma, React, Tailwind CSS"
  };

  const buySellFlows = [
    {
      title: "Product Search & Initial Contact",
      desc: "Buyer discovers a campus listing and starts a secure chat directly with the student seller.",
      img: "/images/unideals/c1.png"
    },
    {
      title: "Price Negotiation",
      desc: "Buyer proposes a new offer price directly within the conversation window using integrated cash flow options.",
      img: "/images/unideals/c2.png"
    },
    {
      title: "Seller Offer Notification",
      desc: "Seller receives the negotiation offer and can review the user profile of the proposing buyer.",
      img: "/images/unideals/c3.png"
    },
    {
      title: "Seller Counter-Offer",
      desc: "Seller proposes a custom counter-price to find middle ground with the buyer.",
      img: "/images/unideals/c4.png"
    },
    {
      title: "Real-time Negotiation Actions",
      desc: "Both parties can interact with accept, counter, or decline controls instantly.",
      img: "/images/unideals/c5.png"
    },
    {
      title: "Offer Acceptance",
      desc: "The offer is accepted, lock-in price is registered, and transaction tokens are generated.",
      img: "/images/unideals/c6.png"
    },
    {
      title: "Pickup Location & Time Coordination",
      desc: "Integrated scheduling form allows coordinate of safe on-campus pickup spots.",
      img: "/images/unideals/c7.png"
    },
    {
      title: "Delivery & Verification Status",
      desc: "System tracks the exchange progress, keeping both peers informed of meetups.",
      img: "/images/unideals/c8.png"
    },
    {
      title: "Secure Payment & Receipt",
      desc: "Transaction confirmation step confirms successful payment delivery upon hand-to-hand verify.",
      img: "/images/unideals/c9.png"
    },
    {
      title: "Transaction Completion",
      desc: "Deal completes successfully, releasing listings from active boards and prompting peer feedback.",
      img: "/images/unideals/c10.png"
    }
  ];

  // Disable background scrolling when zoom lightbox modal is active
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
      setZoomLevel(1); // Reset zoom level when modal is closed
    }
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [activeImage]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % buySellFlows.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + buySellFlows.length) % buySellFlows.length);
  };

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
                Featured Case Study
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
              <p className="text-sm font-semibold text-gray-800">{metadata.duration}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Product Design</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.designer}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Development</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.devTeam}</p>
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
                <span>Live Project</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Project Case Study Core Structure */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-32">
          
          {/* Section 1: Login & Sign Up Pages */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Login and Sign Up Pages
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Creating a clear way for students to authenticate. The modern, clean, and clear approach reduces signup friction by letting users verify their university credentials instantly, keeping the ecosystem safe and restricted to students.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud1.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud1.png" 
                alt="Login and Sign Up interface designs" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Home Page Component UI */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Home Page Component UI
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Breaking down the core components of the home interface. Details include the header navigation layouts, categories cards for fast sorting, custom dropdown UI for alerts and messages, product cards with border styles, and image banner assets.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud2.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud2.png" 
                alt="Homepage Component UI Breakdown" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Complete Home Page Layout */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Complete Home Page Layout & Search
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Visualizing the full homepage flow from the hero header, category filters, down to the footer. Formatted specifically for a young college audience, the interface includes detailed search filters and UI states that let users navigate college categories in a single view.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud3.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud3.png" 
                alt="Complete Homepage and Search Layout" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 4: Buy & Sell Flow (Refactored Stacked Layout) */}
          <div className="space-y-8">
            {/* Top: Description */}
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Buy & Sell Conversation Flow
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                An end-to-end lookup of the peer negotiation transaction. The slider maps the buyer starting a chat, negotiating the price, the seller proposing counter-prices, accepting/declining, coordinate pickup schedules, and delivery updates.
              </p>
            </div>

            {/* Middle: Active Slide Image */}
            <div 
              onClick={() => setActiveImage(buySellFlows[currentSlide].img)}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto"
                >
                  <OptimizedImage
                    src={buySellFlows[currentSlide].img} 
                    alt={buySellFlows[currentSlide].title} 
                    className="w-full h-auto"
                    imgClassName="w-full h-auto object-contain" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Control Panel */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl mt-6">
              <div className="space-y-1">
                <h4 className="font-semibold text-sm text-gray-800">
                  Step {currentSlide + 1}: {buySellFlows[currentSlide].title}
                </h4>
                <p className="text-xs text-gray-500 max-w-xl leading-relaxed">
                  {buySellFlows[currentSlide].desc}
                </p>
              </div>
              
              {/* Pagination Controls */}
              <div className="flex items-center gap-4 shrink-0 justify-end">
                <button 
                  onClick={handlePrevSlide}
                  className="p-2.5 bg-white border border-gray-100 hover:bg-[#3E40EF]/10 hover:text-[#3E40EF] rounded-full transition-all hover:scale-105 duration-200 cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-sm font-semibold text-gray-700 min-w-[60px] text-center">
                  {currentSlide + 1} / {buySellFlows.length}
                </span>
                <button 
                  onClick={handleNextSlide}
                  className="p-2.5 bg-white border border-gray-100 hover:bg-[#3E40EF]/10 hover:text-[#3E40EF] rounded-full transition-all hover:scale-105 duration-200 cursor-pointer"
                  aria-label="Next step"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 5: Product Listing Flow */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Product Listing & Product Details Page
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Focusing on minimizing entry fields. A 3-step listing process (Details, Media, Preview) ensures students aren't confused. The final product page implements a clean horizontal split-layout displaying high-fidelity imagery and key specifications side-by-side.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud4.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud4.png" 
                alt="Product Listing and Detail page UI layouts" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6: Profile Page UI */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Profile and Settings Dashboard
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Designing user setting panels. This section details profile overview metrics, toggling options for notification alerts, and managing subscription details in a unified layout.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud5.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud5.png" 
                alt="Profile and Settings Dashboard Page UI" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 7: Subscription Model */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Subscription Models & Tier Benefits
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Proposing model changes. Here we outline tier structures and corresponding plan advantages. The proposed screen adjustments highlight custom layout spacing to present core subscription value packages transparently to users.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud6.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud6.png" 
                alt="Subscription Model tier overview" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 8: Mobile Responsiveness */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Responsive Mobile Behavior
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Adapting layouts for compact screens. Focus is on responsive layouts of critical mobile interfaces to ensure clean text sizes, spacing, navigation cards, and clickable touch-targets function natively on handheld viewports.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud7.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud7.png" 
                alt="Responsive mobile screen layouts overview" 
                className="w-full h-auto"
                imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 9: Design System */}
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Scalable Design System
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Formulating colors, typography, color tokens, and spacing parameters. We focused on designing component-based variants in Figma, allowing developers to scale product layouts while keeping visual styles unified.
              </p>
            </div>
            <div 
              onClick={() => setActiveImage("/images/unideals/ud8.png")}
              className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in group relative"
            >
              <OptimizedImage
                src="/images/unideals/ud8.png" 
                alt="Scalable Design System tokens and parameters" 
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
                  I designed this product end-to-end to apply my user experience design skills in a practical, real-world scenario. Throughout this journey, my focus was on learning how digital products are built from scratch: understanding how user flows map to technical requirements, designing structural components in Figma, and maintaining a scalable design system.
                </p>
                <p>
                  The primary aim of this project was to learn, iterate, and discover how to design better user experiences. Through collaborative feedback sessions and continuous design iterations, I worked on enhancing the overall feel, readability, and visual flow of the interface you see here.
                </p>
                <p>
                  Building UniDeals taught me a valuable lesson in product building: while many design changes and iterations happen along the way, they always happen to build a better, more intuitive end product for the user.
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
                    className="w-full h-auto rounded-xl select-none shadow-2xl border border-white/5 mx-auto transition-all duration-300"
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

export default UniDeals;
