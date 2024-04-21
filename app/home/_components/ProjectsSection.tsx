import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section className="px-20 min-h-screen">
      <h2 className="text-6xl font-bold text-white pt-5 pb-10">Projects</h2>
      <div className="grid grid-cols-1 gap-4 pb-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default ProjectsSection;
