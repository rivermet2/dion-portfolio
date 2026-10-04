import { useEffect, useState } from "react";
import { GraduationCap, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../ui/Reveal";

function Education() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (!showImage) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [showImage]);

  return (
    <section
      id="education"
      className="relative isolate min-h-screen overflow-visible px-6 py-32"
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-40
          inset-x-0
          -z-10
          bg-[radial-gradient(ellipse_65%_60%_at_70%_45%,rgba(37,99,235,0.11)_0%,rgba(37,99,235,0.05)_38%,rgba(37,99,235,0.02)_58%,transparent_75%)]
        "
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Academic Background
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              The academic foundation behind my journey into software
              engineering and frontend development.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Education information */}
          <Reveal>
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.025]
                p-8
                backdrop-blur-sm
                md:p-10
              "
            >
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-3xl" />

              <div className="relative">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-400/20
                    bg-blue-500/[0.08]
                    text-blue-400
                  "
                >
                  <GraduationCap size={30} />
                </div>

                <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  AAB University
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                  Bachelor of Software Engineering
                </h3>

                <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-400">
                  Graduated · 2026
                </div>

                <p className="mt-7 text-base leading-7 text-gray-400">
                  My academic background in Software Engineering provided the
                  foundation for my development journey, from programming and
                  application development to databases and software engineering
                  principles.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Software Engineering",
                    "Programming",
                    "Application Development",
                    "Databases",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-3
                        text-sm
                        text-gray-400
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Diploma photo */}
          <Reveal delay={180}>
            <div className="relative">
              <div
                className="
                  absolute
                  -inset-6
                  rounded-[2.5rem]
                  bg-blue-500/[0.06]
                  blur-3xl
                "
              />

              <motion.button
                type="button"
                onClick={() => setShowImage(true)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-3
                  text-left
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/education/diploma.webp"
                    alt="Bachelor's diploma celebration"
                    loading="lazy"
                    className="
                            h-[520px]
                            w-full
                            object-cover
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                           "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                        Milestone
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        Bachelor of Software Engineering
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        AAB University · 2026
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:bg-blue-500/20
                        group-hover:text-blue-300
                      "
                    >
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </motion.button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Fullscreen image */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-6
              backdrop-blur-md
            "
            onClick={() => setShowImage(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src="/education/diploma.webp"
                alt="Bachelor's diploma celebration"
                className="
                  max-h-[85vh]
                  w-auto
                  max-w-full
                  rounded-2xl
                  object-contain
                  shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                "
              />

              <button
                type="button"
                onClick={() => setShowImage(false)}
                aria-label="Close image"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Education;
