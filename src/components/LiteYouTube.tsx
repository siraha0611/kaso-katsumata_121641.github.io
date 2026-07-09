"use client";

import { useState } from "react";
import Image from "next/image";

type LiteYouTubeProps = {
  embedUrl: string;
  title: string;
  poster: string;
};

export function LiteYouTube({ embedUrl, title, poster }: LiteYouTubeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    const src = `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`;
    return (
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="lite-yt" onClick={() => setPlaying(true)} aria-label={`${title} を再生（YouTube）`}>
      <Image src={poster} alt="" fill sizes="(max-width: 900px) 100vw, 1100px" />
      <span className="lite-yt-btn" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.4.3 34 .3 34 .3s-21.4 0-26.6 1.4c-2.9.8-5.1 3.1-5.9 6C.3 13 .3 24 .3 24s0 11 1.2 16.3c.8 2.9 3 5.2 5.9 6C12.6 47.7 34 47.7 34 47.7s21.4 0 26.6-1.4c2.9-.8 5.1-3.1 5.9-6C67.7 35 67.7 24 67.7 24s0-11-1.2-16.3z" fill="#f00" />
          <path d="M27 34.5V13.5L45 24z" fill="#fff" />
        </svg>
      </span>
      <span className="lite-yt-label">クリックで再生</span>
    </button>
  );
}
