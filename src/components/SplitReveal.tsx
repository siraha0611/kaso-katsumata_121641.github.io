"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type SplitRevealProps = {
  as: "h1" | "h2";
  title: string;
  className?: string;
  style?: CSSProperties;
};

export function SplitReveal({ as: Heading, title, className, style }: SplitRevealProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pathname = usePathname();
  const lines = title.split("\n");
  let characterIndex = 0;

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const sectionTitle = heading.closest<HTMLElement>(".section-title--kinetic");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      heading.classList.add("is-visible");
      sectionTitle?.classList.add("kinetic-in");
      return () => {
        heading.classList.remove("is-visible");
        sectionTitle?.classList.remove("kinetic-in");
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          heading.classList.add("is-visible");
          sectionTitle?.classList.add("kinetic-in");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.25 }
    );
    observer.observe(heading);

    return () => {
      observer.disconnect();
      heading.classList.remove("is-visible");
      sectionTitle?.classList.remove("kinetic-in");
    };
  }, [pathname]);

  return (
    <Heading ref={headingRef} className={`${className ? `${className} ` : ""}split-reveal`} style={style} aria-label={title.replace(/\n/g, " ")}>
      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span className="title-seg" key={`${line}-${lineIndex}`}>
            {Array.from(line).map((character) => {
              const delay = characterIndex * 55;
              characterIndex += 1;
              return (
                <span className="split-reveal-char" style={{ "--char-delay": `${delay}ms` } as CSSProperties} key={`${character}-${characterIndex}`}>
                  {character === " " ? "\u00a0" : character}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Heading>
  );
}
