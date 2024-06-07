import { ChildrenPropType } from "@/types/common.types";
import Introduce from "./Introduce";

const Wrapper = (props: ChildrenPropType) => (
  <div className="section_yPadding" data-scroll-section>
    {props.children}
  </div>
);
const ScrollingSection = () => {
  return (
    <div className="data_section">
      <Wrapper>
        <Introduce />
      </Wrapper>
    </div>
  );
};

export default ScrollingSection;
