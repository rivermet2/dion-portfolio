import type { Dispatch, SetStateAction } from "react";
import AboutCard from "./AboutCard";
import { aboutCards } from "../../data/aboutCards";
import type { AboutCard as AboutCardType } from "../../data/aboutCards";

type AboutCardsProps = {
  selectedCard: AboutCardType | null;
  setSelectedCard: Dispatch<SetStateAction<AboutCardType | null>>;
};

function AboutCards({ selectedCard, setSelectedCard }: AboutCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {aboutCards.map((card) => {
        return (
          <AboutCard
            key={card.id}
            card={card}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        );
      })}
    </div>
  );
}

export default AboutCards;
