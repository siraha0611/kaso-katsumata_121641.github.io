import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "開発 ― 制作を支える自作ツール",
  description:
    "TRPGシナリオの組版ツール、リプレイ動画の自動組み立てエンジン、Discordの日程調整Bot、NPCを演じるAI botなど、制作のボトルネックを解決するために開発した自作ツール群。",
  openGraph: {
    title: "開発 ― 制作を支える自作ツール",
    description: "制作のボトルネックを、自分の手で道具にして解決する。自作ツール群の紹介。",
    images: [`${siteOrigin}${basePath}/assets/thumbs/tools-binder.jpg`]
  }
};

type Tool = {
  name: string;
  tagline: string;
  body: string[];
  tech: string[];
  image?: string;
  link?: { href: string; label: string };
};

const tools: Tool[] = [
  {
    name: "シナリオ製本ツール\n＆ シナリオエディタv2",
    tagline: "TRPGシナリオ専用の執筆・組版・入稿ツール",
    body: [
      "ブラウザだけで動く単一HTMLの組版ツールです。会話・GMメモ・秘匿情報・技能ロールなどTRPG専用ブロックを備え、B5や文庫判の判型でページを自動分割。印刷入稿用PDF、InDesignに流し込めるICML、章ジャンプと登場キャラクターパネルの付いた閲覧用HTMLを書き出せます。",
      "『夢語りはティータイムのあとで』（228ページ・約15万字）の入稿データはこのツールで制作しました。IME入力とページ再分割の競合など、日本語長文編集ならではの問題を一つずつ潰しながら、執筆用エディタv2とのJSON連携で「書く→組む→出す」を一本の流れにしています。"
    ],
    tech: ["HTML/CSS/JavaScript（単一ファイル）", "contenteditable", "ICML（InDesign連携）"],
    image: "/assets/tools-binder.jpg"
  },
  {
    name: "ノベル式リプレイエンジン",
    tagline: "台本からリプレイ動画の編集データを自動で組み立てる",
    body: [
      "『名前「セリフ」』形式のテキスト台本から、合成音声（AivisSpeech／VOICEVOX）・ノベルゲーム風のメッセージウィンドウ・出目で色が変わるダイス演出・背景の切り替えを自動生成し、Premiere Proへそのまま読み込める編集データ（XML）を組み立てるPythonエンジンです。",
      "リプレイ全17話（合計11.3時間・セリフ5,316行・ダイス演出1,228回）を一括ビルドした実績があります。音声はテキストと声設定のハッシュでキャッシュし、台本を直しても変わった行だけ再生成します。"
    ],
    tech: ["Python", "VOICEVOX / AivisSpeech API", "FCP7 XML（Premiere Pro）", "ffmpeg"],
    image: "/assets/tools-replay.jpg"
  },
  {
    name: "Discord 日程調整Bot",
    tagline: "TRPG卓の日程調整を、Discordの中だけで完結させる",
    body: [
      "候補日の提示、◎⚪︎△✕の4択投票、日程の確定、「30時間シナリオをあと何日で回せるか」の充足計算、1ヶ月前と前日の自動リマインドまでを、Discordのボタン操作だけで完結させるBotです。",
      "サーバーレス構成（Cloudflare Workers + D1 + Cron）で無料枠のみ・PCの電源が入っていなくても通知が届きます。2026年6月から自分の卓の運用で稼働中です。"
    ],
    tech: ["TypeScript", "Cloudflare Workers / D1 / Cron", "Discord HTTP Interactions"]
  },
  {
    name: "メティスAI bot",
    tagline: "セッション中のNPCをAIが演じる、KP支援bot",
    body: [
      "シナリオの中核NPCをClaude APIが演じ、VOICEVOXの音声でDiscordのボイスチャンネルから発話するKP（ゲームマスター）支援botです。KPが進行に集中している間も、NPCとの会話が卓の空気を保ちます。",
      "「物語の真相を絶対に漏らさない」ことを最優先に、システムプロンプトでの禁止・出力後のフィルタ・クライマックス専用モードの明示切替という3層で発言を制御しています。"
    ],
    tech: ["Python", "Claude API", "discord.py", "VOICEVOX"]
  },
  {
    name: "素材量産パイプライン",
    tagline: "BOOTH頒布素材を支える生成エンジン群",
    body: [
      "加算合成で「本物の光」を作る発光レンダラ、判定を盛り上げる文字カットインの生成器、ループ演出の透過スクリーンVFXなどをPythonでエンジン化し、オンラインセッション向け演出素材（9カテゴリ・192種以上）の量産と品質を両立しています。書き出し後のWebP/APNG最適化まで自動化し、配布先ツールの容量制限に収めています。"
    ],
    tech: ["Python", "Pillow / ffmpeg", "WebP / APNG最適化"],
    link: { href: "/works/booth-motion-assets", label: "頒布素材を見る" }
  }
];

export default function ToolsPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Development"
        title={"制作を支える\n自作ツール"}
        description="制作のボトルネックを、自分の手で道具にして解決しています。"
      />
      <section className="section compact">
        <div className="about-copy">
          <p>
            シナリオを書く、本にする、動画にする、卓を回す——制作の途中で手が止まる場所を見つけるたび、その工程ごと道具にしてきました。AIを相棒にした開発も含めて、「企画から実装・運用までひとりで形にする」ための足場です。
          </p>
        </div>
      </section>
      <section className="tools-list">
        {tools.map((tool) => (
          <article className={tool.image ? "tool-card" : "tool-card no-media"} key={tool.name}>
            {tool.image ? (
              <a className="tool-media" href={assetPath(tool.image)} target="_blank" rel="noreferrer">
                <Image
                  src={assetPath(thumbnailPath(tool.image))}
                  alt={tool.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </a>
            ) : null}
            <div className="tool-copy">
              <p className="tool-tagline">{tool.tagline}</p>
              <h2>
                {tool.name.split("\n").map((line) => (
                  <span className="title-seg" key={line}>
                    {line}
                  </span>
                ))}
              </h2>
              {tool.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul className="tool-tech">
                {tool.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {tool.link ? (
                <p className="tool-link">
                  <Link className="button" href={tool.link.href}>
                    {tool.link.label} →
                  </Link>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
