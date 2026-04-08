import { motion } from "framer-motion";
import { useRef } from "react";

const allSkills = [
  // Languages
  { name: "HTML", icon: "html.svg", size: "lg" },
  { name: "CSS", icon: "css.svg", size: "lg" },
  { name: "JavaScript", icon: "js.svg", size: "lg" },
  { name: "TypeScript", icon: "typescript.png", size: "md" },
  { name: "Python", icon: "python.svg", size: "lg" },
  { name: "C#", icon: "csharp.png", size: "md" },
  { name: "PHP", icon: "php.svg", size: "lg" },
  { name: "Kotlin", icon: "kotlin.svg", size: "md" },
  { name: "SQL", icon: "mysql.png", size: "lg" },

  // Frameworks & Libraries
  { name: "React", icon: "react.svg", size: "lg" },
  { name: "Next.js", icon: "next.png", size: "lg" },
  { name: "React Native", icon: "react-native.svg", size: "md" },
  { name: "Node.js", icon: "node.png", size: "md" },
  { name: "Tailwind", icon: "tailwind.png", size: "lg" },
  { name: "Bootstrap", icon: "bootstrap.png", size: "md" },
  { name: "Flask", icon: "flask.svg", size: "sm" },
  { name: ".NET", icon: "NET.svg", size: "md" },
  { name: "jQuery", icon: "jquery.svg", size: "md" },

  // Tools, Cloud & DB
  { name: "Supabase", icon: "supabase.svg", size: "lg" },
  { name: "AWS", icon: "aws.svg", size: "md" },
  { name: "MSSQL", icon: "mssqls.svg", size: "md" },
  { name: "Git", icon: "github.png", size: "lg" },
  { name: "Postman", icon: "postman.svg", size: "md" },
  { name: "Figma", icon: "figma.svg", size: "lg" },
  { name: "Tableau", icon: "tableau.svg", size: "md" },
  { name: "VS Code", icon: "vscode.svg", size: "md" },
  { name: "Notion", icon: "notion.png", size: "md" },
  { name: "Trello", icon: "trello.svg", size: "md" },
];

const Skills = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="skills"
      className="py-20 overflow-hidden bg-slate-50 text-slate-950 relative"
    >
      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      {/* Decorative Soft Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-2">
              Tech Stack
            </h2>
            <p className="text-slate-500 font-medium max-w-md">
              Check out the languages, frameworks, and tools I use to build
              robust applications!
            </p>
          </div>
        </div>

        {/* Chaos Cloud Layout - Refined Sizing */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto min-h-[500px]"
          ref={containerRef}
        >
          {allSkills.map((skill, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={containerRef}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`
                 relative flex items-center justify-center bg-white rounded-full border border-purple-100 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-xl hover:border-purple-400 hover:scale-110 transition-all duration-300
                 ${
                   skill.size === "lg"
                     ? "w-24 h-24 md:w-32 md:h-32"
                     : skill.size === "md"
                       ? "w-20 h-20 md:w-24 md:h-24"
                       : "w-16 h-16 md:w-20 md:h-20"
                 }
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
                <span className="font-bold text-slate-700 text-[10px] uppercase tracking-wider">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
