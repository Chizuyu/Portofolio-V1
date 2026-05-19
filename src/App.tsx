// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { motion } from "motion/react";
// import { 
//   Terminal, 
//   ArrowRight, 
//   Database, 
//   Code2, 
//   Smartphone, 
//   CheckCircle2, 
//   LayoutGrid, 
//   List, 
//   ExternalLink, 
//   User,
//   Github,
//   Mail,
//   Cpu,
//   Layers,
//   Search,
//   GitBranch
// } from "lucide-react";

// const SectionHeader = ({ title, subtitle, tag }: { title: string; subtitle: string; tag?: string }) => (
//   <div className="flex justify-between items-end mb-12">
//     <div>
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold tracking-tight mb-2"
//       >
//         {title}
//       </motion.h2>
//       <motion.p 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//         className="text-on-surface-variant text-lg"
//       >
//         {subtitle}
//       </motion.p>
//     </div>
//     {tag && (
//       <span className="font-mono text-secondary text-sm hidden md:block">
//         {tag}
//       </span>
//     )}
//   </div>
// );

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10">
//         <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
//           <div className="font-mono text-2xl font-bold tracking-tighter text-secondary">
//             DEV_CORE
//           </div>
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="nav-link text-secondary border-b border-secondary">Home</a>
//             <a href="#skills" className="nav-link">Skills</a>
//             <a href="#projects" className="nav-link">Projects</a>
//             <a href="#contact" className="nav-link">Contact</a>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Terminal className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-secondary transition-colors" />
//             <button className="btn-primary uppercase tracking-wider text-xs font-bold">
//               Resume
//             </button>
//           </div>
//         </div>
//       </nav>

//       <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
//         {/* Hero Section */}
//         <section id="home" className="relative grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full"
//             >
//               <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
//               <span className="font-mono text-[10px] text-secondary">AVAILABLE FOR NEW PROJECTS</span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-none"
//             >
//               Full-stack Developer & <br />
//               <span className="text-secondary">Mobile Specialist</span>
//             </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-on-surface-variant text-xl max-w-xl leading-relaxed"
//             >
//               Architecting robust backend systems and intuitive mobile experiences with precision and modern engineering principles.
//             </motion.p>

//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <button className="btn-primary py-4 px-8 flex items-center gap-2 group text-base">
//                 GET IN TOUCH <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="btn-outline py-4 px-8 text-base">
//                 VIEW PROJECTS
//               </button>
//             </motion.div>
//           </div>

//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//             animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
//             transition={{ duration: 1 }}
//             className="hidden lg:block relative aspect-square"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
//               alt="Futuristic Tech"
//               className="w-full h-full object-cover rounded-3xl grayscale"
//             />
//             <div className="absolute inset-0 bg-secondary/10 rounded-3xl mix-blend-overlay"></div>
//           </motion.div>
//         </section>

//         {/* Skills Bento Grid */}
//         <section id="skills" className="space-y-12">
//           <SectionHeader 
//             title="Tech Stack & Mastery" 
//             subtitle="Building the future with modern tools."
//             tag="EST. 2018 // STACK_V4"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//             {/* About Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="md:col-span-8 glass-card p-8 rounded-2xl flex flex-col justify-between"
//             >
//               <div className="space-y-4">
//                 <Database className="w-10 h-10 text-secondary mb-4" />
//                 <h3 className="text-2xl font-bold">The Architectural Core</h3>
//                 <p className="text-on-surface-variant leading-relaxed">
//                   Specializing in scalable backends with <span className="text-secondary font-medium">PHP/Laravel</span> and <span className="text-secondary font-medium">.NET</span>. 
//                   I bridge the gap between high-performance server logic and fluid mobile experiences using <span className="text-tertiary font-medium">Java & Kotlin</span>. 
//                   My approach centers on database integrity and efficient querying.
//                 </p>
//               </div>
//               <div className="mt-8 flex gap-3 flex-wrap">
//                 {['LINQ MASTERY', 'MYSQL OPTIMIZATION', 'REST API DESIGN'].map((tag, i) => (
//                   <span key={i} className="px-3 py-1 bg-white/5 rounded-full font-mono text-[10px] text-on-surface-variant border border-white/5">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Languages Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="md:col-span-4 glass-card p-8 rounded-2xl space-y-6"
//             >
//               <h3 className="font-mono text-xs text-secondary tracking-widest uppercase">Languages_ID</h3>
//               <div className="grid grid-cols-2 gap-y-4">
//                 {['C#', 'Java', 'Kotlin', 'PHP', 'JS', 'HTML/CSS'].map((lang, i) => (
//                   <div key={i} className="flex items-center gap-2 group cursor-default">
//                     <Code2 className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-colors" />
//                     <span className="font-mono text-sm">{lang}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Mobile Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="md:col-span-4 glass-card p-8 rounded-2xl overflow-hidden relative group"
//             >
//               <div className="relative z-10 space-y-4">
//                 <h3 className="text-xl font-bold">Mobile Native</h3>
//                 <p className="text-on-surface-variant text-sm">Kotlin & Java for high-performance Android applications.</p>
//                 <Smartphone className="w-12 h-12 text-secondary opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//             </motion.div>

