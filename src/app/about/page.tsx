import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/assetPath";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SectionTitle eyebrow="About" title="自己紹介" description="物語性のある2D制作と、遊ぶための資料設計を軸に活動しています。" />
      <section className="about-layout">
        <div className="profile-panel">
          <div className="profile-image">
            <Image src={assetPath(profile.portrait)} alt={profile.handle} fill sizes="(max-width: 900px) 100vw, 34vw" priority />
          </div>
          <p>{profile.handle}</p>
          <h1>{profile.nameJa}</h1>
          <strong>{profile.nameEn}</strong>
          <span>{profile.role}</span>
          <em>{profile.school}</em>
        </div>
        <div className="about-copy">
          <p>{profile.summary}</p>
          <p>
            物語の設定、キャラクターの表情、プレイヤーが見る資料、告知映像までを一つの体験として捉え、
            作品の魅力が伝わる順番を考えながら制作しています。
          </p>
        </div>
      </section>
      <section className="section compact">
        <SectionTitle eyebrow="Stance" title="制作スタンス" />
        <div className="stance-grid">
          {profile.stance.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section compact">
        <SectionTitle eyebrow="Skills" title="制作領域・使用ツール" />
        <div className="skill-list">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
