import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layout,
  Monitor,
  Package,
  Palette,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    description: "Technologies I use to build modern web interfaces.",
    skills: [
      {
        name: "React",
        description: "Component-based interfaces and modern web applications.",
        icon: Atom,
      },
      {
        name: "TypeScript",
        description:
          "Typed JavaScript for safer and more maintainable applications.",
        icon: Braces,
      },
      {
        name: "JavaScript",
        description: "Core language for interactive web experiences.",
        icon: FileCode2,
      },
      {
        name: "HTML5",
        description: "Semantic structure for modern web pages.",
        icon: Globe,
      },
      {
        name: "CSS3",
        description: "Styling, layouts, animations, and responsive interfaces.",
        icon: Palette,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for responsive interfaces.",
        icon: Layout,
      },
    ],
  },

  {
    title: "UI & Animation",
    description: "Tools I use to create polished and interactive experiences.",
    skills: [
      {
        name: "Motion",
        description: "Smooth UI transitions and interactive animations.",
        icon: Wrench,
      },
      {
        name: "Lucide React",
        description: "Consistent icons used throughout the interface.",
        icon: Code2,
      },
      {
        name: "Responsive UI",
        description:
          "Interfaces designed to work across different screen sizes.",
        icon: Monitor,
      },
      {
        name: "CSS Animations",
        description: "Custom visual effects and subtle interface motion.",
        icon: Palette,
      },
    ],
  },

  {
    title: "Development",
    description: "Tools that support my development workflow.",
    skills: [
      {
        name: "Vite",
        description:
          "Fast development and build tooling for modern web projects.",
        icon: Terminal,
      },
      {
        name: "Node.js",
        description: "JavaScript runtime used in the development environment.",
        icon: Server,
      },
      {
        name: "npm",
        description:
          "Package management for JavaScript and TypeScript projects.",
        icon: Package,
      },
    ],
  },

  {
    title: "C# & .NET",
    description: "Technologies used in my Kosovo Tourism desktop application.",
    skills: [
      {
        name: "C#",
        description:
          "Programming language used to develop the tourism application.",
        icon: Code2,
      },
      {
        name: ".NET Framework",
        description: "Framework used by the Windows desktop application.",
        icon: Server,
      },
      {
        name: "Windows Forms",
        description: "Desktop UI framework used for the tourism application.",
        icon: Monitor,
      },
    ],
  },

  {
    title: "Database",
    description: "Database technologies used in my applications.",
    skills: [
      {
        name: "Microsoft Access",
        description: "Database used by the Kosovo Tourism application.",
        icon: Database,
      },
      {
        name: "SQL / OleDb",
        description: "Database queries and data access through OleDb.",
        icon: Database,
      },
    ],
  },

  {
    title: "Version Control",
    description: "Tools I use to manage and maintain projects.",
    skills: [
      {
        name: "Git",
        description: "Version control for tracking development changes.",
        icon: GitBranch,
      },
      {
        name: "GitHub",
        description: "Remote repository hosting and project collaboration.",
        icon: GitBranch,
      },
    ],
  },

  {
    title: "Other",
    description: "Additional programming experience.",
    skills: [
      {
        name: "Python",
        description:
          "Programming language included in my development skill set.",
        icon: Code2,
      },
    ],
  },
] as const;
