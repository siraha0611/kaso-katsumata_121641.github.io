import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
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
  if (!work) {
    return { title: "Work" };
  }
  return {
    title: work.title,
    description: work.excerpt
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
          {work.links?.length ? (
            <p className="detail-actions">
              {work.links.map((link, index) => (
                <a
                  className={index === 0 ? "button primary" : "button"}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label} →
                </a>
              ))}
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

      {work.story ? (
        <section className="detail-story">
          <SectionTitle eyebrow="Story" title="あらすじ" />
          {work.story.catch ? <p className="story-catch">{work.story.catch}</p> : null}
          <div className="story-body">
            {work.story.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {work.story.footnote ? <p className="story-footnote">{work.story.footnote}</p> : null}
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
          <h2>Outcome</h2>
          <p>{work.outcome}</p>
        </article>
        {work.sections?.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      {!work.workflow && work.process ? (
        <section className="detail-workflow">
          <SectionTitle eyebrow="Workflow" title="制作の流れ" />
          <ol className="process-simple">
            {work.process.map((item, index) => (
              <li key={item}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {work.workflow ? (
        <section className="detail-workflow">
          <SectionTitle eyebrow="Workflow" title="制作の流れ" />
          <div className="process-timeline">
            {work.workflow.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-image">
                  <Image
                    src={assetPath(thumbnailPath(step.image))}
                    alt={step.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 42vw"
                  />
                </div>
                <div className="process-copy">
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {work.cutProgress ? (
        <section className="cut-progress">
          <SectionTitle eyebrow="One Cut, Every Step" title={"1カットが\nできるまで"} />
          <p className="cut-progress-intro">{work.cutProgress.intro}</p>
          {work.cutProgress.script ? (
            <figure className="script-quote">
              <blockquote>
                {work.cutProgress.script.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </blockquote>
              <figcaption>{work.cutProgress.script.source}</figcaption>
            </figure>
          ) : null}
          {work.cutProgress.cuts.map((cut) => (
            <div className="cut-row" key={cut.cut}>
              <h2 className="cut-row-title">
                <span className="cut-number">{cut.cut}</span>
                {cut.title}
                {cut.duration ? <span className="cut-duration">コンテ指定 {cut.duration}</span> : null}
              </h2>
              <div className="cut-stages">
                {cut.stages.map((stage, index) => (
                  <figure className="cut-stage" key={stage.label}>
                    <div className="cut-stage-media">
                      {stage.video ? (
                        <video
                          src={assetPath(stage.video)}
                          poster={stage.poster ? assetPath(stage.poster) : undefined}
                          muted
                          loop
                          playsInline
                          preload="none"
                          data-autoplay
                        />
                      ) : stage.image ? (
                        <a href={assetPath(stage.image)} target="_blank" rel="noreferrer">
                          <Image
                            src={assetPath(thumbnailPath(stage.image))}
                            alt={`${cut.cut} ${stage.label}`}
                            fill
                            sizes="(max-width: 900px) 72vw, 20vw"
                          />
                        </a>
                      ) : null}
                    </div>
                    <figcaption>
                      <span className="cut-stage-step">{String(index + 1).padStart(2, "0")}</span>
                      {stage.label}
                      {stage.video ? <span className="cut-stage-badge">▶ 動画</span> : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {work.showcase ? (
        <section className="showcase">
          <SectionTitle eyebrow="Showcase" title="制作物ギャラリー" />
          {work.showcase.map((group) => (
            <div className="showcase-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.note ? <p className="gallery-note">{group.note}</p> : null}
              <div className="gallery">
                {group.images.map((image, index) => (
                  <a className="gallery-item" href={assetPath(image)} target="_blank" rel="noreferrer" key={image}>
                    <Image
                      src={assetPath(thumbnailPath(image))}
                      alt={`${work.title} ${group.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <>
          {work.galleryNote ? <p className="gallery-note">{work.galleryNote}</p> : null}

          <section className="gallery">
            {work.images.map((image, index) => (
              <a className="gallery-item" href={assetPath(image)} target="_blank" rel="noreferrer" key={image}>
                <Image src={assetPath(thumbnailPath(image))} alt={`${work.title} 作品画像 ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" />
              </a>
            ))}
          </section>
        </>
      )}

    </main>
  );
}
