import { motion } from 'framer-motion'
import { Github, Figma, ExternalLink, Image as ImageIcon, FileText, Info } from 'lucide-react'

const projects = [
  {
    title: "GRREGG Data Management Portal",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Supabase"],
    description: "Production business portal replacing manual workflows.",
    impact: "Sustained 100 concurrent users at 161ms p95 latency. 0% error rate under load. 100% digitized workflow. \n[ 1.1s FCP · 2.5s LCP · 0 CLS ]",
    stats: "Solo Dev · Production",
    colSpan: "md:col-span-3", 
    color: "bg-purple-900/20",
    nda: true,
    links: {} // NDA
  },
  {
    title: "Indra Projects",
    tech: ["HTML/CSS/JS", "PHP", "MySQL", "Bootstrap", "jQuery", "Python", "MS Power Automate", "Figma"],
    description: "Internal automation tools & ETL pipeline.",
    impact: "[DEV] Delivered an enterprise-grade SSL and license tracking system for 50+ applications, implementing audit logging, LDAP auth, and centralized expiration management. \n[AUTOMATION] Processed 500+ schedules in <5s. Closed 30% of team backlog.",
    stats: "Internship (Jun-Aug 2025)",
    colSpan: "md:col-span-3",
    color: "bg-slate-800/40",
    nda: true,
    links: {} // NDA
  },
   {
    title: "Nudge",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Supabase", "AI"],
    description: "Pet-based youth mental health web app.",
    impact: "Led frontend delivery. Coordinated rapid execution on React/Next.js MVP under hackathon constraints.",
    stats: "Safeway Philtech 2026 Innovathon",
    colSpan: "md:col-span-4",
    color: "bg-teal-900/20",
    nda: false,
    links: {
      github: "https://github.com/8-MrAlex-8/nudge-frontend", 
      article: null,
      figma: "https://figma.com",
      demo: "https://nudge-demo.vercel.app", 
    }
  },
  {
    title: "Axolert",
    tech: ["AI"],
    description: "AI public-health monitoring concept.",
    impact: "Led product ideation & technical pitch. Placed Top 5 out of 30 teams.",
    stats: "AI.DEAS for Impact 2025",
    colSpan: "md:col-span-2",
    color: "bg-pink-900/20",
    nda: false,
    links: {
      github: null,
      article: "https://news.example.com/axolert-win",
      figma: "https://figma.com/file/axolert",
      demo: "https://nudge-demo.vercel.app"
    }
  },
  {
    title: "AgriFlow",
    tech: ["Figma", "AI"],
    description: "AI-automated irrigation solution design.",
    impact: "Identified agricultural pain points, designed, and pitched an AI-automated irrigation MVP. Earned 1st Runner-Up.",
    stats: "AI for Innovation and Social Impact",
    colSpan: "md:col-span-2",
    color: "bg-green-900/20",
    nda: false,
    links: {
      github: null,
      article: "https://news.example.com/agriflow-win",
      figma: "https://figma.com/file/axolert",
      demo: ""
    }
  },
   {
    title: "Talleco Job Portal",
    tech: ["React", "Next.js"],
    description: "AI-based job portal prototype.",
    impact: "Built and pitched an AI-based job portal prototype. Earned 1st Runner-Up.",
    stats: "Talleco, Inc. Provincial Inter-School Hackathon",
    colSpan: "md:col-span-2",
    color: "bg-blue-900/20",
    nda: true,
    links: {}
  },
   {
    title: "RoomSync",
    tech: ["React Native", "AI"],
    description: "Smart boardmate matching platform.",
    impact: "Led a 7-member Agile team to deliver an AI-driven mobile platform for user-to-rental matching using a self-designed ELO-based recommendation model.",
    stats: "Academic Project · Software Engineering 2",
    colSpan: "md:col-span-2",
    color: "bg-slate-800/40",
    nda: false,
    links: {
      github: "https://github.com/8-MrAlex-8/roomsync",
      article: null,

      figma: "https://figma.com/file/roomsync",
      demo: ""
    }
  },
  {
    title: "LAPUK",
    tech: ["Kotlin", "YOLOv11", "Flask"],
    description: "Garbage segregation aid with AI detection.",
    impact: "Built an AI-powered Android app with YOLOv11 image classification, delivering end-to-end mobile → backend → image recognition + inference flow with >90% accuracy.",
    stats: "Academic Project · Emerging Technologies",
    colSpan: "md:col-span-3",
    color: "bg-indigo-900/20",
    nda: false,
    links: {
      github: "https://github.com/8-MrAlex-8/lapuk-android",
      article: null,
      figma: "https://figma.com/file/lapuk",
      demo: "https://lapuk-android.vercel.app"
    }
  },
  {
    title: "Dockside Hotel",
    tech: ["HTML/CSS/JS", "PHP", "MySQL", "Bootstrap"],
    description: "Complete hotel management system.",
    impact: "Full-stack hotel management system covering auth, booking, admin CRUD, and core system architecture. All from scratch.",
    stats: "Academic Project · Web Technologies",
    colSpan: "md:col-span-3",
    color: "bg-slate-900/60",
    nda: false,
    links: {
      github: "https://github.com/8-MrAlex-8/dockside-hotel",
      article: null,
      figma: "https://figma.com/file/dockside-hotel",
      demo: "https://dockside-hotel.vercel.app"
    }
  },
  
  
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 z-10">
      <div className="max-w-6xl mx-auto"> 
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
              Project<br /><span className="text-purple-500">Highlights_</span>
            </h2>
            <div className="text-right">
              <p className="hidden md:block text-slate-400 font-mono text-sm max-w-xs ml-auto mb-2">
                Production systems, competition wins, and internal tools.
              </p>
              <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-purple-500" />
              </div>
            </div>
        </div>

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`
                 group relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900 
                 hover:border-purple-500/30 transition-all duration-300 flex flex-col
                 ${project.colSpan}
              `}
            >
               {/* Background Tint */}
               <div className={`absolute inset-0 ${project.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
               
               {/* Content Container */}
               <div className="relative z-10 flex-1 p-6 flex flex-col justify-between min-h-[300px]">
                 
                 {/* Top: Tech & Title */}
                 <div>
                   <div className="flex flex-wrap gap-2 mb-3">
                     {project.tech.map((tech, i) => (
                       <span key={i} className="text-[10px] uppercase font-bold text-slate-300 bg-black/30 px-2 py-1 rounded">
                         {tech}
                       </span>
                     ))}
                   </div>
                   
                   <div className="flex flex-col gap-4">
                     <div>
                       <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                       <p className="text-slate-300 text-sm leading-relaxed mb-1">
                          {project.description}
                       </p>
                       
                       {/* IMPACT TRIGGER */}
                       <div className="group/impact relative inline-block mt-2 cursor-help">
                          <span className="text-xs font-bold text-purple-400 bg-purple-900/20 px-2 py-0.5 rounded border border-purple-500/20 flex items-center gap-1 hover:bg-purple-900/40 transition-colors w-max">
                            <Info size={12} /> Impact? Metrics? Wins?
                          </span>
                          
                          {/* IMPACT OVERLAY (Tooltip style) */}
                          <div className="absolute left-0 bottom-full mb-3 w-72 md:w-96 bg-slate-950/95 backdrop-blur-xl border border-purple-500/30 p-4 rounded-xl shadow-2xl opacity-0 group-hover/impact:opacity-100 pointer-events-none transition-all duration-200 z-[100] translate-y-2 group-hover/impact:translate-y-0 text-left">
                              <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-1">Impact & Results</p>
                              <p className="text-white text-sm leading-relaxed whitespace-pre-line">{project.impact}</p>
                              {/* Connector arrow */}
                              <div className="absolute left-4 -bottom-1.5 w-3 h-3 bg-slate-950 border-b border-r border-purple-500/30 transform rotate-45" />
                          </div>
                      </div>

                     </div>
                   </div>

                   {project.nda && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-red-200 uppercase tracking-widest">NDA Protected</span>
                      </div>
                   )}
                 </div>
                 
                 {/* Bottom: Actions & Stats */}
                 <div className="mt-auto">
                    {/* ACTION BUTTONS (Always Visible) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                       {/* GitHub */}
                       {project.links?.github && (
                         <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white hover:text-black rounded-lg text-xs font-bold transition-all border border-white/10" title="View Source">
                           <Github size={14} /> <span>Repo</span>
                         </a>
                       )}
                       
                       {/* Figma */}
                       {project.links?.figma && (
                         <a href={project.links.figma} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-purple-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10" title="View Designs">
                           <Figma size={14} /> <span>Figma</span>
                         </a>
                       )}

                       {/* Demo */}
                       {project.links?.demo && (
                         <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-blue-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10" title="View Live Demo">
                           <ExternalLink size={14} /> <span>Demo</span>
                         </a>
                       )}

                       {/* Article */}
                       {project.links?.article && (
                         <a href={project.links.article} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-green-500 hover:text-white rounded-lg text-xs font-bold transition-all border border-white/10" title="Read Article">
                           <FileText size={14} /> <span>Article</span>
                         </a>
                       )}
                       
                       {/* Placeholder Gallery */}
                       {!Object.keys(project.links || {}).length && !project.nda && (
                          <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 text-slate-500 rounded-lg text-xs font-bold transition-all border border-white/5 cursor-not-allowed">
                             <ImageIcon size={14} /> <span>Gallery</span>
                          </button>
                       )}
                    </div>

                    <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                        <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{project.stats}</span>
                    </div>
                 </div>

               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
