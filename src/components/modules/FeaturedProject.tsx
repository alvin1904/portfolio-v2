import Image from "next/image";
import { Github2, Present } from "../Icons";
import { ProjectType } from "@/lib/featuredProjects";
import Link from "next/link";

const FeaturedProject = (props: ProjectType) => {
  return (
    <div className="highlight_project">
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />

      <div className="project_shade flex flex-col">
        <h2>{props.title}</h2>
        <div className="flex flex-col_mobile items-center justify-between gap-half">
          <div className="project_skills flex gap-half">
            {props.skills.map((skill) => (
              <span className="project_skill smoothen cup" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className="project_links flex gap-half">
            <Link
              target="_blank"
              draggable={false}
              href={props.links[0].href}
              className="project_link border-1 flex flex-row items-center gap-half cup smoothen unselect"
            >
              <Github2 /> <span>{props.links[0].label}</span>
            </Link>
            <Link
              target="_blank"
              draggable={false}
              href={props.links[1].href}
              className="project_link border-1 flex flex-row items-center gap-half cup smoothen unselect"
            >
              <Present />
              <span>{props.links[1].label}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
