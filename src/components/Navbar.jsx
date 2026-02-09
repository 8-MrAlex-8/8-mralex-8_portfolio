import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" }, // "Projects" -> "Work" for brevity
    { name: "Exp", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div 
        className={`
          flex items-center gap-1 sm:gap-2 px-2 py-2 rounded-full transition-all duration-300
          ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent'}
        `}
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={`
              px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
              ${scrolled 
                ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                : 'text-white/70 hover:text-white hover:bg-black/20'
              }
            `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar
