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
      if (el.classList.contains("reveal") || el.classList.contains("smoke-target")) {
        return;
      }
      const parent = el.parentElement;
      const index = siblingCount.get(parent) ?? 0;
      el.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      siblingCount.set(parent, index + 1);
      el.classList.add("reveal");
    });

    const smokeElements = Array.from(document.querySelectorAll<HTMLElement>(".smoke-target"));
    const smokeCount = new Map<HTMLElement | null, number>();
    smokeElements.forEach((el) => {
      if (el.classList.contains("smoke")) {
        return;
      }
      const parent = el.parentElement;
      const index = smokeCount.get(parent) ?? 0;
      el.style.setProperty("--smoke-delay", `${Math.min(index * 160, 640)}ms`);
      smokeCount.set(parent, index + 1);
      el.classList.add("smoke");
    });

    const cleanUp = (el: HTMLElement) => {
      el.classList.remove("reveal", "reveal-in");
      el.style.removeProperty("--reveal-delay");
    };

    const cleanUpSmoke = (el: HTMLElement) => {
      el.classList.remove("smoke", "smoke-in");
      el.style.removeProperty("--smoke-delay");
    };

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === "revealRise") {
        cleanUp(event.target as HTMLElement);
      }
      if (event.animationName === "smokeRise") {
        cleanUpSmoke(event.target as HTMLElement);
      }
    };
    document.addEventListener("animationend", onAnimationEnd);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add(el.classList.contains("smoke") ? "smoke-in" : "reveal-in");
            revealObserver.unobserve(el);
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
    smokeElements.forEach((el) => {
      if (el.classList.contains("smoke")) {
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
      smokeElements.forEach(cleanUpSmoke);
    };
  }, [pathname]);

  return null;
}
