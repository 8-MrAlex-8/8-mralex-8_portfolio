import { useState, useRef, useEffect } from "react";
import ResumeThumbnail from "../assets/thumbnail.png";
import { Download } from "lucide-react";
import ResumeModal from "./ui/ResumeModal";

const Resume = () => {
  const [isHovered, setHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const viewButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setModalOpen(false);
        // return focus to the view button
        setTimeout(() => viewButtonRef.current?.focus(), 0);
      }
    };

    if (isModalOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  return (
    <main
      id="resume"
      className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <section className="min-h-screen pt-28 md:pt-16 pb-12 md:pb-0 flex flex-col md:flex-row justify-center items-center px-10 md:px-16 gap-8">
        {/* Left Column: Info & CTA */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 ml-24">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold heading-gradient-lavender heading-glow">
              Resume
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              View or download my professional resume to learn more about my
              experience, skills, and qualifications.
            </p>
            <div className="w-12 h-1 bg-linear-to-r from-indigo-400 to-purple-400 rounded"></div>
          </div>

          {/* Action Button */}
          <a href="/Resume_LanzAlexander_Malto.pdf" download>
            <div className="flex gap-4 flex-wrap">
              <button
                className="group relative px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg 
              hover:cursor-pointer hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
                <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </div>
          </a>
        </div>

        {/* Right Column: Thumbnail */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <div id="thumbnail" className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-20 blur transition duration-300 group-hover:duration-200"></div>
            <img
              src={ResumeThumbnail}
              alt="Resume Thumbnail"
              className="relative object-contain h-[60dvh] md:h-[75dvh] rounded-md shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/25 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
              <button
                ref={viewButtonRef}
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Resume;
