import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectData } from "./projectData";

type ProjectShowcaseProps = {
  activeProjectIndex: number;
  setActiveProjectIndex: (index: number) => void;
};

function ProjectShowcase({
  activeProjectIndex,
  setActiveProjectIndex,
}: ProjectShowcaseProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject = projectData[activeProjectIndex];
  const activeImage = activeProject.images[activeImageIndex];

  const selectProject = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(0);
  };

  const showPrevious = () => {
    setActiveImageIndex((current) =>
      current === 0 ? activeProject.images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveImageIndex((current) =>
      current === activeProject.images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="mt-16">
      {/* Project selector */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm">
          {projectData.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => selectProject(index)}
              className={`
                rounded-xl
                px-5 py-3
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeProjectIndex === index
                    ? "bg-blue-600 text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)]"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              <span className="mr-2 text-xs text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Project showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-6">
            {/* Project information */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                  {activeProject.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {activeProject.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                {activeProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Main image */}
            <div className="group relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-2xl bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage.id}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="max-h-[650px] w-full rounded-2xl object-contain"
                />
              </AnimatePresence>

              {/* Previous button */}
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous project image"
                className="
                  absolute left-4 top-1/2
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-black/50
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-blue-500/80
                  group-hover:opacity-100
                "
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Next project image"
                className="
                  absolute right-4 top-1/2
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-black/50
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-blue-500/80
                  group-hover:opacity-100
                "
              >
                <ChevronRight size={22} />
              </button>

              {/* Image counter */}
              <div
                className="
                  absolute bottom-4 right-4
                  rounded-full
                  border border-white/10
                  bg-black/50
                  px-3 py-1.5
                  text-xs font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                {activeImageIndex + 1} / {activeProject.images.length}
              </div>
            </div>

            {/* Image navigation */}
            <div className="mt-5 flex justify-center gap-3 overflow-x-auto pb-1">
              {activeProject.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show ${image.label}`}
                  className={`
                    relative
                    min-w-[120px]
                    overflow-hidden
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    ${
                      activeImageIndex === index
                        ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.20)]"
                        : "border-white/10 opacity-50 hover:border-white/30 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="h-20 w-full object-cover"
                  />

                  <span
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      bg-black/60
                      px-2
                      py-1.5
                      text-[10px]
                      font-medium
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {image.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProjectShowcase;
