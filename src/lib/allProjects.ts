import { Github2, Present } from "./../components/Icons";

export interface NormalProjectType {
  year: number;
  name: string;
  skills: string[];
  links: {
    href: string;
    label: string;
    icon: () => JSX.Element;
  }[];
}

export const allProjects: NormalProjectType[] = [
  {
    year: 2023,
    name: "Ghostchats",
    skills: ["Typescript", "HTML", "CSS"],
    links: [
      {
        href: "#",
        label: "Github",
        icon: Github2,
      },
      {
        href: "#",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "Ghostchats",
    skills: ["Typescript", "React Js", "Next Js"],
    links: [
      {
        href: "#",
        label: "Github",
        icon: Github2,
      },
      {
        href: "#",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "Ghostchats",
    skills: ["Typescript", "React Js", "Next Js"],
    links: [
      {
        href: "#",
        label: "Github",
        icon: Github2,
      },
      {
        href: "#",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "Ghostchats",
    skills: ["Typescript", "Typescript", "Typescript", "Typescript"],
    links: [
      {
        href: "#",
        label: "Github",
        icon: Github2,
      },
      {
        href: "#",
        label: "View",
        icon: Present,
      },
    ],
  },
];
