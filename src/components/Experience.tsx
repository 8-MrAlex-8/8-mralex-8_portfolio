import ExperienceData from "../data/ExperienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="min-h-screen pt-8 md:pt-28 pb-12 md:pb-8 px-10 w-full md:px-16 gap-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Experience
          </h2>
          <p className="text-md text-gray-400 italic">
            A glimpse into my professional journey and achievements.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          {/* Internship Experience Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Professional Experience
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="relative ml-6 border-l-2 border-gray-700 pl-8 md:pl-12">
              {/* Experience Card 1 */}
              <div className="relative mb-8 group">
                {/* Timeline Dot */}
                <div
                  className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 
                                                border-slate-800 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300"
                ></div>

                {/* Card */}
                <div
                  className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 
                                                hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Indra Philippines, Inc.
                      </h4>
                      <p className="text-blue-400 font-semibold mb-1">
                        Intern, Innovation Management Team
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                        June 2025 - July 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At Indra, I contributed to internal development by building
                    full-stack internal apps using HTML/CSS/JavaScript/PHP,
                    Bootstrap, jQuery, and Vue.js. Here, I also built automated
                    ETL pipelines in streamline data processing, and created a
                    simple Linear Regression model using Python. For the model,
                    I migrated the logic into PHP for integration into a
                    separate system.
                    <br />
                    <br />
                    Additionally, I redesigned a legacy interface in Figma and
                    supported workflow automation using MS Power Automate.
                    Throughout the internship, I worked within an Agile/Scrum
                    environment, adapted to the team's MVC architecture, and
                    delivered meaningful improvements to multiple internal
                    projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ExperienceData.find((exp) => exp.id == 1)?.tech.map(
                      (tech) => {
                        return (
                          <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                            {tech}
                          </span>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contest Experience Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Contest Experience
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="relative ml-6 border-l-2 border-gray-700 pl-8 md:pl-12">
              {/* Contest Card 1 */}
              <div className="relative mb-8 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        AI.DEAS for Impact 2025: AI for Developing Ethical and
                        Applicable Solutions
                      </h4>
                      <p className="text-purple-400 font-semibold mb-1">
                        Product & Pitch Lead
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                        September 2025
                      </span>
                      <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center">
                        Top 5 Awardee
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As Product & Pitch Lead in{" "}
                    <strong>AI.DEAS for Impact 2025</strong>, I aided
                    brainstorming sessions and faced against 30+ teams to earn a
                    spot in the regional pitching competition by shaping{" "}
                    <strong>Axolert</strong>, a public-health AI solution that
                    digitizes and centralizes medical reports, detects
                    anomalies, forecasts resource shortages, and delivers
                    real-time alerts.
                    <br /> <br />
                    Challenges we faced included{" "}
                    <strong>
                      aligning technical possibilities with real-world needs
                      under tight deadlines
                    </strong>
                    , which we resolved via{" "}
                    <strong>
                      {" "}
                      intensive consultation and interviews with industry
                      professionals invited to the event.
                    </strong>
                    <br />
                    <br />
                    Through the team's efforts, we managed to secure the Top 5
                    spot overall in this event. <br /> <br />
                    READ:{" "}
                    <a
                      className="underline underline-offset-3 italic text-stone-400"
                      href="https://su.edu.ph/su-team-places-5th-in-regl-ai-hackathon-with-public-health-solution-axolert/"
                    >
                      SU team places 5th in reg'l AI hackathon with public
                      health solution 'Axolert'
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Pitching and Presentation Ability
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Strategic Leadership
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Team Coordination
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Stakeholder Engagement
                    </span>
                  </div>
                </div>
              </div>

              {/* Contest Card 2 */}
              <div className="relative mb-8 group">
                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        AI.DEAS for Impact 2024: AI for Innovation and Social
                        Impact
                      </h4>
                      <p className="text-purple-400 font-semibold mb-1">
                        Product & Pitch Lead
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 text-center">
                      <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                        June 2024
                      </span>
                      <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center">
                        1st Runner-Up
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      In <strong>AI.DEAS for Impact 2024</strong>, as Product &
                      Pitch Lead, I facilitated ideation and guided the team in
                      developing a prototype for an AI-enabled irrigation system
                      integrating weather data, predictive analytics, and sensor
                      monitoring to optimize water usage and improve crop yield.
                      The concept also included social media-inspired
                      information sharing between users, allowing for quicker
                      updates.
                      <br />
                      <br />
                      The competition evaluated innovation, business
                      feasibility, and presentation to government workers and
                      stakeholders; key challenges included translating
                      technical concepts into practical solutions and
                      communicating them clearly. Also, the conceptualization of
                      the business models and pricing strategies for the
                      prototype.
                      <br />
                      <br />
                      Through the team's efforts, we managed a podium
                      finish--1st Runner-Up--for this competition. <br /> <br />
                      READ:{" "}
                      <a
                        className="underline underline-offset-3 italic text-stone-400"
                        href="https://su.edu.ph/su-ccs-clinches-1st-runner-up-in-ai-pitching-competition/"
                      >
                        SU CCS clinches 1st runner-up in AI pitching competition
                      </a>
                    </p>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Pitching and Presentation Ability
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Strategic Leadership
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Team Coordination
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Requirements Elicitation
                    </span>
                  </div>
                </div>
              </div>

              {/* Contest Card 3 */}
              <div className="relative mb-8 group">
                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        1st PSITE Central Visayas Provincial Hackathon
                      </h4>
                      <p className="text-purple-400 font-semibold mb-1">
                        Programmer
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 text-center">
                      <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                        March 2024
                      </span>
                      <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center">
                        1st Runner-Up
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In the 1st PSITE Hackathon, I contributed to the development
                    of an AI-based job portal prototype using React, Next.js,
                    and Tailwind CSS, while also pitching the solution to
                    professionals from Talleco, Inc.
                    <br /> <br />
                    The unique part of our concept was that it took inspiration
                    from dating apps which allowed for a much faster experience
                    on the end of the hiring manager and staff. On the other
                    hand, this encouraged prospect employees to put their best
                    foot forward and show off what they were proud of most in
                    their professional career.
                    <br /> <br />
                    In this competition, the team managed to achieve 1st
                    Runner-Up.
                    <br /> <br />
                    READ:{" "}
                    <a
                      className="underline underline-offset-3 italic text-stone-400"
                      href="https://www.facebook.com/ConfederatesStudentCouncil/posts/pfbid0TkT8TbCPJrXHzck4QNdHgNKRbhRM5S4F29WNw5XPoLoLg5rDYDeea4p7cJC3T8g9l"
                    >
                      Confederates Student Council -- PSITE Central Visayas
                      Hackathon
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      HTML/CSS/JavaScript
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Next.js/React.js
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                      Pitching and Presentation Ability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
