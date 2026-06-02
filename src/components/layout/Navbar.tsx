"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { staggerContainer, fadeUp } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 backdrop-blur-xl bg-surface/70 border-b border-border"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-lg font-bold text-primary hover:text-accent transition-colors"
          >
            <span className="text-primary">&lt;</span>Aun
            <span className="text-primary">/&gt;</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href.slice(1))}
                className="relative text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com/AunMohammad254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary"
            />
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary via-accent to-primary"
          style={{ width: `${progress * 100}%` }}
        />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-deep-space/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  variants={fadeUp}
                  onClick={() => scrollTo(link.href.slice(1))}
                  className="text-2xl font-display text-text-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div variants={fadeUp} className="pt-4">
                <ThemeToggle />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
