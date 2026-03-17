import { Button } from "@/app/_shared/ui/Button";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import mountains from "@/public/mountains.webp";
import { ArrowDown } from "lucide-react";
import { DIRECT_EMAIL, heroContent, UPWORK_URL } from "../_content/content";

const HeroSection = () => {
  return (
    <Section id="hero" noHeader noPadding>
      <div className="mb-20 grid min-h-[92vh] grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="grid content-center items-center gap-10 py-12">
          <div className="grid gap-7">
            <Link
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="hero-upwork-pill w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black"
            >
              {heroContent.eyebrow}
            </Link>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-gray-100 lg:text-6xl xl:text-7xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-300 lg:text-xl">
              {heroContent.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href={`mailto:${DIRECT_EMAIL}`}>Contact directly</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={UPWORK_URL} target="_blank" rel="noreferrer">
                Hire me on Upwork
              </Link>
            </Button>
          </div>

          <Button size="icon" variant="outline" asChild>
            <Link href="#track-record" className="group mt-4 h-14 w-14">
              <ArrowDown
                className="text-white transition duration-150 group-hover:translate-y-1 group-hover:text-black"
                size={32}
              />
            </Link>
          </Button>
        </div>

        <div className="relative hidden items-center py-10 lg:flex">
          <div className="absolute left-0 z-50 h-[70vh] w-full xl:h-[80vh]">
            <Image
              src={mountains}
              className="absolute inset-0 z-50 h-full w-max object-contain"
              priority
              alt="Hero image"
              sizes="40vw"
              placeholder="blur"
              // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNceWBlPQAGvwKTI01O6AAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="absolute z-40 flex h-[60vh] w-full xl:h-[70vh]  ">
            <Image
              src={mountains}
              className="absolute inset-0 left-[20%] z-40 h-full w-max object-contain"
              priority
              alt="Hero image"
              sizes="40vw"
              placeholder="blur"
            />
          </div>
          <div className="absolute z-30 flex h-[50vh] w-full xl:h-[60vh]  ">
            <Image
              src={mountains}
              className="absolute inset-0 left-[40%] z-30 h-full w-max object-contain"
              priority
              alt="Hero image"
              sizes="40vw"
              placeholder="blur"
            />
          </div>
          <div className="absolute z-20 flex h-[40vh] w-full xl:h-[50vh]  ">
            <Image
              src={mountains}
              className="absolute inset-0 left-[60%] z-20 h-full w-max object-contain"
              priority
              alt="Hero image"
              sizes="40vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
