"use client";

import { useMemo, useState } from "react";
import { activities, type Filter } from "@/data/activities";
import ActivityCard from "./ActivityCard";
import FilterChips from "./FilterChips";

export default function ActivityFeed() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return activities;
    return activities.filter((a) => a.category === filter);
  }, [filter]);

  return (
    <div className="space-y-5">
      <FilterChips active={filter} onChange={setFilter} />

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((activity, index) => (
          <div key={`${filter}-${activity.id}`} className="mb-4">
            <ActivityCard activity={activity} index={index} />
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-mist">No leaps in this category yet.</p>
      )}
    </div>
  );
}
