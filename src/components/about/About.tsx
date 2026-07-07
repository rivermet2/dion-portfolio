import { useState } from "react";
import type { AboutCard } from "../../data/aboutCards";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import Reveal from "../ui/Reveal";
import { LayoutGroup } from "motion/react";

function About() {
  const [selectedCard, setSelectedCard] = useState<AboutCard | null>(null);

  return (
    <section id="about" className="relative min-h-screen px-6 mt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
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
        </LayoutGroup>
      </div>
    </section>
  );
}

export default About;
