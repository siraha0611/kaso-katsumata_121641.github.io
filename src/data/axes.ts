export type AxisWork = { title: string; slug: string };

export type Axis = {
  no: string;
  en: string;
  label: string;
  lead: string;
  body: string[];
  works: AxisWork[];
  image: string;
};

export const axes: Axis[] = [
  {
    no: "01",
    en: "TRPG SCENARIO WRITER",
    label: "TRPGシナリオライター",
    lead: "物語を、プレイヤーが“体感”できるかたちに。",
    body: [
      "TRPGにのめり込んだのは、キャラクターになりきって誰かと言葉を交わす「体感」に出会ったからでした。見せる表現とはちがう、その場に居合わせてしまう手応え。物語は読むものから、生きるものになりました。",
      "『夢語りはティータイムのあとで』では、シナリオ本文だけでなく、ロゴ・NPC・MAP・セッション素材までを“ひとつの体験”として設計しています。いまは12万文字を超える長編をゲームマーケットに向けて制作中。丁寧さを忘れたら面白味が消える――細部の積み重ねが、卓の説得力になると信じています。"
    ],
    works: [
      { title: "夢語りはティータイムのあとで", slug: "yumegatari-teatime" },
      { title: "夢ティ NPC立ち絵", slug: "yumegatari-npc" },
      { title: "MAP / 情報設計", slug: "research-and-maps" }
    ],
    image: "/assets/yumegatari-title.png"
  },
  {
    no: "02",
    en: "2D ILLUSTRATOR",
    label: "2Dイラストレーター",
    lead: "キャラクターの“生き方”を、一枚に宿す。",
    body: [
      "大学ではアニメーションを学び、卒業制作『-CORE-』を企画から作画・編集まで担って完成させ、卒業制作展で最優秀賞をいただきました。キャラクターが画面のなかで動き出す、その一点の喜びがすべての原点です。",
      "立ち絵でも、キャラクター単体ではなく舞台・役割・関係性から立ち上げるのが信条。ご依頼では依頼者のキャラクター像を第一に、セッションで映える形へ整えてお渡ししています。"
    ],
    works: [
      { title: "-CORE-（卒業制作アニメ）", slug: "core-animation" },
      { title: "お依頼いただいたお仕事", slug: "commission-works" },
      { title: "立ち絵アーカイブ", slug: "standing-archive" }
    ],
    image: "/assets/core-flyer-front.png"
  },
  {
    no: "03",
    en: "AI-NATIVE SOLOPRENEUR",
    label: "AIネイティブ・ソロプレナー",
    lead: "企画から実装・運用まで、ひとりで形にする。",
    body: [
      "「全てをエンタテインメントにして世の中を豊かに」――進路を決めたその言葉を、いまはAIを道具に実践しています。作ることは本質的に意思の伝達。技術は、伝えたい体験を相手に届けるための手段だと考えています。",
      "動く演出素材の量産、クトゥルフ神話TRPGの情報ポータル『Taku with CoC』の立ち上げ、ブラウザで遊べるTRPG入門『扉のむこうの少女』まで、企画・制作・実装・運用をひとりで回しています。"
    ],
    works: [
      { title: "扉のむこうの少女 Web版", slug: "tobira-no-mukou-no-shoujo" },
      { title: "Taku with CoC", slug: "taku-with-coc" },
      { title: "TRPG向け 動く演出素材", slug: "booth-motion-assets" }
    ],
    image: "/assets/tobira-title.png"
  }
];
