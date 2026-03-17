import Link from "next/link";

import { Button } from "@/app/_shared/ui/Button";

import Section from "./Section";
import { contactContent, DIRECT_EMAIL, UPWORK_URL } from "../_content/content";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      eyebrow="Low drama"
      intro={contactContent.title}
      alternate
    >
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:p-8">
        <div className="grid gap-4">
          <p className="max-w-2xl text-lg leading-8 text-gray-300">
            {contactContent.summary}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Top Rated+ on Upwork
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Based in Croatia
            </span>
          </div>
        </div>

        <div className="grid gap-3 lg:justify-self-end">
          <Button size="lg" asChild>
            <Link href={`mailto:${DIRECT_EMAIL}`}>Email me directly</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={UPWORK_URL} target="_blank" rel="noreferrer">
              Hire me on Upwork
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
