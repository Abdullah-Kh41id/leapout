"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { fileToCompressedDataUrl } from "@/lib/image";
import { createLogId } from "@/lib/logStorage";
import { LOG_ACTIVITIES, type LeapLogEntry, type LogActivity } from "@/lib/logTypes";
import { toDateKey } from "@/lib/streak";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (entry: LeapLogEntry) => void;
};

export default function AddLeapModal({ open, onClose, onSave }: Props) {
  const titleId = useId();
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [activity, setActivity] = useState<LogActivity>("Hiking");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(() => toDateKey());
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    setTitle("");
    setActivity("Hiking");
    setNote("");
    setDate(toDateKey());
    setPhoto(null);
    setError(null);
    setSaving(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  async function handlePhotoChange(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose a photo.");
      return;
    }
    try {
      setError(null);
      const dataUrl = await fileToCompressedDataUrl(file);
      setPhoto(dataUrl);
    } catch {
      setError("Could not read that photo. Try another one.");
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!photo) {
      setError("A photo is required.");
      return;
    }
    if (!title.trim()) {
      setError("Give this leap a short title.");
      return;
    }

    setSaving(true);
    const entry: LeapLogEntry = {
      id: createLogId(),
      date,
      title: title.trim(),
      activity,
      note: note.trim() || undefined,
      photo,
      createdAt: Date.now(),
    };
    onSave(entry);
    setSaving(false);
    onClose();
  }

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button type="button" className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-label="Close" onClick={onClose} />

      <div className="relative z-10 flex max-h-[min(92dvh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-ink-border bg-ink-soft shadow-card animate-fade-up sm:mb-0 sm:rounded-3xl">
        <div className="flex items-center justify-between gap-3 border-b border-ink-border/70 px-5 py-4">
          <h2 id={titleId} className="font-display text-xl font-bold text-white">
            Add Leap
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm text-mist hover:bg-ink-raised hover:text-white"
          >
            Close
          </button>
        </div>

        <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
          <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">Photo</label>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-ink-border bg-ink transition hover:border-ember/50"
              >
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt="Selected leap preview" className="h-full w-full object-cover" />
                ) : (
                  <div className="px-6 text-center">
                    <p className="font-medium text-mist-bright">Choose Photo</p>
                    <p className="mt-1 text-xs text-mist-soft">Take a new one or pick from your gallery</p>
                  </div>
                )}
              </button>
              {/* No capture attr — lets mobile browsers offer Camera OR Photo Library */}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoChange(e.target.files?.[0] ?? null)}
              />
            </div>

            <div>
              <label htmlFor="leap-title" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                Title
              </label>
              <input
                id="leap-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={80}
                placeholder="e.g. Morning parkrun"
                className="w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-mist-soft focus:border-ember/60"
                required
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-mist">Activity</p>
              <div className="flex flex-wrap gap-2">
                {LOG_ACTIVITIES.map((item) => {
                  const active = item === activity;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setActivity(item)}
                      className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                        active
                          ? "bg-ember text-ink"
                          : "bg-ink text-mist-bright ring-1 ring-ink-border hover:ring-mist-soft/40"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor="leap-note" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                Note <span className="normal-case tracking-normal text-mist-soft">(optional)</span>
              </label>
              <textarea
                id="leap-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={280}
                rows={3}
                placeholder="How did it feel?"
                className="w-full resize-none rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-mist-soft focus:border-ember/60"
              />
            </div>

            <div>
              <label htmlFor="leap-date" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                Date
              </label>
              <input
                id="leap-date"
                type="date"
                value={date}
                max={toDateKey()}
                onChange={(e) => setDate(e.target.value || toDateKey())}
                className="w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-white outline-none focus:border-ember/60 [color-scheme:dark]"
                required
              />
            </div>

            {error && <p className="text-sm text-ember-soft">{error}</p>}
          </div>

          <div
            className="shrink-0 border-t border-ink-border/70 bg-ink-soft px-5 pt-3"
            style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-2xl bg-ember py-3.5 text-sm font-bold text-ink transition hover:bg-ember-soft active:scale-[0.98] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save Leap"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
