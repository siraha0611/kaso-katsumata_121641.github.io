"use client";

import { useMemo, useState } from "react";
import { WorkCard } from "@/components/WorkCard";
import type { Work, WorkCategory } from "@/data/works";

type WorksFilterProps = {
  works: Work[];
  categories: readonly WorkCategory[];
};

const ALL = "すべて" as const;

export function WorksFilter({ works, categories }: WorksFilterProps) {
  const [active, setActive] = useState<WorkCategory | typeof ALL>(ALL);

  const visible = useMemo(
    () => (active === ALL ? works : works.filter((work) => work.category === active)),
    [active, works]
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    works.forEach((work) => map.set(work.category, (map.get(work.category) ?? 0) + 1));
    return map;
  }, [works]);

  return (
    <>
      <div className="category-list" role="group" aria-label="カテゴリで絞り込む">
        <button
          type="button"
          className={active === ALL ? "is-active" : undefined}
          aria-pressed={active === ALL}
          onClick={() => setActive(ALL)}
        >
          {ALL}
          <small>{works.length}</small>
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "is-active" : undefined}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
            <small>{counts.get(category) ?? 0}</small>
          </button>
        ))}
      </div>
      <p className="filter-status" aria-live="polite">
        {visible.length}件を表示中
      </p>
      <div className="work-grid all-works">
        {visible.map((work, index) => (
          <WorkCard key={work.slug} work={work} priority={index < 2} headingLevel="h2" />
        ))}
      </div>
    </>
  );
}
