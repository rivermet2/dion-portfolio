type ProjectInfoProps = {
  project: {
    title: string;
    category: string;
    description: string;
    technologies: readonly string[];
  };
};

const projectFeatures: Record<string, string[]> = {
  "Kosovo Tourism": [
    "Interactive map",
    "Tourist and monument information",
    "Images and descriptions",
    "Directions and route display",
    "User login and registration",
    "Loading screen",
  ],
  DevMind: [
    "Developer-focused learning content",
    "Beginner-friendly educational resources",
    "Practical web development guidance",
    "Digital product development",
    "Brand identity and visual design",
    "Online marketing and content strategy",
  ],
};

function ProjectInfo({ project }: ProjectInfoProps) {
  const features = projectFeatures[project.title] ?? [];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      {/* Project Description */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          {project.category}
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
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
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-gray-300">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectInfo;
