"use client";

import { motion } from "framer-motion";
import { cardPop, fadeUp, staggerContainer } from "@/lib/motion-config";
import { skillCategories, currentlyLearning } from "@/data/skills";

function SkillBadge({ name, accentColor }: { name: string; accentColor: string }) {
  return (
    <motion.div
      variants={cardPop}
      whileHover={{ y: -4 }}
      className="group relative px-4 py-2 rounded-xl bg-surface border border-border overflow-hidden cursor-default"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: accentColor }}
      />
      <span className="relative font-mono text-sm text-text-primary">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            Tech Stack
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="p-6 rounded-2xl bg-surface border border-border"
            >
              <motion.h3
                variants={fadeUp}
                className="font-display text-lg font-semibold mb-4"
                style={{ color: category.accentColor }}
              >
                {category.name}
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    accentColor={category.accentColor}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 p-4 rounded-xl bg-surface/50 border border-border text-center"
        >
          <span className="font-mono text-sm text-text-muted">
            <span className="text-accent animate-pulse">▸</span> Currently exploring:{" "}
            {currentlyLearning.join(" · ")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
