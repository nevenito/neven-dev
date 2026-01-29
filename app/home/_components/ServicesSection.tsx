import Section from "./Section";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. From SPAs to full-stack platforms, I write clean, maintainable code that scales.",
    items: [
      "React & Next.js applications",
      "TypeScript-first development",
      "API design & integration",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "User-centered design that bridges aesthetics and functionality. I create interfaces that are intuitive, accessible, and visually engaging.",
    items: [
      "Responsive web design",
      "Design system creation",
      "Prototyping & wireframing",
      "Accessibility (WCAG)",
    ],
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Practical AI integration for real business value. From chatbots to content automation, I bring intelligent features into your product.",
    items: [
      "Chatbot development",
      "AI-powered content tools",
      "LLM API integration",
      "Workflow automation",
    ],
  },
];

const ServicesSection = () => {
  return (
    <Section id="services" alternate>
      <div className="grid gap-8 pb-10 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.number}
            className="group grid content-start gap-6 rounded-lg border border-gray-700/50 bg-background p-8 transition hover:border-primary/50"
          >
            <span className="text-sm font-bold tracking-widest text-primary">
              {service.number}
            </span>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {service.description}
            </p>
            <ul className="grid gap-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-primary"
                  />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
