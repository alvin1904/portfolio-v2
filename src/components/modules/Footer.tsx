import Link from "next/link";
import { Github2 } from "../Icons";

const Footer = () => {
  return (
    <footer className="footer ySpace">
      <div className="w-full text-center ySpace flex flex-col gap-1 lighten">
        <div className="flex flex-row gap-1 text-center justify-center underline">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div>Made with ❤️ using Next.js.</div>
        <div className="flex flex-row justify-center items-center gap-half">
          <Github2 />
          <Link
            href="https://github.com/alvin1904/portfolio-v2"
            target="_blank"
            className="underline"
          >
            Portfolio Source. Give a star.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
