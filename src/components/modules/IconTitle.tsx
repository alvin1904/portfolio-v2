import { ComponentType } from "react";
import {
  Biceps,
  Briefcase,
  Handshake,
  MailCheck,
  Palette,
  Portfolio,
} from "../Icons";

type SectionType =
  | "Hey"
  | "About"
  | "Resume"
  | "Services"
  | "Skills"
  | "Portfolio"
  | "Contact";

type SectionIconMap = { [key in SectionType]?: ComponentType };

type IconTitleProps = {
  variant: SectionType;
};

const sectionIcons: SectionIconMap = {
  Hey: Handshake,
  About: Briefcase,
  Resume: Biceps,
  Services: Briefcase,
  Skills: Palette,
  Portfolio: Portfolio,
  Contact: MailCheck,
};

const IconTitle = (props: IconTitleProps) => {
  const SelectedIcon = sectionIcons[props.variant];
  return (
    <div
      className="icon_title smoothen border-1 flex flex-row items-center justify-center ySpace shadow unselect"
      id={props.variant}
    >
      <span>{SelectedIcon && <SelectedIcon />}</span> <p>{props.variant}</p>
    </div>
  );
};

export default IconTitle;
