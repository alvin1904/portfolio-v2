import ProjectLine from "@/components/modules/ProjectLine";
import { allProjects } from "@/lib/allProjects";
import Link from "next/link";

const Page = () => {
  return (
    <div className="section_yPadding ySpace">
      <Link href="/" className="underline ySpace cup">
        {"<"} Go back to portfolio
      </Link>
      <h1 className="heading ySpace">
        All <span className="colorize">Projects</span>
      </h1>
      <div className="project_heading project_line">
        <div className="p_year">Year</div>
        <div className="p_project">Project</div>
        <div className="p_skills">Skills</div>
        <div className="p_links">Links</div>
      </div>
      {allProjects.map((project, index) => (
        <ProjectLine {...project} key={index} />
      ))}
    </div>
  );
};

export default Page;
