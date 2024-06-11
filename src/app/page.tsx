import About from "@/components/pages/About";
import Introduce from "@/components/pages/Introduce";
import Services from "@/components/pages/Services";
import Skills from "@/components/pages/Skills";
import SmoothScrolling from "@/components/SmoothScrolling";
import PersonalSection from "@/components/modules/PersonalSection";
import { ChildrenPropType } from "@/types/common.types";
import Projects from "@/components/pages/Projects";
import Contact from "@/components/pages/Contact";

export default function Home() {
  const Wrapper = (props: ChildrenPropType) => (
    <div className="section_yPadding">{props.children}</div>
  );
  return (
    <SmoothScrolling>
      <PersonalSection />
      <div className="data_section">
        <Wrapper>
          <Introduce />
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <Services />
        </Wrapper>
        <Wrapper>
          <Skills />
        </Wrapper>
        <Wrapper>
          <Projects />
        </Wrapper>
        <Wrapper>
          <Contact />
        </Wrapper>
      </div>
    </SmoothScrolling>
  );
}
