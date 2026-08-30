import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, setActiveSection };
};

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export const Navbar = ({ activeSection, scrollTo }: NavbarProps) => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
    <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
      <div
        className="font-mono text-2xl font-bold tracking-tighter cursor-pointer"
        onClick={() => scrollTo("home")}
      >
        Y's Archive
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {["home", "skills", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`nav-link capitalize relative cursor-pointer transition-colors duration-300 ${
              activeSection === item
                ? "text-secondary font-bold"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            {item}
            {activeSection === item && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  </nav>
);
