"use client";

import Link from "next/link";
import IconTitle from "../modules/IconTitle";
import FeaturedProject from "../modules/FeaturedProject";
import { featuredProjects } from "@/lib/allProjects";

const Projects = () => {
  return (
    <>
      <IconTitle variant="Portfolio" />
      <h1 className="heading">
        Highlight <span className="colorize">Projects</span>
      </h1>

      {featuredProjects.map((project) => (
        <FeaturedProject {...project} key={project.src} />
      ))}

      <Link
        href="/projects"
        className="cto cup smoothen flex flex-row items-center justify-between"
        aria-label="All Projects"
      >
        <span>See More</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </Link>
    </>
  );
};

export default Projects;
