import TechSkills from "../../data/TechSkillsData";
import SkillCard from "./SkillCard";
import { Code2 } from "lucide-react";

const Dropdown = () => {
  return (
    <>
      <main className="flex flex-row flex-wrap justify-center items-center gap-8">
        {/* Card 1 */}
        <section className="min-h-[40dvh] w-[40dvw] bg-sky-200/30 border border-sky-400/40 rounded-2xl p-3 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4 p-3">
            <div className="relative flex items-center justify-center bg-linear-to-r from-blue-300 via-sky-500 to-blue-500 border border-indigo-500 rounded-full w-12 h-12">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col justify-center items-start gap-1.5">
              <h2 className="text-3xl font-bold">Languages</h2>
              <p className="font-extralight text-gray-300">
                Where everything starts.
              </p>
            </div>
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

        {/* Card 2 */}
        <section className="min-h-[40dvh] w-[40dvw] bg-violet-200/25 border border-violet-400/40 rounded-2xl p-3 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4 p-3">
            <div className="relative flex items-center justify-center bg-linear-to-r from-blue-300 via-sky-500 to-blue-500 border border-indigo-500 rounded-full w-12 h-12">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center items-start gap-1.5">
              <h2 className="text-3xl font-bold">Frameworks</h2>
              <p className="font-extralight text-gray-300">
                Icing on the cake.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TechSkills.filter((skill) => skill.id >= 10 && skill.id < 18).map(
              (skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              )
            )}
          </div>
        </section>

        {/* Card 3 */}
        <section className="min-h-[40dvh] w-[40dvw] bg-emerald-200/25 border border-emerald-400/40 rounded-2xl p-3 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4 p-3">
            <div className="relative flex items-center justify-center bg-linear-to-r from-blue-300 via-sky-500 to-blue-500 border border-indigo-500 rounded-full w-12 h-12">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center items-start gap-1.5">
              <h2 className="text-3xl font-bold">Databases & Cloud</h2>
              <p className="font-extralight text-gray-300">
                Securing system infrastructures.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TechSkills.filter((skill) => skill.id >= 18 && skill.id < 23).map(
              (skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              )
            )}
          </div>
        </section>

        {/* Card 4 */}
        <section className="min-h-[40dvh] w-[40dvw] bg-rose-200/25 border border-rose-400/40 rounded-2xl p-3 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4 p-3">
            <div className="relative flex items-center justify-center bg-linear-to-r from-blue-300 via-sky-500 to-blue-500 border border-indigo-500 rounded-full w-12 h-12">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center items-start gap-1.5">
              <h2 className="text-3xl font-bold">Developer Tools</h2>
              <p className="font-extralight text-gray-300">
                Keeping workflows organized and productive.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TechSkills.filter((skill) => skill.id >= 23 && skill.id <= 28).map(
              (skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.photo}
                  colorClass={skill.colorClass}
                  alt={skill.alt}
                />
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dropdown;
