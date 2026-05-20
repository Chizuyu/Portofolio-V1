/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  SiSharp, SiOpenjdk, SiKotlin, SiPhp, SiJavascript, SiHtml5,
  SiMysql, SiSqlite, SiAndroidstudio,
  SiGit, SiPostman, SiFigma, SiLaragon,
  SiBootstrap, SiLaravel, SiNextdotjs, SiNetapp
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Terminal, ArrowRight, Database, Code2, Smartphone,
  ExternalLink, User, Github, Mail, Cpu, GitBranch,
  Instagram,
  Linkedin
} from "lucide-react";

// Custom SQL Icon Component
const SqlCustomIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Body Tabung */}
    <path 
      d="M4 6V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V6" 
      fill="#00758F" // Biru Gelap
    />
    {/* Atas Tabung */}
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00A3CC" /> {/* Biru Terang */}
    {/* Tulisan SQL */}
    <text 
      x="12" 
      y="16" 
      textAnchor="middle" 
      fill="white" 
      fontSize="6" 
      fontWeight="900" 
      fontFamily="Arial, sans-serif"
    >
      SQL
    </text>
  </svg>
);

// --- DATA CONFIGURATION DENGAN ICON ---
const SKILLS = {
  languages: [
    { name: 'C#', icon: SiSharp },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'PHP', icon: SiPhp },
    { name: 'JS', icon: SiJavascript },
    { name: 'Bootstrap', icon: SiBootstrap }, // Ganti HTML/CSS ke Tailwind agar keren
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql },
    { name: 'SQL', icon: SqlCustomIcon }

  ],
  tools: [
    { name: 'VS Code', icon: VscVscode },
    { name: 'VS Community', icon: VscVscode },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'Laragon', icon: SiLaragon },
    { name: 'Figma', icon: SiFigma },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: '.NET', icon: SiNetapp }
  ]
};

const PROJECTS = [
  {
    title: "Marketplace",
    tech: "Laravel + MySQL",
    githubUrl: "https://github.com/Chizuyu/Marketplace",
    desc: "A full-stack e-commerce solution with admin dashboard, CRUD product management, and real-time sales reporting."
  },
  {
    title: "Blogger",
    tech: "Kotlin + REST API",
    githubUrl: "https://github.com/Chizuyu/Blogger",
    desc: "Offline-first Android application designed for Blogger, utilizing API for data synchronization."
  },
  {
    title: "Hospital Management System",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/Hospital",
    desc: "A comprehensive hospital management application with patient records, appointment scheduling, and real-time updates."
  },
  {
    title: "Bromo Airlines",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/BromoAirlines",
    desc: "A flight booking application with real-time availability checking and seamless payment transactions."
  },
  {
    title: "Madura Mart",
    tech: "C# + LINQ + SQL Server",
    githubUrl: "https://github.com/Chizuyu/Madura_Mart",
    desc: "A modern e-commerce platform for local products with a focus on user experience and exporting reports."
  },
  {
    title: "Esemka Score",
    tech: "C# + SQL Server",
    githubUrl: "https://github.com/Chizuyu/SMKScore",
    desc: "A performance evaluation application for Students. It features a comprehensive dashboard for tracking academic progress."
  },
  {
    title: "Kos Revan",
    tech: "PHP Native + MySQL",
    githubUrl: "https://github.com/Chizuyu/Website-Kos-Revan",
    desc: "A simple dormitory management application with user authentication and room showcase features."
  }
];

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle, tag }: { title: string; subtitle: string; tag?: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-on-surface-variant text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
    {tag && (
      <span className="font-mono text-secondary text-sm bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
        {tag}
      </span>
    )}
  </div>
);

