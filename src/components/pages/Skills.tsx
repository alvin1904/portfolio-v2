import { ChildrenPropType } from "@/types/common.types";
import IconTitle from "@/components/modules/IconTitle";
import { skills } from "@/lib/skills";

type Props = {
  percent: number;
  Icon: React.FC;
} & ChildrenPropType;
const SkillItem = (props: Props) => {
  return (
    <div className="skill_item unselect lighten_shade smoothen">
      <div className="flex flex-row items-center gap-1">
        <props.Icon />
        <span className="lighten smoothen" id="item">
          {props.children}
        </span>
      </div>
      <div className="line" style={{ width: `${props.percent}%` }}>
        <div className="lighten percent">{props.percent}%</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <IconTitle variant="Skills" />
      <div className="skills_container flex flex-row items-center justify-between gap-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} percent={skill.percent} Icon={skill.Icon}>
            {skill.text}
          </SkillItem>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Skills;
