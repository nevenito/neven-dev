import { ExternalLink } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  href?: string;
};

const Project = ({ title, description, tags, icon: Icon, href }: Props) => {
  const Wrapper = href ? "a" : "div";
  const linkProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group relative grid gap-4 rounded-lg border border-gray-700/50 bg-muted p-6 transition hover:border-primary/50"
    >
      <div className="flex items-center justify-between">
        <Icon className="text-primary" size={28} />
        {href && (
          <ExternalLink
            className="text-gray-500 transition group-hover:text-primary"
            size={18}
          />
        )}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-700/50 px-3 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default Project;
