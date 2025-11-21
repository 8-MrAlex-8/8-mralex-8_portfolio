import type { ProjectItem } from "../../data/ProjectData.ts";

const ProjectCard = ({ name, type, desc, techStack }: ProjectItem) => {
  return (
    <div
      className="relative w-[60dvw] md:w-[25dvw] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl 
    hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

      <figure className="overflow-hidden rounded-t-2xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all duration-300"
        />
      </figure>

      <div className="relative card-body text-gray-200">
        <h2 className="card-title text-white drop-shadow-sm">
          {name}
          <div className="badge bg-cyan-500/20 text-cyan-300 backdrop-blur-xl border border-cyan-400/20">
            {type}
          </div>
        </h2>

        <p className="text-gray-300/80 line-clamp-3">{desc}</p>

        <div className="card-actions justify-start mt-4">
          {techStack.map((technology) => {
            return (
              <div className="badge badge-outline border-white/20 text-gray-300 bg-white/5 backdrop-blur-md">
                {technology}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
