import Section from "./Section";
import { buildCapabilities } from "../_content/content";

const BuildSection = () => {
  return (
    <Section
      id="build"
      title="What I Build"
      eyebrow="Concrete version"
      intro="Deliverables, not vague capability language."
    >
      <div className="grid gap-4 pb-10 md:grid-cols-2 xl:grid-cols-3">
        {buildCapabilities.map((item) => (
          <article
            key={item.title}
            className="grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-base leading-7 text-gray-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default BuildSection;
