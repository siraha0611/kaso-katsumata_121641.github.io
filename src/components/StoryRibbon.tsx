"use client";

import { useEffect, useState } from "react";

type RibbonItem = { id: string; label: string };

export function StoryRibbon({ items }: { items: RibbonItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="story-ribbon" aria-label="章">
      <div className="story-ribbon-inner">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={item.id === active ? "is-active" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
