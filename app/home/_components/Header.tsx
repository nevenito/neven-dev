import { Button } from "@/app/_shared/ui/Button";
import Chequy from "@/app/_shared/ui/Chequy";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-[99] flex h-[8vh] items-center bg-background px-standard text-lg font-medium shadow">
      <Link
        href="#hero"
        className="group mr-auto flex items-center gap-3 text-primary"
      >
        <Chequy className="size-5 transition group-hover:rotate-90" />
        <h1>Neven Zdelar</h1>
      </Link>
      <nav>
        <ul className="flex gap-16 text-white">
          <Link className="hover:opacity-90" href="#about">
            About
          </Link>
          <Link className="hover:opacity-90" href="#projects">
            Projects
          </Link>
          <Link className="hover:opacity-90" href="#services">
            Services
          </Link>
        </ul>
      </nav>
      <Link href="#contact" className="ml-auto">
        <Button>Contact</Button>
      </Link>
    </header>
  );
};

export default Header;
