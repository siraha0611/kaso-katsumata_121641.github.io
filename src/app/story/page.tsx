import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { StoryRibbon } from "@/components/StoryRibbon";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export const metadata = {
  title: "生い立ち",
  description: "勝俣颯太の生い立ち。子ども時代の創作から、アニメーション、TRPG、大学院での研究まで。"
};

type Chapter = {
  id: string;
  year: string;
  title: string;
  body: string[];
  pullQuote?: { text: string; cite: string };
  image?: string;
  imageCaption?: string;
  links?: { href: string; label: string }[];
};

const chapters: Chapter[] = [
  {
    id: "childhood",
    year: "子ども時代",
    title: "空想を、\nことばと\nかたちに",
    body: [
      "昔から、物語を空想することが大好きな子どもでした。頭のなかの妄想をひたすら文章にして、小学4年生のころには**年間読書冊数が150冊**を超え、表彰されたこともあります。同じくらい、絵を描くことにも没頭していました。",
      "中学では小説を書きながら剣道を始め、それは高校まで続きました。高校では生徒会・剣道部・文芸部・動画制作部を兼部し、つくることと向き合う、忙しくも充実した日々を送っていました。"
    ]
  },
  {
    id: "origin",
    year: "2019",
    title: "原点 ―\n「全てを\nエンタテインメントに」",
    body: [
      "高校生のとき、デジタルハリウッド大学のオープンキャンパスで聞いた**「全てをエンタテインメントにして世の中を豊かにしていこう」**という言葉が、進路を決めました。",
      "漠然と好きだった「つくること」に、はじめて芯が通った瞬間でした。"
    ]
  },
  {
    id: "impossible",
    year: "2020",
    title: "はじめてのアニメ\n『impossible』",
    body: [
      "特待生として大学に合格し、最初に取り組んだのが、初めての自主制作アニメ『impossible』でした。",
      "ちょうどコロナ禍。絵も拙く、物語を伝えるのも下手で、何もかもうまくいかない。それでも**2か月をまるごと賭けて作りきった**この一本から、私の創作人生は始まりました。いまでも、いちばん印象に残っている制作です。"
    ],
    links: [{ href: "/works/impossible", label: "『impossible』を見る" }]
  },
  {
    id: "animation",
    year: "2021–2022",
    title: "アニメーションを\n学ぶ",
    body: [
      "大学で作画と演出を学びながら自主制作を続け、デッサン教室に通い、作画TAやインターンも経験しました。手を動かすほど、キャラクターが動き出す喜びにのめり込んでいきました。この時期に**9か月をかけて、2本目の自主制作アニメ『Glenda』**を完成させています。"
    ],
    image: "/assets/gal-2021-01.png",
    imageCaption: "当時のイラストより",
    links: [{ href: "/works/glenda", label: "『Glenda』を見る" }]
  },
  {
    id: "trpg",
    year: "2023",
    title: "TRPGとの出会い",
    body: [
      "きっかけは、ニコニコ動画の「ゆっくり妖夢と本当は怖いクトゥルフ神話TRPG」でした。プレイヤーとの掛け合いと、重厚な物語。自分でもこんな物語を紡ぎたいと思い、クトゥルフ神話TRPGを書きはじめました。",
      "見せる表現とはちがう、その場に居合わせてしまう「体感」。**物語は読むものから、生きるものになりました。**"
    ],
    image: "/assets/gal-2023-01.png",
    imageCaption: "TRPGの立ち絵制作より",
    links: [{ href: "/gallery", label: "立ち絵ギャラリーを見る" }]
  },
  {
    id: "core",
    year: "2024",
    title: "卒業制作\n『-CORE-』",
    body: [
      "和風SFアクションアニメ『-CORE-』を、演出担当として企画・脚本・絵コンテ・背景・編集まで担い、作画担当の合田との2人チーム「Blue Tears」で完成させました。音楽をはじめ、仲間の力も借りた一本です。",
      "2025年度卒業制作展では、**アニメ制作ゼミ最優秀賞**をいただきました。満足したら立ち止まってしまう――その怖さを越えて、走り切った作品です。"
    ],
    image: "/assets/core-flyer-front.png",
    imageCaption: "『-CORE-』公式フライヤー",
    links: [{ href: "/works/core-animation", label: "『-CORE-』の制作工程を見る" }]
  },
  {
    id: "graduate",
    year: "2025–",
    title: "大学院・TRPGへ",
    body: [
      "大学院に進学し、「TRPGの初回体験と物語設計」を研究テーマに据えました。2025年10月からは、**12万文字を超えるオリジナルシナリオ『夢語りはティータイムのあとで』**の制作をはじめ、現在も物理版をゲームマーケットに向けて制作を続けています。",
      "研究テーマと地続きの、大学院での本命の制作です。つくることは、誰かに何かを伝えること。その実感が、研究と制作の両輪になっています。"
    ],
    image: "/assets/yumegatari-title.png",
    imageCaption: "『夢語りはティータイムのあとで』",
    links: [
      { href: "/works/yumegatari-teatime", label: "『夢語りはティータイムのあとで』を見る" },
      { href: "/research", label: "研究の取り組みを見る" }
    ]
  },
  {
    id: "influence",
    year: "影響",
    title: "背中を\n押してくれるもの",
    pullQuote: { text: "生を実感するには、死を想うことだ", cite: "ハイデガー" },
    body: [
      "岡本太郎の言葉には、たびたび勇気をもらいます。「誰かに理解されるものを」と力みすぎたとき、その言葉を聞くと、肩の力がふっと抜けていきます。",
      "そしてこのハイデガーの言葉も、自分の支えです。命について考えているとき、私はいちばん命が燃えている。**私の活動力は、その意識から生まれています。**"
    ]
  },
  {
    id: "future",
    year: "これから",
    title: "感動を、\n届けていく",
    body: [
      "これから私は、多くの人に感動を届けていきたい。私にとっての幸福は、**自分の手で作り出したもので、涙を流してくれる人がいること**です。",
      "そのために、シナリオを発信し、お仕事を通じて、つくり方をもっと学んでいきます。"
    ]
  }
];

