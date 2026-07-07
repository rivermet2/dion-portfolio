import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import Reveal from "../ui/Reveal";
import type { AboutCard as AboutCardType } from "../../data/aboutCards";

type AboutCardProps = {
  card: AboutCardType;
  selectedCard: AboutCardType | null;
  setSelectedCard: Dispatch<SetStateAction<AboutCardType | null>>;
};

function AboutCard({ card, selectedCard, setSelectedCard }: AboutCardProps) {
  const Icon = card.icon;

  return (
    <Reveal delay={card.delay}>
      <motion.div
        layoutId={card.id}
        onClick={() => setSelectedCard(card)}
        data-selected={selectedCard?.id === card.id}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        animate={{
          opacity: selectedCard && selectedCard.id !== card.id ? 0.35 : 1,

          filter:
            selectedCard && selectedCard.id !== card.id
              ? "blur(3px)"
              : "blur(0px)",

          scale: selectedCard?.id === card.id ? 1.04 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
        }}
        className={`
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

  hover:border-blue-500/40
  hover:bg-white/[0.05]
  hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]

`}
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
      </motion.div>
    </Reveal>
  );
}

export default AboutCard;
