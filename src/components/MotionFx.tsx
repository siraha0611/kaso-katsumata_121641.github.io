"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTORS = [
  ".section-title",
  ".about-copy p",
  ".body-text",
  ".work-card",
  ".gallery-item",
  ".process-step",
  ".process-simple li",
  ".showcase-group",
  ".detail-grid article",
  ".detail-story",
  ".media-section",
  ".story-chapter-visual",
  ".cut-progress-intro",
  ".script-quote",
  ".cut-row",
  ".journey-item",
  ".stats div",
  ".axis",
  ".about-teaser",
  ".link-grid a",
  ".highlight-list li"
].join(", ");

export function MotionFx() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS));
    const siblingCount = new Map<HTMLElement | null, number>();
    elements.forEach((el) => {
      if (el.classList.contains("reveal")) {
        return;
      }
      const parent = el.parentElement;
      const index = siblingCount.get(parent) ?? 0;
      el.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      siblingCount.set(parent, index + 1);
      el.classList.add("reveal");
    });

    const cleanUp = (el: HTMLElement) => {
      el.classList.remove("reveal", "reveal-in");
      el.style.removeProperty("--reveal-delay");
    };

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === "revealRise") {
        cleanUp(event.target as HTMLElement);
      }
    };
    document.addEventListener("animationend", onAnimationEnd);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    elements.forEach((el) => {
      if (el.classList.contains("reveal")) {
        revealObserver.observe(el);
      }
    });

    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-autoplay]"));
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );
    videos.forEach((video) => videoObserver.observe(video));

    return () => {
      document.removeEventListener("animationend", onAnimationEnd);
      revealObserver.disconnect();
      videoObserver.disconnect();
      elements.forEach(cleanUp);
    };
  }, [pathname]);

  return null;
}
