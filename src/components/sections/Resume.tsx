"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-config";
import { timelineData, certificates } from "@/data/timeline";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            My Journey
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative space-y-8"
          >
            {timelineData.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16"
        >
          <h3 className="font-display text-xl font-semibold text-text-primary text-center mb-6">
            Certificates
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="flex-shrink-0 w-64 p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors snap-start"
              >
                <span className="text-2xl">📜</span>
                <h4 className="font-display text-sm font-semibold text-text-primary mt-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 text-center"
        >
          <a
            href="/cv-aun-abbas.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group"
          >
            Download CV
            <span className="inline-block group-hover:translate-y-1 transition-transform">
              &darr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
