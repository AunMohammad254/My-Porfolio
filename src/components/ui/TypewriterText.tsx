"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({ words, className = "" }: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!deleting && charIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === currentWord.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span className={className}>
      {words[wordIndex].slice(0, charIndex)}
      <span className="animate-[blink_1s_step-end_infinite] text-primary">|</span>
    </span>
  );
}
