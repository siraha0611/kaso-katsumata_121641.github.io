export type WorkCategory =
  | "TRPGシナリオ"
  | "イラスト"
  | "アニメーション"
  | "Web/企画"
  | "映像/トレーラー";

export type WorkLink = { href: string; label: string };

export type WorkflowStep = {
  title: string;
  text: string;
  image: string;
};

export type WorkSection = {
  title: string;
  body: string[];
};

export type ShowcaseGroup = {
  title: string;
  note?: string;
  images: string[];
};

export type WorkStory = {
  catch?: string;
  body: string[];
  footnote?: string;
};

export type CutStage = {
  label: string;
  image?: string;
  video?: string;
  poster?: string;
};

export type CutProgressCut = {
  cut: string;
  title: string;
  duration?: string;
  stages: CutStage[];
};

export type CutProgress = {
  intro: string;
  script?: { source: string; lines: string[] };
  cuts: CutProgressCut[];
};

export type Work = {
  slug: string;
  title: string;
  /** 詳細ページの見出しで語中改行を避けたい時のフレーズ区切り（省略時はtitleをそのまま表示） */
  titleLines?: string[];
  subtitle: string;
  category: WorkCategory;
  year: string;
  hero: string;
  images: string[];
  galleryNote?: string;
  spoilerNote?: string;
  video?: string;
  youtube?: string;
  excerpt: string;
  concept: string;
  role: string[];
  tools: string[];
  process?: string[];
  story?: WorkStory;
  workflow?: WorkflowStep[];
  cutProgress?: CutProgress;
  sections?: WorkSection[];
  showcase?: ShowcaseGroup[];
  outcome: string;
  links?: WorkLink[];
};

export const categories: ("All" | WorkCategory)[] = [
  "All",
  "TRPGシナリオ",
  "イラスト",
  "アニメーション",
  "Web/企画",
  "映像/トレーラー"
];

