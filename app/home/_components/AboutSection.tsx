import Section from "./Section";
import { Code2, Palette, Bot, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building performant, accessible web applications with React, Next.js, and TypeScript.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Crafting intuitive interfaces and cohesive design systems that users love.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Integrating AI-powered features like chatbots, content generation, and smart automation.",
  },
  {
    icon: Briefcase,
    title: "5 Years Experience",
    description:
      "Delivering production-grade solutions for startups and established businesses alike.",
  },
];

const AboutSection = () => {
  return (
    <Section id="about" alternate>
      <div className="grid gap-16 pb-10 lg:grid-cols-2">
        <div className="grid content-start gap-6">
          <h3 className="text-2xl font-semibold text-primary">Who I am</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            I&#39;m Neven Zdelar, a creative web developer based in Croatia. I
            specialize in building modern, responsive web applications that
            combine clean code with thoughtful design.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            Over the past five years I&#39;ve worked across the full frontend
            stack — from pixel-perfect UI implementations to complex state
            management and API integrations. I&#39;m passionate about developer
            experience, performance optimization, and bringing ideas to life on
            the web.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            When I&#39;m not coding, you&#39;ll find me exploring the latest in
            AI tooling, experimenting with generative design, or contributing to
            open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-gray-700/50 bg-background p-6 transition hover:border-primary/50"
            >
              <item.icon
                className="mb-4 text-primary transition group-hover:scale-110"
                size={32}
              />
              <h4 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
