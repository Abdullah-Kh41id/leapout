import { LOG_STORAGE_KEY, type LeapLogEntry } from "./logTypes";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadLogEntries(): LeapLogEntry[] {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(LOG_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LeapLogEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (entry) =>
          entry &&
          typeof entry.id === "string" &&
          typeof entry.date === "string" &&
          typeof entry.title === "string" &&
          typeof entry.activity === "string" &&
          typeof entry.photo === "string" &&
          typeof entry.createdAt === "number"
      )
      .sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

export function saveLogEntries(entries: LeapLogEntry[]) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(entries));
}

export function addLogEntry(entry: LeapLogEntry): LeapLogEntry[] {
  const next = [entry, ...loadLogEntries()].sort((a, b) => b.createdAt - a.createdAt);
  saveLogEntries(next);
  return next;
}

export function createLogId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `leap-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
