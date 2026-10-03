import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { kosovoTourismImages } from "./projectData";

function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = kosovoTourismImages[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? kosovoTourismImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === kosovoTourismImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-6"
      >
        {/* Main image */}
        <div className="group relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-2xl bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="max-h-[650px] w-full rounded-2xl object-contain"
            />
          </AnimatePresence>

          {/* Previous button */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous project screenshot"
            className="
              absolute left-4 top-1/2
              flex h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/10
              bg-black/50
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-blue-500/80
              group-hover:opacity-100
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next project screenshot"
            className="
              absolute right-4 top-1/2
              flex h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/10
              bg-black/50
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-blue-500/80
              group-hover:opacity-100
            "
          >
            <ChevronRight size={22} />
          </button>

          {/* Image counter */}
          <div
            className="
              absolute bottom-4 right-4
              rounded-full
              border border-white/10
              bg-black/50
              px-3 py-1.5
              text-xs font-medium
              text-white
              backdrop-blur-md
            "
          >
            {activeIndex + 1} / {kosovoTourismImages.length}
          </div>
        </div>

        {/* Screenshot navigation */}
        <div className="mt-5 flex justify-center gap-3 overflow-x-auto pb-1">
          {kosovoTourismImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`
                relative
                min-w-[120px]
                overflow-hidden
                rounded-xl
                border
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.20)]"
                    : "border-white/10 opacity-50 hover:border-white/30 hover:opacity-100"
                }
              `}
            >
              <img
                src={image.src}
                alt=""
                className="h-20 w-full object-cover"
              />

              <span
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-black/60
                  px-2
                  py-1.5
                  text-[10px]
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                {image.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectShowcase;
