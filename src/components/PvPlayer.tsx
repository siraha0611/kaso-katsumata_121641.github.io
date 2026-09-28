"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assetPath";

export function PvPlayer() {
  const [showFull, setShowFull] = useState(false);
  const fullVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!showFull) return;
    const video = fullVideoRef.current;
    video?.play().catch(() => {});
    return () => video?.pause();
  }, [showFull]);

  return (
    <div className="pv-frame">
      {showFull ? (
        <video
          ref={fullVideoRef}
          className="pv-video"
          src={assetPath("/assets/video/kaso-intro-pv-720.mp4")}
          poster={assetPath("/assets/kaso-intro-pv-poster.jpg")}
          controls
          playsInline
          preload="none"
          aria-label="KASO／勝俣 自己紹介PV 本編（1分27秒）"
        />
      ) : (
        <>
          <video
            className="pv-video"
            src={assetPath("/assets/video/kaso-intro-pv-teaser.mp4")}
            muted
            loop
            playsInline
            preload="metadata"
            poster={assetPath("/assets/kaso-intro-pv-poster.jpg")}
            data-autoplay
            aria-hidden="true"
            tabIndex={-1}
          />
          <button className="pv-play" type="button" onClick={() => setShowFull(true)} aria-label="自己紹介PV本編を再生（1分27秒）">
            <span className="pv-play-icon" aria-hidden="true" />
            <span>本編を再生</span>
            <small>1:27</small>
          </button>
        </>
      )}
      <span className="pv-corner is-tl" aria-hidden="true" />
      <span className="pv-corner is-tr" aria-hidden="true" />
      <span className="pv-corner is-bl" aria-hidden="true" />
      <span className="pv-corner is-br" aria-hidden="true" />
      <span className="pv-frame-label" aria-hidden="true">KASO / INTRODUCTION FILM</span>
    </div>
  );
}
