import type { Metadata } from "next";
import { ChildrenPropType } from "@/types/common.types";
import "./scroll.css";
import "./globals.css";
import { ginora } from "./fonts";

export const metadata: Metadata = {
  title: "Alvin Varghese",
  description:
    "I am a creative and enthusiastic frontend developer who enjoys bringing web ideas to life.",
};

export default function RootLayout(props: ChildrenPropType) {
  return (
    <html lang="en">
      <body className={ginora.className}>{props.children}</body>
    </html>
  );
}
