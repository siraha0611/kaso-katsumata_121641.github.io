import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { facts, routes, strengths } from "@/data/recruiter";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "採用ご担当の方へ",
  description:
    "勝俣颯太のポートフォリオを短時間でご覧いただくための案内です。企画・プランナー／2Dデザイン・キャラクター／映像・アニメーションの職種別に、見ていただきたい作品と担当範囲をまとめています。"
};

export default function ForRecruitersPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="For Recruiters"
        title={"採用ご担当の\n方へ"}
        description="お忙しいなかご覧いただきありがとうございます。3分ほどで全体像がつかめるよう、実績と職種別の見どころをまとめました。"
      />

      <section className="section compact">
        <div className="recruiter-lead">
          <p>
            {profile.nameJa}（{profile.nameEn}）／ {profile.school}・2027年3月修了見込み。
          </p>
          <p>
            物語・イラスト・アニメーション・Webを横断して制作しています。作品のほとんどを、企画から制作・出荷まで一人で担当してきたことが持ち味です。
            以下の数値は、いずれも作品ページで内訳と制作例を確認いただけます。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/portfolio-katsumata-sota.pdf" target="_blank" rel="noreferrer">
              ポートフォリオPDF
            </Link>
            <Link className="button" href="/works">
              作品一覧を見る →
            </Link>
            <Link className="button" href={`mailto:${profile.email}`}>
              メールで連絡する
            </Link>
          </div>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="Facts" title="数字で見る制作実績" />
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
      </section>

      <section className="section compact">
        <SectionTitle
          eyebrow="Where to Look"
          title={"職種別の\n見どころ"}
          description="ご検討中の職種に近いところから、3作品ずつご覧いただけます。担当した範囲もあわせて記載しています。"
        />
        <div className="route-list">
          {routes.map((route) => (
            <article className="route-card" key={route.no}>
              <div className="route-head">
                <p className="route-no">
                  {route.no}
                  <span>{route.en}</span>
                </p>
                <h3>{route.label}</h3>
                <p className="route-lead">{route.lead}</p>
                <p className="route-roles-label">下記3作品を通じて担当した範囲</p>
                <ul className="chip-list">
                  {route.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
              <ol className="route-works">
                {route.works.map((work) => (
                  <li key={work.slug}>
                    <Link href={`/works/${work.slug}`}>
                      <strong>{work.title} →</strong>
                      <span>{work.point}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="Strengths" title="お伝えしたいこと" />
        <div className="stance-grid">
          {strengths.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <SectionTitle
          eyebrow="More"
          title="もう少し詳しく"
          description="時間に余裕がある場合は、こちらもあわせてご覧ください。"
        />
        <div className="link-grid">
          <Link href="/about">
            <span>About</span>
            <small>経歴・これまでの歩み・使用ツール</small>
          </Link>
          <Link href="/story">
            <span>Story</span>
            <small>なぜ作り続けているのか（生い立ち）</small>
          </Link>
          <Link href="/research">
            <span>Research</span>
            <small>大学院での研究テーマ（現実科学とTRPG）</small>
          </Link>
          <Link href="/tools">
            <span>Dev</span>
            <small>制作を支えるために自作したツール</small>
          </Link>
          <Link href="/storyboard">
            <span>Storyboard</span>
            <small>『-CORE-』絵コンテ全39ページ</small>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
            <small>連絡先・各種リンク</small>
          </Link>
        </div>
      </section>
    </main>
  );
}
