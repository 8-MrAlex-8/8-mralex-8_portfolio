const educationData = [
  {
    id: 1,
    level: "College",
    school: "Silliman University",
    batch: "[Batch 2026] B.S. Computer Science",
    bgColor: "bg-red-600/20",
    badgeColor: "bg-rose-800/30 border-amber-700/40",
    subtitleColor: "text-cyan-500",
    borderColor: "border-red-300/40",
    shadowColor: "rgba(6,182,212,0.25)",
    awards: [
      "Level III Class Honors",
      "3-Year Dean's Lister",
      "Highest CQPA Award",
      "Brain Blitz: Inter-Collegiate Math Quiz Bowl - 2nd Place",
    ],
  },
  {
    id: 2,
    level: "College",
    school: "University of Santo Tomas",
    batch: "[A.Y. 2020-2021] B.S. Accountancy",
    bgColor: "bg-amber-200/40",
    badgeColor: "bg-amber-800/30 border-amber-500/20",
    subtitleColor: "text-teal-400",
    borderColor: "border-amber-200/50",
    shadowColor: "rgba(6,182,212,0.25)",
    awards: ["1-Year Dean's Lister"],
  },
  {
    id: 3,
    level: "Senior High School",
    school: "University of Santo Tomas",
    batch: "[Batch 2020] Accountancy, Business, and Management (ABM) Strand",
    bgColor: "bg-amber-200/40",
    badgeColor: "bg-amber-800/30 border-amber-500/20",
    subtitleColor: "text-teal-400",
    borderColor: "border-amber-200/50",
    shadowColor: "rgba(6,182,212,0.25)",
    awards: ["With Honors", "ANAKLUSMOS: ABM Quiz Bee - 2nd Runner-Up"],
  },
  {
    id: 4,
    level: "Elementary - Junior High School",
    school: "St. Mary's Academy - Pasay City",
    batch: "",
    bgColor: "bg-cyan-200/25",
    badgeColor: "bg-cyan-800/70 border-cyan-500/20",
    subtitleColor: "text-teal-400",
    borderColor: "border-cyan-200/50",
    shadowColor: "rgba(6,182,212,0.25)",
    awards: ["2nd Honorable Mention", "Best in ICT", "Math Blitz - Champion"],
  },
];

const EducCard = () => {
  return (
    <section className="flex flex-wrap justify-center items-stretch gap-8 mt-8">
      {educationData.map((edu) => (
        <div
          key={edu.school}
          className={`
            w-[75dvw]
            md:w-[40dvw]
            flex-wrap 
            ${edu.bgColor} 
            rounded-2xl 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            backdrop-blur-[20px] 
            border
            ${edu.borderColor} 
            transition-transform duration-300 
            hover:scale-105
            hover:shadow-xl
            ${
              edu.id == 1
                ? "hover:shadow-rose-800/60"
                : edu.id == 4
                ? "hover:shadow-cyan-800"
                : "hover:shadow-amber-400/30"
            }
        `}
        >
          <div className="card-body text-gray-300 p-6">
            {/* Badge */}
            <span
              className={`
                badge badge-md 
                ${edu.badgeColor} 
                text-white
              `}
            >
              {edu.level}
            </span>

            {/* Title & Batch */}
            <div className="flex flex-col justify-start items-start mt-2 gap-1">
              <h2 className="text-2xl font-bold text-white">{edu.school}</h2>
              {edu.batch && (
                <span className={`text-lg font-semibold ${edu.subtitleColor}`}>
                  {edu.batch}
                </span>
              )}
            </div>

            {/* Awards */}
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {edu.awards.map((item) => (
                <li key={item} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 mt-0.5 text-emerald-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducCard;
