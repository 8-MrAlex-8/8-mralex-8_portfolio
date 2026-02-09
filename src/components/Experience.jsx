import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Project-Based Full-Stack Developer",
    company: "GRREGG Shore Reception Facility Service Provider",
    period: "NOV 2025 – PRESENT",
    desc: "Solely designed & deployed production portal. Sustained 100 concurrent users.",
    details: [
      "Solely designed, implemented, and deployed a production-ready business portal using Next.js, React, TypeScript, Tailwind CSS, and Supabase, replacing a manual, image-based workflow.",
      "Constructed a reliable backend, sustaining 100 concurrent users at p95 latency of 161ms, ~50 requests/sec throughput, and 0% error rate under load.",
      "Delivered strong client-side performance, achieving Lighthouse score of 88, 1.1s First Contentful Paint, 2.5s Largest Contentful Paint, and 0 Cumulative Layout Shift, while streamlining data submission and validation for organization staff."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Indra Philippines, Inc.",
    period: "JUN 2025 – JUL 2025",
    desc: "Closed 30% of team backlog. Built internal automation tools.",
    details: [
      "Closed 30% of outstanding team backlogs across development, automation, and UI/UX workstreams over a 280-hour internship.",
      "Developed internal full-stack web tools using HTML, CSS, JavaScript, PHP, Bootstrap, and jQuery, guided by self-designed Figma prototypes.",
      "Designed and implemented a Python-based ETL pipeline that processed 500+ job schedules across 22 Excel sheets in <5 seconds, generating CRON expressions and eliminating hours of manual work.",
      "Supported the development of an automated attachment extraction tool using MS Power Automate."
    ]
  }
]

const education = [
  {
    school: "Silliman University",
    degree: "BS Computer Science",
    period: "AUG 2022 – MAR 2026",
    note: "with units in BS Mathematics",
    awards: [
      "Junior-Level Class Honors (2025)",
      "2nd Place: The Brain Blitz – Intercollegiate Mathematics Quiz Bowl",
      "Dean’s List Award (A.Y. 2022-2025)",
      "Highest CQPA Award (A.Y. 2022-2023)"
    ]
  },
  {
    school: "WPH Academy",
    degree: "Summer Coding Bootcamp",
    period: "JUN – JUL 2024",
    note: `Intensive full-stack engineering program focused on  HTML/CSS/JS/C# with security (IIS) and cloud (AWS) fundamentals.
    \nIntegrated Tailwind CSS, jQuery, and SQLite as extra tech exposure on bootcamp capstone projects.`,
    awards: [
      "Top 5 Participant Overall",
      "All-Week Elite 8 Participant"      
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-12 bg-slate-100 text-slate-950">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Experience Column */}
        <div>
          <div className="mb-12 border-b-4 border-slate-950 pb-4">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                 <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                   <h3 className="text-3xl font-bold uppercase group-hover:text-purple-600 transition-colors">{exp.company}</h3>
                   <span className="font-mono font-bold text-sm text-slate-500">{exp.period}</span>
                 </div>
                 <p className="text-xl font-medium text-purple-600 mb-4">{exp.role}</p>
                 <ul className="space-y-2 list-disc pl-5 text-slate-700 font-medium">
                   {exp.details.map((detail, i) => (
                     <li key={i}>{detail}</li>
                   ))}
                 </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Training Column */}
        <div>
          <div className="mb-12 border-b-4 border-slate-950 pb-4">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Education</h2>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border-2 border-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-all duration-300 rounded-2xl"
              >
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold uppercase">{edu.school}</h3>
                   <span className="font-mono text-xs font-bold bg-purple-200 text-purple-900 px-2 py-1 rounded group-hover:bg-purple-600 group-hover:text-white transition-colors">{edu.period}</span>
                 </div>
                 <p className="text-lg font-bold text-purple-600 group-hover:text-purple-300 mb-2">{edu.degree}</p>
                 <p className="text-slate-600 group-hover:text-slate-300 font-medium whitespace-pre-line">{edu.note}</p>
                 <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700 group-hover:text-slate-300 font-medium">
                   {edu?.awards?.map((award, i) => (
                     <li key={i}>{award}</li>
                   ))}
                 </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
