import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { commissionCases } from "@/data/extraSections";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function CommissionPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Commission"
        title="依頼制作"
        description="ヒアリング、ラフ、線画、完成までの制作工程をまとめています。"
      />
      <section className="commission-list">
        {commissionCases.map((item) => (
          <article className="commission-case" key={item.title}>
            <div className="commission-copy">
              <p>Commission</p>
              <h2>{item.title}</h2>
              <span>{item.description}</span>
            </div>
            <div className="commission-images">
              {item.images.map((image, index) => (
                <a className="commission-image" href={assetPath(image)} target="_blank" rel="noreferrer" key={image}>
                  <Image src={assetPath(thumbnailPath(image))} alt={`${item.title} ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 28vw" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
