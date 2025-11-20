import type { ContestItem } from "../../data/ExperienceData";

interface ContestCardProps {
  contest: ContestItem;
  isCompact: boolean;
}

const ContestCard = ({ contest, isCompact }: ContestCardProps) => {
  return (
    <div className="relative mb-8 group">
      {/* Timeline Dot */}
      <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>

      {/* Card */}
      <div className="relative bg-linear-to-br from-slate-800 to-slate-900 border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl md:text-2xl font-bold heading-gradient-purple-white mb-2 heading-glow">
              {contest.title}
            </h4>
            <p className="text-purple-400 font-semibold mb-1">
              {contest.position}
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 text-center">
              {contest.date}
            </span>
            {contest.badges &&
              contest.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center"
                >
                  {badge}
                </span>
              ))}
          </div>
        </div>

        {isCompact ? (
          <p className="text-gray-300 leading-relaxed mb-4">
            {contest.compactDescription}
          </p>
        ) : (
          <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
            {contest.fullDescription}
          </p>
        )}

        {contest.readLink && (
          <p className="text-gray-300 mb-4">
            READ:{" "}
            <a
              className="underline underline-offset-3 italic text-stone-400 hover:text-gray-300"
              href={contest.readLink.url}
            >
              {contest.readLink.text}
            </a>
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {contest.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 bg-linear-to-r from-purple-600/40  to-purple-600/60 text-gray-300 rounded-md text-sm border border-gray-600/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
