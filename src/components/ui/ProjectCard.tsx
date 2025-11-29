import type { ProjectItem } from "../../data/ProjectData.ts";

const ProjectCard = ({
  id,
  thumbnail,
  name,
  type,
  short_desc,
  long_desc,
  techStack,
}: ProjectItem) => {
  return (
    <div className="relative w-full max-w-[720px] sm:max-w-[520px] md:max-w-[360px] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

      <figure className="overflow-hidden rounded-t-2xl aspect-4/3 md:aspect-video w-full">
        {id > 100 ? (
          <div className="bg-red-950 h-full flex justify-center items-center">
            <h2 className="text-3xl font-extrabold text-white text-center">
              Under NDA
            </h2>
          </div>
        ) : (
          <img
            src={thumbnail || ""}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover block transform-gpu transition-transform duration-300 hover:scale-105"
          />
        )}
      </figure>

      <div className="relative card-body text-gray-200">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="badge bg-cyan-500/20 text-cyan-300 backdrop-blur-xl border border-cyan-400/20">
            {type}
          </div>
          <h2 className="card-title text-white drop-shadow-sm">{name}</h2>
        </div>

        <p className="text-gray-300/80 line-clamp-3">{short_desc}</p>
        <p className="text-gray-300/80 line-clamp-3 hidden">{long_desc}</p>

        <div className="card-actions flex-wrap justify-start mt-4 flex gap-2">
          {techStack.map((technology, idx) => (
            <span
              key={`${name}-tech-${idx}`}
              className="badge badge-outline border-white/20 text-gray-300 bg-white/5 backdrop-blur-md"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
