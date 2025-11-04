import htmlLogo from "../assets/html.svg"

const About = () => {
    return (
        <section>
            <div id = "about" className = "min-h-[90dvh] md:min-h-[44dvh] bg-gray-600 flex flex-col md:flex-row justify-evenly items-center px-12 md:px-24">
                <div className = "w-full md:w-2/5">
                    <h2 className="text-3xl font-bold text-white">About</h2>
                    <p className="text-md md:text-sm mt-2 text-white">Myself, unmasked.</p>
                </div>
                <div className = "w-full md:w-3/5">
                    <div className="prose max-w-none text-white">
                        <p className = "leading-loose">
                            A results-driven software developer with a versatile technical skill set, keen design sensibility, and meticulous attention to detail. 
                            Adept at Test-Driven Development practices and known for building strong, empathetic relationships with clients and stakeholders. 
                            Thrives in collaborative, hands-on environments and is passionate about delivering innovative, high-impact solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className = "min-h-[90dvh] md:min-h-[44dvh] bg-gray-100 flex flex-col md:flex-row justify-evenly items-center px-12 md:px-24">
                <div className = "w-full md:w-2/5">
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <p className="text-md md:text-sm mt-2 ">Your resident all-rounder's kit.</p>
                </div>
                <div className = "w-full md:w-3/5">
                    <div className="prose max-w-none space-y-8">
                        <p className = "leading-loose">
                            Specifically, I have experience with the following technologies (among others):
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;