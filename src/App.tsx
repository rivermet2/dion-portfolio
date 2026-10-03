import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="bg-neutral-950">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
