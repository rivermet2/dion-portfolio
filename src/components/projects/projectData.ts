export const projectData = [
  {
    id: "kosovo-tourism",
    title: "Kosovo Tourism",
    category: "Desktop Application",
    description:
      "A desktop tourism application designed to help users explore cultural and tourist destinations across Kosovo through an interactive map, detailed monument information, images, and directions.",
    technologies: [
      "C#",
      ".NET Framework",
      "Windows Forms",
      "Microsoft Access",
      "GMap.NET",
    ],
    images: [
      {
        id: "map",
        src: "/projects/kosovo-tourism/map.png",
        alt: "Kosovo Tourism application showing the interactive map",
        label: "Interactive Map",
      },
      {
        id: "monument",
        src: "/projects/kosovo-tourism/monument.png",
        alt: "Kosovo Tourism application showing monument information",
        label: "Monument Information",
      },
      {
        id: "directions",
        src: "/projects/kosovo-tourism/directions.png",
        alt: "Kosovo Tourism application showing a route between locations",
        label: "Directions",
      },
      {
        id: "login",
        src: "/projects/kosovo-tourism/login.png",
        alt: "Kosovo Tourism application login screen",
        label: "Login",
      },
      {
        id: "register",
        src: "/projects/kosovo-tourism/register.png",
        alt: "Kosovo Tourism application registration screen",
        label: "Registration",
      },
    ],
  },
  {
    id: "devmind",
    title: "DevMind",
    category: "Digital Learning Product",
    description:
      "A developer-focused digital learning initiative built to help beginners develop practical skills, build real projects, and grow through modern web development.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Digital Product",
      "Branding",
    ],
    images: [
      {
        id: "devmind-main",
        src: "/projects/devmind/devmind-main.jpg",
        alt: "DevMind developer learning brand",
        label: "DevMind",
      },
      {
        id: "devmind-wide",
        src: "/projects/devmind/devmind-wide.jpg",
        alt: "DevMind digital learning environment",
        label: "Brand & Product",
      },
    ],
  },
] as const;
