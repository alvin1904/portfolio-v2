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
    name: "Ensemble Website",
    skills: ["Next Js", "TypeScript", "CSS", "GSAP"],
    links: [
      {
        href: "https://github.com/alvin1904/ensemble24-website",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://ensemblecse24.vercel.app/",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "Generate Ur Password",
    skills: ["Svelte", "JavaScript", "CSS"],
    links: [
      {
        href: "https://github.com/alvin1904/generate-ur-password",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://generate-ur-password.netlify.app/",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "TEDx GECRIT Website",
    skills: ["Next Js", "JavaScript", "Tailwind CSS"],
    links: [
      {
        href: "https://github.com/alvin1904/tedxgecrit23",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://www.tedxgecrit.com/",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "SkillVine",
    skills: ["Next Js", "CSS", "Axios", "jsPDF"],
    links: [
      {
        href: "https://github.com/alvin1904/skillvine-client",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://rit.skillvine.tech/",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2023,
    name: "Ragam - Music Streaming",
    skills: ["React Js", "Next Js", "CSS", "React Spring", "Axios", "Vite"],
    links: [
      {
        href: "https://github.com/alvin1904/ragam-client",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://github.com/alvin1904/ragam-companion",
        label: "Companion App",
        icon: Github2,
      },
      {
        href: "https://ragam.netlify.app/",
        label: "View",
        icon: Present,
      },
      {
        href: "https://ragam-companion.netlify.app",
        label: "Companion website",
        icon: Present,
      },
    ],
  },
  {
    year: 2022,
    name: "Shortly - URL Shortener",
    skills: ["React Js", "CSS", "Firebase"],
    links: [
      {
        href: "https://github.com/alvin1904/url-shortener",
        label: "Github",
        icon: Github2,
      },
      {
        href: "https://url-shortener-8b7d8.web.app/",
        label: "View",
        icon: Present,
      },
    ],
  },
  {
    year: 2022,
    name: "Advice Generator",
    skills: ["React Js", "CSS"],
    links: [
      {
        href: "https://github.com/alvin1904/advice-generator",
        label: "Github",
        icon: Github2,
      },
    ],
  },
];
