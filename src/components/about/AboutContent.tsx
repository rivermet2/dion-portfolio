function AboutContent() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
        About Me
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Building modern web experiences.
      </h2>

      <div className="mt-6 space-y-5 text-base leading-7 text-gray-400 md:text-lg">
        <p>
          I'm a Software Engineering graduate with a strong focus on frontend
          development and creating modern, responsive, and user-friendly web
          experiences.
        </p>

        <p>
          My main focus is on HTML, CSS, JavaScript, React, and TypeScript,
          using tools such as Tailwind CSS and Motion to build clean,
          interactive, and engaging interfaces.
        </p>

        <p>
          My background also includes experience with C#, .NET, desktop
          applications, databases, and software development. Combined with my
          professional experience in management, I've developed strong
          communication, leadership, teamwork, and problem-solving skills.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "TypeScript",
          "Tailwind CSS",
        ].map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              text-gray-400
              transition-colors
              duration-300
              hover:border-blue-400/30
              hover:text-gray-200
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutContent;
