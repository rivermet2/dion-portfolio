import { BriefcaseBusiness } from "lucide-react";
import Reveal from "../ui/Reveal";
import { experience } from "./experienceData";

function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate min-h-screen overflow-visible px-6 py-32"
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-40
          inset-x-0
          -z-10
          bg-[radial-gradient(ellipse_65%_60%_at_75%_40%,rgba(37,99,235,0.11)_0%,rgba(37,99,235,0.05)_38%,rgba(37,99,235,0.02)_58%,transparent_75%)]
        "
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Professional Experience
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              Professional experience that has strengthened my leadership,
              communication, and problem-solving skills.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal
                  key={`${item.company}-${item.role}`}
                  delay={index * 180}
                >
                  <div className="relative md:grid md:grid-cols-2 md:gap-16">
                    {/* Timeline dot */}
                    <div className="absolute left-5 top-7 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)] md:left-1/2" />

                    <div
                      className={`pl-12 md:pl-0 ${
                        isLeft
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-2 md:row-start-1"
                      }`}
                    >
                      <div
                        className="
                          rounded-3xl
                          border border-white/10
                          bg-white/[0.025]
                          p-7
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-blue-400/25
                          hover:bg-white/[0.04]
                        "
                      >
                        <div
                          className={`flex items-center gap-3 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400">
                            <BriefcaseBusiness size={21} />
                          </div>

                          <div>
                            <p className="text-sm font-medium text-blue-400">
                              {item.period}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-white">
                              {item.role}
                            </h3>
                          </div>
                        </div>

                        <h4 className="mt-5 text-lg font-medium text-gray-200">
                          {item.company}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
