"use client";

import { FILTERS, type Filter } from "@/data/activities";

type Props = {
  active: Filter;
  onChange: (filter: Filter) => void;
};

export default function FilterChips({ active, onChange }: Props) {
  return (
    <div className="no-scrollbar flex justify-center gap-2 overflow-x-auto pb-1">
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
              isActive
                ? "bg-ember text-ink shadow-glow"
                : "bg-ink-raised text-mist-bright ring-1 ring-ink-border hover:ring-mist-soft/40"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
