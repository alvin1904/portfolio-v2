import localFont from "next/font/local";

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
