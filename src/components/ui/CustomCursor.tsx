"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const hoverables = document.querySelectorAll("a, button, [data-hoverable]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block rounded-full"
          style={{ x: x - 8, y: y - 8 }}
          animate={{
            width: isHovering ? 48 : 16,
            height: isHovering ? 48 : 16,
            backgroundColor: isHovering
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(59, 130, 246, 0.8)",
            border: isHovering
              ? "2px solid rgba(59, 130, 246, 0.6)"
              : "none",
            mixBlendMode: "difference" as const,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </AnimatePresence>
  );
}
