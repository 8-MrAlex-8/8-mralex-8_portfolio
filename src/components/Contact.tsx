import {useState} from 'react';
import SocialsData from "../data/SocialsData.ts";
import ContactForm from "./ui/ContactForm";

const Contact = () => {

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full pt-16 md:pt-24 px-8 md:px-16 py-8"
    >
      <div className="mx-auto">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
         {/* Contact Info */}
         <div className="w-full">
            <div className="space-y-8">
              
              {/* Message */}
              <div>
              <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-neutral-600 leading-relaxed mt-6">
                  Whether you have a question, an opportunity, or just want to say
                  hello, feel free to reach out. I'll get back to you as soon as I can.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-6">
                { 
                  SocialsData.map((social: any) => {
                    return(
                      <div 
                          onMouseEnter={() => setHoveredId(social.id)}
                          onMouseLeave={() => setHoveredId(null)} 
                          className = {`group flex flex-row justify-start items-center gap-4 p-2 rounded-2xl hover:text-white hover:cursor-pointer transition duration-300
                        ${
                          social.id == 3 
                              ? "hover:bg-black" 
                              : social.id == 2 
                              ? "hover:bg-[#0A66C2]" 
                              : "hover:bg-[#1877F2]"
                          }
                      `}>
                        <img src = {social.image} width="36" height="36" className="transition duration-200 group-hover:brightness-0 group-hover:invert"/>
                        <a className={`
                          transition-all duration-300
                        group-hover:text-white
                        ${hoveredId === social.id 
                          ? "translate-x-1 opacity-100" 
                          : "translate-x-0 opacity-100"
                        }
                      `} href = {social.link} target="_blank">{hoveredId === social.id ? social.link : social.label}</a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border border-neutral-200/60">
              <ContactForm />
            </div>
          </div>

                

        </div>
      </div>
    </section>
  );
};

export default Contact;
