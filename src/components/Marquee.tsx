const phrase = "TRPG SCENARIO ・ ILLUSTRATION ・ ANIMATION ・ ONLINE SESSION ASSETS ・ TOOLS ・ KASO VILLAGE STUDIO ・";

function MarqueeTrack({ outline = false }: { outline?: boolean }) {
  return (
    <div className={`motion-marquee-track${outline ? " is-outline" : ""}`}>
      {Array.from({ length: 4 }, (_, index) => (
        <span key={index}>
          {phrase} <b>◆</b>{" "}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="motion-marquee" aria-hidden="true">
      <MarqueeTrack />
      <MarqueeTrack outline />
    </div>
  );
}
