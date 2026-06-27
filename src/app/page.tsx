import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { featuredWorks, works } from "@/data/works";
import { profile } from "@/data/profile";
import { axes } from "@/data/axes";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO 2026</p>
          <h1>{profile.nameEn}</h1>
          <p className="lead">物語をつくり、絵を描き、ひとりで世に出す。</p>
          <p className="hero-roles">
            TRPGシナリオライター ／ 2Dイラストレーター ／ AIネイティブ・ソロプレナー
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/works">
              Worksを見る
            </Link>
            <Link className="button" href="/portfolio-katsumata-sota.pdf" target="_blank" rel="noreferrer">
              ポートフォリオPDF
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
          「夢」「魂」「現実と虚構の境界」をテーマに、物語・イラスト・アニメーション・Webを横断して制作しています。
          遊ぶ前から惹かれ、遊んだ後に残る――そんな体験を、3つの軸でつくっています。
        </p>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="What I Do"
          title="3つの軸"
          description="ひとりの作り手として地続きの、3つの顔があります。"
        />
        <div className="axis-list">
          {axes.map((axis) => (
            <article className="axis" key={axis.no}>
              <div className="axis-visual">
                <Image src={assetPath(thumbnailPath(axis.image))} alt={axis.label} fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
              <div className="axis-copy">
                <p className="axis-no">
                  {axis.no}
                  <span>{axis.en}</span>
                </p>
                <h3>{axis.label}</h3>
                <p className="axis-lead">{axis.lead}</p>
                {axis.body.map((paragraph, index) => (
                  <p className="axis-body" key={index}>
                    {paragraph}
                  </p>
                ))}
                <div className="axis-works">
                  {axis.works.map((work) => (
                    <Link className="axis-work-link" href={`/works/${work.slug}`} key={work.slug}>
                      {work.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Research"
          title="研究室での取り組み"
          description="現実科学の視点から、TRPGで“現実とは何か”を問う。"
        />
        <div className="research-teaser">
          <p>
            デジタルハリウッド大学大学院で、学長・藤井直敬先生のもとで研究しています。テーマは「現実科学」。
            空想のなかで立ち上がる“共同幻想”は、現実に介入するひとつの手段ではないか――
            TRPGを通じて「現実とは何か」を考えるきっかけをつくっています。
          </p>
          <Link className="button" href="/research">
            研究の詳細を見る →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="ai-note">
          <h2>生成AIの利用について</h2>
          <p className="ai-note-intro">作るものによって、生成AIの使い方を分けています。</p>
          <div className="ai-note-cols">
            <div className="ai-note-col ai-note-yes">
              <p className="ai-note-label">生成AIを活用</p>
              <ul>
                <li>Webサイト・ツールのコーディング／構築（本サイト・Taku with CoC・扉のむこうの少女 など）</li>
                <li>演出素材の生成・量産（背景・エフェクトなど）</li>
                <li>制作の自動化・情報整理</li>
              </ul>
            </div>
            <div className="ai-note-col ai-note-no">
              <p className="ai-note-label">生成AIは不使用</p>
              <ul>
                <li>2Dイラスト・立ち絵・キャラクターデザイン</li>
                <li>アニメーションの作画</li>
              </ul>
              <p className="ai-note-foot">イラスト・作画は、すべて自分の手で描いています。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Selected Works"
          title="作品"
          description="TRPGシナリオ、立ち絵、アニメーション、Web・演出素材をまとめています。"
        />
        <div className="work-grid">
          {featuredWorks.map((work, index) => (
            <WorkCard key={work.slug} work={work} priority={index === 0} />
          ))}
          <Link className="work-card work-card-more" href="/works">
            <div className="work-card-body">
              <h3>すべての作品を見る →</h3>
              <p>Worksページに{works.length}件を掲載しています。</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <SectionTitle eyebrow="Archive" title="制作の幅" />
          <p className="body-text">
            シナリオ、立ち絵、NPC、ロゴ、MAP、映像、Webプロダクトまで、作品世界に必要なものを横断して制作しています。
            各ページでは完成物に加えて、設計意図と工程も掲載しています。
          </p>
        </div>
        <div className="stats">
          <div>
            <strong>{works.length}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Fields</span>
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
