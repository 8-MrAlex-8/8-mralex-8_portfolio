import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance Full-Stack Web Developer",
    company: "GRREGG Shore Reception Facility Service Provider",
    period: "NOV 2025 – PRESENT",
    desc: "Solely designed & deployed production portal. Sustained 100 concurrent users.",
    details: [
      "Engineered an online business portal for a facilities management company, streamlining document processing and reducing manual work by 75%.",
      "Built a performant frontend using React/TS, Next.js, and Tailwind CSS (Lighthouse: 88, 1.1s FCP, 2.5s LCP, 0 CLS).",
      "Engineered a robust backend supporting 100+ concurrent users (p95: 161ms, ~50 req/s, 0% error rate).",
    ],
  },
  {
    role: "Freelance Full-Stack Web Developer",
    company: "Kairus Gadget Shop",
    period: "FEB 2026 – APRIL 2026",
    desc: "Self-engineered role-based inventory management system with authentication and lightweight UI.",
    details: [
      "Engineered a role-based web inventory system to digitize manual spreadsheet workflows and improve efficiency by 80%; Implemented robust, test-driven form validation using React Hook Form and Zod for data integrity.",
      "Produced lightweight UI with Tailwind CSS, yielding Lighthouse scores of 99, 0.4s FCP, 0.8s LCP, and 0 CLS.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Indra Group",
    period: "JUN 2025 – JUL 2025",
    desc: "Closed 30% of team backlog. Built internal automation tools.",
    details: [
      "Closed 30% of outstanding team backlogs across development, automation, and UI/UX workstreams over a 280-hour internship.",
      "Designed and developed full-stack web tools using Figma, HTML, CSS, JavaScript, PHP, Bootstrap, and jQuery.",
      "Engineered a Python-based ETL pipeline, processing 500+ job schedules across 20+ Excel sheets in <5 seconds.",
      "Supported the development of an automated attachment extraction tool in MS Power Automate, reducing 100% of related manual work.",
    ],
  },
];

const education = [
  {
    school: "Silliman University",
    degree: "BS Computer Science with units in BS Mathematics",
    period: "AUG 2022 – MAR 2026",
    awards: [
      "Junior-Level Class Honors (2025)",
      "2nd Place: The Brain Blitz – Intercollegiate Mathematics Quiz Bowl",
      "Dean’s List Award (A.Y. 2022-2025)",
      "Highest CQPA Award (A.Y. 2022-2023)",
    ],
  },
  {
    school: "WPH Academy",
    degree: "Summer Coding Bootcamp",
    period: "JUN – JUL 2024",
    note: `Intensive full-stack engineering program focused on  HTML/CSS/JS/C# with security (IIS) and cloud (AWS) fundamentals.
    \nIntegrated Tailwind CSS, jQuery, and SQLite as extra tech exposure on bootcamp capstone projects.`,
    awards: ["Top 5 Participant Overall", "All-Week Elite 8 Participant"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 md:py-20 px-4 sm:px-12 bg-slate-100 text-slate-950"
    >
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Experience Column */}
        <div>
          <div className="mb-12 border-b-4 border-slate-950 pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Experience
            </h2>
          </div>

          <div className="space-y-12 px-6">
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
                  <h3 className="text-2xl font-bold uppercase md:group-hover:text-purple-600 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="mt-2 md:mt-0 font-mono font-bold text-sm text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xl font-medium text-purple-600 mb-4">
                  {exp.role}
                </p>
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
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Education and Training
            </h2>
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
                <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold uppercase">{edu.school}</h3>
                  <span className="font-mono text-xs font-bold bg-purple-200 text-purple-900 px-2 py-1 rounded group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg font-bold text-purple-600 group-hover:text-purple-300 mb-2">
                  {edu.degree}
                </p>
                <p className="text-slate-600 group-hover:text-slate-300 font-medium whitespace-pre-line">
                  {edu.note}
                </p>
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
  );
};

export default Experience;
