import { useState } from "react";
import Reveal from "../ui/Reveal";
import ProjectShowcase from "./ProjectShowcase";
import ProjectInfo from "./ProjectInfo";
import { projectData } from "./projectData";

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section
      id="projects"
      className="relative isolate min-h-screen overflow-visible px-6 py-32"
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-40
          inset-x-0
          -z-10
          bg-[radial-gradient(ellipse_70%_65%_at_75%_45%,rgba(37,99,235,0.12)_0%,rgba(37,99,235,0.06)_35%,rgba(37,99,235,0.02)_58%,transparent_75%)]
        "
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Selected Work
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              A look at the applications I've built and the technologies I've
              worked with.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ProjectShowcase
            activeProjectIndex={activeProjectIndex}
            setActiveProjectIndex={setActiveProjectIndex}
          />
        </Reveal>

        <Reveal delay={300}>
          <ProjectInfo project={projectData[activeProjectIndex]} />
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
