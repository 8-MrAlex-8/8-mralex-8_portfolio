import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Figma,
  ExternalLink,
  Image as ImageIcon,
  FileText,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const featuredProjects = [
  {
    title: "GRREGG Data Management Portal",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Supabase"],
    description: "Production business portal replacing manual workflows.",
    impact:
      "Solely engineered an online business portal for a port reception facility, streamlining document processing and reducing manual work by 75%. Sustained 100 concurrent users at 161ms p95 latency and 0% error rate. \n[ 1.1s FCP · 2.5s LCP · 0 CLS ]",
    images: [
      "/gregg-mockup-0.png",
      "/gregg-mockup-1.jpg",
      "/gregg-mockup-2.jpg",
      "/gregg-mockup-3.png",
      "/gregg-mockup-4.jpg",
    ],
    image: "/grregg-mockup.png",
    color: "bg-purple-900/40",
    border: "border-purple-500/50",
    nda: true,
  },
  {
    title: "Kairus Gadget Shop Inventory Tracking System",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Supabase"],
    description: "Inventory management system for gadgets.",
    impact:
      "Digitized spreadsheet-based tracking operations with a lightweight interface, leading to 80% improved processing efficiency. \n[ 0.4s FCP · 0.8s LCP · 0 CLS ]",
    images: [
      "/kairus-screenshot-0.png",
      "/kairus-screenshot-1.png",
      "/kairus-screenshot-2.png",
      "/kairus-screenshot-3.png",
      "/kairus-screenshot-4.png",
    ],
    image: "/kairus-mockup.png",
    color: "bg-teal-900/40",
    border: "border-teal-500/50",
    nda: true,
  },
  {
    title: "MemoWeave",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "Docker",
      "OpenRouter | GPT-OSS-120B",
    ],
    description: "BSCS Senior Thesis on AI Research.",
    impact:
      "Designed a temporal memory system and 6-stage pipeline (as partial fulfillment of CS Thesis Requirements) to analyze long-form narrative consistency with LLMs, achieving 92.72% accuracy (Cohen’s Kappa = 0.44).",
    images: [
      "/memoweave-screenshot-0.png",
      "/memoweave-screenshot-1.png",
      "/memoweave-screenshot-2.png",
      "/memoweave-screenshot-3.png",
      "/memoweave-screenshot-4.png",
    ],
    image: "/kairus-mockup.png",
    color: "bg-teal-900/40",
    border: "border-teal-500/50",
    nda: false,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: "https://github.com/Santi-Archive/MemoWeave",
      figma:
        "https://www.figma.com/design/lBeFYh2oVEBDLiAEZkUm91/Temporal_Memory_UI?t=5KdlknG8YBDZ8Hlj-1",
      documentation:
        "https://drive.google.com/file/d/18ILEu6Ce2ApcTiwsaCN41aIFfDuVGCl9/view?usp=sharing",
      win_article: null,
    },
  },
  {
    title: "Dockside Hotel",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL"],
    description: "Full-Stack Hotel website and Booking Management System",
    impact:
      "Built a full-stack hotel management system covering authentication, booking, admin CRUD, and core system architecture using foundational technologies. Integrated a scalable MySQL database architecture to handle complex relationships between guests, room categories, and dynamic availability.",
    images: [
      "/dockside-0.png",
      "/dockside-1.png",
      "/dockside-2.png",
      "/dockside-3.png",
      "/dockside-4.png",
      "/dockside-5.png",
    ],
    color: "bg-teal-900/40",
    border: "border-teal-500/50",
    nda: false,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: "https://github.com/Santi-Archive/MemoWeave",
      figma: null,
      documentation: null,
      win_article: null,
    },
  },
];

