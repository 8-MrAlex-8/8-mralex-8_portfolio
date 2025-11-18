import TechSkills from "../../data/TechSkillsData";
import SkillCard from "./SkillCard";
import { Code2 } from "lucide-react";

const Dropdown = () => {
  return (
    <>
      <main className="flex flex-row flex-wrap justify-center items-center gap-8">
        <section className="min-h-[40dvh] w-[40dvw] bg-sky-200/25 border border-sky-400/40 rounded-2xl p-3 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4">
            <div className="relative flex items-center justify-center bg-linear-to-r from-blue-300 via-sky-500 to-blue-500 border border-emerald-500 rounded-full w-12 h-12">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Languages</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TechSkills.filter((skill) => skill.id < 10).map((skill) => (
              <SkillCard
                key={skill.id}
                name={skill.name}
                logo={skill.photo}
                colorClass={skill.colorClass}
                alt={skill.alt}
              />
            ))}
          </div>
        </section>

        <section className="h-[40dvh] w-[40dvw] bg-violet-200/25 border border-violet-400/40 rounded-2xl flex justify-start items-center gap-8">
          <div className="relative flex items-center justify-center bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 border border-emerald-500 rounded-full w-12 h-12">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Core Technologies</h2>
        </section>

        {/* Technologies */}
        <div className="collapse collapse-arrow border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            Core Technologies & Languages
          </div>

          <div className="collapse-content">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {TechSkills.filter((skill) => skill.id < 10).map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Frameworks
        <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Frameworks</div>

          <div className="collapse-content">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {TechSkills.filter(
                (skill) => skill.id >= 10 && skill.id <= 17
              ).map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Databases }
        <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Databases & Cloud</div>

          <div className="collapse-content">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {TechSkills.filter(
                (skill) => skill.id >= 18 && skill.id <= 22
              ).map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Developer Tools /}
        <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Developer Tools</div>

          <div className="collapse-content">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {TechSkills.filter(
                (skill) => skill.id >= 23 && skill.id <= 28
              ).map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills /}
        <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Soft Skills</div>

          <div className="collapse-content">
            <ul className="list-disc list-inside space-y-2 ml-3 marker:text-accent">
              <li>Leadership & Cross-functional Collaboration</li>
              <li>Adaptability</li>
              <li>Initiative</li>
              <li>Communication</li>
              <li>Presentation & Pitching</li>
            </ul>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Dropdown;
