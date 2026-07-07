import {
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

export const aboutCards = [
  {
    id: "projects",
    title: "Projects",
    value: "2",
    subtitle: "Featured Projects",
    icon: FolderKanban,
    delay: 360,

    description: "Projects that demonstrate my growth as a software engineer.",

    projects: [
      {
        name: "Kosovo Tourism",
        technologies: ["C#", ".NET", "Access Database"],
        status: "Completed",
      },
      {
        name: "Personal Portfolio",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
        status: "In Progress",
      },
    ],
  },

  {
    id: "technologies",
    title: "Technologies",
    value: "6+",
    subtitle: "Modern Web Stack",
    icon: Code2,
    delay: 480,

    description: "Technologies I use and continue improving every day.",

    skills: ["React", "TypeScript", "Tailwind CSS", "Motion", "Git", "Python"],
  },

  {
    id: "experience",
    title: "Experience",
    value: "Manager",
    subtitle: "Leadership & Retail",
    icon: BriefcaseBusiness,
    delay: 600,

    description:
      "Managing the Boggi Milano store while leading the team, driving sales performance, and delivering an exceptional customer experience.",

    timeline: [
      {
        company: "ALBI Group",
        role: "Retail",
        years: "2020–2025",
      },
      {
        company: "Boggi Milano",
        role: "Store Manager",
        years: "2025–Present",
      },
    ],
  },

  {
    id: "education",
    title: "BSc",
    value: "Bachelor",
    subtitle: "Software Engineering",
    icon: GraduationCap,
    delay: 720,

    description:
      "Bachelor's Degree in Software Engineering from AAB University.",

    education: {
      university: "AAB University",
      degree: "Bachelor of Software Engineering",
      graduation: "2026",
    },
  },
];

export type AboutCard = (typeof aboutCards)[number];
