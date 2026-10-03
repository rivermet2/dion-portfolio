import { useState } from "react";
import type { AboutCard } from "../../data/aboutCards";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import Reveal from "../ui/Reveal";
import { AnimatePresence, LayoutGroup } from "motion/react";
import ExpandedAboutCard from "./ExpandedAboutCard";

function About() {
  const [selectedCard, setSelectedCard] = useState<AboutCard | null>(null);

  return (
    <section
      id="about"
      className="relative isolate mt-32 overflow-visible px-6 pb-30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div
          className="
  pointer-events-none
    absolute
    -inset-y-40
    inset-x-0
    -z-10
    bg-[radial-gradient(ellipse_70%_65%_at_25%_50%,rgba(37,99,235,0.14)_0%,rgba(37,99,235,0.07)_35%,rgba(37,99,235,0.02)_58%,transparent_75%)]
"
        >
          <div
            className="
            about-glow-one
              absolute
              left-1/4
              top-1/3
             h-[700px]
w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.12]
              blur-[140px]
            "
          />

          <div
            className="
              about-glow-two
              absolute
              right-0
              top-1/2
              h-[600px]
w-[600px]
              translate-x-1/3
              rounded-full
              bg-indigo-500/[0.09]
              blur-[130px]
            "
          />
        </div>

        <Reveal>
          <AboutContent />
        </Reveal>

        <LayoutGroup>
          <Reveal delay={250}>
            <AboutCards
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </Reveal>

          <AnimatePresence>
            {selectedCard && (
              <ExpandedAboutCard
                card={selectedCard}
                onClose={() => setSelectedCard(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default About;
