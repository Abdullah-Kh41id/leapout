import SiteHeader from "@/components/SiteHeader";

export default function MapPage() {
  return (
    <main>
      <SiteHeader compact />
      <section className="mt-10 flex min-h-[55dvh] flex-col items-center justify-center rounded-3xl border border-dashed border-ink-border bg-ink-soft/60 px-6 py-16 text-center animate-fade-up">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ember-muted text-ember">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m3.5 7 5.5-2.5L15 7l5.5-2.5V17L15 19.5 9 17 3.5 19.5V7Z" strokeLinejoin="round" />
            <path d="M9 4.5V17M15 7v12.5" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-white">Map coming next</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
          Soon you&apos;ll see activities near you across Bolton and Greater Manchester — trails,
          gyms, and runs pinned on a live map.
        </p>
      </section>
    </main>
  );
}
