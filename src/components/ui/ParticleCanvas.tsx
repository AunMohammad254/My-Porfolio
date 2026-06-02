"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function ParticleCanvas() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const initParticles = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const count = Math.min(60, Math.floor((w * h) / 15000));
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(arr);
  }, []);

  useEffect(() => {
    initParticles();
    const handleResize = () => initParticles();
    const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initParticles]);

  useEffect(() => {
    if (particles.length === 0) return;
    let frame: number;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let { x, y, vx, vy } = p;
          x += vx;
          y += vy;
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            vx -= dx / dist * 0.02;
            vy -= dy / dist * 0.02;
          }
          vx *= 0.99;
          vy *= 0.99;
          if (x < 0 || x > window.innerWidth) vx *= -1;
          if (y < 0 || y > window.innerHeight) vy *= -1;
          return { x, y, vx, vy };
        })
      );
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [particles.length, mouse]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {particles.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1.5} fill="rgba(59,130,246,0.4)" />
      ))}
      {particles.map((a, i) =>
        particles.slice(i + 1).map((b, j) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            return (
              <line
                key={`${i}-${j}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={`rgba(59,130,246,${0.15 * (1 - dist / 120)})`}
                strokeWidth={0.5}
              />
            );
          }
          return null;
        })
      )}
    </svg>
  );
}
