"use client";

import { darken, lighten } from "@/lib/utils/color";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Settings } from "../Icons";
import Link from "next/link";

const colors = [
  { name: "bittersweet", hex: "#FD5F5F" },
  { name: "pink", hex: "#F260FC" },
  { name: "green", hex: "#55F19B" },
  { name: "aqua", hex: "#60FCF7" },
];

const ThemeChanger = () => {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(colors[0].hex);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--accent-transparent", `${accent}85`);
    root.style.setProperty("--accent-transparent-high", `${accent}20`);
    root.style.setProperty("--accent-hover", lighten(accent));
    root.style.setProperty("--accent-dark", darken(accent));
  }, [accent]);

  const colorButtons = useMemo(
    () =>
      colors.map((color) => {
        return (
          <button
            key={color.name}
            className="color_button cup smoothen"
            style={{
              borderColor: color.hex,
            }}
            onClick={() => {
              setAccent(color.hex);
              toggle();
            }}
          >
            {color.name}
          </button>
        );
      }),
    []
  );

  return (
    <div
      className={`theme_changer smoothen ${open ? "theme_open" : "theme_close"}`}
    >
      <div className="theme_menu ">
        <h1 className="heading">Colors</h1>
        {colorButtons}
      </div>
      <div className="theme_menu ySpace">
        <h1 className="heading">GoTo</h1>
        <div className="nav_list flex flex-col gap-half underline">
          <Link href="/">Home</Link>
          <Link href="/#About">About</Link>
          <Link href="/#Services">Services</Link>
          <Link href="/#Skills">Skills</Link>
          <Link href="/#Portfolio">Portfolio</Link>
          <Link href="/#Contact">Contact</Link>
        </div>
      </div>

      <div className="cup underline ySpace text-center" onClick={toggle}>
        Close
      </div>
      <div
        className="theme_toggle cup flex flex-row items-center justify-center"
        onClick={toggle}
      >
        <Settings />
      </div>
    </div>
  );
};

export default ThemeChanger;
