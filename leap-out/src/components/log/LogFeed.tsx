"use client";

import { useMemo } from "react";
import type { LeapLogEntry } from "@/lib/logTypes";
import { formatLogDateLabel, groupEntriesByDate } from "@/lib/streak";

type Props = {
  entries: LeapLogEntry[];
};

export default function LogFeed({ entries }: Props) {
  const groups = useMemo(() => groupEntriesByDate(entries), [entries]);

  return (
    <div className="space-y-8">
      {groups.map((group, groupIndex) => (
        <section key={group.date} className="animate-fade-up" style={{ animationDelay: `${Math.min(groupIndex, 6) * 40}ms` }}>
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2 className="font-display text-lg font-bold text-white">{formatLogDateLabel(group.date)}</h2>
            <p className="text-xs text-mist-soft">
              {group.entries.length} {group.entries.length === 1 ? "leap" : "leaps"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {group.entries.map((entry, index) => (
              <article
                key={entry.id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-ink-raised ring-1 ring-ink-border transition hover:ring-ember/35"
                style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.photo}
                  alt={entry.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-ember">{entry.activity}</p>
                  <h3 className="truncate text-sm font-semibold text-white">{entry.title}</h3>
                  {entry.note && <p className="mt-0.5 line-clamp-1 text-[11px] text-mist">{entry.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
