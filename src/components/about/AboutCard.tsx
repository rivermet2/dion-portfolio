import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { AboutCard as AboutCardType } from "../../data/aboutCards";

interface AboutCardProps {
  card: AboutCardType;
  selectedCard: AboutCardType | null;
  setSelectedCard: (card: AboutCardType) => void;
}

function AboutCard({ card, selectedCard, setSelectedCard }: AboutCardProps) {
  const Icon = card.icon;
  const isSelected = selectedCard?.id === card.id;

  return (
    <motion.button
      type="button"
      layoutId={`about-card-${card.id}`}
      onClick={() => setSelectedCard(card)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        p-6
        text-left
        transition-colors
        duration-300
        ${
          isSelected
            ? "border-blue-400/40 bg-blue-500/[0.06]"
            : "border-white/10 bg-white/[0.025] hover:border-blue-400/25 hover:bg-white/[0.04]"
        }
      `}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-blue-500/[0.06]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-blue-500/[0.1]
        "
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-blue-400/20
            bg-blue-500/[0.08]
            text-blue-400
            transition-all
            duration-300
            group-hover:border-blue-400/40
            group-hover:bg-blue-500/[0.12]
          "
        >
          <Icon size={22} />
        </div>

        {/* Title + value */}
        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            {card.title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
            {card.value}
          </h3>

          <p className="mt-1 text-sm text-gray-400">{card.subtitle}</p>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-gray-500">
          {card.description}
        </p>

        {/* Card-specific preview information */}
        {card.id === "projects" && "projects" in card && (
          <div className="mt-5 flex flex-wrap gap-2">
            {card.projects?.map((project) => (
              <span
                key={project.name}
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
                {project.name}
              </span>
            ))}
          </div>
        )}

        {card.id === "technologies" && "skills" in card && (
          <div className="mt-5 flex flex-wrap gap-2">
            {card.skills?.slice(0, 6).map((skill) => (
              <span
                key={skill}
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
                {skill}
              </span>
            ))}
          </div>
        )}

        {card.id === "experience" && "timeline" in card && (
          <div className="mt-5 space-y-2">
            {card.timeline?.map((item) => (
              <div
                key={item.company}
                className="flex items-center justify-between gap-4 text-xs"
              >
                <span className="text-gray-300">{item.company}</span>
                <span className="text-gray-500">{item.years}</span>
              </div>
            ))}
          </div>
        )}

        {card.id === "education" && "education" in card && (
          <div className="mt-5">
            <p className="text-sm text-gray-300">
              {card.education?.university}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {card.education?.degree}
            </p>
          </div>
        )}

        {/* Explore indicator */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
            Explore details
          </span>

          <ArrowUpRight
            size={18}
            className="
              text-gray-500
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-blue-400
            "
          />
        </div>
      </div>
    </motion.button>
  );
}

export default AboutCard;
