"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { addLogEntry, loadLogEntries } from "@/lib/logStorage";
import type { LeapLogEntry } from "@/lib/logTypes";
import { calculateStreak } from "@/lib/streak";
import AddLeapModal from "./AddLeapModal";
import LogFeed from "./LogFeed";

export default function LogPageClient() {
  const [entries, setEntries] = useState<LeapLogEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setEntries(loadLogEntries());
    setHydrated(true);
  }, []);

  const streak = useMemo(() => calculateStreak(entries), [entries]);

  const handleSave = useCallback((entry: LeapLogEntry) => {
    const next = addLogEntry(entry);
    setEntries(next);
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-ink-border bg-gradient-to-br from-ink-raised to-ink px-5 py-5 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Current streak</p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <p className="font-display text-4xl font-bold tracking-tight text-white">
            <span className="text-ember">{hydrated ? streak : "–"}</span>
            <span className="ml-2 text-xl font-semibold text-mist-bright">
              {hydrated && streak === 1 ? "day" : "days"}
            </span>
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="shrink-0 rounded-2xl bg-ember px-4 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-ember-soft active:scale-95"
          >
            + Add Leap
          </button>
        </div>
        <p className="mt-3 text-sm text-mist">
          Post at least one photo today to keep your streak alive.
        </p>
      </section>

      {!hydrated ? (
        <div className="py-20 text-center text-sm text-mist-soft">Loading your log…</div>
      ) : entries.length === 0 ? (
        <section className="flex min-h-[45dvh] flex-col items-center justify-center rounded-3xl border border-dashed border-ink-border bg-ink-soft/60 px-6 py-16 text-center animate-fade-up">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ember-muted text-ember">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
              <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-white">No leaps yet</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
            Log your first leap to start your streak
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mt-6 rounded-2xl bg-ember px-5 py-3 text-sm font-bold text-ink transition hover:bg-ember-soft active:scale-95"
          >
            + Add Leap
          </button>
        </section>
      ) : (
        <LogFeed entries={entries} />
      )}

      <AddLeapModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} />
    </div>
  );
}
