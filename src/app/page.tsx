import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { featuredWorks, works } from "@/data/works";
import { profile } from "@/data/profile";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">2D DESIGNER PORTFOLIO</p>
          <h1>{profile.nameEn}</h1>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/works">
              Worksを見る
            </Link>
            <Link className="button" href="/portfolio-katsumata-sota.pdf">
              PDFを見る
            </Link>
            <Link className="button" href="/contact">
              Links / Contact
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Featured artwork">
          <Image src={assetPath(thumbnailPath("/assets/yumegatari-title.png"))} alt="夢語りはティータイムのあとで" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="intro-band">
        <p>
          キャラクター、物語、演出素材、資料設計を横断して制作しています。TRPG、イラスト、アニメーションを中心に、
          「遊ぶ前から惹かれ、遊んだ後に残る」体験を形にしています。
        </p>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Selected Works"
          title="作品"
          description="TRPGシナリオ、立ち絵、アニメーション、MAP・資料制作をまとめています。"
        />
        <div className="work-grid">
          {featuredWorks.map((work, index) => (
            <WorkCard key={work.slug} work={work} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <SectionTitle eyebrow="Archive" title="制作の幅" />
          <p className="body-text">
            立ち絵、NPC、ロゴ、MAP、映像、アニメーションカットまで、作品世界に必要な素材をまとめて制作しています。
            各ページでは完成物に加えて、設計意図と工程も掲載しています。
          </p>
        </div>
        <div className="stats">
          <div>
            <strong>{works.length}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Categories</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>Portfolio</span>
          </div>
        </div>
      </section>
    </main>
  );
}
