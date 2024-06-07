import { ChildrenPropType } from "@/types/common.types";
import Introduce from "./Introduce";
import About from "./About";

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
      <Wrapper>
        <About />
      </Wrapper>
    </div>
  );
};

export default ScrollingSection;
