import type { ExperienceItem } from "../../data/ExperienceData";

interface ExperienceCardProps {
  experience: ExperienceItem;
  isCompact: boolean;
}

const ExperienceCard = ({ experience, isCompact }: ExperienceCardProps) => {
  return (
    <div className="relative mb-8 group">
      {/* Timeline Dot */}
      <div
        className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 
                      border-slate-800 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300"
      ></div>

      {/* Card */}
      <div className="relative bg-linear-to-br from-slate-800 to-slate-900 border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl md:text-2xl font-bold heading-gradient-blue-white mb-2 heading-glow">
              {experience.company}
            </h4>
            <p className="text-blue-400 font-semibold mb-1">
              {experience.position}
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              {experience.date}
            </span>
          </div>
        </div>

        {isCompact ? (
          <ul className="text-gray-300 leading-[1.8] mb-4 space-y-4 list-disc ml-6 whitespace-pre-line">
            {experience.compactDescription.map((bullet) => {
              return <li key={bullet}>{bullet}</li>;
            })}
          </ul>
        ) : (
          <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
            {experience.fullDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 bg-linear-to-r from-sky-600/50  to-blue-500/60 text-gray-300 rounded-lg text-sm border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
