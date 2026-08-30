/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  SiSharp,
  SiOpenjdk,
  SiKotlin,
  SiPhp,
  SiJavascript,
  SiDart,
  SiMysql,
  SiSqlite,
  SiAndroidstudio,
  SiGit,
  SiSwagger,
  SiFigma,
  SiLaragon,
  SiFlutter,
  SiBootstrap,
  SiLaravel,
  SiNextdotjs,
  SiNetapp,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SqlCustomIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V6"
      fill="#00758F"
    />
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00A3CC" />
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

const SKILLS = {
  languages: [
    { name: "C#", icon: SiSharp },
    { name: "Java", icon: SiOpenjdk },
    { name: "Kotlin", icon: SiKotlin },
    { name: "PHP", icon: SiPhp },
    { name: "JS", icon: SiJavascript },
    { name: "Dart", icon: SiDart },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql },
    { name: "SQL", icon: SqlCustomIcon },
    { name: "SQLite", icon: SiSqlite },
  ],
  tools: [
    { name: "VS Code", icon: VscVscode },
    { name: "VS Community", icon: VscVscode },
    { name: "Android Studio", icon: SiAndroidstudio },
    { name: "Git", icon: SiGit },
    { name: "Swagger", icon: SiSwagger },
    { name: "Laragon", icon: SiLaragon },
    { name: "Figma", icon: SiFigma },
    { name: "Laravel", icon: SiLaravel },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Next.js", icon: SiNextdotjs },
    { name: ".NET", icon: SiNetapp },
    { name: "Flutter", icon: SiFlutter },
    { name: "Postman", icon: SiPostman },
  ],
};

interface SkillsSectionProps {}

export const SkillsSection = ({}: SkillsSectionProps) => (
  <section id="skills" className="scroll-mt-24">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant text-lg max-w-2xl"
        >
          My technical arsenal.
        </motion.p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <motion.div className="md:col-span-6 glass-card p-8 rounded-[2rem] space-y-6">
        <h3 className="font-mono text-xs text-secondary tracking-widest uppercase">
          Languages
        </h3>
        <div className="grid grid-cols-2 gap-4 cursor-default">
          {SKILLS.languages.map((lang, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group p-2 hover:bg-white/5 rounded-xl transition-colors"
            >
              <lang.icon className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors" />
              <span className="font-mono text-sm">{lang.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="md:col-span-6 glass-card p-8 rounded-[2rem] space-y-6">
        <h3 className="font-mono text-xs text-secondary tracking-widest uppercase">
          Databases
        </h3>
        <div className="grid grid-cols-2 gap-4 cursor-default">
          {SKILLS.databases.map((db, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group p-2 hover:bg-white/5 rounded-xl transition-colors"
            >
              <db.icon className="w-8 h-8 text-on-surface-variant group-hover:text-secondary transition-colors" />
              <span className="font-mono text-sm">{db.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="md:col-span-12 glass-card p-8 rounded-[2rem]">
        <h3 className="font-mono text-xs text-tertiary tracking-widest uppercase mb-6">
          Tools & Framework
        </h3>
        <div className="flex flex-wrap gap-4 cursor-default">
          {SKILLS.tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-secondary/50 transition-all group"
            >
              <tool.icon className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-colors" />
              <span className="font-mono text-xs">{tool.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
