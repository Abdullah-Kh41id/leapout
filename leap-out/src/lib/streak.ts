import type { LeapLogEntry } from "./logTypes";

/** Local calendar date as YYYY-MM-DD */
export function toDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function shiftDateKey(dateKey: string, days: number): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return toDateKey(date);
}

export function formatLogDateLabel(dateKey: string): string {
  const today = toDateKey();
  const yesterday = shiftDateKey(today, -1);
  if (dateKey === today) return "Today";
  if (dateKey === yesterday) return "Yesterday";

  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
  });
}

/**
 * Streak = consecutive calendar days with ≥1 photo entry.
 * - Counts back from today if today has an entry.
 * - If today has no entry yet, still counts from yesterday (streak stays alive until midnight).
 * - Multiple entries on the same day still count as one day.
 */
export function calculateStreak(entries: LeapLogEntry[], todayKey = toDateKey()): number {
  if (entries.length === 0) return 0;

  const daysWithEntries = new Set(entries.map((e) => e.date));
  const yesterdayKey = shiftDateKey(todayKey, -1);

  let cursor: string;
  if (daysWithEntries.has(todayKey)) {
    cursor = todayKey;
  } else if (daysWithEntries.has(yesterdayKey)) {
    cursor = yesterdayKey;
  } else {
    return 0;
  }

  let streak = 0;
  while (daysWithEntries.has(cursor)) {
    streak += 1;
    cursor = shiftDateKey(cursor, -1);
  }
  return streak;
}

export function groupEntriesByDate(entries: LeapLogEntry[]): { date: string; entries: LeapLogEntry[] }[] {
  const map = new Map<string, LeapLogEntry[]>();
  for (const entry of entries) {
    const list = map.get(entry.date) ?? [];
    list.push(entry);
    map.set(entry.date, list);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => (a < b ? 1 : a > b ? -1 : 0))
    .map(([date, group]) => ({
      date,
      entries: group.sort((a, b) => b.createdAt - a.createdAt),
    }));
}
