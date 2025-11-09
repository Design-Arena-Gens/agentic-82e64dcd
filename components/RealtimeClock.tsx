"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(date);
}

export default function RealtimeClock() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="pulse-dot flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-lg">
      <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <span className="font-medium tracking-wide">Live · {time}</span>
    </div>
  );
}
