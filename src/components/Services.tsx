import { ChildrenPropType } from "@/types/common.types";
import IconTitle from "./modules/IconTitle";
import { scothBrace } from "@/app/layout";

const Services = () => {
  type Props = {
    title: string;
  } & ChildrenPropType;
  const Round = (props: Props) => {
    return (
      <div
        draggable={false}
        className="services_card text-center smoothen border-1 flex flex-col gap-1 items-center justify-center"
      >
        <h2 className={scothBrace.className}>{props.title}</h2>
        <p className="lighten">{props.children}</p>
      </div>
    );
  };
  return (
    <>
      <IconTitle variant="Services" />
      <div className="services_container flex flex-row items-center justify-center gap-2">
        <Round title="Web Design & Development">
          I craft bespoke websites that exceed your expectations, powered by
          React Js/Next Js.
        </Round>
        <Round title="Web Optimization & Performance">
          Enhance your site's performance and efficiency with cutting-edge
          techniques.
        </Round>
        <Round title="Web Deployment & Hosting">
          I can manage your web deployment and hosting needs effortlessly,
          whether through GitHub Actions or any preferred cloud provider.
        </Round>
      </div>
    </>
  );
};

export default Services;
