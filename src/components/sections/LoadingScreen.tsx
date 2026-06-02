"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (hasLoaded) {
      setShow(false);
      setReady(true);
      return;
    }
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => setReady(true)}>
      {show && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.5,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9998] bg-deep-space flex flex-col items-center justify-center"
        >
          <div className="font-mono text-primary text-lg sm:text-xl">
            <TypewriterText text="> initializing portfolio..." />
          </div>

          <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-alt">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypewriterText({ text }: { text: string }) {
  const characters = text.split("");

  return (
    <span>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.04, duration: 0.01 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
        className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
      />
    </span>
  );
}
