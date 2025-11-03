const About = () => {
    return (
        <section>
        <div className = "min-h-[45dvh] bg-gray-600 row-center justify-evenly px-24">
            <div className = "w-2/5">
                <h2 className="text-2xl font-bold text-white">About</h2>
                <p className="mt-2 text-sm text-white">Myself, unmasked.</p>
            </div>
            <div className = "w-3/5">
                <div className="prose max-w-none text-white space-y-8">
                    <p className = "leading-loose">
                        A results-driven software developer with a versatile technical skill set, keen design sensibility, and meticulous attention to detail. 
                        Adept at Test-Driven Development practices and known for building strong, empathetic relationships with clients and stakeholders. 
                        Thrives in collaborative, hands-on environments and is passionate about delivering innovative, high-impact solutions.
                    </p>
                </div>
            </div>
        </div>
            <div className = "min-h-[45dvh] bg-gray-100 row-center justify-evenly px-24">
                <div className = "w-2/5">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Skills</h2>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Your resident all-rounder.</p>
                </div>
                <div className = "w-3/5">
                    <div className="prose max-w-none text-neutral-700 dark:prose-invert dark:text-neutral-200 space-y-8">
                        <p className = "leading-relaxed">
                            My toolkit includes React, TypeScript, Tailwind, and Vite. I care about DX, performance budgets, and clean, maintainable code.
                        </p>
                        <ul>
                            <li>React, TypeScript, Tailwind, Node</li>
                            <li>Component libraries, design systems, a11y</li>
                            <li>Testing, CI, and performance profiling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;