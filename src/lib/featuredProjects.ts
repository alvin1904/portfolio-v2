export interface ProjectType {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  skills: string[];
  links: {
    type: "Github" | "Live";
    label: string;
    href: string;
  }[];
}

export const featuredProjects: ProjectType[] = [
  {
    src: "/projects/ensemble.webp",
    width: 1620,
    height: 1080,
    alt: "Ensemble CSE RIT",
    title: "Ensemble CSE Website",
    skills: ["React Js", "Next Js", "TypeScript"],
    links: [
      {
        type: "Github",
        label: "Github",
        href: "https://github.com/alvin1904/ensemble24-website",
      },
      {
        type: "Live",
        label: "Live",
        href: "https://ensemblecse24.vercel.app/",
      },
    ],
  },
  {
    src: "/projects/tedxgecrit.webp",
    width: 1620,
    height: 1080,
    alt: "TEDx GEC RIT Website",
    title: "TEDx GEC RIT Website",
    skills: ["React Js", "Next Js", "JavaScript", "Tailwind CSS"],
    links: [
      {
        type: "Github",
        label: "Github",
        href: "https://github.com/alvin1904/tedxgecrit23",
      },
      {
        type: "Live",
        label: "Live",
        href: "https://tedxgecrit.vercel.app/",
      },
    ],
  },
];
