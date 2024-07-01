import { Github2, Present } from "./../components/Icons";

const common = {
  height: 1080,
  width: 1620,
};

export interface ProjectType {
  src: string;
  width: number;
  height: number;
  name: string;
  skills: string[];
  year: number;
  links: {
    type: "Github" | "Live";
    label: string;
    href: string;
    icon: any;
  }[];
}

export const Ensemble: ProjectType = {
  year: 2023,
  src: "/projects/ensemble.webp",
  name: "Ensemble CSE Website",
  skills: ["Next Js", "TypeScript", "GSAP"],
  links: [
    {
      type: "Github",
      label: "Github",
      href: "https://github.com/alvin1904/ensemble24-website",
      icon: Github2(),
    },
    {
      type: "Live",
      label: "Live",
      href: "https://ensemblecse24.vercel.app/",
      icon: Present(),
    },
  ],
  ...common,
};

export const Ghostchats: ProjectType = {
  year: 2023,
  src: "/projects/ghostchats.webp",
  name: "Ghostchats - RT Chat Website",
  skills: ["Next Js", "TypeScript", "Socket IO"],
  links: [
    {
      type: "Github",
      label: "Github",
      href: "https://github.com/alvin1904/ghostchats",
      icon: Github2(),
    },
    {
      type: "Live",
      label: "Live",
      href: "https://ghostchats.vercel.app/",
      icon: Present(),
    },
  ],
  ...common,
};

export const TEDX: ProjectType = {
  year: 2023,
  src: "/projects/tedxgecrit.webp",
  name: "TEDx GEC RIT Website",
  skills: ["Next Js", "JavaScript", "Tailwind CSS"],
  links: [
    {
      type: "Github",
      label: "Github",
      href: "https://github.com/alvin1904/tedxgecrit23",
      icon: Github2(),
    },
    {
      type: "Live",
      label: "Live",
      href: "https://tedxgecrit.vercel.app/",
      icon: Present(),
    },
  ],
  ...common,
};

const Password: ProjectType = {
  year: 2023,
  src: "/projects/password.webp",
  name: "Generate Ur Password",
  skills: ["Svelte", "JavaScript", "CSS"],
  links: [
    {
      type: "Github",
      href: "https://github.com/alvin1904/generate-ur-password",
      label: "Github",
      icon: Github2(),
    },
    {
      type: "Live",
      href: "https://generate-ur-password.netlify.app/",
      label: "View",
      icon: Present(),
    },
  ],
  ...common,
};

const SkillVine: ProjectType = {
  year: 2023,
  name: "SkillVine",
  src: "/projects/skillvine.webp",
  skills: ["Next Js", "CSS", "Axios", "jsPDF"],
  links: [
    {
      type: "Github",
      href: "https://github.com/alvin1904/skillvine-client",
      label: "Github",
      icon: Github2(),
    },
    {
      type: "Live",
      href: "https://rit.skillvine.tech/",
      label: "View",
      icon: Present(),
    },
  ],
  ...common,
};

const Ragam: ProjectType = {
  year: 2023,
  name: "Ragam - Music Streaming",
  src: "/projects/ragam.webp",
  skills: ["React Js", "Next Js", "CSS", "React Spring", "Axios", "Vite"],
  links: [
    {
      type: "Github",
      href: "https://github.com/alvin1904/ragam-client",
      label: "Github",
      icon: Github2(),
    },
    {
      type: "Github",
      href: "https://github.com/alvin1904/ragam-companion",
      label: "Companion App",
      icon: Github2(),
    },
    {
      type: "Live",
      href: "https://ragam.netlify.app/",
      label: "View",
      icon: Present(),
    },
    {
      type: "Live",
      href: "https://ragam-companion.netlify.app",
      label: "Companion website",
      icon: Present(),
    },
  ],
  ...common,
};

const Shortly: ProjectType = {
  year: 2022,
  name: "Shortly - URL Shortener",
  src: "",
  skills: ["React Js", "CSS", "Firebase"],
  links: [
    {
      type: "Github",
      href: "https://github.com/alvin1904/url-shortener",
      label: "Github",
      icon: Github2(),
    },
    {
      type: "Live",
      href: "https://url-shortener-8b7d8.web.app/",
      label: "View",
      icon: Present(),
    },
  ],
  ...common,
};

const Advice: ProjectType = {
  year: 2022,
  name: "Advice Generator",
  src: "",
  skills: ["React Js", "CSS"],
  links: [
    {
      type: "Github",
      href: "https://github.com/alvin1904/advice-generator",
      label: "Github",
      icon: Github2(),
    },
  ],
  ...common,
};

export const allProjects: ProjectType[] = [
  Ensemble,
  Ghostchats,
  TEDX,
  SkillVine,
  Ragam,
  Password,
  Shortly,
  Advice,
];

export const featuredProjects: ProjectType[] = [Ensemble, Ghostchats,TEDX];
