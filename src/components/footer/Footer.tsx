import { Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center justify-center gap-3 sm:justify-start">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400">
            <Code2 size={17} />
          </div>

          <div>
            <p className="text-sm font-medium text-white">© 2026 Dion Hoti</p>

            <p className="mt-1 text-xs text-gray-500">
              Built from scratch with React · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500">Prishtina, Kosovo</p>
      </div>
    </footer>
  );
}

export default Footer;
