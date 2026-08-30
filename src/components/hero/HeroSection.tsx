import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Terminal,
  ArrowRight,
  Database,
  Code2,
  Smartphone,
  ExternalLink,
  User,
  Github,
  Mail,
  Cpu,
  GitBranch,
  Instagram,
  Linkedin,
} from "lucide-react";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export const HeroSection = ({ scrollTo }: HeroSectionProps) => {
  const words = [
    "robust android applications",
    "software engineering",
    "seamless mobile experiences",
    "software engineering",
    "scalable data architectures",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]"
    >
      <div className="space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-mono text-[10px] text-secondary uppercase tracking-widest">
            Available for Freelance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-6xl font-extrabold tracking-tighter leading-[0.9]"
        >
          MUHAMMAD YAZID <br />
          <span className="text-secondary">HAZAMI</span>
        </motion.h1>

        <div className="h-20 md:h-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-on-surface-variant text-xl max-w-lg leading-relaxed flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-white font-semibold capitalize"
              >
                {words[index]}.
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-on-surface-variant/80 text-lg max-w-lg leading-relaxed border-l-2 border-secondary/20 pl-4"
        >
          Hello, I'm a Software Engineering student passionate about building
          responsive mobile apps and websites. I believe great digital products
          are born from a mix of solid logic and modern design. My goal is to
          create solution-oriented, aesthetic, and impactful experiences for
          every user.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-5 pt-6"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-secondary text-surface font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-3 cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">VIEW WORK</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 flex items-center gap-3 cursor-pointer"
          >
            INITIATE PROJECT
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Chizuyu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2"
          >
            <Github className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              GITHUB
            </span>
          </a>

          <a
            href="https://linkedin.com/in/muhammad-yazid-hazami-a35520410"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2"
          >
            <Linkedin className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              LINKEDIN
            </span>
          </a>

          <a
            href="https://instagram.com/hazaamii"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2"
          >
            <Instagram className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              INSTAGRAM
            </span>
          </a>

          <div className="h-px w-12 bg-secondary/20 ml-2"></div>
          <span className="text-[10px] font-mono text-on-surface-variant/40 uppercase tracking-[0.2em]">
            Socials
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-72 md:w-84 lg:w-full mx-auto lg:mx-0 order-first lg:order-last lg:mb-0"
      >
        <div className="absolute -inset-4 bg-secondary/30 blur-[100px] rounded-full opacity-40 animate-pulse"></div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
          <img
            src="Photo.jpg"
            alt="Muhammad Yazid Hazami"
            className="w-full aspect-square object-cover rounded-[2rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-secondary/50 rounded-tr-[2rem] -mr-2 -mt-2"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-secondary/50 rounded-bl-[2rem] -ml-2 -mb-2"></div>
      </motion.div>
    </section>
  );
};
