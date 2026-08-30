import { motion } from "motion/react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  githubUrl: string;
  desc: string;
}

const PROJECTS: Project[] = [
  {
    title: "Marketplace",
    tech: "Laravel + MySQL",
    githubUrl: "https://github.com/Chizuyu/Marketplace",
    desc: "A full-stack e-commerce solution with admin dashboard, CRUD product management, admin-side order management, real-time sales reporting, client-side shopping cart. Built with Laravel and MySQL for robust performance and scalability.",
  },
  {
    title: "Blogger",
    tech: ".NET 10 + KOTLIN + JETPACK COMPOSE",
    githubUrl: "https://github.com/Chizuyu/Blogger",
    desc: "Full-stack blogging solution featuring a .NET 10 Backend and Android Kotlin Frontend. Implements reverse-engineered legacy API compatibility, secure authentication, and advanced content moderation systems.",
  },
  {
    title: "BloggerAPI",
    tech: "ASP.NET 10 + SQLite",
    githubUrl: "https://github.com/Chizuyu/BloggerAPI",
    desc: "A RESTful API for a blogging platform, built with .NET 10 and designed for seamless integration with Android Kotlin and Jetpack Compose frontends. Features include user authentication, post management, and advanced content moderation.",
  },
  {
    title: "Hospital Management System",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/Hospital",
    desc: "A comprehensive hospital management application with patient records, appointment scheduling, and real-time updates.",
  },
  {
    title: "Bromo Airlines",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/BromoAirlines",
    desc: "A flight booking application with real-time availability checking and seamless payment transactions.",
  },
  {
    title: "Madura Mart",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/Madura_Mart",
    desc: "A modern e-commerce platform for local products with a focus on user experience and exporting reports.",
  },
  {
    title: "Youth Creatifers Studio",
    tech: "React + Next.js",
    githubUrl: "https://github.com/Chizuyu/Youth-Creatifers-Studio",
    desc: "A company profile website built with React and Next.js, featuring a responsive design and interactive elements.",
  },
  {
    title: "Moco - Portal Berita",
    tech: "Laravel + MySQL + Filament V3 (CMS)",
    githubUrl: "https://github.com/Chizuyu/Moco",
    desc: "A news portal application with real-time updates, user authentication, and a responsive design.",
  },
];

interface ProjectsSectionProps {}

export const ProjectsSection = ({}: ProjectsSectionProps) => (
  <section id="projects" className="scroll-mt-24 space-y-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant text-lg max-w-2xl"
        >
          A collection of systems and applications I've engineered.
        </motion.p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          whileHover={{
            y: -12,
            transition: { type: "spring", stiffness: 400, damping: 25 },
          }}
          whileTap={{ scale: 0.98 }}
          className="glass-card group p-8 rounded-[2rem] flex flex-col justify-between border-l-4 border-l-transparent hover:border-l-secondary transition-all duration-300 cursor-pointer"
        >
          <div className="space-y-4">
            <div>
              <motion.h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                {project.title}
              </motion.h3>
              <p className="font-mono text-[10px] text-secondary tracking-widest mt-1 uppercase">
                {project.tech}
              </p>
            </div>

            <p className="text-on-surface-variant leading-relaxed line-clamp-3">
              {project.desc}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex justify-end items-center w-full">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 hover:bg-white/5 rounded-full text-on-surface-variant hover:text-secondary transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
