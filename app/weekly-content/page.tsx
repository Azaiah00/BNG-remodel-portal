"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection from "@/components/sections/WeeklyContentSection";
import week1Data from "@/data/content/week1.json";
import type { WeekData } from "@/components/sections/WeeklyContentSection";

const CONTENT_PIN = "5017";
const STORAGE_KEY = "bng-content-unlocked";

// Only Week 1; date range starts today 3/9/2026 (see week1.json dates)
// PIN protection: correct code 5017 unlocks content for the session
export default function WeeklyContentPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = typeof window !== "undefined" ? sessionStorage.getItem(STORAGE_KEY) : null;
    setUnlocked(stored === "true");
  }, [mounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (pin.trim() === CONTENT_PIN) {
      if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setPin("");
    } else {
      setError("Incorrect code. Please try again.");
      setPin("");
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-32 flex justify-center">
          <span className="text-zinc-500">Loading...</span>
        </div>
      </main>
    );
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
        <Navbar />
        <div className="pt-32 flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="w-full max-w-sm">
            <p className="text-zinc-400 text-center mb-6 font-mono text-sm uppercase tracking-widest">
              Enter 4-digit code to view content
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setPin(v);
                  setError("");
                }}
                placeholder="••••"
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white text-center text-2xl tracking-[0.5em] rounded-sm focus:outline-none focus:border-[var(--color-bng-red)]"
                autoFocus
              />
              {error && (
                <p className="text-[var(--color-bng-red)] text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-bng-red)] text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <div className="pt-20">
        <WeeklyContentSection weekData={week1Data as WeekData} />
      </div>
    </main>
  );
}
