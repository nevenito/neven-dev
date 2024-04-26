import ProjectsSection from "./_components/ProjectsSection";
import Header from "./_components/Header";
import AboutSection from "./_components/AboutSection";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-max scroll-smooth bg-background">
      <Header />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />

      {/* <Section id="mall" alternate noHeader>
        <div className="snap-section mx-20 mb-20 grid snap-none justify-center gap-4 rounded bg-green-500 py-10 text-center">
          <h2>Try Mall Builder 3000!</h2>
          <Link href="/mall">
            <Button variant="default">Go to Mall Builder 3000</Button>
          </Link>
        </div>
      </Section> */}
    </main>
  );
}
