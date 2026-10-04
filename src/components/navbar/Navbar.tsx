import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const entranceTimer = window.setTimeout(() => {
      setHasEntered(true);

      if (window.scrollY <= 10) {
        setIsVisible(true);
      }
    }, 1200);

    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(entranceTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`
    fixed left-0 top-0 z-50
    box-border w-[100dvw]
    px-3 pt-3 sm:px-6 sm:pt-4
    transition-all duration-700 ease-out
    ${
      isVisible && hasEntered
        ? "translate-y-0 opacity-100"
        : "-translate-y-6 opacity-0 pointer-events-none"
    }
  `}
    >
      <nav
        className="
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-neutral-950/70
          px-3
          py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          backdrop-blur-xl
          sm:px-4
        "
      >
        <div className="flex min-w-0 items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="
              min-w-0
              shrink
              font-display
              truncate
              text-sm
              font-bold
              tracking-[0.16em]
              text-white
              transition-colors
              duration-300
              hover:text-blue-400
              sm:tracking-[0.2em]
            "
          >
            DION HOTI
          </a>

          {/* Desktop navigation */}
          <div className="hidden min-w-0 items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  text-gray-400
                  transition-all
                  duration-300
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-gray-300
              transition-all
              duration-300
              hover:border-blue-400/30
              hover:text-white
              lg:hidden
            "
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mt-3 border-t border-white/10 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    text-gray-400
                    transition-all
                    duration-300
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
