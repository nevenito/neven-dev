import { Tranquiluxe, Velustro } from "uvcanvas";
import ProjectsSection from "./_components/ProjectsSection";
import Link from "next/link";
import Button from "../_shared/ui/Button";

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
      <section className="mx-20 rounded mb-20 grid justify-center text-center gap-4 py-10 bg-green-500">
        <h2>Try Mall Builder 3000!</h2>
        <Link href="/mall">
          <Button>Go to Mall Builder 3000</Button>
        </Link>
      </section>
      {/* <h1 className="text-6xl font-bold">Hello World</h1> */}
    </main>
  );
}