export const works: Work[] = [
  {
    slug: "yumegatari-teatime",
    title: "夢語りはティータイムのあとで",
    subtitle: "Dreamtalk After Tea Time",
    category: "TRPGシナリオ",
    year: "2026",
    hero: "/assets/yumegatari-title.png",
    images: [],
    galleryNote: "※一部キャラクターのネタバレを含みます",
    spoilerNote:
      "ネタバレ注意：このページには、NPC立ち絵・スチル・MAPなどの制作物掲載にともない、シナリオ内容の一部ネタバレが含まれます。今後プレイヤーとして遊ぶ予定の方はご注意ください。",
    showcase: [
      {
        title: "公式サイト",
        note: "喫茶アストレアの空気をそのまま持ち込んだトップページと、公開情報と秘匿情報を切り分けたハンドアウトページ。",
        images: [
          "/assets/yumegatari-official-top.jpg",
          "/assets/yumegatari-official-handout.jpg"
        ]
      },
      {
        title: "頒布ビジュアル・ロゴ",
        note: "BOOTHの頒布ページで使用しているトレーラー一式とタイトルロゴ。",
        images: [
          "/assets/yumegatari-title.png",
          "/assets/yumegatari-display-2.png",
          "/assets/yumegatari-display-3.png",
          "/assets/yumegatari-display-4.png",
          "/assets/yumegatari-logo-black.png"
        ]
      },
      {
        title: "NPC立ち絵・スチル",
        note: "立ち絵・スチルはすべて手描き。※一部キャラクターのネタバレを含みます",
        images: [
          "/assets/yumegatari-npc-intro.png",
          "/assets/yumegatari-still-toru.png",
          "/assets/yumegatari-toru.png",
          "/assets/yumeti-komori-normal.png",
          "/assets/yumeti-komori-smile.png",
          "/assets/yumegatari-momoka.png",
          "/assets/yumegatari-haragrim.png",
          "/assets/yumegatari-lulu-human.png",
          "/assets/yumegatari-lulu-cat.png",
          "/assets/yumegatari-haon.png"
        ]
      },
      {
        title: "MAP・情報設計",
        note: "同梱資料全10点より。セレファイス市街図は初期稿→完成稿の変遷、籠城戦MAPはPL用とKP用で情報量を出し分けています。",
        images: [
          "/assets/dreamland-map.png",
          "/assets/yumegatari-map-celephais-early.png",
          "/assets/celephais-map.png",
          "/assets/yumegatari-map-journey.png",
          "/assets/yumegatari-map-moon.png",
          "/assets/yumegatari-map-siege-pl.png",
          "/assets/yumegatari-map-siege-kp.png",
          "/assets/astrea-menu.png",
          "/assets/yumegatari-apron.png"
        ]
      },
      {
        title: "セッション素材(スクリーンパネル)",
        note: "戦闘や進行の状況を画面上で伝えるパネル(全8種のうち4種)。",
        images: [
          "/assets/yumegatari-panel-round.png",
          "/assets/yumegatari-panel-action.png",
          "/assets/yumegatari-panel-knights.png",
          "/assets/yumegatari-panel-carriage.png"
        ]
      },
      {
        title: "背景画像",
        note: "全245枚を章別に制作し、シナリオ順に整理して同梱(画像生成AIを活用)。喫茶アストレアから炎の神殿、セレファイスへの道のり、月へ向かう帆船まで。",
        images: [
          "/assets/yumegatari-bg-astrea.png",
          "/assets/yumegatari-bg-tea.png",
          "/assets/yumegatari-bg-fire-temple.png",
          "/assets/yumegatari-bg-stairs.png",
          "/assets/yumegatari-bg-dream-gate.png",
          "/assets/yumegatari-bg-white-ship.png",
          "/assets/yumegatari-bg-celephais-road.png",
          "/assets/yumegatari-bg-turquoise-temple.png",
          "/assets/yumegatari-bg-palace.png",
          "/assets/yumegatari-bg-mt-aran.png",
          "/assets/yumegatari-bg-golden-ship.png"
        ]
      }
    ],
    excerpt:
      "喫茶店を入口に夢の世界へ進む長編キャンペーンシナリオ。本文200ページ超・プレイ時間約30時間。シナリオからロゴ・NPC立ち絵・MAP・セッション素材まで一人で制作。",
    concept:
      "現代の喫茶店「喫茶アストレア」の店員たちが、夢の世界ドリームランドへ――日常から夢へ移る導線を、紅茶の色、白いロゴ、手描きの線、幻想的な地図表現でまとめた全4章のキャンペーンシナリオです。4人のプレイヤーそれぞれに秘匿ハンドアウトを用意し、情報の非対称性が物語を動かします。喫茶店の住人から夢の世界の存在まで、NPCの立ち絵はすべて手描きで、役割と関係性が伝わるように制作しています。",
    role: ["シナリオ執筆", "ロゴ", "NPC立ち絵", "MAP・情報設計", "頒布画像", "セッション素材"],
    tools: ["CLIP STUDIO PAINT", "Photoshop", "Illustrator", "生成AI(資料整理・校正)"],
    story: {
      catch: "君たちは選ばなくてはならない。「夢」か「現実」か",
      body: [
        "都心の片隅にある喫茶アストレア。",
        "穏やかなクラシックと紅茶の香りに包まれた小さな店だ。",
        "店主・神応寺 透の元には、",
        "夢にまつわる奇妙な依頼ばかりが届く。",
        "あなたたちは喫茶店で働く店員だ。",
        "そんな君たちに公安警察から一件の協力依頼が届く。",
        "人が眠ったまま目を覚まさない〈永眠事件〉",
        "原因不明なこの事件は、夢の世界が関係しているらしい。",
        "あなたたちは夢の世界への適性を持つ",
        "幻夢境ドリームランドへ向かい、この事件の原因を",
        "突き止めなければならない。"
      ],
      footnote: "全4章キャンペーン ― I. 妖森ズーグ ／ II. 青都セレファイス ／ III. 禁断レヴェリー ／ IV. 領域エクリプス"
    },
    workflow: [
      {
        title: "コンセプト設計",
        text: "AIは使わず、「喫茶店から始まり、夢の世界へ渡る物語を」という個人のビジョンから出発。タイトルロゴとキービジュアルで作品の第一印象を固めました。",
        image: "/assets/yumegatari-title.png"
      },
      {
        title: "世界観調査・資料整理",
        text: "舞台となる夢の世界の原典資料の整理にAIを活用。原典と照合しながら、旅の経路や土地の関係を固めていきました。",
        image: "/assets/dreamland-map.png"
      },
      {
        title: "構造設計",
        text: "全4章の構成と4人分の秘匿ハンドアウトを設計。ハンドアウト間の情報矛盾がないかの確認に、限定的にAIを使っています。",
        image: "/assets/celephais-map.png"
      },
      {
        title: "本文執筆・ビジュアル制作",
        text: "物語の核となる本文は自分の言葉で執筆。NPCの立ち絵とスチルはすべて手描きで、200ページ超の本文とあわせて作り込みました。",
        image: "/assets/yumegatari-toru.png"
      },
      {
        title: "校正・仕上げ",
        text: "誤字脱字や表記ゆれの検出にAIを活用（章をまたいだ旧字・新字の混在検出など）。頒布画像とセッション用素材を整えて公開しました。",
        image: "/assets/yumegatari-display-2.png"
      }
    ],
    sections: [
      {
        title: "MAP・情報設計",
        body: [
          "約30時間の長編を迷わず遊べるよう、プレイヤーが参照する情報と、進行側が扱う情報を分けて資料を設計しています。同じ籠城戦のMAPでもPL用とKP用で書き込む情報量を変え、市街図は初期稿から完成稿へ検証しながら更新。夢の世界全体の旅MAPからメニュー表まで、計10点の資料に落とし込みました。"
        ]
      },
      {
        title: "AIとの分業",
        body: [
          "制作期間は大学院と並行して約8ヶ月。背景画像(全245枚)の生成、資料整理・矛盾チェック・校正はAIに任せ、物語の核となる文章とキャラクターの立ち絵・スチルはすべて自分の手で作っています。制作の裏側と分業の考え方は、noteの2記事で公開しています。"
        ]
      },
      {
        title: "公式サイト ― シナリオの入口をWebで設計する",
        body: [
          "2026年7月には、シナリオの「入口」となる公式サイトを公開しました。あらすじ・概要・登場人物・用語集・HO診断からKP向け情報までを1つのサイトにまとめ、遊ぶ前のプレイヤーが安心して読める範囲だけを載せています。",
          "秘匿ハンドアウト4本は、静的サイトのままAES-256で暗号化したパスワード保護ページとして実装。KPが担当プレイヤーにだけ鍵を渡す——というTRPGの秘匿配布の運用を、サーバーなしのGitHub Pages上で成立させています。"
        ]
      }
    ],
    outcome:
      "BOOTHで頒布中。本文200ページ超に加えて、背景画像245枚・NPC立ち絵・MAP資料10点・スクリーンパネル8種・KP演出用の動く素材8シーンまで、総計400ファイル超の素材セットを一人で一貫して組み立てました。",
    links: [
      { href: "https://booth.pm/ja/items/8045336", label: "BOOTHで見る" },
      {
        href: "https://siraha0611.github.io/yumegatari-official-site/",
        label: "公式サイトを見る"
      },
      {
        href: "https://note.com/061112160922/n/n210c3a54dc48",
        label: "note: AIで作ってみた話（実録）"
      },
      {
        href: "https://note.com/061112160922/n/n0d365796f563",
        label: "note: AIワークフロー執筆編"
      }
    ]
  },
  {
    slug: "ai-kp-yumeti",
    title: "AI-KP 夢ティ専用機",
    titleLines: ["AI-KP", "夢ティ専用機"],
    subtitle: "AIがキーパーを務める、一人でも遊べるTRPGエンジン（研究開発中）",
    category: "Web/企画",
    year: "2026",
    hero: "/assets/aikp-session.png",
    images: [
      "/assets/aikp-session.png",
      "/assets/aikp-builder.png"
    ],
    galleryNote:
      "※ツール本体は非公開です（掲載はスクリーンショットによる紹介のみ）。スクリーンショットは、シナリオのネタバレを含まない序盤の公開範囲のみを掲載しています。",
    excerpt:
      "自作の長編シナリオ『夢語りはティータイムのあとで』を、AIがKP（進行役）を務めて一人でも遊べるようにする研究開発中のエンジン。シナリオの構造化からプレイ画面まで、体験をまるごと設計・実装しています。",
    concept:
      "TRPGの魅力は、自由な会話で物語が無限に広がること。いっぽうで、人が揃わないと始められないという入口の制約があります。「一人の夜にも開かれた遊びへ」――自由な会話と、一人でいつでも遊べる手軽さを両立する、TRPGとコンピュータRPGの複合型の遊びを目指しています。AIに物語の全権を委ねるのではなく、シナリオを構造化したデータベースを進行の正本に置き、AIは語りと応対に専念させる設計です。権利面に配慮し、一般公開はせず、非公開の内部試験として検証を進めています。",
    role: ["企画・設計", "シナリオ構造化", "プロンプト設計", "実装（AI協働）", "実卓での検証"],
    tools: ["JavaScript（ブラウザ完結の静的アプリ）", "Python（構造化・検証）", "Claude API", "生成AI（実装協働）"],
    process: [
      "シナリオ本文（11万字超）をPythonで構造化し、109シーン・NPC18体・正準事実35件のデータベースに変換。全要素にネタバレ度合いのレベルを付与",
      "データベースを進行の正本に、AIキーパーの応答規則（描写の粒度・手掛かりの出し方・先回りの禁止など）を設計",
      "ブラウザだけで動くアプリとして実装し、自分の卓での実プレイからKPの運用規則を改訂し続ける"
    ],
    sections: [
      {
        title: "ネタバレを、構造から防ぐ",
        body: [
          "秘匿ハンドアウトと真相のあるシナリオをAIに進行させるうえで、最重要の設計はネタバレ防止です。全シーン・全事実にネタバレ度合いのレベルを付け、その場面で明かしてよい情報だけをAIに渡します。「漏らさないよう頑張らせる」のではなく、禁止情報をそもそも渡さないことで、漏洩のリスクを構造の側から抑える方針です。"
        ]
      },
      {
        title: "卓の体験を、まるごと実装する",
        body: [
          "探索者の自動生成（能力値ロール・役柄別の技能プリセット・名前の自動生成）、判定ダイスはAIに振らせずプログラム側で処理、背景約300枚を切り替えるノベルゲーム風の画面、台詞のパースによる立ち絵・ネームプレート表示、1〜4人の人数調整、AIが同行キャラクターを担当するソロ支援まで、「卓を囲む体験」を構成する要素を一つずつ実装しています。",
          "NPCとの会話には、本文の台詞166行から起こした16体分の「声紋プロファイル」（一人称・口癖・話してはいけないこと・秘密の隠し方）を用意。物語の外でお気に入りのNPCと話せる、卓の外のお楽しみも作りました。"
        ]
      },
      {
        title: "実卓のフィードバックで育てる",
        body: [
          "自分の卓で実際に遊びながら、「キャラクターの台詞にダイスや判定などゲーム用語を入れない」「展開を先回りしない」「手掛かりは結論ではなく一次情報のまま提示する」といったKPの運用規則を一つずつ改訂しています。大規模な戦闘パートは、ルールを実装した専用シミュレーターで1,000戦単位の一括検証を行い、勝率や敗因の分布からバランスを実測しました。"
        ]
      }
    ],
    outcome:
      "権利面の確認を経てから公開する方針のため、ツール本体は一般公開しておらず、現在は非公開の内部試験として検証中です。大学院修了課題の研究テーマ「TRPGの初回体験・参入障壁の低減」の中核実装として、研究とあわせて開発を進めています。",
    links: [
      {
        href: "/works/yumegatari-teatime",
        label: "シナリオ本体『夢語りはティータイムのあとで』を見る"
      }
    ]
  },
  {
    slug: "standing-archive",
    title: "立ち絵アーカイブ",
    subtitle: "TRPGキャラクター制作集",
    category: "イラスト",
    year: "2023-2026",
    hero: "/assets/stand-archive-1.png",
    images: [
      "/assets/stand-archive-1.png",
      "/assets/stand-archive-2.png",
      "/assets/stand-gallery-1.png",
      "/assets/stand-gallery-2.png",
      "/assets/stand-gallery-3.png",
      "/assets/stand-gallery-4.png",
      "/assets/stand-komori.png",
      "/assets/stand-ran.png",
      "/assets/stand-barara.png",
      "/assets/stand-ally.png",
      "/assets/stand-garena.png",
      "/assets/stand-tanza.png",
      "/assets/stand-rengetsu.png",
      "/assets/stand-drite.png",
      "/assets/stand-renka-display.png",
      "/assets/stand-levaia.png",
      "/assets/stand-arito.png",
      "/assets/stand-sharo.png",
      "/assets/stand-naname.png",
      "/assets/stand-mikami.png",
      "/assets/stand-renka.png",
      "/assets/stand-clarence.png",
      "/assets/stand-nagahata.png",
      "/assets/stand-rasho.png",
      "/assets/stand-sekiguchi.png",
      "/assets/stand-sakahara.png",
      "/assets/stand-latina.png",
      "/assets/stand-asukai.png",
      "/assets/stand-rio.png",
      "/assets/stand-kotooka.png",
      "/assets/stand-topaz.png",
      "/assets/stand-shinonome.png",
      "/assets/stand-shiraha.png",
      "/assets/stand-faus.png",
      "/assets/stand-shinonome-2.png",
      "/assets/stand-rubera.png",
      "/assets/stand-tsugumo.png",
      "/assets/stand-rasho-2.png",
      "/assets/stand-shiraishi.png",
      "/assets/stand-hotaru.png",
      "/assets/stand-onikai.png",
      "/assets/stand-yamanami.png",
      "/assets/stand-brat.png",
      "/assets/hdd-shinonome-kill.png",
      "/assets/hdd-shinonome-normal.png",
      "/assets/hdd-naname-henrin.png",
      "/assets/hdd-mutsuki-smile.png",
      "/assets/hdd-yamanami-isetsu.png",
      "/assets/hdd-rio-normal.png",
      "/assets/hdd-rio-part2.png",
      "/assets/hdd-tamemaru.png",
      "/assets/hdd-renka-hanabie.png",
      "/assets/hdd-sayo.png",
      "/assets/hdd-satoshi.png",
      "/assets/hdd-garena-chair.png",
      "/assets/hdd-ceres.png",
      "/assets/hdd-ranba.png",
      "/assets/hdd-kotooka-rina.png",
      "/assets/hdd-shiraishi-normal.png",
      "/assets/hdd-shiraishi-shy.png",
      "/assets/hdd-akisumi-human.png",
      "/assets/hdd-akisumi-god.png",
      "/assets/hdd-shiraha-normal.png",
      "/assets/hdd-shiraha-smile.png",
      "/assets/hdd-toraiwa.png",
      "/assets/hdd-hino.png",
      "/assets/hdd-hetamite.png"
    ],
    excerpt:
      "TRPG用に制作した探索者・NPCの立ち絵集。衣装、体格、表情、ポーズの幅をまとめています。",
    concept:
      "キャラクターの性格や所属が、全身のシルエット・色・小物で伝わることを重視しています。",
    role: ["立ち絵", "衣装設計", "表情差分", "キャラクター解釈"],
    tools: ["CLIP STUDIO PAINT", "Photoshop"],
    process: [
      "シナリオやHOからキャラクターの印象を抽出",
      "ポーズ、服の重心、髪や装飾の動きで性格を調整",
      "画面上で並べた時の視認性を確認"
    ],
    outcome:
      "複数の世界観に合わせて、キャラクター性の異なる立ち絵を継続的に制作しています。"
  },
  {
    slug: "core-animation",
    title: "-CORE-",
    subtitle: "卒業制作アニメーション ／ 2025年度卒業制作展 アニメ制作ゼミ最優秀賞",
    category: "アニメーション",
    year: "2024",
    hero: "/assets/core-flyer-front.png",
    images: [
      "/assets/core-flyer-front.png",
      "/assets/core-yato-design.png",
      "/assets/core-doctor-design.png",
      "/assets/core-yato-sword.png",
      "/assets/core-imageboard.jpg",
      "/assets/core-lo-frame.png",
      "/assets/core-ekonte-page14.jpg",
      "/assets/core-ekonte-page16.jpg",
      "/assets/core-shot-081.png",
      "/assets/core-shot-041.png",
      "/assets/research.png"
    ],
    youtube: "https://www.youtube.com/embed/Go7ThQ1DOP4",
    links: [
      {
        href: "https://youtu.be/Go7ThQ1DOP4",
        label: "本編を見る"
      },
      {
        href: "https://youtu.be/0WRfNMmreBY",
        label: "Vコンテ版を見る（絵コンテの映像化）"
      },
      {
        href: "/storyboard",
        label: "絵コンテ全39ページを見る"
      }
    ],
    excerpt:
      "和風SFアクションを軸にした卒業制作アニメーション。演出担当として企画・絵コンテ・背景・編集を手がけ、作画担当の合田との2人チームで完成。2025年度卒業制作展でアニメ制作ゼミ最優秀賞を受賞しました。",
    concept:
      "義体、刀、赤い空間、都市構造をモチーフに、静かな緊張感と斬撃の瞬間を見せる和風SFアクションとして設計しました。「断ち斬るは己の宿命」――主人公ヤトの覚悟を軸に、世界観・キャラクター・映像を一本に束ねています。",
    role: ["企画・監督", "脚本", "設定画", "絵コンテ／演出", "レイアウト", "背景美術", "編集"],
    sections: [
      {
        title: "役割分担 ― 2人チーム「Blue Tears」",
        body: [
          "『-CORE-』は、演出担当の勝俣と作画担当の合田、2人チーム「Blue Tears」での制作です。勝俣は企画・脚本・設定画・絵コンテ・レイアウト・背景美術・編集を主導し、合田はキャラクターデザイン・原画を主導。動画と撮影は合田を主導に2人で分担し、仕上げも分け合いました。",
          "設計（演出）と作画それぞれに主導権を置くことで、80カット超の映像を2人でも破綻なく完成まで運べる体制にしています。"
        ]
      }
    ],
    tools: ["CLIP STUDIO PAINT", "After Effects", "Premiere Pro"],
    workflow: [
      {
        title: "企画・世界観",
        text: "企画書・脚本・イメージボードで、作品の舞台、キャラクター、画面の方向性を固める段階。",
        image: "/assets/core-imageboard.jpg"
      },
      {
        title: "脚本",
        text: "『百機夜行』の題で脚本を第5稿まで執筆。シーンごとの画とアクションを言葉で固定し、以降の全工程の設計図にする。",
        image: "/assets/core-script-page.jpg"
      },
      {
        title: "キャラクター設定",
        text: "キャラクターデザインは作画担当の合田が主導。勝俣は設定画として三面図や細部設定を作り、作画時に迷わない基準を作成。",
        image: "/assets/core-yato-turnaround.png"
      },
      {
        title: "作業表・進行管理",
        text: "世界観、イメージボード、舞台設定など、作業を分けて進行管理。",
        image: "/assets/core-workflow-world.png"
      },
      {
        title: "絵コンテ",
        text: "カット番号・カメラ・秒数（3+12＝3秒12コマ）まで指定しながら、80カット超を1コマずつ紙で設計。画面の流れはここで決まる。",
        image: "/assets/core-ekonte-page14.jpg"
      },
      {
        title: "Vコンテ",
        text: "絵コンテをつないで映像化し、尺とテンポを検証。音と合わせて編集を重ね、完成形の設計図を先に作る。",
        image: "/assets/core-vconte-still.jpg"
      },
      {
        title: "レイアウト（LO）",
        text: "カメラと芝居を原寸で設計する工程。セル（キャラ）とBOOK（前景）を色分けし、画面の重なりまで指定する。",
        image: "/assets/core-cut14-lo.jpg"
      },
      {
        title: "作画・仕上げ（セル）",
        text: "原画・動画は作画担当の合田が主導、仕上げは2人で分担。LOをもとに動きを作画し、色を塗って透過セルに。カットごとにA・Bなどレイヤー単位で書き出し、撮影に渡す。",
        image: "/assets/core-cut16-cel.jpg"
      },
      {
        title: "背景美術",
        text: "LOに合わせて1カットずつ背景を描き起こす。提灯の明かりなど、光まで含めて夜の街の空気を作る。",
        image: "/assets/core-cut14-bgart.jpg"
      },
      {
        title: "撮影・編集",
        text: "撮影は合田を主導に2人で分担し、編集は勝俣が担当。セル・背景・エフェクトを合成して画面を完成させ、全カットをつないで一本の映像に。風や光のゆらぎもここで足す。",
        image: "/assets/core-cut14-final.jpg"
      }
    ],
    cutProgress: {
      intro:
        "映像は、同じカットが工程ごとに姿を変えながら、少しずつ完成に近づいていきます。ここでは中盤、ヤトとHAKASEが対峙してから斬撃までの連続4カット（C014〜C017）を例に、絵コンテから完成画面までの積み上がりをそのまま並べました。",
      script: {
        source: "脚本 第5稿（企画時タイトル『百機夜行』）― 岩永町・中央商店町入り口（夜）",
        lines: [
          "破壊される町の扉。吹き抜ける粉塵。",
          "道に着地するHAKASE。土煙を凝視。",
          "砂埃から徐々に現れるHAKASE。",
          "対峙するヤトとHAKASE。",
          "ヤト、抜刀。HAKASEに切り掛かる。"
        ]
      },
      cuts: [
        {
          cut: "C014",
          title: "対面するHAKASEとヤト",
          duration: "3+12",
          stages: [
            { label: "絵コンテ", image: "/assets/core-cut14-board.jpg" },
            { label: "レイアウト", image: "/assets/core-cut14-lo.jpg" },
            { label: "仕上げ（セル）", image: "/assets/core-cut14-cel.jpg" },
            { label: "背景美術", image: "/assets/core-cut14-bgart.jpg" },
            { label: "撮影・完成", video: "/assets/video/core-cut14.mp4", poster: "/assets/core-cut14-poster.jpg" }
          ]
        },
        {
          cut: "C015",
          title: "抜刀の構えをとるヤト",
          duration: "3+0",
          stages: [
            { label: "絵コンテ", image: "/assets/core-cut15-board.jpg" },
            { label: "レイアウト", image: "/assets/core-cut15-lo.jpg" },
            { label: "仕上げ（セル）", image: "/assets/core-cut15-cel.jpg" },
            { label: "背景美術", image: "/assets/core-cut15-bgart.jpg" },
            { label: "撮影・完成", video: "/assets/video/core-cut15.mp4", poster: "/assets/core-cut15-poster.jpg" }
          ]
        },
        {
          cut: "C016",
          title: "風が吹き、抜刀",
          duration: "3+0",
          stages: [
            { label: "絵コンテ", image: "/assets/core-cut16-board.jpg" },
            { label: "レイアウト", image: "/assets/core-cut16-lo.jpg" },
            { label: "レイアウト（動画）", video: "/assets/video/core-cut16-lo.mp4", poster: "/assets/core-cut16-lo-poster.jpg" },
            { label: "仕上げ（セル）", image: "/assets/core-cut16-cel.jpg" },
            { label: "背景美術", image: "/assets/core-cut16-bgart.jpg" },
            { label: "撮影・完成", video: "/assets/video/core-cut16.mp4", poster: "/assets/core-cut16-poster.jpg" }
          ]
        },
        {
          cut: "C017",
          title: "斬撃の軌跡",
          duration: "1+0",
          stages: [
            { label: "絵コンテ", image: "/assets/core-cut17-board.jpg" },
            { label: "レイアウト", image: "/assets/core-cut17-lo.jpg" },
            { label: "仕上げ（セル・エフェクト）", image: "/assets/core-cut17-cel.jpg" },
            { label: "背景美術", image: "/assets/core-cut17-bgart.jpg" },
            { label: "撮影・完成", video: "/assets/video/core-cut17.mp4", poster: "/assets/core-cut17-poster.jpg" }
          ]
        }
      ]
    },
    outcome:
      "約1年半をかけた集大成。2025年度卒業制作展でアニメ制作ゼミ最優秀賞を受賞しました。演出担当として企画から編集までを貫き、作画担当の合田、音楽の悠ぺぇさんと作り上げた、仲間との一本です。"
  },
  {
    slug: "commission-works",
    title: "お依頼いただいたお仕事",
    subtitle: "立ち絵のご依頼制作 ― ヒアリングから納品まで",
    category: "イラスト",
    year: "2026",
    hero: "/assets/commission-work-1-chiri.png",
    images: [
      "/assets/commission-work-1-chiri.png",
      "/assets/commission-work-2-amano.png",
      "/assets/commission-work-3-rinno.png",
      "/assets/commission-work-4-seitero1.png",
      "/assets/commission-work-5-seitero2.png",
      "/assets/standing-commission.png",
      "/assets/commission-chiri.png",
      "/assets/commission-amano.png"
    ],
    excerpt:
      "ご依頼を受けて制作した立ち絵のお仕事です。ヒアリング・ラフ確認から清書・差分整理・納品まで対応しています。",
    concept:
      "依頼者のキャラクター像を第一に、衣装・表情・ポーズを一点ずつ調整して制作しています。ラフ段階で大きな印象をすり合わせ、セッション画面でも見やすい形に整えて、用途に合わせたデータでお渡ししています。",
    role: ["ヒアリング", "ラフ", "立ち絵制作", "清書", "差分作成", "納品データ整理"],
    tools: ["CLIP STUDIO PAINT", "Photoshop"],
    workflow: [
      {
        title: "ヒアリング・ラフ",
        text: "ご依頼内容からキャラクターの性格・衣装・色・ポーズを整理し、ラフの段階で大きな印象をすり合わせます。",
        image: "/assets/commission-rinno-rough.jpg"
      },
      {
        title: "線画",
        text: "確定したラフをもとに線画を起こし、髪や装飾の流れ、シルエットの見え方を整えます。",
        image: "/assets/commission-rinno-line.jpg"
      },
      {
        title: "仕上げ・納品",
        text: "着彩・清書と差分を制作し、用途に合わせた形式(透過PNG・確認用画像など)で納品します。",
        image: "/assets/commission-rinno-finish.png"
      }
    ],
    outcome:
      "複数のご依頼を制作し、キャラクターの魅力と実際の使用場面を両立した立ち絵をお届けしています。"
  },
  {
    slug: "tobira-no-mukou-no-shoujo",
    title: "扉のむこうの少女 Web版",
    subtitle: "ブラウザで遊べるTRPG入門体験",
    category: "Web/企画",
    year: "2026",
    hero: "/assets/tobira-title.png",
    images: [
      "/assets/tobira-title.png",
      "/assets/tobira-intro-rp.png",
      "/assets/tobira-intro-safe.png"
    ],
    links: [
      {
        href: "https://tobira-no-mukou-no-shoujo-web.anb14625siraha.workers.dev/",
        label: "遊んでみる"
      }
    ],
    excerpt:
      "ブラウザでワンクリック。「RPって、なに？」から始める、TRPGがはじめての人のための一人用ノベル体験。",
    concept:
      "TRPGの最初のハードルである「ロールプレイ」を、“上手に演じる”ことではなく“あなたのまま、物語の中の誰かと言葉を交わす”体験として捉え直した作品です。こわい演出を入れず、所要15〜20分で物語に触れられる入口として設計しました。大学院の修了課題で取り組む「初回体験の設計」を形にしたプロトタイプです。",
    role: ["企画", "体験設計", "シナリオ・ライティング", "UIデザイン", "実装"],
    tools: ["Cloudflare Workers", "TypeScript", "生成AI"],
    process: [
      "「演じるのが怖い」という不安を分解し、RPって何か→失敗はない→扉の前に立つ、の3ステップ導入を設計",
      "何を話しても物語が続くよう、相手の応答と「記憶を呼びさます」演出を組み立て",
      "インストール不要・ワンクリックで遊べるよう、Webアプリとして公開"
    ],
    outcome:
      "はじめての人が、自分の言葉のまま物語に入れる無料のWeb体験として公開しています。"
  },
  {
    slug: "taku-with-coc",
    title: "Taku with CoC",
    subtitle: "クトゥルフ神話TRPG 情報ポータル",
    category: "Web/企画",
    year: "2026",
    hero: "/assets/taku-slide-1.png",
    images: [
      "/assets/taku-slide-1.png",
      "/assets/taku-slide-2.png",
      "/assets/taku-slide-3.png",
      "/assets/taku-slide-4.png"
    ],
    links: [
      {
        href: "https://takuwith-coc.com/",
        label: "サイトを見る"
      }
    ],
    excerpt:
      "散らばったクトゥルフ神話TRPG(CoC)の情報を、ひとつの入口に。新作・公式・コラボ・大型イベントを一次ソースつきで集約した情報ポータル。",
    concept:
      "「卓を囲む前の情報集め」をひとつの入口にまとめることをテーマにした情報ポータルです。①散らばった情報を集める（新作・公式・コラボ・イベント）、②遊びを支える道具（ダイス判定・用語集・カレンダー購読）、③はじめての人にやさしい入口、の3つを柱に、はじめての人にもわかる順番で並べ直しています。",
    role: ["企画", "情報設計", "UIデザイン", "編集・運用", "実装"],
    tools: ["Next.js", "microCMS", "Vercel", "TypeScript"],
    process: [
      "散らばった情報(新作・公式・コラボ・イベント)を一次ソースつきで集約し、トップのクイックアクセスとして再構成",
      "ブラウザだけで使えるダイス判定ツール・用語集・カレンダー購読など、遊びを支える道具を実装",
      "「RPって、なに？」から始まる導入や初心者ガイドなど、はじめての人にやさしい入口を用意"
    ],
    outcome:
      "本番公開し、クトゥルフ神話TRPGの情報を継続的に届ける拠点として運用しています。"
  },
  {
    slug: "booth-motion-assets",
    title: "TRPG向け 動く演出素材",
    subtitle: "背景・カットイン・エフェクト素材集",
    category: "映像/トレーラー",
    year: "2026",
    hero: "/assets/booth-pack-cover.png",
    images: [
      "/assets/booth-pack-cover.png",
      "/assets/booth-pack-all192.png",
      "/assets/booth-bg-weather.png",
      "/assets/booth-cutin.png",
      "/assets/booth-vfx-grid.png",
      "/assets/booth-vfx-beforeafter.png"
    ],
    links: [
      {
        href: "https://kasokatsumata.booth.pm/",
        label: "BOOTHで見る"
      }
    ],
    excerpt:
      "オンラインセッション(ココフォリア等)で使う、動く背景・カットイン・戦闘エフェクトなどの演出素材。",
    concept:
      "セッション画面に“動き”を足して、その場の空気を作る演出素材です。全画面の天候背景、判定を盛り上げるカットイン、魔法・戦闘のエフェクトまで、用途別にまとめたパックとして制作しています。制作には画像生成AIとPythonによる自動生成を取り入れ、量産と品質の両立を図っています。",
    role: ["企画", "AI画像生成", "演出素材制作", "画面設計", "パッケージング"],
    tools: ["生成AI", "Python(自動生成)", "After Effects", "Photoshop"],
    process: [
      "セッションで欲しくなる場面(天候・登場・戦闘・感情)を洗い出し、ジャンル別に素材を設計",
      "発光や合成を作り込み、ループしても破綻しない“本物の光”の見え方に調整",
      "オンラインセッションツールで使いやすいよう、軽量化して配布形式に整理"
    ],
    showcase: [
      {
        title: "演出素材パック",
        note: "全画面の天候背景・カットイン・戦闘エフェクトなど、9カテゴリ・全192種。BOOTHで頒布中です。上段は実際の動きのプレビュー：天候背景6点（雨・吹雪・星空・水面の光・火の粉・雷雨。頒布版はフルHDのループ素材）と、判定カットイン3点（クリティカル・成功・ファンブル。10ジャンル×4判定の新シリーズとして順次公開の準備中）です。",
        images: [
          "/assets/bgweather-motion-rain.webp",
          "/assets/bgweather-motion-blizzard.webp",
          "/assets/bgweather-motion-starry.webp",
          "/assets/bgweather-motion-caustics.webp",
          "/assets/bgweather-motion-embers.webp",
          "/assets/bgweather-motion-storm.webp",
          "/assets/cutin-motion-fire-critical.webp",
          "/assets/cutin-motion-luxe-success.webp",
          "/assets/cutin-motion-horror-fumble.webp",
          "/assets/booth-pack-cover.png",
          "/assets/booth-pack-all192.png",
          "/assets/booth-bg-weather.png",
          "/assets/booth-cutin.png",
          "/assets/booth-vfx-grid.png",
          "/assets/booth-vfx-beforeafter.png"
        ]
      },
      {
        title: "動く装飾・テーマ別シリーズ",
        note: "盤面に置くだけで卓の空気を作る、白/黒線画で統一した透過APNGの装飾シリーズ。夏祭り・和風幽玄・海辺・クリスマス・魔導儀式・酒場・ダンジョン・現代都市・西洋ホラー・喫茶の全10テーマ・計201種を制作し、順次公開の準備を進めています。上段6点は実際の動きのプレビューです（泳ぐ金魚・狐火・魔法陣・松明・ティーポット・波打ち際）。",
        images: [
          "/assets/decor-motion-kingyo.webp",
          "/assets/decor-motion-kitsunebi.webp",
          "/assets/decor-motion-magiccircle.webp",
          "/assets/decor-motion-torch.webp",
          "/assets/decor-motion-teapot.webp",
          "/assets/decor-motion-nagisa.webp",
          "/assets/decor-festival-hero.jpg",
          "/assets/decor-festival-contents.jpg",
          "/assets/decor-wafu-contents.jpg",
          "/assets/decor-umi-contents.jpg",
          "/assets/decor-xmas-contents.jpg",
          "/assets/decor-ritual-contents.jpg"
        ]
      }
    ],
    outcome:
      "9カテゴリ・全192種の演出素材パックをBOOTHで頒布中。さらにテーマ別の動く装飾シリーズ全10テーマ・計201種を制作し、順次公開に向けて準備しています。いずれもAIを活用して制作した素材です。"
  },
  {
    slug: "mythos-scene-pack",
    title: "クトゥルフ顕現 7シーン動画素材集",
    subtitle: "神話生物動画シリーズ Vol.1 ― ココフォリア・配信対応",
    category: "映像/トレーラー",
    year: "2026",
    hero: "/assets/mythos-pack-cover.jpg",
    images: [
      "/assets/mythos-scene-01.webp",
      "/assets/mythos-scene-02.webp",
      "/assets/mythos-scene-03.webp",
      "/assets/mythos-scene-04.webp",
      "/assets/mythos-scene-05.webp",
      "/assets/mythos-scene-06.webp",
      "/assets/mythos-scene-07.webp",
      "/assets/mythos-pack-cover.jpg"
    ],
    galleryNote:
      "※各シーンはループ再生用に再圧縮したプレビューです。頒布版はより高解像度のWebP/MP4を同梱しています。",
    links: [
      {
        href: "https://kasokatsumata.booth.pm/items/8422928",
        label: "BOOTHで見る（¥500）"
      }
    ],
    excerpt:
      "クトゥルフの「顕現」を、序章の夢から遭遇・戦闘・エピローグの余韻まで7シーンで網羅した動画素材集。1神格をシナリオ全工程で使い回せる構成です。",
    concept:
      "KPがセッションで本当に使う場面から逆算し、顕現2種・夢・遠景目撃・SANチェック用クローズアップ・触手襲撃・沈降の7シーンを1パックにしました。ココフォリアの容量制限(5MB)に収めたWebPと高画質MP4・静止画ポスターの2層構成で、オンラインセッションでも配信でもそのまま使えます。画像生成AIとKlingによるImage-to-Videoを軸にした、AI映像パイプラインの実践作です。",
    role: ["企画", "プロンプト設計", "AI画像・動画生成", "画質最適化", "パッケージング"],
    tools: ["画像生成AI", "Kling 3.0 Pro（Image-to-Video）", "ffmpeg / WebP"],
    workflow: [
      {
        title: "両端フレーム設計",
        text: "シーンの始まり(First)と終わり(Last)の2枚を画像生成AIで作り込み、動画の画作りを先に固定する。統一画風のプロンプトテンプレを全シーンで共有。",
        image: "/assets/mythos-first-frame.jpg"
      },
      {
        title: "Image-to-Video生成",
        text: "First+Lastの両端フレーム固定でKling 3.0 Proに動画化させ、狙ったカメラの動きと顕現の芝居に収束させる。",
        image: "/assets/mythos-last-frame.jpg"
      },
      {
        title: "2層パッケージ化",
        text: "ココフォリア用に5MB以内へWebP最適化(再生1回→最終フレーム停止)、配信・動画編集用に高画質MP4と静止画ポスターを同梱して頒布形式に整える。",
        image: "/assets/mythos-pack-cover.jpg"
      }
    ],
    outcome:
      "全7シーンをBOOTHで¥500で頒布中。神話生物シリーズの第1弾として、反応を見ながら次の神格へ展開していきます。"
  },
  {
    slug: "glenda",
    title: "Glenda／グレンダ",
    subtitle: "自主制作アニメーション ― 大学2〜3年・9か月の個人制作",
    category: "アニメーション",
    year: "2023",
    hero: "/assets/glenda-hero.jpg",
    images: [
      "/assets/glenda-hero.jpg",
      "/assets/glenda-shot-girl.jpg",
      "/assets/glenda-shot-face.jpg",
      "/assets/glenda-shot-flight.jpg"
    ],
    youtube: "https://www.youtube.com/embed/p2_2DFm0tMo",
    links: [
      {
        href: "https://youtu.be/p2_2DFm0tMo",
        label: "本編を見る（2分19秒）"
      }
    ],
    excerpt:
      "浜辺で出会う竜の少女グレンダ。大学2年から3年にかけて、9か月をかけて完成させた自主制作アニメーションです。",
    concept:
      "白い肌に赤い翼と角——一目で伝わる竜の少女のキャラクターデザインと作画を軸に、写真素材の背景と組み合わせて画面を構成しました。『impossible』で掴んだ「作りきる力」を、9か月の継続制作で一段引き上げた一本です。",
    role: ["企画", "キャラクターデザイン", "作画", "演出", "編集"],
    tools: ["個人制作"],
    process: [
      "キャラクター1人で成立する物語を設計し、浜辺を舞台に構成",
      "作画に集中するため、背景・音はフリー素材を活用して制作リソースを配分",
      "9か月かけて作画・演出・編集を積み上げ、1本のお話として完成"
    ],
    sections: [
      {
        title: "クレジット",
        body: [
          "BGM：evokemusic.ai「スモールエモーション（アコースティックピアノ）」／SE：Audiostock／背景素材：photoAC・VideoAC。素材の力を借りつつ、作画と編集は個人で行いました。"
        ]
      }
    ],
    outcome:
      "2023年4月にYouTubeで公開しました。卒業制作『-CORE-』へ続く、個人制作の2本目のアニメーションです。"
  },
  {
    slug: "impossible",
    title: "impossible",
    subtitle: "初めての自主制作アニメーション",
    category: "アニメーション",
    year: "2020",
    hero: "/assets/impossible-hero.jpg",
    images: [
      "/assets/impossible-hero.jpg",
      "/assets/impossible-shot-torii.jpg",
      "/assets/impossible-shot-color.jpg",
      "/assets/impossible-shot-end.jpg"
    ],
    youtube: "https://www.youtube.com/embed/7_Qg41YQNvI",
    links: [
      {
        href: "https://youtu.be/7_Qg41YQNvI",
        label: "本編を見る（2分37秒）"
      }
    ],
    excerpt:
      "特待生として大学に合格した直後、コロナ禍の2か月をまるごと賭けて一人で作りきった、最初の一本。",
    concept:
      "「不可能を可能に変える」を掲げた作品です。モノクロで始まった世界が終盤で色を取り戻し、“impossible”の文字が“I'm possible”へ変わる——初めてでも、伝えたい芯を一本通すことにこだわりました。カット割り・作画・編集のすべてが初挑戦です。",
    role: ["企画", "作画", "編集"],
    tools: ["個人制作"],
    process: [
      "コロナ禍の在宅期間、2か月をまるごと制作に投下",
      "モノクロからカラーへ、タイトルの反転で「不可能→可能」を表現",
      "拙さも含めて最後まで作りきり、公開"
    ],
    outcome:
      "2020年6月に公開。何もかもうまくいかない中で作りきったこの一本から創作人生が始まりました。いまでも、いちばん印象に残っている制作です。"
  }
];

export const featuredWorks = works.slice(0, 6);

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
