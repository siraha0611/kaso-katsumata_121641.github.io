import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <SectionTitle
        as="h1"
        eyebrow="Contact"
        title="お問い合わせ"
        description="制作物や活動に関する連絡先です。"
      />
      <section className="contact-card">
        <p>ポートフォリオをご覧いただきありがとうございます。</p>
        <p>
          ゲーム・エンタメ業界の2Dデザイン、キャラクター制作、TRPG / 物語企画、映像演出に関するご連絡は下記までお願いいたします。
        </p>
        <Link className="mail-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </Link>
        <div className="contact-section-title">
          <h2>Links</h2>
          <p>活動場所をまとめています。</p>
        </div>
        <div className="featured-link-strip" aria-label="Primary links">
          <Link href={profile.booth} target="_blank" rel="noreferrer">
            BOOTH
          </Link>
          <Link href={profile.youtube.channel} target="_blank" rel="noreferrer">
            YouTube
          </Link>
          <Link href={profile.x} target="_blank" rel="noreferrer">
            X
          </Link>
          <Link href={`mailto:${profile.email}`}>Mail</Link>
        </div>
        <div className="link-grid contact-links">
          {profile.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <span>{link.label}</span>
              <small>{link.description}</small>
            </Link>
          ))}
        </div>
        <div className="contact-section-title">
          <h2>YouTube</h2>
          <p>最新動画を埋め込んでいます。</p>
        </div>
        <div className="youtube-embed">
          <iframe
            src={profile.youtube.latestVideo}
            title="KASO/勝俣 YouTube latest video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <Link className="button youtube-button" href={profile.youtube.channel} target="_blank" rel="noreferrer">
          YouTubeチャンネルへ
        </Link>
        <div className="contact-section-title">
          <h2>Recent</h2>
          <p>最近の公開物です。</p>
        </div>
        <div className="link-grid contact-links">
          {profile.featuredLinks.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <small>{link.description}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
