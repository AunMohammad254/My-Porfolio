"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/motion-config";
import TypewriterText from "@/components/ui/TypewriterText";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const statCards = [
  { icon: "💻", label: "3 Projects Shipped", angle: 0 },
  { icon: "🤖", label: "AI Integration Expert", angle: 120 },
  { icon: "⚡", label: "Next.js 16 Specialist", angle: 240 },
];

function OrbitingStats() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);

  useAnimationFrame((_t, delta) => {
    angleRef.current += (delta / 1000) * 15;
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const angle = ((angleRef.current + statCards[i].angle) * Math.PI) / 180;
      const rx = 140;
      const ry = 60;
      ref.style.transform = `translate(${Math.cos(angle) * rx}px, ${Math.sin(angle) * ry}px)`;
    });
  });

  return (
    <div className="relative flex items-center justify-center">
      {statCards.map((card, i) => (
        <div
          key={card.label}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-border text-xs text-text-muted whitespace-nowrap"
        >
          <span>{card.icon}</span>
          <span>{card.label}</span>
        </div>
      ))}
    </div>
  );
}

function MarqueeRibbon() {
  const items = "Next.js · TypeScript · React · Supabase · PostgreSQL · Tailwind CSS · REST APIs · AI Integration · Vercel · Git · ";
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border py-3 bg-surface/50">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap font-mono text-xs text-text-muted"
      >
        <span className="pr-8">{items}</span>
        <span className="pr-8">{items}</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    const flag = sessionStorage.getItem("portfolio-loaded");
    if (!flag) {
      setTimeout(() => sessionStorage.setItem("portfolio-loaded", "true"), 2000);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20"
    >
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <p className="text-text-muted text-lg">Hi, I&apos;m</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              Aun Abbas
            </h1>
            <div className="font-mono text-xl sm:text-2xl text-primary h-8">
              <TypewriterText
                words={[
                  "Full Stack Web Developer",
                  "Next.js Specialist",
                  "AI App Builder",
                  "Open Source Contributor",
                ]}
              />
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-text-muted max-w-lg leading-relaxed">
            Full Stack Developer building scalable web apps with Next.js, TypeScript &amp;
            Supabase. I ship AI-integrated products &mdash; fast.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              View Projects &rarr;
            </a>
            <a
              href="/cv-aun-abbas.pdf"
              download
              className="px-6 py-3 rounded-full border border-primary/30 text-text-primary font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Download CV &darr;
            </a>
            <a
              href="https://github.com/AunMohammad254"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border text-text-muted font-medium hover:text-text-primary hover:border-primary/30 transition-all duration-300"
            >
              GitHub &uarr;
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={slideRight} className="relative flex justify-center items-center mt-10">
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary to-accent animate-[gradient-shift_4s_ease_infinite] bg-size-[200%_200%]" />
              <div className="absolute inset-0.75 bg-deep-space overflow-hidden" style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <Image
                  src="/image.png"
                  alt="Aun Abbas"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideRight} className="relative w-full max-w-sm h-32 flex items-center justify-center">
            <OrbitingStats />
          </motion.div>
        </motion.div>
      </div>

      <MarqueeRibbon />
    </section>
  );
}
