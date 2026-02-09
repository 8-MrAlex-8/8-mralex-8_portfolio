import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-0 relative overflow-hidden bg-slate-950">
      
      {/* Dynamic Background Texture for Hero */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ 
          backgroundImage: "url('/background-two.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'luminosity'
        }}
      />
      
      <div className="w-full h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen items-center relative z-20">
        
        {/* Left: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center px-6 sm:px-12 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-purple-400 font-bold tracking-[0.2em] mb-4 text-xs md:text-sm uppercase">
              // Full-Stack Developer
            </h2>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white leading-[1.1] tracking-tight">
              Lanz Alexander
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">Malto</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-lg leading-relaxed mb-8">
              I build <span className="text-white font-semibold">production-ready systems</span> that replace manual workflows and scale reliably.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-6 py-3 bg-white text-black font-bold text-sm hover:bg-purple-300 transition-all duration-300 flex items-center gap-2 rounded"
              >
                VIEW WORK 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-white/20 text-white font-bold text-sm hover:bg-white/10 hover:border-white transition-all duration-300 rounded"
              >
                RESUME
              </a>
            </div>
            
            {/* Contact Snip */}
            <div className="mt-12 text-sm text-slate-500 font-mono">
               <p>PHILIPPINES • (+63) 992 915 5259</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="md:col-span-5 h-[300px] md:h-[600px] w-full relative flex items-center justify-center">
             <div 
               className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-white/40"
             >
                <div className="absolute inset-0 z-10 group-hover:bg-transparent transition-all duration-500" />
                <img 
                  src="/lanz-photo.jpg" 
                  alt="Lanz Alexander Malto" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-white/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
        </div>

      </div>
    </section>
  )
}

export default Hero
