"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center opacity-0">
        <Sun className="h-5 w-5" />
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center transition-colors hover:bg-surface-alt/80 hover:border-primary/50 text-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
        <Moon className="absolute top-0 left-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-highlight" />
      </div>
    </motion.button>
  );
}
