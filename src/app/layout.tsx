import type { Metadata } from "next";
import { ChildrenPropType } from "@/types/common.types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Varghese",
  description:
    "I am a creative and enthusiastic frontend developer who enjoys bringing web ideas to life.",
};

export default function RootLayout(props: ChildrenPropType) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
