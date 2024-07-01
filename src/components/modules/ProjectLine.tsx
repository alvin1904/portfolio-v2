"use client";

import Link from "next/link";
import Skill from "./Skill";
import Image from "next/image";
import { useState } from "react";
import cn from "@/lib/utils/cn";
import { ProjectType } from "@/lib/allProjects";

const ProjectLine = (props: ProjectType) => {
  const [inside, setInside] = useState(false);
  const whenEntered = () => setInside(true);
  const whenExited = () => setInside(false);
  return (
    <div
      className="project_line"
      onMouseEnter={whenEntered}
      onMouseLeave={whenExited}
    >
      {props.src && props.src.length > 0 && (
        <Image
          className={cn(
            "project_image smoothen unselect",
            inside ? "inside" : "outside"
          )}
          draggable={false}
          src={props.src}
          height={props.height}
          width={props.width}
          alt={props.name}
        />
      )}
      <div className="p_year unselect">{props.year}</div>
      <Link
        target="_blank"
        draggable={false}
        href={props.links[0].href}
        className="p_project"
      >
        {props.name}
      </Link>
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
            {link.icon} <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectLine;
