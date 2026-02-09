import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 relative"
    >
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center text-center gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-purple-800 text-lg md:text-xl max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:maltolanz925@gmail.com"
            className="text-2xl md:text-4xl font-mono font-bold text-black hover:text-purple-700 transition-colors border-b-2 border-white/20 pb-1"
          >
            maltolanz925@gmail.com
          </a>
          <p className="text-lg md:text-xl text-slate-700 font-mono">
            (+63) 992 915 5259
          </p>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/8-MrAlex-8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black rounded-full hover:bg-white hover:text-purple-700 transition-all"
          >
            <img src="/socials-stamp/github.svg" className="w-6 h-6 invert hover:invert-0" alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/lanz-alexander-malto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black rounded-full hover:bg-white hover:text-purple-700 transition-all"
          >
            <img src="/socials-stamp/linkedin.svg" className="w-6 h-6 invert hover:invert-0" alt="LinkedIn" />
          </a>
        </div>
        
        <div className="text-sm text-slate-500 font-mono">
          © 2026 Lanz Alexander Malto.
        </div>
      </div>
    </section>
  );
}


export default Contact
