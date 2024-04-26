import Project from "./Project";
import Section from "./Section";

const AboutSection = () => {
  return (
    <Section id="about" alternate>
      <div className="grid grid-cols-1 gap-4 pb-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </Section>
  );
};

export default AboutSection;