export default function App() {

  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Mendeteksi saat section ada di tengah layar
      threshold: 0
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

  // Fungsi untuk Typewriter Effect 
  const [index, setIndex] = useState(0);
  const words = [
    "robust android applications",
    "software engineering",
    "seamless mobile experiences",
    "modern software engineering",
    "scalable data architectures"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Berganti setiap 3 detik
    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk Smooth Scroll
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-secondary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
          <div className="font-mono text-2xl font-bold tracking-tighter text-secondary cursor-pointer" onClick={() => scrollTo('home')}>
            YAZID'S ARCHIVE
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`nav-link capitalize relative transition-colors duration-300 ${activeSection === item ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                  }`}
              >
                {item}
                {/* Garis bawah animasi (Opsional, tapi keren) */}
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
          {/* <div className="flex items-center space-x-4">
            <button className="btn-primary uppercase tracking-wider text-xs font-bold shadow-lg shadow-secondary/10">
              Resume
            </button>
          </div> */}
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-40">
        {/* Hero Section */}
        <section id="home" className="relative grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="space-y-8 z-10">
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-[10px] text-secondary uppercase tracking-widest">Available for hire</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-6xl font-extrabold tracking-tighter leading-[0.9]"
            >
              MUHAMMAD YAZID <br />
              <span className="text-secondary">HAZAMI</span>
            </motion.h1>

            {/* Ganti bagian motion.p yang lama dengan ini */}
            <div className="h-20 md:h-10"> {/* Container tinggi tetap agar layout tidak goyang saat teks ganti */}
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

            {/* Biografi Singkat */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-on-surface-variant/80 text-lg max-w-lg leading-relaxed border-l-2 border-secondary/20 pl-4"
            >
              "Hello, I'm a Software Engineering student passionate about building responsive mobile apps and websites.
              I believe great digital products are born from a mix of solid logic and modern design.
              My goal is to create solution-oriented, aesthetic, and impactful experiences for every user."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-5 pt-6"
            >
              {/* TOMBOL UTAMA: VIEW WORK */}
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-secondary text-surface font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-3"
              >
                {/* Efek kilatan cahaya saat hover */}
                <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                <span className="relative z-10">VIEW WORK</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* TOMBOL KEDUA: SAY HELLO (Efek Glassmorphism) */}
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 flex items-center gap-3"
              >
                INITIATE PROJECT
              </motion.button>
            </motion.div>

            {/* --- ICON SOSIAL MEDIA (TAMBAHAN BARU) --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }} // Muncul paling akhir agar efek urutannya bagus
              className="flex items-center gap-6"
            >
              {/* Link GitHub */}
              <a
                href="https://github.com/Chizuyu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <Github className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">GITHUB</span>
              </a>

              {/* Link LinkedIn */}
              <a
                href="https://linkedin.com/in/muhammad-yazid-hazami-a35520410"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <Linkedin className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">LINKEDIN</span>
              </a>

              {/* Link Instagram */}
              <a
                href="https://instagram.com/hazaamii"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <Instagram className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">INSTAGRAM</span>
              </a>

              {/* Garis Dekoratif (Opsional agar terlihat lebih estetik) */}
              <div className="h-px w-12 bg-secondary/20 ml-2"></div>
              <span className="text-[10px] font-mono text-on-surface-variant/40 uppercase tracking-[0.2em]">Socials</span>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full opacity-20 animate-pulse"></div>
            <img
              src="public/photo.jpg"
              alt="Muhammad Yazid Hazami"
              className="relative w-full aspect-square object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
            />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block relative group"
          >
            {/* 1. EFEK GLOW (Cahaya Ungu di Belakang) */}
            <div className="absolute -inset-4 bg-secondary/30 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse"></div>

            {/* 2. CONTAINER FOTO DENGAN BORDER & OVERLAY */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
              <img
                src="Photo.jpg" // Pastikan path benar (biasanya dari folder public cukup "/photo.jpg")
                alt="Muhammad Yazid Hazami"
                className="w-full aspect-square object-cover rounded-[2rem] grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
              />

              {/* 3. EFEK GRADIENT OVERLAY (Agar bagian bawah foto sedikit gelap & menyatu) */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
            </div>

            {/* 4. DEKORASI SUDUT (Opsional - Memberikan kesan "Tech/Archive") */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-secondary/50 rounded-tr-[2rem] -mr-2 -mt-2"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-secondary/50 rounded-bl-[2rem] -ml-2 -mb-2"></div>
          </motion.div>
        </section>

        {/* Skills Section yang sudah di-update */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeader title="Tech Stack" subtitle="My technical arsenal." />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Bagian Languages dengan Icon */}
            <motion.div className="md:col-span-6 glass-card p-8 rounded-[2rem] space-y-6">
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.languages.map((lang, i) => (
                  <div key={i} className="flex items-center gap-3 group p-2 hover:bg-white/5 rounded-xl transition-colors">
                    <lang.icon className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors" />
                    <span className="font-mono text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bagian Database dengan Icon */}
            <motion.div className="md:col-span-6 glass-card p-8 rounded-[2rem] space-y-6">
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase">Databases</h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.databases.map((db, i) => (
                  <div key={i} className="flex items-center gap-3 group p-2 hover:bg-white/5 rounded-xl transition-colors">
                    <db.icon className="w-8 h-8 text-on-surface-variant group-hover:text-secondary transition-colors" />
                    <span className="font-mono text-sm">{db.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bagian Tools dengan Icon (Badge Style) */}
            <motion.div className="md:col-span-12 glass-card p-8 rounded-[2rem]">
              <h3 className="font-mono text-xs text-tertiary tracking-widest uppercase mb-6">Tools & Framework</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-secondary/50 transition-all group">
                    <tool.icon className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-colors" />
                    <span className="font-mono text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 space-y-12">
          <SectionHeader
            title="My Projects"
            subtitle="A collection of systems and applications I've engineered."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card group p-8 rounded-[2rem] flex flex-col justify-between border-l-4 border-l-transparent hover:border-l-secondary transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] text-secondary tracking-widest mt-1 uppercase">
                      {project.tech}
                    </p>
                  </div>

                  <p className="text-on-surface-variant leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-start">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-secondary group/link w-fit"
                    >
                      VIEW SOURCE CODE
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/5 rounded-full text-on-surface-variant hover:text-secondary transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="glass-card p-16 md:p-24 rounded-[4rem] text-center space-y-10 relative overflow-hidden bg-gradient-to-br from-secondary/10 to-transparent"
          >
            <div className="space-y-4 relative z-10">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                Let's create the <br />
                <span className="text-secondary italic">next big thing.</span>
              </h2>
              <p className="text-on-surface-variant text-xl max-w-xl mx-auto">
                Seeking a high-performance developer? Let's connect and discuss your vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <a
                href="mailto:hazamiyazid4@gmail.com"
                className="btn-primary px-14 py-6 text-lg flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl"
              >
                SAY HELLO <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-sm text-on-surface-variant/60">
            © 2026 <span className="text-secondary/80">YAZID'S ARCHIVE</span> — SOFTWARE ENGINEER
          </div>
          <div className="flex gap-12 font-mono text-[10px] tracking-widest text-on-surface-variant/40">
            <a href="#" className="hover:text-secondary">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-secondary">SYSTEM_LOGS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}