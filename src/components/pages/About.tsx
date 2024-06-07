import Link from "next/link";
import IconTitle from "@/components/modules/IconTitle";

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
    </>
  );
};

export default About;
