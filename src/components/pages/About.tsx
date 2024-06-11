import Link from "next/link";
import IconTitle from "@/components/modules/IconTitle";
import { CheckCheck, PDF } from "../Icons";

const About = () => {
  return (
    <>
      <IconTitle variant="About" />
      <h1 className="about_heading ySpace">
        Since diving into <span className="colorize">web design</span> and{" "}
        <span className="colorize">development</span> in 2023, my passion has
        only deepened with each project.
      </h1>
      <p className="subheading lighten ySpace">
        Starting as a graphic designer, I designed dynamic social media
        templates and posters for various institutions during my college years.
        Now, I integrate my design background into development to create unique,
        high-quality solutions.
      </p>
      <p className="subheading lighten">
        On my{" "}
        <Link className="colorize underline" href="#Portfolio">
          portfolio
        </Link>
        , you'll find a collection of diverse projects that showcase my
        creativity and professionalism. I am committed to pushing boundaries
        while embracing challenges and constantly improving to stay ahead in
        this dynamic tech landscape.
      </p>
      <div className="ySpace flex flex-col items-center gap-half subheading">
        <div className="lighten text-center">
          Btw, here is my resume for download:
        </div>
        <Link
          className="pdf_send"
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
