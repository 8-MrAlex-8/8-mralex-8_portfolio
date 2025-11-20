import EducCard from "./ui/EducCard.tsx";
import FancyButton2 from "./ui/FancyButton2";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen pt-28 md:pt-20 pb-12 md:pb-0 flex flex-col md:flex-row justify-center items-center px-10 md:px-16 gap-8
      bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="w-full md:w-1/2">
          <p className="mb-3 text-sm font-semibold text-amber-500">
            Developer, Data Geek, Mathematician.
          </p>
          <h1 className="text-4xl font-bold text-base-100 md:text-5xl">
            Hi, I'm Lanz Alexander Malto.
          </h1>
          <p className="mt-4 text-base-300">
            A detail-oriented senior Computer Science student committed to
            excellence, with strong project experience and active involvement in
            tech networks in Negros Oriental. <br /> <br />
            I'm adaptable, quick to learn, and always pushing myself to grow. I
            take pride in building high-quality, reliable, and user-friendly
            solutions while communicating effectively with teammates and
            stakeholders.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3">
            <FancyButton2 label="My Projects" sectionTarget="projects" />
            <FancyButton2 label="Contact Me" sectionTarget="contact" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-100 w-full rounded-2xl bg-linear-to-tr from-amber-800 via-rose-800 to-sky-800 p-1 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/50">
              <span className="text-5xl">👋</span>
            </div>
          </div>
        </div>
      </section>
      {/* Education and Stuff */}
      <section
        id="home"
        className="min-h-screen w-full pb-12 md:pb-0 flex flex-col justify-center items-center gap-4
      bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-8"
      >
        <h2 className="text-4xl font-bold text-base-100">
          Educational Background
        </h2>

        <div>
          <EducCard />
        </div>
      </section>
    </>
  );
};

export default Hero;
