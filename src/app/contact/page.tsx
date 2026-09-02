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
        <p>KASO集落工房のサイトをご覧いただきありがとうございます。</p>
        <p>
          立ち絵のご依頼はX（@KASOkatsumata）のDMにて承っています。素材・シナリオ・委託頒布のご相談、
          お仕事のご連絡は、XのDMまたは下記メールまでお願いいたします。
        </p>
        <Link className="mail-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </Link>
        <div className="contact-section-title">
          <h2>Links</h2>
          <p>活動場所をまとめています。</p>
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
