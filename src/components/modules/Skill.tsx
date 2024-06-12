import { ChildrenPropType } from "@/types/common.types";

const Skill = (props: ChildrenPropType) => {
  return (
    <span className="project_skill smoothen cup unselect">
      {props.children}
    </span>
  );
};

export default Skill;
