import { useState } from "react";
import {
  Star,
  Lightbulb,
  Brain,
  Rocket,
  UserRound,
  RotateCcw,
} from "lucide-react";

const About = () => {
  const [leftExpanded, setLeftExpanded] = useState(true);
  const [rightExpanded, setRightExpanded] = useState(true);

  return (
    <main
      id="about"
      className={`min-h-screen w-full pt-12 md:pt-16 pb-12 md:pb-0 gap-8 
          bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-wrap justify-center items-center text-slate-200`}
    >
      {/* Left card */}
      <section
        className={`min-h-[70dvh] ${
          leftExpanded && rightExpanded
            ? `w-[40dvw]`
            : leftExpanded
            ? `w-[60dvw]`
            : `w-[20dvw]`
        } bg-slate-900/40 
          backdrop-blur-sm border border-slate-700 rounded-lg p-8 flex flex-col justify-evenly gap-4
          hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1`}
      >
        <section
          className={`flex gap-3 ${
            leftExpanded && rightExpanded
              ? "flex-row justify-start items-center" //default state
              : leftExpanded
              ? "flex-row justify-start items-center" // only left is expanded
              : "flex-col justify-start items-start" //only right is expanded
          }`}
        >
          <div className="relative flex items-center justify-center bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 border border-emerald-500 rounded-full w-8 h-8">
            <Star className="w-4 h-4 text-white" />
          </div>

          <h2 className="text-xl font-bold text-white md:text-2xl">
            Chasing Professional Excellence
          </h2>
        </section>

        <div className="bg-gray-600 p-[0.05px]"></div>

        {/* short size */}
        <section
          className={`flex flex-row justify-center items-start gap-3 ${
            leftExpanded && rightExpanded
              ? "hidden" //default state
              : leftExpanded
              ? "hidden" // only left is expanded
              : "block" //only right is expanded
          }`}
        >
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-8 h-8"
          >
            <Lightbulb className="w-5 h-5 text-zinc-700" />
          </div>
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-7 h-7"
          >
            <Brain className="w-4 h-4 text-zinc-700" />
          </div>
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-6 h-6"
          >
            <Rocket className="w-4 h-4 text-zinc-700" />
          </div>
        </section>

        {/* default size */}
        <section
          className={`flex flex-col justify-center items-start gap-3 ${
            leftExpanded && rightExpanded ? "block" : "hidden"
          }`}
        >
          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-lg flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-6 h-6"
            >
              <Lightbulb className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Results-Driven. Versatile. Precise.</p>
          </div>

          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-sm flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-6 h-6"
            >
              <Brain className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Methodical. Empathetic. Reliable.</p>
          </div>

          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-sm flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300
                        rounded-full w-6 h-6"
            >
              <Rocket className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Innovative. Impactful. Collaborative.</p>
          </div>
        </section>

        {/* long size */}
        <section
          className={`flex flex-row justify-center items-stretch gap-6
            ${
              !(leftExpanded && rightExpanded)
                ? leftExpanded
                  ? "block"
                  : "hidden"
                : "hidden"
            }
          `}
        >
          {/* Card 1 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300 rounded-full w-8 h-8">
              <Lightbulb className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              A results-driven software developer with a versatile technical
              skill set, keen design sensibility, and meticulous attention to
              detail.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300 rounded-full w-8 h-8">
              <Brain className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Adept at Test-Driven Development practices and known for building
              strong, empathetic relationships with clients and stakeholders.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-amber-200 via-amber-300 to-orange-300 rounded-full w-8 h-8">
              <Rocket className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Thrives in collaborative, hands-on environments and is passionate
              about delivering innovative, high-impact solutions.
            </p>
          </div>
        </section>

        <button
          className={`btn btn-neutral bg-transparent border self-end ${
            leftExpanded ? "border-zinc-700" : "border-zinc-400"
          } mt-6`}
          disabled={
            leftExpanded && rightExpanded ? false : leftExpanded ? true : false
          }
          onClick={() => {
            setLeftExpanded(true);
            setRightExpanded(false);
          }}
        >
          See More
        </button>
      </section>

      <h2
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
        className={`text-3xl font-extrabold ${
          leftExpanded && rightExpanded ? "block" : "hidden"
        }`}
      >
        ABOUT • ME
      </h2>

      <button
        className={`btn btn-circle border-0 text-white
            bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600
            hover:from-sky-500 hover:via-blue-600 hover:to-indigo-700
            transition-all duration-300 shadow-md
          ${leftExpanded && rightExpanded ? "hidden" : "flex"}
        `}
        onClick={() => {
          setLeftExpanded(true);
          setRightExpanded(true);
        }}
      >
        <RotateCcw className="w-5 h-5" />
      </button>

      {/* Right card */}
      <section
        className={`min-h-[70dvh] ${
          leftExpanded && rightExpanded
            ? `w-[40dvw]` // default
            : rightExpanded
            ? `w-[60dvw]` // only right is expanded
            : `w-[20dvw]` // only left is expanded
        } bg-slate-900/40 
          backdrop-blur-sm border border-slate-700 rounded-lg p-8 flex flex-col justify-evenly gap-4
        hover:border-violet-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1`}
      >
        <section
          className={`flex gap-3 ${
            leftExpanded && rightExpanded
              ? "flex-row justify-start items-center" //default state
              : rightExpanded
              ? "flex-row justify-start items-center" // only right is expanded
              : "flex-col justify-start items-start" //only left is expanded
          }`}
        >
          <div className="relative flex items-center justify-center bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 border border-emerald-500 rounded-full w-8 h-8">
            <UserRound className="w-4 h-4 text-white" />
          </div>

          <h2 className="text-xl font-bold text-white md:text-2xl">
            Beyond the Screen
          </h2>
        </section>

        <div className="bg-gray-600 p-[0.05px]"></div>

        {/* short size */}
        <section
          className={`flex flex-row justify-center items-start gap-3 ${
            leftExpanded && rightExpanded
              ? "hidden" //default state
              : rightExpanded
              ? "hidden" // only right is expanded
              : "block" //only left is expanded
          }`}
        >
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-6 h-6"
          >
            <Lightbulb className="w-4 h-4 text-zinc-700" />
          </div>
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-7 h-7"
          >
            <Brain className="w-4 h-4 text-zinc-700" />
          </div>
          <div
            className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-8 h-8"
          >
            <Rocket className="w-5 h-5 text-zinc-700" />
          </div>
        </section>

        {/* default size */}
        <section
          className={`flex flex-col justify-center items-start gap-3 ${
            leftExpanded && rightExpanded ? "block" : "hidden"
          }`}
        >
          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-lg flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-6 h-6"
            >
              <Lightbulb className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Adventurous. Curious. Social.</p>
          </div>

          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-sm flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-6 h-6"
            >
              <Brain className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Foodie. Explorer. Relaxed.</p>
          </div>

          <div className="px-3 py-3 w-full rounded-md bg-slate-700/50 backdrop-blur-sm flex justify-start items-center gap-4">
            <div
              className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400
                        rounded-full w-6 h-6"
            >
              <Rocket className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white">Driven. Curious. Competitive.</p>
          </div>
        </section>

        {/* long size */}
        <section
          className={`flex flex-row justify-center items-stretch gap-6
            ${
              !(leftExpanded && rightExpanded)
                ? rightExpanded
                  ? "block"
                  : "hidden"
                : "hidden"
            }
          `}
        >
          {/* Card 1 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400 rounded-full w-8 h-8">
              <Lightbulb className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              I'm someone who enjoys movement, novelty, and moments that make
              life feel a little fuller; the type to say yes to the next
              adventure with the people I care about.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400 rounded-full w-8 h-8">
              <Brain className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              I like going on road trips, eating good food, indulging in a nice
              cup of coffee, and getting lost in documentaries or movies on
              YouTube.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 p-6 rounded-xl bg-slate-700/50 backdrop-blur-lg flex flex-col items-start gap-4 min-h-[250px] hover:bg-slate-700/70 transition-colors duration-300 shadow-md">
            <div className="relative flex items-center justify-center bg-linear-to-r from-violet-200 via-violet-300 to-violet-400 rounded-full w-8 h-8">
              <Rocket className="w-4 h-4 text-zinc-700" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              I also like learning for its own sake—feeling challenged, being
              part of events, and trying my hand at competitive environments
              always carries a unique thrill.
            </p>
          </div>
        </section>

        <button
          className={`btn btn-neutral bg-transparent border self-end ${
            rightExpanded ? "border-zinc-700" : "border-zinc-400"
          } mt-6`}
          disabled={
            leftExpanded && rightExpanded ? false : rightExpanded ? true : false
          }
          onClick={() => {
            setRightExpanded(true);
            setLeftExpanded(false);
          }}
        >
          See More
        </button>
      </section>
    </main>
  );
};

export default About;
