import { X } from "lucide-react";
import { motion } from "motion/react";
import type { AboutCard } from "../../data/aboutCards";

type AboutModalProps = {
  selectedCard: AboutCard | null;
  onClose: () => void;
};

function AboutModal({ selectedCard, onClose }: AboutModalProps) {
  if (!selectedCard) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 24,
      }}
    >
      <motion.div
        layoutId={selectedCard.id}
        className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-neutral-900 p-10 text-white"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
        }}
        transition={{
          duration: 0.28,
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 transition hover:text-blue-400"
        >
          <X size={26} />
        </button>

        <h2 className="text-4xl font-bold">{selectedCard.title}</h2>

        <p className="mt-2 text-blue-400 font-medium">
          {selectedCard.subtitle}
        </p>

        <p className="mt-6 leading-8 text-gray-300">
          {selectedCard.description}
        </p>

        <div className="mt-8 space-y-3">
          {selectedCard.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-gray-200">{highlight}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutModal;