function emphasize(text: string) {
  return text
    .split("**")
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
}

export default function StoryPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Story"
        title="生い立ち"
        description="物語を、誰かが体感できるかたちに。ここまでの道のりです。"
      />
      <StoryRibbon items={chapters.map((chapter) => ({ id: chapter.id, label: chapter.year }))} />
      <section className="section compact">
        <div className="about-copy story-copy">
          <p className="smoke-target">
            子どものころの空想から、アニメーション、そしてTRPGまで。かたちは変わっても、やりたいことはいつも「物語を、誰かが体感できるかたちにすること」でした。
          </p>
        </div>
      </section>
      {chapters.map((chapter) => (
        <section className="section compact story-scene" id={chapter.id} key={chapter.id}>
          <header className="story-head">
            <p className="story-era smoke-target">{chapter.year}</p>
            <h2 className="story-heading">
              {chapter.title.split("\n").map((segment) => (
                <span className="title-seg smoke-target" key={segment}>
                  {segment}
                </span>
              ))}
            </h2>
          </header>
          {chapter.pullQuote ? (
            <blockquote className="story-quote smoke-target">
              <p>「{chapter.pullQuote.text}」</p>
              <cite>― {chapter.pullQuote.cite}</cite>
            </blockquote>
          ) : null}
          <div className={chapter.image ? "story-chapter" : undefined}>
            <div className="about-copy story-copy">
              {chapter.body.map((paragraph, index) => (
                <p className="smoke-target" key={index}>
                  {emphasize(paragraph)}
                </p>
              ))}
              {chapter.links?.length ? (
                <p className="story-chapter-link">
                  {chapter.links.map((link) => (
                    <Link className="button" href={link.href} key={link.href}>
                      {link.label} →
                    </Link>
                  ))}
                </p>
              ) : null}
            </div>
            {chapter.image ? (
              <figure className="story-chapter-visual">
                <div className="story-chapter-image">
                  <Image
                    src={assetPath(thumbnailPath(chapter.image))}
                    alt={chapter.imageCaption ?? chapter.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 32vw"
                  />
                </div>
                {chapter.imageCaption ? <figcaption>{chapter.imageCaption}</figcaption> : null}
              </figure>
            ) : null}
          </div>
        </section>
      ))}
      <section className="section compact about-readmore">
        <p>5年間の歩みは、note にも詳しくまとめています。</p>
        <a
          className="button"
          href="https://note.com/061112160922/n/na13f99d47478"
          target="_blank"
          rel="noreferrer"
        >
          5年間の振り返りを読む（note） →
        </a>
      </section>
    </main>
  );
}
