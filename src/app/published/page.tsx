import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { publishedItems } from "@/data/extraSections";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function PublishedPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Published"
        title="公開・頒布作品"
        description="BOOTHやYouTubeなど、外部で公開している作品への導線です。"
      />
      <section className="published-list">
        {publishedItems.map((item) => (
          <Link className="published-item" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
            <div className="published-image">
              <Image src={assetPath(thumbnailPath(item.image))} alt={item.title} fill sizes="(max-width: 900px) 100vw, 36vw" />
            </div>
            <div>
              <span>External Link</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
