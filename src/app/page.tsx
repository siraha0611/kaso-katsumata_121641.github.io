import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { featuredWorks, works } from "@/data/works";
import { profile } from "@/data/profile";
import { axes } from "@/data/axes";
import { facts } from "@/data/recruiter";
import { latestNews } from "@/data/news";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">KASO VILLAGE STUDIO</p>
          <h1 className="hero-title-ja">KASO集落工房</h1>
          <p className="lead">TRPGの「遊ぶ体験」を、まるごとつくる工房。</p>
          <p className="hero-roles">
            素材・シナリオの制作と頒布 ／ 立ち絵の受託制作 ／ 制作ツールの開発
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://kasokatsumata.booth.pm/" target="_blank" rel="noreferrer">
              BOOTHで作品を見る
            </a>
            <Link className="button" href="/services">
              事業内容
            </Link>
            <Link className="button" href="/news">
              お知らせ
            </Link>
          </div>
          <p className="hero-name-ja">代表・制作: {profile.nameJa}（KASO）</p>
        </div>
        <div className="hero-visual" aria-label="Featured artwork">
          <Image src={assetPath(thumbnailPath("/assets/yumegatari-title.png"))} alt="夢語りはティータイムのあとで" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="intro-band">
        <p>
          セッションの画面をつくる素材から、長編シナリオ、制作を支えるツールまで。
          「遊ぶ前から惹かれ、遊んだ後に残る」体験を、企画から出荷までひとりで組み立てています。
        </p>
      </section>

      <section className="section compact">
        <SectionTitle
          eyebrow="News"
          title="お知らせ"
          description="工房の新作・イベント・制作の近況です。"
        />
        <div className="news-list">
          {latestNews.map((item) => (
            <div className="news-row" key={`${item.date}-${item.title}`}>
              <span className="news-date">{item.date}</span>
              <span className={`news-chip`}>{item.category}</span>
              <span className="news-title">
                {item.href ? (
                  item.href.startsWith("/") ? (
                    <Link href={item.href}>{item.title}</Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  )
                ) : (
                  item.title
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="about-readmore">
          <Link className="button" href="/news">
            お知らせの一覧を見る →
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Services"
          title="事業内容"
          description="TRPGの「遊ぶ体験」をつくることを軸に、制作と頒布を行っています。"
        />
        <div className="link-grid contact-links">
          <Link href="/services">
            <span>素材の制作・頒布</span>
            <small>背景・動く演出・小道具素材をBOOTHで。</small>
          </Link>
          <Link href="/services">
            <span>シナリオの制作・頒布</span>
            <small>長編『夢語りはティータイムのあとで』ほか。</small>
          </Link>
          <Link href="/services">
            <span>立ち絵などの受託制作</span>
            <small>XのDMでご依頼を受付中。</small>
          </Link>
          <Link href="/services">
            <span>制作ツールの開発</span>
            <small>製本ツールなど、制作を支える道具づくり。</small>
          </Link>
          <Link href="/services">
            <span>同人作品の委託頒布</span>
            <small>イベント出展時の委託を受付中。</small>
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="What We Make"
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
          eyebrow="About"
          title="つくり手について"
          description="工房を営む、ひとりの作り手の歩みです。"
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
            デジタルハリウッド大学大学院で、「現実科学」をテーマに研究しています。
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
              <p className="ai-note-label">生成AIを使わない領域</p>
              <ul>
                <li>ご依頼の立ち絵・キャラクターデザイン</li>
                <li>アニメーションの作画</li>
              </ul>
              <p className="ai-note-foot">
                ご依頼いただく立ち絵と、アニメーションの作画は自分の手で描いています。
                生成AIを使う素材は、各商品ページに使用範囲を明記しています。
              </p>
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
          description="シナリオ、立ち絵、NPC、ロゴ、MAP、映像、Webプロダクトまで、作品世界に必要なものを横断して制作しています。以下の実績は、いずれも作品ページで内訳と制作例を確認いただけます。"
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
            <h3>ご依頼・お問い合わせ</h3>
            <p>立ち絵のご依頼はX（@KASOkatsumata）のDMにて承っています。そのほかのご連絡は、お問い合わせページをご覧ください。</p>
          </div>
          <Link className="button primary" href="/contact">
            お問い合わせ →
          </Link>
        </div>
      </section>
    </main>
  );
}
