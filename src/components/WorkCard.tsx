import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

type WorkCardProps = {
  work: Work;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
};

export function WorkCard({ work, priority = false, headingLevel = "h3" }: WorkCardProps) {
  const Heading = headingLevel;
  return (
    <Link className="work-card" href={`/works/${work.slug}`}>
      <div className="work-card-image">
        <Image src={assetPath(thumbnailPath(work.hero))} alt={work.title} fill sizes="(max-width: 768px) 100vw, 33vw" priority={priority} />
      </div>
      <div className="work-card-body">
        <div className="meta-row">
          <span>{work.category}</span>
          <span>{work.year}</span>
        </div>
        <Heading className="work-card-title">{work.title}</Heading>
        <p>{work.excerpt}</p>
        {work.galleryNote ? <p className="work-card-note">{work.galleryNote}</p> : null}
      </div>
    </Link>
  );
}
