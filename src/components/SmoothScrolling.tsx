"use client";

import { ChildrenPropType } from "@/types/common.types";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

type Props = ChildrenPropType;

const SmoothScrolling = (props: Props) => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[props.children]}
      containerRef={containerRef}
    >
      <main className="main" data-scroll-container>
        {props.children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default SmoothScrolling;
