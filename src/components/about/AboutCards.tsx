import type { Dispatch, SetStateAction } from "react";
import Reveal from "../ui/Reveal";
import {
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    title: "Projects",
    value: "2",
    subtitle: "Featured Projects",
    icon: FolderKanban,
    delay: 360,
  },
  {
    title: "Technologies",
    value: "6+",
    subtitle: "Modern Web Stack",
    icon: Code2,
    delay: 480,
  },
  {
    title: "Experience",
    value: "Manager",
    subtitle: "Leadership & Retail",
    icon: BriefcaseBusiness,
    delay: 600,
  },
  {
    title: "Education",
    value: "BSc",
    subtitle: "Software Engineering",
    icon: GraduationCap,
    delay: 720,
  },
];

type AboutCardsProps = {
  selectedCard: string | null;
  setSelectedCard: Dispatch<SetStateAction<string | null>>;
};

function AboutCards({ selectedCard, setSelectedCard }: AboutCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Reveal key={card.title} delay={card.delay}>
            <div
              onClick={() => setSelectedCard(card.title)}
              data-selected={selectedCard === card.title}
              className="
               group
               cursor-pointer
               relative
               overflow-hidden

               rounded-3xl  

               border border-white/10

               bg-white/[0.03]

               p-8

               transition-all
              duration-500

              hover:-translate-y-2
              hover:border-blue-500/40
              hover:bg-white/[0.05]
              hover:shadow-[0_15px_40px_rgba(59, 130, 246, 0.15)]
              "
            >
              <div
                className="
                absolute
                inset-0

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100

                pointer-events-none
                "
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 30%, transparent 70%)",
                }}
              />

              <Icon
                size={30}
                className="
              text-blue-400
              transition-all
              duration-500
              group-hover:scale-125
              group-hover:-translate-y-1
              "
              />

              <div
                className="
                  mt-6

                  text-4xl
                  font-bold
                  text-white

                  transition-all
                    duration-500

                   group-hover:-translate-y-1
                  group-hover:text-blue-100
                    "
              >
                {card.value}
              </div>

              <div
                className="
                  mt-4
                  mb-4

                  h-px
                  w-12

                  bg-blue-400/40

                  transition-all
                  duration-500

                  group-hover:w-30
                  group-hover:bg-blue-400/70
                "
              />

              <div className="mt-2 text-lg font-semibold text-white">
                {card.title}
              </div>

              <div className="mt-1 text-sm text-gray-400">{card.subtitle}</div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default AboutCards;
