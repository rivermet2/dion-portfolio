import { X } from "lucide-react";

type AboutModalProps = {
  selectedCard: string | null;
  onClose: () => void;
};

function AboutModal({ selectedCard, onClose }: AboutModalProps) {
  if (!selectedCard) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-neutral-900 p-10 text-white">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 transition hover:text-blue-400"
        >
          <X size={26} />
        </button>

        <h2 className="text-4xl font-bold">{selectedCard}</h2>

        <p className="mt-6 text-gray-300">Content coming soon...</p>
      </div>
    </div>
  );
}

export default AboutModal;
