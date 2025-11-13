// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Internship from "./components/Internship"
import Projects from "./components/Projects"
import ProjectCard from "./components/ui/ProjectCard"
import "./main.css"

import SkillCard from "./components/ui/SkillCard"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
      </main>
    </div>
  )
}

export default App
