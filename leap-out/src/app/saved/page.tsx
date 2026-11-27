import SiteHeader from "@/components/SiteHeader";

export default function SavedPage() {
  return (
    <main>
      <SiteHeader compact />
      <section className="mt-10 flex min-h-[55dvh] flex-col items-center justify-center rounded-3xl border border-dashed border-ink-border bg-ink-soft/60 px-6 py-16 text-center animate-fade-up">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ember-muted text-ember">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              d="M12 20.5 5.2 14c-2-2-2-5.2.3-7.1 2-1.7 4.9-1.2 6.5.8 1.6-2 4.5-2.5 6.5-.8 2.3 1.9 2.3 5.1.3 7.1L12 20.5Z"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-white">Nothing saved yet</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
          Your saved leaps will appear here. Tap into something that sparks you and keep it for
          later.
        </p>
      </section>
    </main>
  );
}
