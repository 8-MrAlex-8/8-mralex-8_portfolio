// bg image source: https://unsplash.com/photos/a-black-background-with-a-blue-abstract-design-OfdOEdGYiuk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import ProjectCard from "../components/ui/ProjectCard";
import ProjectList from "../data/ProjectData.ts";
import type { ProjectItem } from "../data/ProjectData.ts";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-dvh bg-[url(/src/assets/background-three.jpg)] bg-no-repeat bg-cover bg-center"
    >
      <div className="relative pb-12">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative min-h-screen pt-8 md:pt-24 pb-12 md:pb-8 px-10 w-full md:px-16 gap-8">
          <div className="text-start mb-10">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient-cool mb-4 heading-glow leading-tight">
              Projects
            </h2>
            <p className="text-md text-base-200 italic">
              A glimpse into my professional journey and achievements.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-5">
            {ProjectList.map((project: ProjectItem) => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  thumbnail={project.thumbnail}
                  name={project.name}
                  type={project.type}
                  short_desc={project.short_desc}
                  long_desc={project.long_desc}
                  techStack={project.techStack}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
