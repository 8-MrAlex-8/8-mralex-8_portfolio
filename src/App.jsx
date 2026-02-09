import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Background from './components/Background'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Background />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
