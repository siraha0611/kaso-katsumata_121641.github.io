import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "修了課題研究 | Katsumata Sota Portfolio"
};

const notes = [
  {
    title: "はじめての卓で、PLとKPが気をつけること【初心者編】",
    tag: "初心者向け連載",
    href: "https://note.com/061112160922/n/n3fcc164dbf09"
  },
  {
    title: "「日程合わせ」で気をつけること【日程調整編】",
    tag: "初心者向け連載",
    href: "https://note.com/061112160922/n/n3bfe5063770c"
  },
  {
    title: "愛着の持てる探索者のつくりかた【キャラクター制作編】",
    tag: "初心者向け連載",
    href: "https://note.com/061112160922/n/nb55fc5a65319"
  },
  {
    title: "はじめてゲームを回すときに気をつけること【キーパー編】",
    tag: "初心者向け連載",
    href: "https://note.com/061112160922/n/n62e7c343c592"
  },
  {
    title: "Claude CodeでTRPGココフォリア構築術【自動化・キャラ自動作成編】",
    tag: "AI × TRPG",
    href: "https://note.com/061112160922/n/nbd7b03331132"
  },
  {
    title: "DHU 5年の振り返りと2026年に向けて",
    tag: "背景・自分史",
    href: "https://note.com/061112160922/n/na13f99d47478"
  }
];

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Research"
        title="修了課題研究"
        description="TRPGの“最初の一歩”を、やさしくするための研究。"
      />

      <section className="section compact">
        <div className="about-copy">
          <p>
            大学院の修了課題として、「TRPGの初回体験と、そこへたどり着くまでの動線」をテーマに研究しています。
            TRPGはとても面白い遊びですが、はじめての人にとっては、ルール・準備・場の空気など、入口のハードルが高い。
            その“最初の一歩”を、どう設計すればやさしく届けられるかを探っています。
          </p>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="Approach" title="入口から初回体験までを、地続きに" />
        <div className="about-copy">
          <p>
            「知る」から「遊ぶ」までを途切れさせないために、ふたつの制作物を“入口”と“背骨”として設計しています。
            散らばった情報をひとつの入口にまとめ、そこからブラウザでそのまま「はじめての体験」に踏み出せる――
            この一連の流れそのものを、研究の対象にしています。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/works/taku-with-coc">
            <span>Taku with CoC ― 情報の入口</span>
            <small>散らばったCoCの情報を、ひとつの入口に。</small>
          </Link>
          <Link href="/works/tobira-no-mukou-no-shoujo">
            <span>扉のむこうの少女 Web版 ― 初回体験の背骨</span>
            <small>ブラウザでワンクリック、はじめてのRP体験。</small>
          </Link>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle
          eyebrow="Writing"
          title="つまずきを、ことばでほどく"
          description="動線設計の一環として、Noteで記事を書いています。"
        />
        <div className="about-copy">
          <p>
            制作物だけでなく、はじめての人がつまずきやすいポイントを言葉でほどく記事を、Noteで継続的に書いています。
            日程合わせ、キャラクターづくり、はじめてのキーパー……「ここで迷う」を先回りして、やさしく案内する。
            これも、TRPGを初心者にも届きやすくすることを目指した、動線づくりの一部です。
          </p>
        </div>
        <div className="link-grid contact-links">
          {notes.map((note) => (
            <Link key={note.href} href={note.href} target="_blank" rel="noreferrer">
              <span>{note.title}</span>
              <small>{note.tag}</small>
            </Link>
          ))}
        </div>
        <div className="about-readmore">
          <a className="button" href="https://note.com/061112160922" target="_blank" rel="noreferrer">
            Noteの記事一覧を見る →
          </a>
        </div>
      </section>

      <section className="section compact">
        <SectionTitle eyebrow="As an AI-native Solopreneur" title="ひとりで、作りながら考える" />
        <div className="about-copy">
          <p>
            これらの情報サイト・Webアプリ・記事は、AIを道具に、企画から制作・運用までひとりで回しています。
            必要なものを自分の手で作り、試し、直しながら考える――AIネイティブ・ソロプレナーとしての制作スタイルそのものが、この研究の土台です。
          </p>
        </div>
        <div className="link-grid contact-links">
          <Link href="/works/booth-motion-assets">
            <span>TRPG向け 動く演出素材</span>
            <small>AIとPythonで量産する演出素材。</small>
          </Link>
          <Link href="/works/core-animation">
            <span>-CORE-（卒業制作アニメ）</span>
            <small>映像制作の経験が、体験設計の土台に。</small>
          </Link>
        </div>
      </section>
    </main>
  );
}
