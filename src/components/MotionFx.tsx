"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTORS = [
  ".section-title:not(.section-title--kinetic)",
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
    // IntersectionObserverが無い環境では非表示クラスを付けない（本文が消えたままになるのを防ぐ）
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
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

    // 数値の初期HTMLは最終値のまま保持し、画面内に入った時だけ表示値を動かす。
    const countFrames = new Map<HTMLElement, number>();
    const countOriginals = new Map<HTMLElement, { node: ChildNode; text: string }>();
    const countElements = Array.from(document.querySelectorAll<HTMLElement>(".fact-value"));
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
          const originalText = textNode?.nodeValue ?? "";
          const match = originalText.match(/^(\s*)(\d[\d,]*)(.*)$/);
          countObserver.unobserve(element);
          if (!textNode || !match) return;

          const target = Number(match[2].replace(/,/g, ""));
          if (!Number.isFinite(target)) return;
          countOriginals.set(element, { node: textNode, text: originalText });
          const start = performance.now();
          const tick = (time: number) => {
            const progress = Math.min(1, (time - start) / 1200);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased).toLocaleString("ja-JP");
            textNode.nodeValue = `${match[1]}${value}${match[3]}`;
            if (progress < 1) {
              countFrames.set(element, window.requestAnimationFrame(tick));
            } else {
              textNode.nodeValue = originalText;
              countFrames.delete(element);
              countOriginals.delete(element);
            }
          };
          countFrames.set(element, window.requestAnimationFrame(tick));
        });
      },
      { threshold: 0.45 }
    );
    countElements.forEach((element) => {
      const firstText = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE)?.nodeValue ?? "";
      if (/^\s*\d/.test(firstText)) countObserver.observe(element);
    });

    // カードの傾きはCSS変数だけを更新し、revealのtransformとは競合させない。
    const tiltCleanups: Array<() => void> = [];
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      Array.from(document.querySelectorAll<HTMLElement>(".work-card")).forEach((card) => {
        let tiltFrame = 0;
        let nextX = 0;
        let nextY = 0;
        const applyTilt = () => {
          tiltFrame = 0;
          card.style.setProperty("--tilt-x", `${nextY * -4}deg`);
          card.style.setProperty("--tilt-y", `${nextX * 4}deg`);
          card.style.setProperty("--glare-x", `${(nextX + 1) * 50}%`);
        };
        const onPointerMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          nextX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2));
          nextY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2));
          if (!tiltFrame) tiltFrame = window.requestAnimationFrame(applyTilt);
        };
        const onPointerLeave = () => {
          nextX = 0;
          nextY = 0;
          if (!tiltFrame) tiltFrame = window.requestAnimationFrame(applyTilt);
        };
        card.addEventListener("pointermove", onPointerMove, { passive: true });
        card.addEventListener("pointerleave", onPointerLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("pointermove", onPointerMove);
          card.removeEventListener("pointerleave", onPointerLeave);
          if (tiltFrame) window.cancelAnimationFrame(tiltFrame);
          card.style.removeProperty("--tilt-x");
          card.style.removeProperty("--tilt-y");
          card.style.removeProperty("--glare-x");
        });
      });
    }

    const axisImages = Array.from(document.querySelectorAll<HTMLElement>(".axis-visual img"));
    let parallaxFrame = 0;
    const updateParallax = () => {
      parallaxFrame = 0;
      const viewportHeight = Math.max(window.innerHeight, 1);
      axisImages.forEach((image) => {
        const rect = image.parentElement?.getBoundingClientRect();
        if (!rect || rect.bottom < -100 || rect.top > viewportHeight + 100) return;
        const center = rect.top + rect.height / 2;
        const position = Math.max(-1, Math.min(1, (center - viewportHeight / 2) / (viewportHeight / 2)));
        image.style.setProperty("--axis-parallax", `${position * -24}px`);
      });
    };
    const requestParallax = () => {
      if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      document.removeEventListener("animationend", onAnimationEnd);
      revealObserver.disconnect();
      videoObserver.disconnect();
      countObserver.disconnect();
      countFrames.forEach((frame) => window.cancelAnimationFrame(frame));
      countOriginals.forEach(({ node, text }) => {
        node.nodeValue = text;
      });
      countFrames.clear();
      countOriginals.clear();
      tiltCleanups.forEach((cleanUpTilt) => cleanUpTilt());
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
      axisImages.forEach((image) => image.style.removeProperty("--axis-parallax"));
      elements.forEach(cleanUp);
      smokeElements.forEach(cleanUpSmoke);
    };
  }, [pathname]);

  return null;
}
