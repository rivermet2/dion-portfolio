import { useState } from "react";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import AboutModal from "./AboutModal";
import Reveal from "../ui/Reveal";

function About() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section id="about" className="relative min-h-screen px-6 mt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <Reveal>
          <AboutContent />
        </Reveal>

        <Reveal delay={250}>
          <AboutCards
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </Reveal>

        <AboutModal
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      </div>
    </section>
  );
}

export default About;
