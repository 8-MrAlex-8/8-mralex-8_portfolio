import { motion } from 'framer-motion'
import { useRef } from 'react'

const allSkills = [
  // Languages
  { name: "HTML", icon: "html.svg", size: "xl" },
  { name: "CSS", icon: "css.svg", size: "xl" },
  { name: "JavaScript", icon: "js.svg", size: "lg" },
  { name: "TypeScript", icon: "js.svg", size: "md" },
  { name: "Python", icon: "python.svg", size: "lg" },
  { name: "C#", icon: "csharp.png", size: "md" },
  { name: "PHP", icon: "php.svg", size: "xl" },
  { name: "Kotlin", icon: "kotlin.svg", size: "md" },
  { name: "SQL", icon: "mysql.png", size: "xl" },
  
  // Frameworks & Libraries
  { name: "React", icon: "react.svg", size: "lg" },
  { name: "Next.js", icon: "next.png", size: "xl" },
  { name: "React Native", icon: "react-native.svg", size: "lg" },
  { name: "Node.js", icon: "js.svg", size: "md" },
  { name: "Tailwind", icon: "tailwind.png", size: "xl" },
  { name: "Bootstrap", icon: "bootstrap.png", size: "md" },
  { name: "Flask", icon: "flask.svg", size: "md" },
  { name: ".NET", icon: "NET.svg", size: "md" },
  { name: "jQuery", icon: "jquery.svg", size: "md" },
  
  // Tools, Cloud & DB
  { name: "Supabase", icon: "supabase.svg", size: "lg" },
  { name: "AWS", icon: "aws.svg", size: "md" },
  { name: "MSSQL", icon: "mssqls.svg", size: "md" },
  { name: "Git", icon: "github.png", size: "lg" },
  { name: "Postman", icon: "postman.svg", size: "md" },
  { name: "Figma", icon: "figma.svg", size: "xl" },
  { name: "Tableau", icon: "tableau.svg", size: "md" },
  { name: "VS Code", icon: "vscode.svg", size: "md" },
  { name: "Notion", icon: "notion.svg", size: "md" },
  { name: "Trello", icon: "trello.svg", size: "md" },
]

const Skills = () => {
  const containerRef = useRef(null)

  return (
    <section id="skills" className="py-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
           <div className="text-center md:text-left">
             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-2">
               Tech Stack
             </h2>
             <p className="text-slate-500 font-medium max-w-md">
               The languages, frameworks, and tools I use to build robust applications.
             </p>
           </div>
        </div>
        
        {/* Chaos Cloud Layout - Refined Sizing */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto min-h-[500px]" ref={containerRef}>
          {allSkills.map((skill, i) => (
             <motion.div
               key={i}
               drag
               dragConstraints={containerRef}
               whileHover={{ scale: 1.1, zIndex: 10 }}
               whileTap={{ scale: 0.95 }}
               className={`
                 relative flex items-center justify-center bg-white rounded-full border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md hover:border-purple-400 transition-colors
                 ${skill.size === 'xl' ? 'w-32 h-32 md:w-40 md:h-40' : 
                   skill.size === 'lg' ? 'w-24 h-24 md:w-32 md:h-32' :
                   'w-20 h-20 md:w-24 md:h-24'}
               `}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.02 }}
             >
                <div className="flex flex-col items-center gap-1 p-2">
                  <img 
                    src={`/skills-stamp/${skill.icon}`} 
                    alt={skill.name} 
                    className="w-[40%] h-[40%] object-contain pointer-events-none" 
                  />
                  <span className="font-bold text-slate-700 text-[10px] uppercase tracking-wider">{skill.name}</span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
