import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "./main.css";

function App() {
  return (
    <>
      <div className="h-dvh block md:hidden bg-black">
        <main>
          <p className="h-dvh text-white text-4xl font-extrabold text-center flex flex-col justify-center align-center mx-8">
            Sorry! This portfolio has not been optimized for mobile yet.
          </p>
        </main>
      </div>
      <div className="hidden md:flex min-h-screen flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Resume />
        </main>
      </div>
    </>
  );
}

export default App;
