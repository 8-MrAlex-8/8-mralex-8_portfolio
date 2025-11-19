// import ResumeThumbnail from "../assets/thumbnail.png";

const Resume = () => {
  return (
    <main
      id="resume"
      className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <section className="min-h-screen pt-8 md:pt-28 pb-12 md:pb-8 px-10 w-full md:px-16 text-white">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <p className="text-md md:text-sm italic">
            My professional experience and qualifications.
          </p>
        </div>

        {/* <img
          src={ResumeThumbnail}
          alt="Resume Thumbnail"
          className="object-contain h-full"
        /> */}
      </section>
    </main>
  );
};

export default Resume;
