import Header from "./_components/Header";
import AboutSection from "./_components/AboutSection";
import HeroSection from "./_components/HeroSection";
import BuildSection from "./_components/BuildSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-max scroll-smooth bg-background">
      <Header />

      <HeroSection />
      <AboutSection />
      <BuildSection />
      <ContactSection />
    </main>
  );
}
