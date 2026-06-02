"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-config";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "AI", "Full Stack", "Web App"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<typeof categories[number]>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            What I&apos;ve Built
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  filter === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-surface border-border text-text-muted hover:border-primary/50 hover:text-text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-text-muted">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
