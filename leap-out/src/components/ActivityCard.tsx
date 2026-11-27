"use client";

import Image from "next/image";
import type { Activity } from "@/data/activities";

type Props = {
  activity: Activity;
  index: number;
};

export default function ActivityCard({ activity, index }: Props) {
  return (
    <article
      className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-ink-raised ring-1 ring-ink-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-ember/30 active:scale-[0.98] animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 10) * 55}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />

        <span className="absolute left-3 top-3 rounded-md bg-ink/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-mist-bright backdrop-blur-md ring-1 ring-white/10">
          {activity.category}
        </span>

        {activity.firstTimerFriendly && (
          <span className="absolute right-3 top-3 rounded-md bg-ember/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
            First-timer friendly
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h2 className="font-display text-lg font-bold leading-snug text-white tracking-tight">
            {activity.title}
          </h2>
          <p className="mt-1.5 line-clamp-2 text-sm text-mist">{activity.description}</p>
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-mist-bright/90">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-ember" fill="currentColor">
              <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.6 6.5 12.5 6.5 12.5S18.5 13.6 18.5 9c0-3.6-2.9-6.5-6.5-6.5Zm0 8.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z" />
            </svg>
            {activity.location}
            <span className="text-mist-soft">•</span>
            {activity.travel}
          </p>
        </div>
      </div>
    </article>
  );
}
