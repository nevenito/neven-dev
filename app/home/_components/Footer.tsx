import Chequy from "@/app/_shared/ui/Chequy";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-background px-8 py-12 lg:px-standard">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="grid content-start gap-4">
          <Link
            href="#hero"
            className="flex items-center gap-3 text-lg font-medium text-primary"
          >
            <Chequy className="size-5" />
            <span>Neven Zdelar</span>
          </Link>
          <p className="text-sm text-gray-500">
            Creative web developer crafting modern digital experiences.
          </p>
        </div>

        <nav className="grid content-start gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Navigation
          </h4>
          <ul className="grid gap-2 text-sm text-gray-500">
            <li>
              <Link href="#about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="transition hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="grid content-start gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Neven Zdelar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
