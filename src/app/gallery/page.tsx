import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { galleryGroups } from "@/data/extraSections";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Gallery"
        title="立ち絵ギャラリー"
        description="TRPG探索者・NPCの立ち絵を、制作年ごとにまとめています。"
      />
      {galleryGroups.map((group) => (
        <section className="gallery-year" key={group.year}>
          <div className="gallery-year-head">
            <h2>{group.year}</h2>
            <span>{group.images.length} works</span>
          </div>
          <div className="masonry-gallery">
            {group.images.map((image, index) => (
              <a className="masonry-item" href={assetPath(image)} target="_blank" rel="noreferrer" key={`${image}-${index}`}>
                <Image src={assetPath(thumbnailPath(image))} alt={`立ち絵 ${group.year} ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" />
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
