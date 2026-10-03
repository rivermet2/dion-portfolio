import { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
import Reveal from "../ui/Reveal";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "hotidion@hotmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative isolate min-h-screen overflow-visible px-6 py-32"
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-40
          inset-x-0
          -z-10
          bg-[radial-gradient(ellipse_70%_65%_at_50%_45%,rgba(37,99,235,0.12)_0%,rgba(37,99,235,0.06)_35%,rgba(37,99,235,0.02)_58%,transparent_75%)]
        "
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let's build something together.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              I'm always open to discussing frontend opportunities, software
              projects, collaborations, and new ideas.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main contact card */}
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
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400">
                  <Mail size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Get in touch
                </h3>

                <p className="mt-3 max-w-xl text-base leading-7 text-gray-400">
                  Whether you're looking for a frontend developer, want to
                  discuss a project, or simply want to connect, feel free to
                  reach out.
                </p>

                {/* Email */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${email}`}
                    className="
                      flex
                      min-h-12
                      flex-1
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      text-sm
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-blue-400/30
                      hover:text-white
                    "
                  >
                    <Mail size={18} className="text-blue-400" />
                    {email}
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="
                      flex
                      min-h-12
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      text-sm
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-blue-400/30
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                  >
                    {copied ? (
                      <>
                        <Check size={17} className="text-blue-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={17} />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="mt-5 flex items-center gap-3 text-sm text-gray-500">
                  <MapPin size={17} className="text-blue-400" />
                  Prishtina, Kosovo
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={180}>
            <div className="grid gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/25
                  hover:bg-white/[0.04]
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-gray-300">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <p className="font-medium text-white">GitHub</p>
                    <p className="mt-1 text-sm text-gray-500">
                      View my projects and code
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/25
                  hover:bg-white/[0.04]
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-gray-300">
                    <BriefcaseBusiness size={21} />
                  </div>

                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Connect with me professionally
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </a>

              <div className="rounded-3xl border border-blue-400/10 bg-blue-500/[0.04] p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  Open to opportunities
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Currently focused on growing as a frontend developer and
                  contributing to meaningful software projects.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
