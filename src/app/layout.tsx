import type { Metadata } from "next";
import localFont from "next/font/local";
import { ChildrenPropType } from "@/types/common.types";
import "./scroll.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Varghese",
  description:
    "I am a creative and enthusiastic frontend developer who enjoys bringing web ideas to life.",
};

export const ginora = localFont({
  src: [
    {
      path: "./fonts/ginora/GinoraSansLight.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/ginora/GinoraSansRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ginora/GinoraSansSemiBold.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/ginora/GinoraSansBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const scothBrace = localFont({
  src: "./fonts/scothBrace.ttf",
  display: "swap",
});

export default function RootLayout(props: ChildrenPropType) {
  return (
    <html lang="en">
      <body className={ginora.className}>{props.children}</body>
    </html>
  );
}
