"use client";

import { ChildrenPropType } from "@/types/common.types";
import { ReactLenis } from "@studio-freight/react-lenis";

type Props = ChildrenPropType;

const SmoothScrolling = (props: Props) => {
  const lenisOptions = {
    lerp: 0.08,
    duration: 1.7,
    smoothTouch: false,
    smooth: true,
  };
  return (
    <ReactLenis root options={lenisOptions}>
      <main className="main">{props.children}</main>
    </ReactLenis>
  );
};

export default SmoothScrolling;
