/**
 * Leap Log entry shape.
 * Designed to map cleanly to a future Supabase `leap_logs` table:
 * - id -> uuid
 * - date -> date
 * - title / activity / note -> text columns
 * - photo -> storage URL (currently a base64 data URL for offline use)
 * - createdAt -> timestamptz (ms epoch locally)
 */
export const LOG_ACTIVITIES = ["Martial Arts", "Hiking", "Running", "Other"] as const;

export type LogActivity = (typeof LOG_ACTIVITIES)[number];

export type LeapLogEntry = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  activity: LogActivity;
  note?: string;
  photo: string; // base64 data URL for now
  createdAt: number;
};

export const LOG_STORAGE_KEY = "leap-out:log-entries:v1";
