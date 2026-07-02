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

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  year: string;
  hero: string;
  images: string[];
  galleryNote?: string;
  video?: string;
  youtube?: string;
  excerpt: string;
  concept: string;
  role: string[];
  tools: string[];
  process?: string[];
  workflow?: WorkflowStep[];
  sections?: WorkSection[];
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
    images: [
      "/assets/yumegatari-title.png",
      "/assets/yumegatari-display-2.png",
      "/assets/yumegatari-display-3.png",
      "/assets/yumegatari-display-4.png",
      "/assets/yumegatari-still-toru.png",
      "/assets/yumegatari-toru.png",
      "/assets/yumeti-komori-normal.png",
      "/assets/yumeti-komori-smile.png",
      "/assets/yumegatari-momoka.png",
      "/assets/yumegatari-haragrim.png",
      "/assets/yumegatari-lulu-human.png",
      "/assets/yumegatari-lulu-cat.png",
      "/assets/yumegatari-haon.png",
      "/assets/dreamland-map.png",
      "/assets/celephais-map.png",
      "/assets/astrea-menu.png"
    ],
    galleryNote: "※一部キャラクターのネタバレを含みます",
    excerpt:
      "喫茶店を入口に夢の世界へ進む長編キャンペーンシナリオ。本文200ページ超・プレイ時間約30時間。シナリオからロゴ・NPC立ち絵・MAP・セッション素材まで一人で制作。",
    concept:
      "現代の喫茶店「喫茶アストレア」の店員たちが、夢の世界ドリームランドへ――日常から夢へ移る導線を、紅茶の色、白いロゴ、手描きの線、幻想的な地図表現でまとめた全4章のキャンペーンシナリオです。4人のプレイヤーそれぞれに秘匿ハンドアウトを用意し、情報の非対称性が物語を動かします。喫茶店の住人から夢の世界の存在まで、NPCの立ち絵はすべて手描きで、役割と関係性が伝わるように制作しています。",
    role: ["シナリオ執筆", "ロゴ", "NPC立ち絵", "MAP・情報設計", "頒布画像", "セッション素材"],
    tools: ["CLIP STUDIO PAINT", "Photoshop", "Illustrator", "生成AI(資料整理・校正)"],
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
          "約30時間の長編を迷わず遊べるよう、プレイヤーが参照する情報と、進行側が扱う情報を分けて資料を設計しています。夢の世界全体の旅MAP、都市の市街図、喫茶アストレアのメニュー表など、探索範囲・イベント・移動経路を視覚化し、セッション中の視認性を確認しながら調整しました。"
        ]
      },
      {
        title: "AIとの分業",
        body: [
          "制作期間は大学院と並行して約8ヶ月。資料整理・矛盾チェック・校正はAIに任せ、物語の核となる文章とキャラクターの立ち絵・スチルはすべて自分の手で作っています。制作の裏側と分業の考え方は、noteの2記事で公開しています。"
        ]
      }
    ],
    outcome:
      "BOOTHで頒布中。シナリオ本文だけでなく、作品の入口からプレイ中の画面まで、一人で一貫して世界観を組み立てました。",
    links: [
      { href: "https://booth.pm/ja/items/8045336", label: "BOOTHで見る" },
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
      "/assets/hdd-akane.png",
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
      "/assets/core-shot-081.png",
      "/assets/core-shot-041.png",
      "/assets/research.png"
    ],
    youtube: "https://www.youtube.com/embed/Go7ThQ1DOP4",
    links: [
      {
        href: "https://youtu.be/Go7ThQ1DOP4",
        label: "本編を見る"
      }
    ],
    excerpt:
      "和風SFアクションを軸にした卒業制作アニメーション。企画から作画・編集まで手がけ、2025年度卒業制作展でアニメ制作ゼミ最優秀賞を受賞しました。",
    concept:
      "義体、刀、赤い空間、都市構造をモチーフに、静かな緊張感と斬撃の瞬間を見せる和風SFアクションとして設計しました。「断ち斬るは己の宿命」――主人公ヤトの覚悟を軸に、世界観・キャラクター・映像を一本に束ねています。",
    role: ["企画・監督", "キャラクターデザイン", "絵コンテ／演出", "背景", "編集"],
    tools: ["CLIP STUDIO PAINT", "After Effects", "Premiere Pro"],
    workflow: [
      {
        title: "企画・世界観",
        text: "企画書・脚本・イメージボードで、作品の舞台、キャラクター、画面の方向性を固める段階。",
        image: "/assets/core-imageboard.jpg"
      },
      {
        title: "キャラクター設定",
        text: "三面図や細部設定を作り、作画時に迷わない基準を作成。",
        image: "/assets/core-yato-turnaround.png"
      },
      {
        title: "作業表・進行管理",
        text: "世界観、イメージボード、舞台設定など、作業を分けて進行管理。",
        image: "/assets/core-workflow-world.png"
      },
      {
        title: "Vコンテ・LO・作画",
        text: "映像のテンポとカット構成を確認しながら動きと画面設計を詰め、作画・背景・撮影・編集で一本の映像に仕上げる。",
        image: "/assets/core-progress.png"
      }
    ],
    outcome:
      "約1年半をかけた集大成。2025年度卒業制作展でアニメ制作ゼミ最優秀賞を受賞しました。企画・キャラクター・映像までを一貫して手がけ、音楽は悠ぺぇさんに制作いただいた、仲間との一本です。"
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
    outcome:
      "9カテゴリ・全192種を含む複数のパックとしてまとめ、BOOTHで頒布しています。いずれもAIを活用して制作した素材です。"
  }
];

export const featuredWorks = works.slice(0, 6);

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
