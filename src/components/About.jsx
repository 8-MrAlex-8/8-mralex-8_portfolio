import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-12 bg-white text-slate-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            WHO
            <br />I AM
          </h2>
          <div className="w-16 h-2 bg-purple-600 mb-8" />
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-sm mb-4 uppercase tracking-widest text-purple-600">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Leadership",
                "Collaboration",
                "Adaptability",
                "Initiative",
                "Communication",
                "Pitching",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            A detail-oriented{" "}
            <span className="font-bold text-purple-600">
              Computer Science fresh graduate
            </span>{" "}
            who builds high-impact software, from scalable web applications to
            automation-driven business tools that streamline operations and
            reduce manual work.
          </p>

          <div className="space-y-6 mb-8 text-base text-slate-600 border-l-2 border-slate-950 pl-6">
            <p className="italic">
              "I operate across the stack—translating ideas into clean
              interfaces, reliable systems, and practical solutions that ship
              fast and scale well."
            </p>
          </div>

          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            Focused on{" "}
            <span className="font-bold text-purple-600">
              web development and data-driven systems
            </span>
            , I leverage modern technologies, Test-Driven Development, and Agile
            practices to deliver robust, production-ready solutions.
          </p>

          <div className="space-y-6 mb-8 text-base text-slate-600 border-l-2 border-slate-950 pl-6">
            <p className="italic">
              "I'm known for strong stakeholder collaboration and the ability to
              turn complex requirements into efficient, user-centered outcomes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