//             {/* Database Stats Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="md:col-span-4 glass-card p-8 rounded-2xl space-y-6"
//             >
//               <h3 className="text-xl font-bold">Relational Power</h3>
//               <div className="space-y-5">
//                 {[
//                   { name: 'MySQL', val: '95%', color: 'bg-secondary' },
//                   { name: 'SQLite', val: '88%', color: 'bg-tertiary' }
//                 ].map((item, i) => (
//                   <div key={i} className="space-y-2">
//                     <div className="flex justify-between items-center text-xs font-mono">
//                       <span>{item.name}</span>
//                       <span className="text-on-surface-variant">{item.val}</span>
//                     </div>
//                     <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
//                       <motion.div 
//                         initial={{ width: 0 }}
//                         whileInView={{ width: item.val }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
//                         className={`${item.color} h-full`}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tools Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="md:col-span-4 glass-card p-8 rounded-2xl bg-gradient-to-br from-surface-container to-surface flex flex-col justify-between"
//             >
//               <h3 className="font-mono text-xs text-tertiary tracking-widest uppercase mb-4">Env_Tools</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['VS_STUDIO', 'ANDROID_STUDIO', 'GIT', 'POSTMAN', 'FIGMA', 'DOCKER'].map((tool, i) => (
//                   <span key={i} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded bg-white/[0.02]">
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Project Showcase */}
//         <section id="projects" className="space-y-12">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h2 className="text-4xl font-bold">Selected Projects</h2>
//             <div className="flex gap-2">
//               <button className="p-2 glass-card rounded-lg text-secondary"><LayoutGrid className="w-5 h-5" /></button>
//               <button className="p-2 glass-card rounded-lg text-on-surface-variant hover:text-secondary"><List className="w-5 h-5" /></button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {[
//               {
//                 title: "Enterprise ERP System",
//                 tech: "LARAVEL + MYSQL",
//                 img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
//                 desc: "A high-scale resource planning system for manufacturing, featuring complex inventory tracking and predictive querying using optimized MySQL procedures."
//               },
//               {
//                 title: "Native Health Matrix",
//                 tech: "KOTLIN + ROOM DB",
//                 img: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop",
//                 desc: "Offline-first Android application designed for clinical tracking, utilizing Room/SQLite for complex local data synchronization and biometrics."
//               }
//             ].map((project, i) => (
//               <motion.div 
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.2 }}
//                 className="glass-card rounded-3xl overflow-hidden group border-white/5"
//               >
//                 <div className="aspect-video relative overflow-hidden">
//                   <img 
//                     src={project.img} 
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
//                 </div>
//                 <div className="p-8 space-y-4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">{project.title}</h3>
//                       <p className="font-mono text-secondary text-[11px] tracking-widest mt-1">{project.tech}</p>
//                     </div>
//                     <ExternalLink className="w-5 h-5 text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all cursor-pointer" />
//                   </div>
//                   <p className="text-on-surface-variant text-base leading-relaxed">
//                     {project.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Area */}
//         <section id="contact" className="relative">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="glass-card p-12 md:p-20 rounded-[3rem] text-center space-y-8 bg-gradient-to-b from-secondary/5 to-transparent overflow-hidden"
//           >
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

//             <h2 className="text-5xl md:text-6xl font-bold max-w-2xl mx-auto tracking-tight">
//               Ready to build something <span className="text-secondary italic">robust</span> together?
//             </h2>
//             <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto">
//               Currently accepting freelance opportunities and full-stack consulting roles.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
//               <motion.a 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href="mailto:dev@core.com"
//                 className="btn-primary px-12 py-5 text-lg flex items-center gap-3 w-full sm:w-auto justify-center"
//               >
//                 INITIATE_CONTACT <Mail className="w-5 h-5" />
//               </motion.a>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Github, label: 'GitHub' },
//                   { icon: GitBranch, label: 'Docs' },
//                   { icon: User, label: 'Profile' }
//                 ].map((item, i) => (
//                   <motion.div 
//                     key={i}
//                     whileHover={{ y: -3 }}
//                     className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center cursor-pointer hover:bg-secondary/10 group"
//                   >
//                     <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="w-full py-12 border-t border-white/5 bg-surface/50">
//         <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-8">
//           <div className="font-mono text-sm text-on-surface-variant">
//             © 2024 <span className="text-secondary font-bold">DEV_CORE</span> // ALL RIGHTS RESERVED
//           </div>

