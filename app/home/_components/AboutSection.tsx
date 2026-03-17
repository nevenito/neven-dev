import Section from "./Section";
import { trackRecord } from "../_content/content";

const AboutSection = () => {
  return (
    <Section
      id="track-record"
      title="Track Record"
      eyebrow="The useful version"
      intro="Not a personal brand essay. Just the parts that explain how I got here."
      alternate
    >
      <div className="grid gap-4 pb-10">
        {trackRecord.map((item) => (
          <article
            key={item.period}
            className="grid gap-5 rounded-3xl border border-white/10 bg-black/10 p-6 lg:grid-cols-[220px_1fr] lg:p-8"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {item.period}
            </div>
            <div className="grid gap-3">
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="max-w-2xl text-base leading-7 text-gray-300">
                {item.summary}
              </p>
              <p className="text-sm leading-6 text-gray-400">{item.proof}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
