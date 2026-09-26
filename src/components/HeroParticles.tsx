"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
  rose: boolean;
};

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 0.6 + Math.random() * 1.8,
  speed: 4 + Math.random() * 10,
  drift: 3 + Math.random() * 7,
  phase: Math.random() * Math.PI * 2,
  alpha: 0.08 + Math.random() * 0.18,
  rose: Math.random() > 0.56
});

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    if (typeof IntersectionObserver === "undefined" || typeof ResizeObserver === "undefined") return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let inView = false;
    let pageVisible = !document.hidden;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(40, Math.min(70, Math.round((width * height) / 19000)));
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    const draw = (time: number) => {
      frame = 0;
      if (!inView || !pageVisible) return;
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.y -= particle.speed * delta;
        particle.phase += delta * 0.38;
        if (particle.y < -8) {
          particle.y = height + 8;
          particle.x = Math.random() * width;
        }
        const x = particle.x + Math.sin(particle.phase) * particle.drift + pointerX * particle.radius * 2.2;
        const y = particle.y + pointerY * particle.radius * 1.5;
        context.beginPath();
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.rose
          ? `rgba(216, 166, 165, ${particle.alpha})`
          : `rgba(201, 168, 106, ${particle.alpha})`;
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (!frame && inView && pageVisible) {
        lastTime = 0;
        frame = window.requestAnimationFrame(draw);
      }
    };
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };
    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = Boolean(entry?.isIntersecting);
        if (inView) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    const resizeObserver = new ResizeObserver(resize);

    resize();
    observer.observe(host);
    resizeObserver.observe(host);
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      context.clearRect(0, 0, width, height);
    };
  }, [pathname]);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
