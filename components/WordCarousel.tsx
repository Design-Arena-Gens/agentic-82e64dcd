"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = [
  "inventive",
  "supportive",
  "reliable",
  "agentic",
  "curious",
  "empathetic"
];

export default function WordCarousel() {
  const variants = useMemo(() => phrases, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % variants.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [variants.length]);

  return (
    <span className="relative inline-flex min-w-[6ch] justify-center text-primary-300">
      <span className="absolute inset-0 animate-pulse blur-lg bg-primary-500/30 rounded-full" />
      <span className="relative font-semibold">{variants[index]}</span>
    </span>
  );
}
