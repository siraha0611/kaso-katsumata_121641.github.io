import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { featuredWorks, works } from "@/data/works";
import { profile } from "@/data/profile";
import { axes } from "@/data/axes";
import { facts } from "@/data/recruiter";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO 2026</p>
          <h1>{profile.nameEn}</h1>
          <p className="hero-name-ja">
            {profile.nameJa} ― {profile.school}
          </p>
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
          <p className="hero-recruiter">
            <Link href="/for-recruiters">採用ご担当の方へ ― 3分ほどで見どころをまとめています →</Link>
          </p>
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
          eyebrow="About Me"
          title="私について"
          description="つくり手としての歩みと実績です。"
        />
        <div className="about-teaser">
          <div className="about-teaser-visual">
            <Image
              src={assetPath(thumbnailPath(profile.portrait))}
              alt={profile.nameJa}
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </div>
          <div className="about-teaser-copy">
            <p className="about-teaser-name">
              {profile.nameJa}
              <span>{profile.nameEn} ／ {profile.school}</span>
            </p>
            <p className="body-text">{profile.summary}</p>
            <ul className="highlight-list">
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="button" href="/about">
                自己紹介を見る →
              </Link>
              <Link className="button" href="/story">
                生い立ちを読む →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Research"
          title={"研究室での\n取り組み"}
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

      <section className="section">
        <SectionTitle
          eyebrow="Archive"
          title="制作の幅"
          description="シナリオ、立ち絵、NPC、ロゴ、MAP、映像、Webプロダクトまで、作品世界に必要なものを横断して制作しています。以下の数字は、いずれも作品ページで内訳と制作例を確認いただけます。"
        />
        <div className="fact-grid">
          {facts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <p className="fact-value">
                {fact.value}
                {fact.unit ? <span>{fact.unit}</span> : null}
              </p>
              <h3>{fact.label}</h3>
              <p className="fact-note">{fact.note}</p>
            </article>
          ))}
        </div>
        <div className="recruiter-cta">
          <div>
            <h3>採用ご担当の方へ</h3>
            <p>企画・プランナー／2Dデザイン・キャラクター／映像・アニメーションの職種別に、見どころを3分ほどでまとめています。</p>
          </div>
          <Link className="button primary" href="/for-recruiters">
            見どころを見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
