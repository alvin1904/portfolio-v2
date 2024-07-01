import Image from "next/image";
import Link from "next/link";
import Skill from "./Skill";
import { ProjectType } from "@/lib/allProjects";

const FeaturedProject = (props: ProjectType) => {
  const liveDetails = props.links[1];
  const githubDetails = props.links[0];
  return (
    <div className="highlight_project">
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.name}
      />

      <div className="project_shade flex flex-col">
        <h2>{props.name}</h2>
        <div className="flex flex-col_mobile items-center justify-between gap-half">
          <div className="project_skills flex gap-half">
            {props.skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </div>
          <div className="project_links flex gap-half">
            <Link
              target="_blank"
              draggable={false}
              href={githubDetails.href}
              className="project_link border-1 flex flex-row items-center gap-half cup smoothen unselect"
            >
              {githubDetails.icon}
              <span>{githubDetails.label}</span>
            </Link>
            <Link
              target="_blank"
              draggable={false}
              href={liveDetails.href}
              className="project_link border-1 flex flex-row items-center gap-half cup smoothen unselect"
            >
              {liveDetails.icon}
              <span>{liveDetails.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
