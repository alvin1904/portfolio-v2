import Image from "next/image";
import { Github, Linkedin } from "../Icons";
import { scothBrace } from "@/app/layout";
import cn from "@/lib/utils/cn";
import Link from "next/link";

const PersonalSection = () => {
  return (
    <div className="personal_section h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between personal_container gap-2 border-1">
        <div className="top flex flex-row items-center justify-between w-full">
          <div className="flex flex-col">
            <span className={cn("name", scothBrace.className)}>Alvin</span>
            <span className="surname">Varghese</span>
          </div>
          <div className="text-right">
            <div>Web</div>
            <div>Developer</div>
          </div>
        </div>
        <div className="middle flex flex-col items-center justify-center gap-half text-center">
          <Image
            src="/alvin.webp"
            height={310}
            width={310}
            alt="Alvin Varghese - Developer"
            aria-label="Alvin Varghese - Developer"
            draggable={false}
          />
          <Link
            className="underline"
            href={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}
          >
            {process.env.NEXT_PUBLIC_MAIL}
          </Link>
          <span>Based in /India/Kerala</span>
        </div>
        <div className="bottom flex flex-col items-center justify-center w-full text-center gap-1">
          <div className="leading-none lighten">2024 Alvin. All Rights Reserved</div>
          <div className="flex flex-row items-center w-full justify-center gap-1">
            <Link
              target="_blank"
              href={
                process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com"
              }
              className="border-1 icon"
              aria-label="LinkedIn - Alvin Varghese"
            >
              <Linkedin />
            </Link>

            <Link
              target="_blank"
              href={
                process.env.NEXT_PUBLIC_LINKEDIN || "https://www.github.com"
              }
              className="border-1 icon"
              aria-label="Github - Alvin Varghese"
            >
              <Github />
            </Link>
          </div>
          <Link href="#contact" className="cto">
            Tell Me Something!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;
