import calculateExperience from "@/lib/utils/yearOfExperience";
import IconTitle from "@/components/modules/IconTitle";

const Introduce = () => {
  const yoi = calculateExperience();
  const pc = process.env.NEXT_PUBLIC_PROJECT_COUNT || 10;
  return (
    <>
      <IconTitle variant="Introduce" />
      <h1 className="heading">
        Hey I am <span className="colorize">Alvin Varghese</span>, Web Developer
      </h1>
      <p className="subheading lighten ySpace">
        I design and code beautiful websites for fun and work. Just what I enjoy
        and love doing!
      </p>
      <div className="ySpace count_section flex flex-row gap-1 items-center">
        <div className="count flex flex-col">
          <span>{yoi}+</span>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="count flex flex-col">
          <span>{pc}+</span>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </>
  );
};

export default Introduce;
