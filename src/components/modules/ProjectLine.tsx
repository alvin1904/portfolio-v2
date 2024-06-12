import { NormalProjectType } from "@/lib/allProjects";
import Link from "next/link";
import Skill from "./Skill";

const ProjectLine = (props: NormalProjectType) => {
  return (
    <div className="project_line">
      <div className="p_year unselect">{props.year}</div>
      <div className="p_project">{props.name}</div>
      <div className="p_skills flex flex-row items-center gap-half">
        {props.skills.map((skill, skillIndex) => (
          <Skill key={skillIndex}>{skill}</Skill>
        ))}
      </div>
      <div className="p_links flex flex-row items-center gap-half unselect">
        {props.links.map((link, linkIndex) => (
          <Link
            key={linkIndex}
            target="_blank"
            draggable={false}
            href={link.href}
            className="project_link border-1 flex flex-row items-center gap-half cup smoothen"
          >
            {<link.icon />} <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectLine;
