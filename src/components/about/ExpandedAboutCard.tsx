import { motion } from "motion/react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { AboutCard } from "../../data/aboutCards";

interface ExpandedAboutCardProps {
  card: AboutCard;
  onClose: () => void;
}

function ExpandedAboutCard({ card, onClose }: ExpandedAboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        px-6
        py-10
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="
          relative
          max-h-[85vh]
          w-full
          max-w-3xl
          overflow-y-auto
          rounded-3xl
          border
          border-white/10
          bg-neutral-950
          p-8
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          md:p-10
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-gray-400
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-white/[0.08]
            hover:text-white
          "
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pr-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400">
            <card.icon size={26} />
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            {card.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {card.value}
          </h2>

          <p className="mt-2 text-gray-400">{card.subtitle}</p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400">
            {card.description}
          </p>
        </div>

        {/* Projects */}
        {card.id === "projects" && "projects" in card && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">
              Featured Projects
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {card.projects?.map((project) => (
                <div
                  key={project.name}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-5
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-white">{project.name}</h4>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-blue-400"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-black/20
                          px-3
                          py-1.5
                          text-xs
                          text-gray-400
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 size={14} className="text-blue-400" />
                    {project.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {card.id === "technologies" && "skills" in card && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">
              Technologies I Work With
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {card.skills?.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    py-4
                  "
                >
                  <CheckCircle2 size={17} className="shrink-0 text-blue-400" />

                  <span className="text-sm text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {card.id === "experience" && "timeline" in card && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">
              Professional Journey
            </h3>

            <div className="mt-6 space-y-5">
              {card.timeline?.map((item) => (
                <div
                  key={item.company}
                  className="
                    relative
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-5
                  "
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.company}
                      </h4>

                      <p className="mt-1 text-sm text-gray-400">{item.role}</p>
                    </div>

                    <span className="text-sm text-blue-400">{item.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {card.id === "education" && "education" in card && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">
              Academic Background
            </h3>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                University
              </p>

              <h4 className="mt-3 text-xl font-semibold text-white">
                {card.education?.university}
              </h4>

              <p className="mt-2 text-gray-400">{card.education?.degree}</p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-sm text-gray-500">Graduation</p>

                <p className="mt-1 text-white">{card.education?.graduation}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ExpandedAboutCard;
