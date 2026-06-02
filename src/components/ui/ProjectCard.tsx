"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Globe, Code2 } from "lucide-react";
import { cardPop } from "@/lib/motion-config";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project; index: number }) {
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
      className={cn(
        "group relative flex flex-col rounded-3xl bg-surface border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30",
        project.featured && "md:col-span-2 md:flex-row"
      )}
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)` }}
      />

      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden bg-surface-alt",
        project.featured ? "md:w-3/5 aspect-video md:aspect-auto" : "aspect-video"
      )}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center bg-linear-to-br transition-all duration-700 group-hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}05)` 
            }}
          >
            <div 
              className="w-24 h-24 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
              {project.category === "AI" ? "🤖" : project.category === "Full Stack" ? "🛍️" : "🎮"}
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-background/80 backdrop-blur-md border border-border text-text-primary">
            {project.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {project.links.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Globe size={20} />
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-deep-space text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Code2 size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className={cn(
        "p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10 bg-surface",
        project.featured && "md:w-2/5"
      )}>
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-text-muted">{project.date}</span>
            {project.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-display font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-surface-alt border border-border text-text-muted"
              >
                #{tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] font-mono px-2 py-1 text-text-muted">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-3">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-alt hover:text-primary transition-colors border border-border"
                aria-label="GitHub"
              >
                <Code2 size={18} />
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-alt hover:text-primary transition-colors border border-border"
                aria-label="Live Demo"
              >
                <Globe size={18} />
              </a>
            )}
          </div>

          <a 
            href={project.links.live || project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-primary transition-colors group/link"
          >
            Details
            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