const mobileProjects = [
  {
    title: "LAPUK",
    tech: ["Kotlin", "YOLOv11", "Flask"],
    description: "AI-powered garbage segregation aid for Android.",
    impact:
      "Built end-to-end mobile → backend → image recognition pipeline with >90% accuracy using YOLOv11 image classification. Handled full Android app development with Kotlin.",
    stats: "Academic Project · Emerging Technologies",
    color: "bg-indigo-900/40",
    border: "border-indigo-500/40",
    accent: "text-indigo-400",
    accentBg: "bg-indigo-900/20",
    accentBorder: "border-indigo-500/20",
    images: [
      "/lapuk-portrait-0.jpg",
      "/lapuk-portrait-1.jpg",
      "/lapuk-portrait-2.jpg",
      "/lapuk-portrait-3.jpg",
      "/lapuk-portrait-4.jpg",
    ],
    nda: false,
    links: {
      github: "https://github.com/gr2ws/lapuk-app-frontend",
      figma:
        "https://www.figma.com/design/ek1zGPQ6HoKQ2sBZl2ltDn/LAPUK-UI?node-id=0-1&t=MVuWpCZ4xP7Cn116-1",
    },
  },
  {
    title: "RoomSync",
    tech: ["React Native", "AI"],
    description: "Smart boardmate matching mobile platform.",
    impact:
      "Led a 7-member Agile team to deliver an AI-driven mobile platform for user-to-rental matching, featuring a self-designed ELO-based recommendation model.",
    stats: "Academic Project · Software Engineering 2",
    color: "bg-cyan-900/40",
    border: "border-cyan-500/40",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-900/20",
    accentBorder: "border-cyan-500/20",
    images: [
      "/roomsync-portrait-0.jpg",
      "/roomsync-portrait-1.jpg",
      "/roomsync-portrait-2.jpg",
      "/roomsync-portrait-3.jpg",
    ],
    nda: false,
    links: {
      mockup_demo: "",
      github: "https://github.com/8-MrAlex-8/roomsync",
      figma: "https://figma.com/file/roomsync",
    },
  },
];

const experienceProjects = [
  {
    title: "Indra Group",
    tech: [
      "HTML/CSS/JS",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Python",
      "MS Power Automate",
      "Figma",
    ],
    description: "Internal automation tools & ETL pipeline.",
    impact: [
      "Contributed to the development and modernization of internal business systems for a major electric distribution utility in the power industry, closing 30% of outstanding team backlogs across development, automation, and UI/UX workstreams over a 280-hour internship.",
      "Designed and Developed full-stack web tools using Figma, HTML, CSS, JavaScript, PHP, Bootstrap, and jQuery.",
      "Engineered a Python-based ETL pipeline, processing 500+ job schedules across 20+ Excel sheets in <5 seconds.",
      "Supported the development of an automated attachment extraction tool in MS Power Automate, reducing 100% of related manual work.",
    ],
    stats: "Internship (Jun-Jul 2025)",
    colSpan: "md:col-span-6",
    color: "bg-slate-800/40",
    nda: true,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: null,
      figma: null,
      documentation: null,
      win_article: null,
    },
  },
  {
    title: "Nudge",
    logo: "/hackathon-logos/nudge-logo.png",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "AI",
    ],
    description: "Pet-based youth mental health web app.",
    impact: [
      "Led frontend development of Nudge, a pet-based youth mental health web app, using React, Typescript, Next.js, and Tailwind CSS.",
      "Coordinated the frontend unit through GitHub for fast-paced collaboration.",
    ],
    stats: "Safeway Philtech 2026 Innovathon",
    colSpan: "md:col-span-3",
    color: "bg-teal-900/20",
    nda: false,
    links: {
      live_site_youth: "https://philtech-innov-su.vercel.app",
      live_site_parent: "https://innovathon-beta.vercel.app",
      mockup_demo: "",
      github: "https://github.com/8-MrAlex-8/philtech-innov-su",
      figma: null,
      documentation: "",
      win_article: null,
    },
  },
  {
    title: "Axolert",
    tech: ["AI"],
    description: "AI public-health monitoring concept.",
    impact: [
      "Led product ideation and system-design efforts for Axolert, an AI public-health and hospital asset monitoring concept.",
      "Delivered the technical pitch, earning Top 5 out of 30 teams in the regional competition.",
    ],
    stats: "AI.DEAS for Impact 2025",
    colSpan: "md:col-span-3",
    color: "bg-pink-900/20",
    nda: false,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: null,
      figma: null,
      documentation: null,
      win_article:
        "https://su.edu.ph/su-team-places-5th-in-regl-ai-hackathon-with-public-health-solution-axolert/",
    },
  },
  {
    title: "AgriFlow",
    tech: ["Figma", "AI"],
    logo: "/hackathon-logos/agriflow-logo.png",
    description: "AI-automated irrigation solution design.",
    impact:
      "Identified agricultural pain points, designed, and pitched an AI-automated irrigation MVP. Earned 1st Runner-Up.",
    stats: "AI.DEAS FOR IMPACT 2024",
    colSpan: "md:col-span-3",
    color: "bg-green-900/20",
    nda: false,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: null,
      figma:
        "https://www.figma.com/design/maJ957R5YRkMj43E8W5uQ8/AgriFlow-UI?node-id=0-1&t=IiIWjdyxEDLsdY8B-1", // Note: link points to axolert in original payload
      documentation: null,
      win_article:
        "https://su.edu.ph/su-ccs-clinches-1st-runner-up-in-ai-pitching-competition/",
    },
  },
  {
    title: "Talleco Job Portal",
    tech: ["React", "Next.js"],
    description: "AI-based job portal prototype.",
    impact:
      "Built and pitched an AI-based job portal prototype. Earned 1st Runner-Up.",
    stats: "Talleco, Inc. Provincial Inter-School Hackathon",
    colSpan: "md:col-span-3",
    color: "bg-blue-900/20",
    nda: false,
    links: {
      live_site_youth: null,
      live_site_parent: null,
      mockup_demo: null,
      github: null,
      figma: null,
      documentation: null,
      win_article: "https://www.facebook.com/share/p/1FF6Y9kFxn/",
    },
  },
];

