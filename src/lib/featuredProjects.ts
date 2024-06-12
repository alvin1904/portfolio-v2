import { Github2, Present } from "@/components/Icons";

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
    icon: () => JSX.Element;
  }[];
}

export const featuredProjects: ProjectType[] = [
  {
    src: "/projects/ensemble.webp",
    width: 1620,
    height: 1080,
    alt: "Ensemble CSE RIT",
    title: "Ensemble CSE Website",
    skills: ["Next Js", "TypeScript"],
    links: [
      {
        type: "Github",
        label: "Github",
        href: "https://github.com/alvin1904/ensemble24-website",
        icon: Github2,
      },
      {
        type: "Live",
        label: "Live",
        href: "https://ensemblecse24.vercel.app/",
        icon: Present,
      },
    ],
  },
  {
    src: "/projects/tedxgecrit.webp",
    width: 1620,
    height: 1080,
    alt: "TEDx GEC RIT Website",
    title: "TEDx GEC RIT Website",
    skills: ["Next Js", "JavaScript", "Tailwind CSS"],
    links: [
      {
        type: "Github",
        label: "Github",
        href: "https://github.com/alvin1904/tedxgecrit23",
        icon: Github2,
      },
      {
        type: "Live",
        label: "Live",
        href: "https://tedxgecrit.vercel.app/",
        icon: Present,
      },
    ],
  },
];
