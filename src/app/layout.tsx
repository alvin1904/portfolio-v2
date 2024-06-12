import type { Metadata } from "next";
import { ChildrenPropType } from "@/types/common.types";
import "./globals.css";
import { ginora } from "./fonts";
import SmoothScrolling from "@/components/SmoothScrolling";
import ThemeChanger from "@/components/modules/ThemeChanger";

export const metadata: Metadata = {
  title: "Alvin Varghese",
  description:
    "I am a creative and enthusiastic frontend developer who enjoys bringing web ideas to life.",
};

export default function RootLayout(props: ChildrenPropType) {
  return (
    <html lang="en">
      <body className={ginora.className}>
        <SmoothScrolling>
          <ThemeChanger />
          {props.children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
