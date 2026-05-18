import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";
import { assetPath } from "@/lib/assetPath";

type WorkCardProps = {
  work: Work;
  priority?: boolean;
};

export function WorkCard({ work, priority = false }: WorkCardProps) {
  return (
    <Link className="work-card" href={`/works/${work.slug}`}>
      <div className="work-card-image">
        <Image src={assetPath(work.hero)} alt={work.title} fill sizes="(max-width: 768px) 100vw, 33vw" priority={priority} />
      </div>
      <div className="work-card-body">
        <div className="meta-row">
          <span>{work.category}</span>
          <span>{work.year}</span>
        </div>
        <h3>{work.title}</h3>
        <p>{work.excerpt}</p>
      </div>
    </Link>
  );
}
