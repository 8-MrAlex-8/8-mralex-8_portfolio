import ExperienceData from "../data/ExperienceData"

const Experience = () => {
    return(
        <section id="experience" className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className = "min-h-screen pt-8 md:pt-28 pb-12 md:pb-8 px-10 w-full md:px-16 gap-8">
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
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Internship Experience
                            </h3>
                        </div>

                        {/* Timeline Line */}
                        <div className="relative ml-6 border-l-2 border-gray-700 pl-8 md:pl-12">
                            {/* Experience Card 1 */}
                            <div className="relative mb-8 group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 
                                                border-slate-800 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                                
                                {/* Card */}
                                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border 
                                                border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:-translate-y-1">
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
                                        At Indra, I contributed to internal development by building full-stack internal apps using HTML/CSS/JavaScript/PHP, Bootstrap, 
                                        jQuery, and Vue.js. Here, I also built automated ETL pipelines in streamline data processing, and created a simple Linear Regression model 
                                        using Python. For the model, I migrated the logic into PHP for integration into a separate system.
                                        <br /><br />
                                        Additionally, I redesigned a legacy interface in Figma and supported workflow automation using MS Power Automate. 
                                        Throughout the internship, I worked within an Agile/Scrum environment, adapted to the team’s MVC architecture, 
                                        and delivered meaningful improvements to multiple internal projects.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                            {ExperienceData
                                                .find((exp) => exp.id == 1)?.tech
                                                .map((tech) => {
                                                return (
                                                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                                                        {tech}
                                                    </span>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contest Experience Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
                                                [Contest Name]
                                            </h4>
                                            <p className="text-purple-400 font-semibold mb-1">
                                                [Your Role / Team Position]
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
                                        [Description of the contest. Write about the competition format, 
                                        your project/solution, challenges faced, and what you learned.]
                                    </p>
                                </div>
                            </div>

                            {/* Contest Card 2 */}
                            <div className="relative mb-8 group">
                                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                                
                                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                [Contest Name]
                                            </h4>
                                            <p className="text-purple-400 font-semibold mb-1">
                                                [Your Role / Team Position]
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 shrink-0">
                                            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                                                [Date]
                                            </span>
                                            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center">
                                                [Rank/Award]
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        [Description of the contest. Write about the competition format, 
                                        your project/solution, challenges faced, and what you learned.]
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                                            [Technology 1]
                                        </span>
                                        <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                                            [Technology 2]
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
                                                [Contest Name]
                                            </h4>
                                            <p className="text-purple-400 font-semibold mb-1">
                                                [Your Role / Team Position]
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 shrink-0">
                                            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                                                [Date]
                                            </span>
                                            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 text-center">
                                                [Rank/Award]
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        [Description of the contest. Write about the competition format, 
                                        your project/solution, challenges faced, and what you learned.]
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                                            [Technology 1]
                                        </span>
                                        <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-gray-600/50">
                                            [Technology 2]
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
