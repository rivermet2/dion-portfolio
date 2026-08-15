import { X } from "lucide-react";
import { motion } from "motion/react";
import type { AboutCard } from "../../data/aboutCards";

type ExpandedAboutCardProps = {
  card: AboutCard;
  onClose: () => void;
};

function ExpandedAboutCard({ card, onClose }: ExpandedAboutCardProps) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      <motion.div
        layoutId={card.id}
        className="
          fixed
          left-1/2
          top-[12%]
          z-50

          w-[calc(100%-3rem)]
          max-w-4xl

          -translate-x-1/2

          rounded-3xl
          border border-white/10

          bg-neutral-900

          p-10

          text-white

          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6

            text-gray-400

            transition-colors
            duration-200

            hover:text-blue-400
          "
        >
          <X size={24} />
        </button>

        <h2 className="text-5xl font-bold">{card.title}</h2>

        <p className="mt-3 font-medium text-blue-400">{card.subtitle}</p>

        <p className="mt-8 leading-8 text-gray-300">{card.description}</p>
      </motion.div>
    </>
  );
}

export default ExpandedAboutCard;
