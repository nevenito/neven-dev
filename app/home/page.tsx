import { Tranquiluxe, Velustro } from "uvcanvas";
import ProjectsSection from "./_components/ProjectsSection";
import Link from "next/link";
import { Button } from "../_shared/ui/Button";

export default function Home() {
  return (
    <main className="min-h-max">
      <div className="h-screen">
        <div className="relative h-full rounded p-20">
          <Velustro />
          <h1 className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-9xl font-semibold text-gray-100">
            Neven Zdelar
          </h1>
        </div>
      </div>

      <ProjectsSection />
      <section className="mx-20 mb-20 grid justify-center gap-4 rounded bg-green-500 py-10 text-center">
        <h2>Try Mall Builder 3000!</h2>
        <Link href="/mall">
          <Button>Go to Mall Builder 3000</Button>
        </Link>
      </section>
      {/* <h1 className="text-6xl font-bold">Hello World</h1> */}
    </main>
  );
}
