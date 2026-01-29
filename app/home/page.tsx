import ProjectsSection from "./_components/ProjectsSection";
import Header from "./_components/Header";
import AboutSection from "./_components/AboutSection";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-max scroll-smooth bg-background">
      <Header />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
