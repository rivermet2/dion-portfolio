import Reveal from "../ui/Reveal";
import { skillCategories } from "./skillData";

function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate min-h-screen overflow-visible px-6 py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-40
          inset-x-0
          -z-10
          bg-[radial-gradient(ellipse_70%_65%_at_25%_40%,rgba(37,99,235,0.12)_0%,rgba(37,99,235,0.06)_35%,rgba(37,99,235,0.02)_58%,transparent_75%)]
        "
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Technologies
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              My Development Stack
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              Technologies and tools I use to build modern software experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 120}>
              <div
                className="
                  h-full
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-blue-400/20
                  hover:bg-white/[0.04]
                "
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          rounded-2xl
                          border border-white/10
                          bg-black/20
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-blue-400/30
                          hover:bg-blue-500/[0.04]
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex h-10 w-10
                              shrink-0
                              items-center justify-center
                              rounded-xl
                              border border-blue-400/20
                              bg-blue-500/[0.08]
                              text-blue-400
                              transition-all
                              duration-300
                              group-hover:border-blue-400/40
                              group-hover:bg-blue-500/[0.12]
                            "
                          >
                            <Icon size={20} />
                          </div>

                          <h4 className="font-medium text-white">
                            {skill.name}
                          </h4>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-gray-500">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
