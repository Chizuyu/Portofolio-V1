import { motion } from "motion/react";
import { Mail } from "lucide-react";

interface ContactSectionProps {}

export const ContactSection = ({}: ContactSectionProps) => (
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
          Seeking a high-performance developer? Let's connect and discuss your
          vision.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
        <motion.a
          href="mailto:hazamiyazid01@gmail.com"
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-14 py-6 bg-secondary text-surface font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-3 w-full sm:w-auto justify-center text-lg"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10 uppercase tracking-wider">
            Say Hello
          </span>
          <Mail className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  </section>
);
