// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import "./main.css"


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Resume />
        {/* <section className= "bg-black min-h-screen pt-12 md:pt-24 pb-12 md:pb-0 px-10 w-full md:px-16 gap-8">
          <h2 className = "text-white">Hello World</h2>
        </section> */}
      </main>
    </div>
  )
}

export default App
