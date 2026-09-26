import type { CSSProperties } from "react";
import { SplitReveal } from "@/components/SplitReveal";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  kinetic?: boolean;
};

const lineWidth = (line: string) =>
  Array.from(line).reduce((width, ch) => width + ((ch.codePointAt(0) ?? 0) <= 0x024f ? 0.6 : 1), 0);

export function SectionTitle({ eyebrow, title, description, as = "h2", kinetic = false }: SectionTitleProps) {
  const Heading = as;
  const lines = title.split("\n");
  const hasSegments = lines.length > 1;
  const maxCh = Math.max(...lines.map(lineWidth)) * 1.06;
  return (
    <div className={`section-title${kinetic ? " section-title--kinetic" : ""}`}>
      <p>{eyebrow}</p>
      {/* kinetic指定時だけ専用コンポーネントへ分岐し、既存ページの見出しDOMは維持する。 */}
      {kinetic ? (
        <SplitReveal
          as={as}
          title={title}
          className={hasSegments ? "title-fit" : undefined}
          style={hasSegments ? ({ "--title-max-ch": maxCh.toFixed(2) } as CSSProperties) : undefined}
        />
      ) : (
        <Heading
          className={hasSegments ? "title-fit" : undefined}
          style={hasSegments ? ({ "--title-max-ch": maxCh.toFixed(2) } as CSSProperties) : undefined}
        >
          {hasSegments
            ? lines.map((line, index) => (
                <span className="title-seg" key={index}>
                  {line}
                </span>
              ))
            : title}
        </Heading>
      )}
      {description ? <span>{description}</span> : null}
    </div>
  );
}
