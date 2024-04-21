import { Tranquiluxe, Velustro } from "uvcanvas";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-max">
      <div className="h-screen">
        <div className="h-full p-20 relative rounded">
          <Velustro />
          <h1 className="absolute flex w-full justify-center items-center h-full top-0 left-0 text-9xl text-gray-100 font-semibold">
            Neven Zdelar
          </h1>
        </div>
      </div>

      <ProjectsSection />
      {/* <h1 className="text-6xl font-bold">Hello World</h1> */}
    </main>
  );
}
