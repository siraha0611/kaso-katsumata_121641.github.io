export type WorkCategory =
  | "TRPGシナリオ"
  | "イラスト"
  | "アニメーション"
  | "研究"
  | "Web/企画"
  | "映像/トレーラー";

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  year: string;
  hero: string;
  images: string[];
  video?: string;
  youtube?: string;
  excerpt: string;
  concept: string;
  role: string[];
  tools: string[];
  process: string[];
  outcome: string;
  link?: { href: string; label: string };
};

export const categories: ("All" | WorkCategory)[] = [
  "All",
  "TRPGシナリオ",
  "イラスト",
  "アニメーション",
  "研究",
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
      "/assets/dreamland-map.png",
      "/assets/celephais-map.png",
      "/assets/astrea-menu.png"
    ],
    excerpt:
      "喫茶店を入口に夢の世界へ進むTRPGシナリオ。ロゴ、頒布画像、NPC、MAP、セッション素材まで制作。",
    concept:
      "日常の喫茶店から異世界の夢へ移る導線を、紅茶の色、白いロゴ、手書きの線、幻想的な地図表現でまとめた作品です。",
    role: ["シナリオ", "ロゴ", "頒布画像", "NPC立ち絵", "MAP", "セッション素材"],
    tools: ["CLIP STUDIO PAINT", "Photoshop", "Illustrator"],
    process: [
      "タイトルロゴとキービジュアルで作品の第一印象を設計",
      "喫茶店、夢、探索、戦闘の各場面に必要な視覚素材を整理",
      "頒布画像とセッション用素材を分け、閲覧用と実使用の両方に対応"
    ],
    outcome:
      "シナリオ本文だけでなく、作品の入口からプレイ中の画面まで一貫して世界観を組み立てました。"
  },
  {
    slug: "yumegatari-npc",
    title: "夢ティ NPC立ち絵",
    subtitle: "喫茶アストレアと夢の住人たち",
    category: "イラスト",
    year: "2026",
    hero: "/assets/yumegatari-toru.png",
    images: [
      "/assets/yumegatari-toru.png",
      "/assets/yumeti-komori-normal.png",
      "/assets/yumeti-komori-smile.png",
      "/assets/yumegatari-momoka.png",
      "/assets/yumegatari-haragrim.png",
      "/assets/yumegatari-lulu-human.png",
      "/assets/yumegatari-lulu-cat.png",
      "/assets/yumegatari-haon.png"
    ],
    excerpt:
      "『夢語りはティータイムのあとで』に登場するNPC立ち絵群。役割と関係性が伝わるように制作。",
    concept:
      "喫茶店の落ち着いた人物と、夢の世界に属する人物を分けながら、同じ作品内に並んだ時の統一感を保っています。",
    role: ["キャラクター制作", "立ち絵", "表情差分", "衣装設計"],
    tools: ["CLIP STUDIO PAINT"],
    process: [
      "NPCの役割、立場、登場タイミングからシルエットを検討",
      "通常時とイベント時で印象が変わるキャラクターは差分を制作",
      "セッション画面で見やすい色面と輪郭を調整"
    ],
    outcome:
      "物語進行に合わせて印象が変化するNPCを、立ち絵と差分で表現しました。"
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
    slug: "standing-commission",
    title: "立ち絵依頼制作",
    subtitle: "ヒアリングから納品まで",
    category: "イラスト",
    year: "2026",
    hero: "/assets/standing-commission.png",
    images: [
      "/assets/standing-commission.png",
      "/assets/commission-chiri.png",
      "/assets/commission-amano.png"
    ],
    excerpt:
      "依頼内容に合わせて制作したTRPG立ち絵。ラフ確認、清書、差分整理まで対応。",
    concept:
      "依頼者のキャラクター解釈を優先しながら、セッション画面で使いやすい見え方に整えています。",
    role: ["ヒアリング", "ラフ", "清書", "差分作成", "納品データ整理"],
    tools: ["CLIP STUDIO PAINT", "Photoshop"],
    process: [
      "依頼内容から性格、衣装、色、ポーズの方向性を整理",
      "ラフ段階で大きな印象を確認",
      "用途に合わせて透過PNGや確認用画像を用意"
    ],
    outcome:
      "キャラクターの魅力と実際の使用場面を両立した立ち絵制作です。"
  },
  {
    slug: "core-animation",
    title: "-CORE-",
    subtitle: "卒業制作アニメーション ／ 卒業制作展 最優秀賞",
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
    link: {
      href: "https://youtu.be/Go7ThQ1DOP4",
      label: "本編を見る"
    },
    excerpt:
      "和風SFアクションを軸にした卒業制作アニメーション。企画から作画・編集まで手がけ、卒業制作展で最優秀賞を受賞しました。",
    concept:
      "義体、刀、赤い空間、都市構造をモチーフに、静かな緊張感と斬撃の瞬間を見せる和風SFアクションとして設計しました。「断ち斬るは己の宿命」――主人公ヤトの覚悟を軸に、世界観・キャラクター・映像を一本に束ねています。",
    role: ["企画・監督", "キャラクターデザイン", "絵コンテ／演出", "背景", "編集"],
    tools: ["CLIP STUDIO PAINT", "After Effects", "Premiere Pro"],
    process: [
      "企画書・脚本・キャラクター三面図・世界観イメージで作品の核を固める",
      "絵コンテとVコンテでカットごとのテンポと画面設計を検証",
      "LO・作画・背景・撮影・編集を進め、一本の映像作品として完成"
    ],
    outcome:
      "約1年半をかけた集大成。卒業制作展で最優秀賞を受賞し、企画・キャラクター・映像までを一貫して手がけた代表作です。"
  },
  {
    slug: "research-and-maps",
    title: "MAP / 情報設計",
    subtitle: "遊びやすさを支える資料制作",
    category: "研究",
    year: "2026",
    hero: "/assets/dreamland-map.png",
    images: [
      "/assets/dreamland-map.png",
      "/assets/celephais-map.png",
      "/assets/astrea-menu.png",
      "/assets/trpg-scenario.png"
    ],
    excerpt:
      "TRPGの進行、舞台理解、探索導線を支えるMAPと資料制作。",
    concept:
      "プレイヤーが参照する情報と、進行側が扱う情報を分け、見やすく運用しやすい資料として設計しています。",
    role: ["MAP", "資料設計", "画面素材", "情報整理"],
    tools: ["Photoshop", "CLIP STUDIO PAINT", "Excel"],
    process: [
      "シナリオ本文から必要な情報を抽出",
      "探索範囲、イベント、拠点、移動経路を視覚化",
      "セッション中の視認性を確認しながら調整"
    ],
    outcome:
      "物語を進めるための情報を、読みやすく雰囲気のある画面素材に落とし込みました。"
  },
  {
    slug: "commission-works",
    title: "お依頼いただいたお仕事",
    subtitle: "ご依頼で制作した立ち絵",
    category: "イラスト",
    year: "2026",
    hero: "/assets/commission-work-1-chiri.png",
    images: [
      "/assets/commission-work-1-chiri.png",
      "/assets/commission-work-2-amano.png",
      "/assets/commission-work-3-rinno.png",
      "/assets/commission-work-4-seitero1.png",
      "/assets/commission-work-5-seitero2.png"
    ],
    excerpt:
      "ご依頼を受けて制作した立ち絵のお仕事です。ヒアリングから清書・差分・納品まで対応しています。",
    concept:
      "依頼者のキャラクター像を第一に、衣装・表情・ポーズを一点ずつ調整して制作しています。セッション画面でも見やすいよう仕上げ、用途に合わせたデータでお渡ししています。",
    role: ["ヒアリング", "立ち絵制作", "清書", "差分作成", "納品データ整理"],
    tools: ["CLIP STUDIO PAINT", "Photoshop"],
    process: [
      "ご依頼内容からキャラクターの性格・衣装・色・ポーズを整理",
      "ラフで方向性をすり合わせ、清書・差分まで制作",
      "用途に合わせた形式(透過PNG・確認用画像など)で納品"
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
    link: {
      href: "https://tobira-no-mukou-no-shoujo-web.anb14625siraha.workers.dev/",
      label: "遊んでみる"
    },
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
    link: {
      href: "https://takuwith-coc.com/",
      label: "サイトを見る"
    },
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
    link: {
      href: "https://kasokatsumata.booth.pm/",
      label: "BOOTHで見る"
    },
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
