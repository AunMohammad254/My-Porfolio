"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/motion-config";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 3, suffix: "+", label: "Projects" },
  { end: 2, suffix: "+", label: "Years Dev" },
  { end: 4, suffix: "+", label: "Certs" },
  { end: Infinity, suffix: "", label: "Learning" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary inline-block">
              Who I Am
              <span className="block mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
            Full Stack Web Developer with hands-on experience in Next.js 16, React,
            TypeScript, Tailwind CSS, and Supabase. I build scalable e-commerce platforms,
            AI-integrated applications, and role-based admin dashboards.
          </motion.p>

          <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
            Currently pursuing a Bachelor of Computer Science at Mohammad Ali Jinnah
            University while actively shipping production-grade projects.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Let&apos;s Build Something &rarr;
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-text-muted">
            <span>📍 Karachi, Pakistan</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Work
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={slideRight}
              className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-1">
                {stat.end === Infinity ? (
                  <span>&infin;</span>
                ) : (
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
