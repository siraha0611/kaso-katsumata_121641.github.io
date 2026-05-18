import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { galleryImages } from "@/data/extraSections";
import { assetPath } from "@/lib/assetPath";

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        eyebrow="Gallery"
        title="立ち絵ギャラリー"
        description="TRPG探索者・NPCの立ち絵をまとめた一覧です。"
      />
      <section className="masonry-gallery">
        {galleryImages.map((image, index) => (
          <div className="masonry-item" key={`${image}-${index}`}>
            <Image src={assetPath(image)} alt={`立ち絵 ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </section>
    </main>
  );
}
