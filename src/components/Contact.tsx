import { useState } from "react";
import SocialsData from "../data/SocialsData.ts";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full pt-16 md:pt-24 px-8 md:px-16 py-8 
                 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="w-full">
            <div className="space-y-8">
              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-400 leading-relaxed text-base">
                  Whether you have a question, opportunity, or just want to say
                  hello — feel free to reach out anytime.
                </p>
                <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mt-6" />
              </div>

              {/* Links */}
              <div className="space-y-6">
                {SocialsData.map((social: any) => (
                  <div
                    key={social.id}
                    onMouseEnter={() => setHoveredId(social.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`
                      group flex flex-row items-center gap-4 p-3 rounded-xl border border-slate-700/50
                      transition-all duration-300 hover:-translate-y-[2px]
                      hover:shadow-xl
                      hover:shadow-purple-500/10
                      backdrop-blur-sm
                      ${
                        social.id == 3
                          ? "hover:bg-black"
                          : social.id == 2
                          ? "hover:bg-[#0A66C2]"
                          : "hover:bg-[#1877F2]"
                      }
                    `}
                  >
                    {/* Icon Container */}
                    <div
                      className="
                        w-12 h-12 flex items-center justify-center rounded-full
                        bg-linear-to-br from-slate-700 to-slate-800
                        border border-slate-600/50 shadow-md
                        group-hover:scale-110 transition-all duration-300
                      "
                    >
                      <img
                        src={social.image}
                        width="28"
                        height="28"
                        className="
                          transition duration-300 
                          group-hover:brightness-0 invert
                        "
                      />
                    </div>

                    {/* Label / Link */}
                    <a
                      href={social.link}
                      target="_blank"
                      className={`
                        text-gray-300 group-hover:text-white transition-all duration-300
                        ${
                          hoveredId === social.id
                            ? "translate-x-2 opacity-100"
                            : "translate-x-0 opacity-90"
                        }
                      `}
                    >
                      {hoveredId === social.id ? social.link : social.label}
                    </a>

                    {/* Cute Dot Indicator */}
                    <div
                      className={`
                        ml-auto w-3 h-3 rounded-full transition-all duration-300
                        ${
                          hoveredId === social.id
                            ? "scale-125 bg-purple-400 shadow-lg shadow-purple-500/40"
                            : "bg-slate-600/40"
                        }
                      `}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <div
              className="
                bg-linear-to-br from-slate-800 to-slate-900
                p-8 rounded-2xl shadow-xl border border-slate-700/60
                hover:border-purple-500/40 hover:shadow-purple-500/10
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
