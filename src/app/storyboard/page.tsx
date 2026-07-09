import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "絵コンテ・アーカイブ ―『-CORE-』全39ページ",
  description:
    "卒業制作アニメ『-CORE-』（企画時タイトル『百機夜行』）の絵コンテ全39ページを公開。カット番号・カメラ・秒数まで、1本の映像の設計図をそのまま掲載しています。",
  openGraph: {
    title: "絵コンテ・アーカイブ ―『-CORE-』全39ページ",
    description: "アニメ『-CORE-』の絵コンテ全39ページをそのまま公開した制作資料アーカイブ。",
    images: [`${siteOrigin}${basePath}/assets/thumbs/core-ekonte-p06.jpg`]
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "絵コンテ・アーカイブ ―『-CORE-』全39ページ",
    images: [`${siteOrigin}${basePath}/assets/thumbs/core-ekonte-p06.jpg`]
  }
};

const PAGE_COUNT = 39;

const pages = Array.from({ length: PAGE_COUNT }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return { num, image: `/assets/core-ekonte-p${num}.jpg` };
});

const featuredNotes: Record<string, string> = {
  "06": "C014〜C016 ― 対峙から抜刀の構えへ。作品ページで工程を解説しているカットです。",
  "07": "C016〜C017 ― 抜刀と斬撃の軌跡。同じく工程解説の対象ページです。"
};

export default function StoryboardPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Storyboard Archive"
        title={"絵コンテ・\nアーカイブ"}
        description="卒業制作アニメ『-CORE-』の絵コンテ全39ページを、そのまま公開しています。"
      />
      <section className="section compact">
        <div className="about-copy">
          <p>
            『-CORE-』（企画時タイトル『百機夜行』）は、この39ページの絵コンテから始まりました。カット番号・カメラワーク・秒数（3+12＝3秒12コマ）までを1コマずつ紙で設計し、これをつないだVコンテで映像のテンポを確かめてから、レイアウト・作画へ進んでいます。
          </p>
          <p className="story-chapter-link">
            <Link className="button" href="/works/core-animation">
              『-CORE-』の制作工程を見る →
            </Link>
            <a className="button" href="https://youtu.be/0WRfNMmreBY" target="_blank" rel="noreferrer">
              Vコンテ版（絵コンテの映像化）を見る →
            </a>
          </p>
        </div>
      </section>
      <section className="storyboard-grid">
        {pages.map((page) => (
          <figure className="storyboard-item" key={page.num}>
            <a href={assetPath(page.image)} target="_blank" rel="noreferrer">
              <div className="storyboard-media">
                <Image
                  src={assetPath(thumbnailPath(page.image))}
                  alt={`『-CORE-』絵コンテ P.${page.num}`}
                  fill
                  sizes="(max-width: 700px) 46vw, 24vw"
                />
              </div>
            </a>
            <figcaption>
              <span className="storyboard-page-no">P.{page.num}</span>
              {featuredNotes[page.num] ? <span className="storyboard-note">{featuredNotes[page.num]}</span> : null}
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="section compact about-readmore">
        <p>各ページはクリックで原寸表示できます。</p>
        <Link className="button" href="/works/core-animation">
          作品ページへ戻る →
        </Link>
      </section>
    </main>
  );
}
