function ProjectInfo() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      {/* Project Description */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Featured Project
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Kosovo Tourism
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
          A desktop tourism application designed to help users explore cultural
          and tourist destinations across Kosovo through an interactive map,
          detailed monument information, images, and directions.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {[
            "C#",
            ".NET Framework",
            "Windows Forms",
            "Microsoft Access",
            "GMap.NET",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Key Features
        </p>

        <ul className="mt-5 space-y-4">
          {[
            "Interactive map",
            "Tourist and monument information",
            "Images and descriptions",
            "Directions and route display",
            "User login and registration",
            "Loading screen",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectInfo;
