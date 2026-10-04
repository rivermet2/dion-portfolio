function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
      <a
        href="#projects"
        className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-10 py-5 rounded-2xl border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
      >
        Contact Me
      </a>
    </div>
  );
}

export default HeroButtons;
