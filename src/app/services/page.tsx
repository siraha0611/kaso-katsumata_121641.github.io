import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "事業内容",
  description:
    "KASO集落工房の事業内容。TRPG素材・シナリオの制作と頒布、立ち絵などの受託制作、制作ツールの開発、同人作品の委託頒布の受付を行っています。"
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Services"
        title="事業内容"
        description="TRPGの「遊ぶ体験」をつくることを軸に、制作と頒布を行う個人の工房です。"
      />

      <section className="section compact">
        <SectionTitle eyebrow="01" title={"素材の制作・\n頒布"} />
        <div className="about-copy">
          <p>
            オンラインセッション（ココフォリア等）で使う背景・動く演出・カットイン・小道具などの素材パックを制作し、
            BOOTHで頒布しています。生成AIとPythonによる自動生成を取り入れ、寸法や継ぎ目などを自作の検品ツールで
            確認しながら制作しています。
          </p>
        </div>
        <div className="link-grid contact-links">
          <a href="https://kasokatsumata.booth.pm/" target="_blank" rel="noreferrer">
            <span>BOOTH ― KASO集落工房</span>
            <small>頒布中の素材パック一覧はこちら。</small>
          </a>
          <Link href="/works/booth-motion-assets">
            <span>動く演出素材の紹介</span>
            <small>制作の考え方と収録内容の例。</small>
          </Link>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="02" title={"シナリオの制作・\n頒布"} />
        <div className="about-copy">
          <p>
            長編キャンペーンシナリオ『夢語りはティータイムのあとで』をBOOTHで頒布しています。本文だけでなく、
            立ち絵・MAP・セッション素材・公式サイトまでを「ひとつの体験」として設計するのが工房の流儀です。
            現在は物理版をゲームマーケット2026秋に向けて制作しています。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/works/yumegatari-teatime">
            <span>夢語りはティータイムのあとで</span>
            <small>代表作の紹介ページ。</small>
          </Link>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="03" title={"立ち絵などの\n受託制作"} />
        <div className="about-copy">
          <p>
            TRPG用の立ち絵を中心に、ご依頼を受けて制作しています。ヒアリング・ラフ確認から清書・差分整理・納品まで対応します。
            ご依頼はX（@KASOkatsumata）のDMにて承っています。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/works/commission-works">
            <span>ご依頼制作の実績</span>
            <small>ご依頼報告と制作の流れ。</small>
          </Link>
          <a href="https://x.com/KASOkatsumata" target="_blank" rel="noreferrer">
            <span>X（DMでご依頼受付）</span>
            <small>@KASOkatsumata</small>
          </a>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="04" title={"制作ツールの\n開発"} />
        <div className="about-copy">
          <p>
            シナリオ執筆・製本ツールをはじめ、TRPGの制作と進行を支えるツールを自分の制作現場から生み出し、
            磨いたものを順次頒布物として公開する準備を進めています。また、大学院の研究として、AIがKPを務める
            エンジンの研究開発も進めています（非公開・内部試験中）。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/tools">
            <span>自作ツール一覧</span>
            <small>製本ツール・リプレイエンジンなど。</small>
          </Link>
          <Link href="/works/ai-kp-yumeti">
            <span>AI-KP 夢ティ専用機（研究開発中・非公開）</span>
            <small>AIがKPを務める、一人でも遊べるTRPGエンジンの研究。</small>
          </Link>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="05" title={"同人作品の\n委託頒布"} />
        <div className="about-copy">
          <p>
            イベント出展の際に、他の作者さんの同人TRPG作品を委託頒布する取り組みを始めています。
            委託をご希望の方は、XのDMからお問い合わせください。条件は個別にご案内します。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/contact">
            <span>お問い合わせ</span>
            <small>連絡先の一覧はこちら。</small>
          </Link>
        </div>
      </section>
    </main>
  );
}
