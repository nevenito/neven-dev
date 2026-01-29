import Project from "./Project";
import Section from "./Section";
import {
  Globe,
  ShoppingCart,
  MessageSquare,
  LayoutDashboard,
  Building2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, Stripe payments, and an admin dashboard. Built for scale with server-side rendering and optimistic UI updates.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    icon: ShoppingCart,
  },
  {
    title: "AI Chatbot Interface",
    description:
      "A conversational AI interface with streaming responses, context memory, and multi-model support. Features a polished chat UI with markdown rendering and code highlighting.",
    tags: ["React", "OpenAI API", "Node.js", "WebSockets", "Tailwind CSS"],
    icon: MessageSquare,
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, custom report builder, and role-based access control. Handles millions of data points with virtualized rendering.",
    tags: ["Next.js", "D3.js", "TypeScript", "Prisma", "Auth.js"],
    icon: LayoutDashboard,
  },
  {
    title: "Corporate Website",
    description:
      "A high-performance marketing site with CMS integration, SEO optimization, and animated page transitions. Scored 100 on all Lighthouse categories.",
    tags: ["Next.js", "Sanity CMS", "Framer Motion", "Vercel"],
    icon: Globe,
  },
  {
    title: "Mall Builder 3000",
    description:
      "An interactive building layout designer built as a creative side project. Features grid-based floor planning with real-time visual feedback and responsive controls.",
    tags: ["React", "TypeScript", "useReducer", "CSS Grid"],
    icon: Building2,
    href: "/mall",
  },
  {
    title: "Generative Design Tool",
    description:
      "A creative tool that uses AI to generate design assets, color palettes, and layout suggestions. Integrates with popular design workflows and export formats.",
    tags: ["React", "Canvas API", "AI/ML", "TypeScript"],
    icon: Sparkles,
  },
];

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <p className="mb-10 max-w-2xl text-lg text-gray-400">
        A selection of projects I&#39;ve built — from client work to personal
        experiments. Each one taught me something new.
      </p>
      <div className="grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
