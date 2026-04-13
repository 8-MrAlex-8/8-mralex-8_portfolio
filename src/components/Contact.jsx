import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 relative">
      <div className="max-w-6xl m-auto px-4 py-8 md:py-10 flex flex-col justify-center items-center text-center gap-10 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 uppercase">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto font-medium">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-white/50 backdrop-blur-sm border border-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-purple-100/50 flex flex-col items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
              Email Me
            </span>
            <a
              href="mailto:maltolanz925@gmail.com"
              className="text-xl sm:text-2xl md:text-4xl font-mono font-bold text-slate-900 hover:text-purple-700 transition-colors break-all"
            >
              maltolanz925@gmail.com
            </a>
          </div>

          <div className="w-full h-px bg-slate-200/50 max-w-xs" />

          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
              Call Me
            </span>
            <p className="text-lg md:text-2xl text-slate-700 font-mono font-medium">
              (+63) 992 915 5259
            </p>
          </div>

          <div className="flex gap-4 md:gap-6 mt-4">
            <a
              href="https://github.com/8-MrAlex-8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-purple-700 hover:scale-110 transition-all shadow-lg"
            >
              <img
                src="/socials-stamp/github.svg"
                className="w-5 h-5 md:w-6 md:h-6 invert"
                alt="GitHub"
              />
            </a>
            <a
              href="https://linkedin.com/in/lanz-alexander-malto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-purple-700 hover:scale-110 transition-all shadow-lg"
            >
              <img
                src="/socials-stamp/linkedin.svg"
                className="w-5 h-5 md:w-6 md:h-6 invert"
                alt="LinkedIn"
              />
            </a>
          </div>
        </motion.div>

        <div className="text-xs md:text-sm text-slate-400 font-mono tracking-tighter">
          © 2026 LANZ ALEXANDER MALTO
        </div>
      </div>
    </section>
  );
};

export default Contact;