const dataCaseStudies = [
  {
    title: "Customer Churn Prediction",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    description: "E-commerce churn analysis model.",
    impact:
      "Identified key features leading to 15% reduction in potential churn via predictive modeling.",
    stats: "Data Analysis Case Study",
    image: "/case-study-1.png",
    color: "bg-purple-900/20",
    links: { github: "#" },
  },
  {
    title: "Public Health Sentiment NLP",
    tech: ["Python", "NLTK", "Transformers", "Seaborn"],
    description: "NLP sentiment analysis on social media posts.",
    impact:
      "Processed 10k+ tweets to gauge public sentiment during health crises with 88% model accuracy.",
    stats: "Data Analysis Case Study",
    image: "/case-study-2.png",
    color: "bg-teal-900/20",
    links: { github: "#" },
  },
  {
    title: "Sales Demand Forecasting",
    tech: ["Python", "Prophet", "Statsmodels", "SQL"],
    description: "Time-series forecasting for retail inventory.",
    impact:
      "Forecasted moving average of product demand to optimize supply chain inventory flow.",
    stats: "Data Analysis Case Study",
    image: "/case-study-3.png",
    color: "bg-orange-900/20",
    links: { github: "#" },
  },
];

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full group/carousel bg-transparent">
      <div className="overflow-hidden w-full h-full relative">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} ${idx + 1}`}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
};

// Helper to render links part
const ActionLinks = ({ project }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white hover:text-black rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Source"
        >
          <Github size={14} /> <span>Repo</span>
        </a>
      )}
      {project.links?.figma && (
        <a
          href={project.links.figma}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-purple-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Designs"
        >
          <Figma size={14} /> <span>Figma</span>
        </a>
      )}
      {project.links?.live_site_youth && (
        <a
          href={project.links.live_site_youth}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-blue-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Live Demo"
        >
          <ExternalLink size={14} /> <span>Demo (Youth)</span>
        </a>
      )}
      {project.links?.live_site_parent && (
        <a
          href={project.links.live_site_parent}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-blue-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Live Demo"
        >
          <ExternalLink size={14} /> <span>Demo (Parent)</span>
        </a>
      )}
      {project.links?.mockup_demo && (
        <a
          href={project.links.mockup_demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-indigo-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Mockup"
        >
          <ImageIcon size={14} /> <span>Mockup</span>
        </a>
      )}
      {project.links?.documentation && (
        <a
          href={project.links.documentation}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-orange-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="View Documentation"
        >
          <FileText size={14} /> <span>Docs</span>
        </a>
      )}
      {project.links?.win_article && (
        <a
          href={project.links.win_article}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-green-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10"
          title="Read Article"
        >
          <FileText size={14} /> <span>Article</span>
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-8 z-10 relative"
    >
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32 px-4 md:px-0">
        {/* --- 1. Featured Freelance Projects --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
              Featured
              <br />
              <span className="text-purple-500">Work_</span>
            </h2>
            <div className="text-right">
              <p className="hidden md:block text-slate-400 font-mono text-sm max-w-xs ml-auto mb-2">
                Major work. Major impact.
              </p>
              <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-purple-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-0 lg:gap-12 items-stretch bg-slate-900 border ${project.border} rounded-[2rem] lg:rounded-3xl p-0 lg:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 lg:max-h-[80dvh] lg:min-h-[500px]`}
              >
                <div
                  className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                {/* Content Section (Left on Desktop, Bottom on Mobile) */}
                <div className="w-full lg:w-2/5 xl:w-[35%] relative z-10 flex flex-col h-full justify-center p-6 lg:p-0 order-2 lg:order-1 overflow-y-auto lg:pr-1 xl:pr-2 custom-scrollbar">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] md:text-xs uppercase font-bold text-slate-200 bg-white/5 px-3 py-1.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-6">
                    <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Info size={14} /> Impact & Results
                    </p>
                    <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    {project.nda && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-red-200 uppercase tracking-widest">
                          NDA Protected
                        </span>
                      </div>
                    )}
                    <ActionLinks project={project} />
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                        {project.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Landscape Format Image Section (Right on Desktop, Top on Mobile) */}
                <div className="w-full lg:w-3/5 xl:w-[65%] relative z-10 flex flex-col justify-center order-1 lg:order-2 h-64 sm:h-[22rem] lg:h-auto min-h-0">
                  <div className="w-full h-full rounded-none lg:rounded-2xl overflow-hidden border-b lg:border border-white/10 shadow-xl lg:shadow-2xl lg:group-hover:scale-[1.02] transition-transform duration-500 bg-white/5 backdrop-blur-sm relative">
                    {project.images ? (
                      <ImageCarousel
                        images={project.images}
                        title={project.title}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Fake Data Info Tooltip */}
                    {project.nda && (
                      <div className="absolute top-3 right-3 z-30 group/infotip">
                        <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20 text-white cursor-help hover:bg-black/60 transition-colors shadow-lg">
                          <Info size={16} />
                        </div>
                        <div className="absolute top-full right-0 mt-2 w-48 opacity-0 pointer-events-none group-hover/infotip:opacity-100 transition-opacity bg-slate-900 border border-slate-700 text-xs text-slate-300 p-2.5 text-center rounded-lg shadow-xl z-50">
                          Mock data is used for these images. No part of the NDA
                          for this project is violated.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 2. Mobile Dev --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
              Mobile
              <br />
              <span className="text-indigo-400">Dev_</span>
            </h2>
            <div className="text-right">
              <p className="hidden md:block text-slate-400 font-mono text-sm max-w-xs ml-auto mb-2">
                Native &amp; cross-platform mobile apps.
              </p>
              <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-2/5 bg-indigo-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative flex flex-col md:flex-row gap-0 bg-slate-900 border ${project.border} rounded-[2rem] md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
              >
                <div
                  className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                {/* Left/Bottom — Project Info */}
                <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 md:p-6 lg:p-8 flex-1 min-w-0 order-2 md:order-1">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase font-bold text-slate-200 bg-white/5 px-2.5 py-1 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div
                      className={`${project.accentBg} rounded-xl p-4 border ${project.accentBorder} mb-5`}
                    >
                      <p
                        className={`${project.accent} text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5`}
                      >
                        <Info size={12} /> Impact &amp; Results
                      </p>
                      <p className="text-slate-200 text-xs leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <ActionLinks project={project} />
                    <div className="border-t border-white/10 pt-3">
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                        {project.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right/Top — Portrait Screenshots */}
                <div className="relative z-10 flex-shrink-0 w-full h-[320px] sm:h-[400px] md:h-auto md:w-[180px] lg:w-[220px] bg-black/20 border-b md:border-b-0 md:border-l border-white/5 order-1 md:order-2 flex justify-center py-4 md:py-0">
                  <div className="h-full w-[160px] sm:w-[200px] md:w-full relative group/carousel overflow-hidden shadow-2xl md:shadow-none rounded-2xl md:rounded-none">
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                    />
                    {/* Phone notch overlay for aesthetics */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-black/60 rounded-full z-30 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 3. Experience, Hackathons & School Projects --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
              Internship &
              <br />
              <span className="text-teal-500">Competitions_</span>
            </h2>
            <div className="text-right">
              <p className="hidden md:block text-slate-400 font-mono text-sm max-w-xs ml-auto mb-2">
                Internships, Hackathon Wins, and Academic Projects.
              </p>
              <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-teal-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-auto">
            {experienceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`group relative rounded-2xl border border-white/5 bg-slate-900 hover:border-teal-500/30 transition-all duration-300 flex flex-col ${project.colSpan} overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 ${project.color} opacity-30 group-hover:opacity-50 transition-opacity rounded-2xl`}
                />

                {/* Logo Watermark */}
                <div className="absolute bottom-4 right-4 w-48 h-16 opacity-10 group-hover:opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none transform group-hover:scale-105 group-hover:-rotate-3 z-0">
                  <img
                    src={project.logo}
                    alt="Project Logo"
                    className={project.logo ? "w-full h-full object-contain object-right-bottom filter mix-blend-plus-lighter" : "hidden"}
                  />
                </div>

                <div className="relative z-10 flex-1 p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase font-bold text-slate-300 bg-black/30 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-1">
                          {project.description}
                        </p>

                        <div className="my-4 relative z-10 w-full">
                          <p className="text-teal-400 text-[10px] mb-2 font-bold uppercase tracking-widest">
                            Impact & Results
                          </p>

                          {Array.isArray(project.impact) ? (
                            project.impact.map((impactPoint, i) => (
                              <p
                                key={i}
                                className="text-white text-sm leading-relaxed mb-2"
                              >
                                <span className="text-teal-600 mr-2">•</span>{" "}
                                {impactPoint}
                              </p>
                            ))
                          ) : (
                            <p className="text-white text-sm leading-relaxed mb-2 whitespace-pre-line">
                              <span className="text-teal-600 mr-2">•</span>{" "}
                              {project.impact}
                            </p>
                          )}

                          {index === 0 && (
                            <div className="absolute left-4 -bottom-1.5 w-3 h-3 bg-slate-950 border-b border-r border-teal-500/30 transform rotate-45 hidden md:block" />
                          )}
                        </div>
                      </div>
                    </div>

                    {project.nda && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-red-200 uppercase tracking-widest">
                          NDA Protected
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6">
                    <ActionLinks project={project} />
                    <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                        {project.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 3. Data Case Studies --- */}
        {/* <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
              Data Case
              <br />
              <span className="text-orange-500">Studies_</span>
            </h2>
            <div className="text-right">
              <p className="hidden md:block text-slate-400 font-mono text-sm max-w-xs ml-auto mb-2">
                Practical applications in Data Science and Analytics.
              </p>
              <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-orange-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900 hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual Header * /}
                <div className="h-48 w-full relative border-b border-white/10 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${study.color} mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500`}
                  />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase font-bold text-slate-300 bg-black/30 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="bg-orange-950/20 rounded-lg p-3 border border-orange-500/20 mb-6">
                    <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                      Outcome
                    </p>
                    <p className="text-slate-200 text-xs">{study.impact}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={study.links.github}
                      className="flex items-center gap-2 hover:text-orange-400 transition-colors text-xs font-bold text-slate-300"
                    >
                      View Case Study <ExternalLink size={14} />
                    </a>
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      {study.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
