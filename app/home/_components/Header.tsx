"use client";

import { Button } from "@/app/_shared/ui/Button";
import Chequy from "@/app/_shared/ui/Chequy";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/_shared/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#track-record", label: "Track Record" },
  { href: "#build", label: "What I Build" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[99] grid h-[8vh] grid-cols-2 items-center bg-background px-4 text-lg font-medium shadow lg:grid-cols-3 lg:px-standard">
      <Link href="#hero" className="group flex items-center gap-3 text-primary">
        <Chequy className="size-5 transition group-hover:rotate-90" />
        <h1>Neven Zdelar</h1>
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex justify-center gap-16 text-white">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:opacity-90" href={item.href}>
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
      <Link href="#contact" className="ml-auto hidden lg:block">
        <Button>Get in touch</Button>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="ml-auto flex lg:hidden">
          <Button size="icon" variant="outline">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>

        <SheetContent className="mt-[8vh]">
          <nav className="mt-8 flex flex-col items-end justify-end gap-12">
            <ul className="grid justify-end gap-8 text-right text-3xl text-white">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="hover:opacity-90"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </ul>
            <Link href="#contact" onClick={() => setOpen(false)}>
              <Button>Get in touch</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
