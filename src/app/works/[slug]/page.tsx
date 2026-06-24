import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, works } from "@/data/works";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

type WorkDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }: WorkDetailPageProps) {
  const work = getWork(params.slug);
  return {
    title: work ? `${work.title} | Katsumata Sota Portfolio` : "Work"
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = getWork(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="detail-page">
      <Link className="back-link" href="/works">
        Worksへ戻る
      </Link>

      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">{work.category}</p>
          <h1>{work.title}</h1>
          <p>{work.subtitle}</p>
          <div className="meta-row large">
            <span>{work.year}</span>
            <span>{work.tools.join(" / ")}</span>
          </div>
          {work.link ? (
            <p className="detail-actions">
              <a className="button primary" href={work.link.href} target="_blank" rel="noreferrer">
                {work.link.label} →
              </a>
            </p>
          ) : null}
        </div>
        <div className="detail-visual">
          <Image src={assetPath(thumbnailPath(work.hero))} alt={work.title} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      {work.youtube ? (
        <section className="media-section">
          <div className="video-embed">
            <iframe
              src={work.youtube}
              title={work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      ) : work.video ? (
        <section className="media-section">
          <video controls preload="metadata" poster={assetPath(thumbnailPath(work.hero))}>
            <source src={assetPath(work.video)} type="video/mp4" />
          </video>
        </section>
      ) : null}

      <section className="detail-grid">
        <article>
          <h2>Concept</h2>
          <p>{work.concept}</p>
        </article>
        <article>
          <h2>Role</h2>
          <ul>
            {work.role.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Process</h2>
          <ol>
            {work.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
        <article>
          <h2>Outcome</h2>
          <p>{work.outcome}</p>
        </article>
      </section>

      {work.galleryNote ? <p className="gallery-note">{work.galleryNote}</p> : null}

      <section className="gallery">
        {work.images.map((image, index) => (
          <a className="gallery-item" href={assetPath(image)} target="_blank" rel="noreferrer" key={image}>
            <Image src={assetPath(thumbnailPath(image))} alt={`${work.title} 作品画像 ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" />
          </a>
        ))}
      </section>

    </main>
  );
}
