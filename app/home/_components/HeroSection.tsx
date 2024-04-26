import { Button } from "@/app/_shared/ui/Button";
import Section from "./Section";
import Image from "next/image";
import Chequy from "@/app/_shared/ui/Chequy";
import Link from "next/link";
import {
  ArrowBigDown,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownToDotIcon,
  LucideSquareArrowDown,
  SquareArrowDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <Section id="hero" noHeader noPadding>
      <div className="mb-20 grid h-[92vh] grid-cols-1 lg:grid-cols-2">
        <div className="grid content-center items-center gap-12">
          <div className="text-5xl font-semibold lg:text-4xl xl:text-4xl 2xl:text-5xl">
            <h1 className="text-gray-100">Hey there, I&#39;m Neven.</h1>
            <h1 className="text-primary ">A creative web developer</h1>
            <h1 className="text-gray-100">with 5 years of experience</h1>
          </div>

          <Link
            href="#services"
            className="flex items-center gap-4 text-xl font-light uppercase text-white xl:text-xl"
          >
            <p>Development</p>
            <Chequy />
            <p>design</p>
            <Chequy />
            <p>AI</p>
          </Link>

          <div className="flex gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">More about me</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>

          <Button size="icon" variant="outline" asChild>
            <Link href="#about" className="group mt-10 h-14 w-14">
              <ArrowDown
                className="text-white transition duration-150 group-hover:translate-y-1 group-hover:text-black"
                size={32}
              />
            </Link>
          </Button>
        </div>

        <div className="relative hidden items-center py-10 lg:flex">
          <div className="absolute z-50 hidden h-[80vh]">
            <Image
              src="https://utfs.io/f/f85f70f3-b3df-4292-b801-ad77e6f8e180-edeaqt.jpg"
              width={1920}
              height={1080}
              className="z-40  object-contain "
              priority
              alt="Hero image"
            />
          </div>
          <div className="absolute z-40 flex h-[70vh] translate-x-16  ">
            <Image
              src="https://utfs.io/f/f85f70f3-b3df-4292-b801-ad77e6f8e180-edeaqt.jpg"
              width={1920}
              height={1080}
              className="z-50  object-contain "
              priority
              alt="Hero image"
            />
          </div>
          <div className="absolute z-30 flex h-[60vh] translate-x-32  ">
            <Image
              src="https://utfs.io/f/f85f70f3-b3df-4292-b801-ad77e6f8e180-edeaqt.jpg"
              width={1920}
              height={1080}
              className="z-30 object-contain"
              priority
              alt="Hero image"
            />
          </div>
          <div className=" z-20 flex h-[50vh] translate-x-48  ">
            <Image
              src="https://utfs.io/f/f85f70f3-b3df-4292-b801-ad77e6f8e180-edeaqt.jpg"
              width={1920}
              height={1080}
              className="z-20 object-contain"
              priority
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
