import { Button } from "@/app/_shared/ui/Button";
import Chequy from "@/app/_shared/ui/Chequy";
import Section from "./Section";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ExternalLink, Mail } from "lucide-react";
import {
  CONTACT_MAILTO,
  heroContent,
  profileNotes,
  UPWORK_URL,
} from "../_content/content";

const heroGalleryImages = [
  {
    src: "/hero-gallery/vangogh-flowering-orchard.webp",
    ratio: "1200 / 1622",
  },
  {
    src: "/hero-gallery/pissarro-tuileries-spring.webp",
    ratio: "1200 / 949",
  },
  {
    src: "/hero-gallery/manet-monet-family-garden.webp",
    ratio: "1200 / 738",
  },
];

const mountainPanels = [...heroGalleryImages, ...heroGalleryImages];

const HeroMountains = () => {
  return (
    <div className="hero-mountains" aria-hidden="true">
      <div className="hero-mountain-rail hero-mountain-rail--front">
        {mountainPanels.map((panel, index) => (
          <span
            key={`front-${panel.src}-${index}`}
            className="hero-mountain-panel"
            style={
              {
                "--hero-image": `url("${panel.src}")`,
                "--hero-ratio": panel.ratio,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Section id="hero" noHeader noPadding>
      <div className="grid h-[100svh] content-center gap-5 overflow-hidden py-3 sm:gap-8 sm:py-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,46vw)] lg:items-center lg:gap-10 lg:py-8 xl:grid-cols-[minmax(0,1fr)_minmax(420px,740px)] xl:gap-12">
        <div className="grid gap-5 sm:gap-7 lg:gap-8">
          <div className="grid max-w-5xl gap-3.5 sm:gap-5 lg:gap-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#aebdff] sm:text-sm">
              <Chequy className="size-5 text-primary" />
              {heroContent.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(3rem,16vw,5.85rem)] font-normal leading-[0.92] text-gray-100 lg:text-[clamp(5.35rem,7vw,7.5rem)]">
              {heroContent.title}
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-gray-300 min-[380px]:text-base min-[380px]:leading-7 sm:text-lg sm:leading-8 lg:text-xl">
              {heroContent.summary}
            </p>
          </div>

          <div className="grid max-w-3xl gap-1 border-l border-white/10 pl-4 min-[380px]:gap-1.5 sm:gap-2 sm:pl-5">
            {profileNotes.map((note) => (
              <p
                key={note}
                className="text-[13px] leading-5 text-gray-300 min-[380px]:text-sm min-[380px]:leading-6 sm:text-base sm:leading-7"
              >
                {note}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 min-[380px]:gap-3">
            <Button size="lg" className="h-10 px-6 sm:h-11 sm:px-8" asChild>
              <Link href={CONTACT_MAILTO} className="gap-2">
                <Mail size={17} />
                Email me
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 px-6 sm:h-11 sm:px-8"
              asChild
            >
              <Link
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                Upwork profile
                <ExternalLink size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <HeroMountains />
      </div>
    </Section>
  );
};

export default HeroSection;
