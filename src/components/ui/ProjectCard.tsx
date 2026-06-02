"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cardPop } from "@/lib/motion-config";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardPop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000, rotateX, rotateY }}
      className={`group relative rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/30 ${
        project.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div
        className="h-1 w-full"
        style={{ backgroundColor: project.accentColor }}
      />

      {project.featured && (
        <div className="hidden md:flex items-center justify-center bg-surface-alt/50 p-8">
          <div className="text-center">
            <div className="text-6xl mb-2">🏆</div>
            <p className="font-mono text-xs text-text-muted">Featured Project</p>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-mono"
                style={{
                  backgroundColor: `${project.accentColor}15`,
                  color: project.accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-text-muted font-mono whitespace-nowrap">
            {project.date}
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-text-primary mb-1">
            {project.title}
          </h3>
          {project.badge && (
            <span className="inline-block text-xs text-highlight font-mono mb-2">
              {project.badge}
            </span>
          )}
          <p className="text-text-muted italic text-sm mb-2">{project.tagline}</p>
          <p className="text-text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs text-text-muted font-mono px-2 py-0.5 rounded bg-surface-alt">
              {h}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-border">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
            >
              GitHub ↗
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
