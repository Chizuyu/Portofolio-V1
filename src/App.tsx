import { useState, useEffect } from "react";
import { Navbar, useActiveSection } from "./components/nav/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/footer/Footer";

export default function App() {
  const { activeSection } = useActiveSection();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-secondary/30">
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-40">
        <HeroSection scrollTo={scrollTo} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
