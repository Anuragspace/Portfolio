import React from "react";
import { Link } from "react-router-dom";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase, Tag, Wrench, Shield } from "lucide-react";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import { OptimizedImage } from "@/components/OptimizedImage";

const UniDeals = () => {
  const metadata = {
    title: "UniDeals",
    tagline: "Your College Marketplace",
    year: "2025",
    image: "/images/campusm.webp",
    liveUrl: "https://campus-mart-five.vercel.app/",
    duration: "3 Months",
    team: "3 Members",
    roles: "Lead Product Designer & UX Researcher",
    category: "College P2P Marketplace Web-App",
    tools: "Figma, React, Tailwind CSS"
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

        {/* Case Study Header & Hero Image */}
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
              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
                {metadata.tagline} — Designing a trusted peer-to-peer student ecosystem for buying, selling, and trading books, tech, and academic essentials.
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative group mt-8">
              <OptimizedImage
                src={metadata.image}
                alt={`${metadata.title} Case Study Cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Team Size</span>
              </div>
              <p className="text-sm font-semibold text-gray-800">{metadata.team}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="h-4 w-4 text-[#3E40EF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">My Roles</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{metadata.roles}</p>
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

        {/* Case Study Body Skeleton */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-16">
          {/* Section: Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sticky top-24">
                Project Overview
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                UniDeals (formerly Campus Mart) is a localized campus peer-to-peer web marketplace built exclusively for students. In the university ecosystem, students frequently buy and sell second-hand academic items (textbooks, draft calculators, reference notes), dorm items, electronics, and small-scale products.
              </p>
              <p>
                However, standard social media groups or general classified ads lack localization, transaction security, and direct student contact methods. UniDeals solves this by structuring product categories, providing instant filtering, and keeping all transaction contacts verified within the university domain.
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: The Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sticky top-24">
                The Challenge
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Students face major friction when listing and searching for peer products inside campus borders:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-gray-800">Lack of Trust:</strong> General platforms do not verify whether the buyer or seller belongs to the same campus, leading to meet-up safety concerns.
                </li>
                <li>
                  <strong className="text-gray-800">Fragmented Information:</strong> Deals are scattered across Whatsapp groups, Slack channels, and print boards, making search difficult.
                </li>
                <li>
                  <strong className="text-gray-800">High Friction:</strong> No unified dashboard exists to quickly browse, categorize, or search for academic-specific needs like reference textbooks.
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: The Goal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sticky top-24">
                The Goal
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Our objective was to design a clean, responsive web application that streamlines local peer-to-peer campus trades. 
              </p>
              <p>
                We aimed to reduce listing steps to under 60 seconds, create structured filtering tools (e.g. filter by course code, dorm, or category), and design a high-fidelity visual experience that matches the modern student's UI expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Home Sticky Button */}
        <HomeButton />

        {/* Footer */}
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default UniDeals;
