import Link from "next/link";
import IconTitle from "@/components/modules/IconTitle";
import { CheckCheck, PDF } from "../Icons";

const About = () => {
  return (
    <>
      <IconTitle variant="About" />
      <h1 className="about_heading ySpace">
        My portfolio is a reflection of my love of crafting beautiful and
        functional websites that are as enjoyable to look at as they are to use.
      </h1>
      <p className="subheading lighten ySpace">
        As a web developer, I bring a unique blend of design and development
        skills to every project. With a background in graphic design, I create
        websites that not only function seamlessly, but also boast stunning
        visuals that capture the essence of your brand or project.
      </p>
      <p className="subheading lighten">
        My{" "}
        <Link className="colorize underline" href="#Portfolio">
          portfolio
        </Link>{" "}
        showcases a wide range of skills and expertise. I'm constantly pushing
        boundaries, embracing challenges, and refining my craft to deliver
        exceptional web solutions that exceed expectations.
      </p>
      <div className="ySpace flex flex-col items-center gap-half subheading">
        <div className="lighten text-center">Btw, here is my resume</div>
        <Link
          className="pdf_send cup"
          href={process.env.NEXT_PUBLIC_RESUME || ""}
          target="_blank"
          draggable={false}
        >
          <div className="pdf_details unselect flex flex-row gap-half items-center">
            <PDF />
            <div className="flex flex-col">
              <h2 className="pdf_name">alvin_varghese_resume.pdf</h2>
              <p className="pdf_p">PDF • 158kB</p>
            </div>
          </div>
          <div className="pdf_time flex flex-row gap-half items-center">
            <p className="pdf_p">2:22 pm</p>
            <CheckCheck />
          </div>
        </Link>
      </div>
    </>
  );
};

export default About;