//           <div className="flex items-center gap-12 text-on-surface-variant">
//             <div className="flex gap-8 font-mono text-xs">
//               <a href="#" className="hover:text-secondary transition-colors">PRIVACY_POLICY</a>
//               <a href="#" className="hover:text-secondary transition-colors">TERMINAL_ACCESS</a>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/5">
//               <Cpu className="w-3 h-3" /> SYSTEM_STABLE_V4.2
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  SiSharp, SiOpenjdk, SiKotlin, SiPhp, SiJavascript, SiHtml5,
  SiMysql, SiSqlite, SiAndroidstudio,
  SiGit, SiPostman, SiFigma, SiDocker, SiTailwindcss
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Terminal, ArrowRight, Database, Code2, Smartphone,
  ExternalLink, User, Github, Mail, Cpu, GitBranch
} from "lucide-react";

// --- DATA CONFIGURATION DENGAN ICON ---
const SKILLS = {
  languages: [
    { name: 'C#', icon: SiSharp },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'PHP', icon: SiPhp },
    { name: 'JS', icon: SiJavascript },
    { name: 'Tailwind', icon: SiTailwindcss }, // Ganti HTML/CSS ke Tailwind agar keren
  ],
  databases: [
    { name: 'MySQL', val: '95%', color: 'bg-secondary', icon: SiMysql },
    { name: 'SQLite', val: '88%', color: 'bg-tertiary', icon: SiSqlite }
  ],
  tools: [
    { name: 'VS Code', icon: VscVscode },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'Figma', icon: SiFigma },
    { name: 'Docker', icon: SiDocker },
  ]
};

const PROJECTS = [
  {
    title: "Marketplace",
    tech: "LARAVEL + MYSQL",
    githubUrl: "https://github.com/Chizuyu/Marketplace",
    desc: "A full-stack e-commerce solution with admin dashboard, CRUD product management, and real-time sales reporting."
  },
  {
    title: "Native Health Matrix",
    tech: "KOTLIN + ROOM DB",
    img: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop",
    desc: "Offline-first Android application designed for clinical tracking, utilizing Room/SQLite for data synchronization."
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
            MUHAMMAD YAZID HAZAMI
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn-primary uppercase tracking-wider text-xs font-bold shadow-lg shadow-secondary/10">
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-40">
        {/* Hero Section */}
        <section id="home" className="relative grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-[10px] text-secondary uppercase tracking-widest">Available for hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]"
            >
              Full-stack <br />
              <span className="text-secondary">Architect.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-on-surface-variant text-xl max-w-lg leading-relaxed"
            >
              Building high-performance backend systems and seamless mobile experiences with modern engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button onClick={() => scrollTo('contact')} className="btn-primary py-4 px-8 flex items-center gap-2 group text-base">
                INITIATE PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-outline py-4 px-8 text-base">
                VIEW WORK
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="Tech"
              className="relative w-full aspect-square object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
            />
          </motion.div>
        </section>

        {/* Skills Section yang sudah di-update */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeader title="Expertise" subtitle="My technical arsenal." tag="STACK_V4.0" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Bagian Languages dengan Icon */}
            <motion.div className="md:col-span-4 glass-card p-8 rounded-[2rem] space-y-6">
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
            <motion.div className="md:col-span-8 glass-card p-8 rounded-[2rem] space-y-8">
              <h3 className="text-xl font-bold">Data Architecture</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {SKILLS.databases.map((db, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <db.icon className="w-8 h-8 text-secondary" />
                      <div className="flex-1">
                        <div className="flex justify-between text-xs font-mono mb-2">
                          <span>{db.name}</span>
                          <span>{db.val}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: db.val }}
                            className={`${db.color} h-full`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bagian Tools dengan Icon (Badge Style) */}
            <motion.div className="md:col-span-12 glass-card p-8 rounded-[2rem]">
              <h3 className="font-mono text-xs text-tertiary tracking-widest uppercase mb-6">Environment & Tools</h3>
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
            title="Selected Projects"
            subtitle="A collection of systems and applications I've engineered."
            tag="PROJ_LIST_2024"
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
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-secondary" />
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/5 rounded-full text-on-surface-variant hover:text-secondary transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>

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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-secondary group/link w-fit"
                  >
                    VIEW SOURCE CODE
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
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
                href="mailto:dev@core.com"
                className="btn-primary px-14 py-6 text-lg flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl"
              >
                SAY HELLO <Mail className="w-5 h-5" />
              </a>
              <div className="flex gap-4">
                {[Github, GitBranch, User].map((Icon, i) => (
                  <button key={i} className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center hover:text-secondary transition-all">
                    <Icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-sm text-on-surface-variant/60">
            © 2026 <span className="text-secondary/80">MUHAMMAD YAZID HAZAMI</span> — SOFTWARE ENGINEER
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