"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/motion-config";
import type { TimelineItem as TimelineItemType } from "@/data/timeline";

const typeIcons: Record<string, string> = {
  education: "🎓",
  work: "💼",
  achievement: "🏆",
};

export default function TimelineItem({
  item,
  index,
}: {
  item: TimelineItemType;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      <motion.div
        variants={isLeft ? slideLeft : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}
      >
        <div className="p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-1 md:justify-end" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
            <span className="text-lg">{typeIcons[item.type]}</span>
            <span className="font-mono text-xs text-primary">{item.year}</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-text-primary">
            {item.title}
          </h3>
          <p className="text-text-muted text-sm">{item.subtitle}</p>
        </div>
      </motion.div>

      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-surface animate-pulse" />
      </div>

      <div className="md:w-1/2" />
    </div>
  );
}
