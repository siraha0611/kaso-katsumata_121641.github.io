export type FactItem = {
  value: string;
  unit?: string;
  label: string;
  note: string;
};

export type RouteWork = {
  title: string;
  slug: string;
  point: string;
};

export type RecruiterRoute = {
  no: string;
  en: string;
  label: string;
  lead: string;
  roles: string[];
  works: RouteWork[];
};

/** 数値は作品ページ・ギャラリーで内訳や制作例を確認できるものだけを記載しています。 */
export const facts: FactItem[] = [
  {
    value: "最優秀賞",
    label: "2025年度 卒業制作展 アニメ制作ゼミ",
    note: "卒業制作アニメーション『-CORE-』。2人チーム「Blue Tears」で制作し、企画・脚本・絵コンテ・演出・背景美術・編集を担当。"
  },
  {
    value: "200",
    unit: "ページ超",
    label: "長編TRPGシナリオを個人制作",
    note: "『夢語りはティータイムのあとで』。総計400ファイル超の素材まで一人で組み立て、BOOTHで頒布中。作品ページに内訳と制作例を掲載。"
  },
  {
    value: "69",
    unit: "点",
    label: "キャラクター立ち絵",
    note: "世界観に合わせて衣装・体格・表情を設計した手描きの立ち絵を、制作年ごとにGalleryへ掲載。"
  },
  {
    value: "3",
    unit: "本",
    label: "アニメーション作品",
    note: "『impossible』『Glenda』『-CORE-』。全編を公開し、『-CORE-』の絵コンテ39ページも掲載。"
  },
  {
    value: "2",
    unit: "本",
    label: "Webプロダクトを企画から実装まで",
    note: "『扉のむこうの少女』『Taku with CoC』。企画・体験設計・実装を一人で担当し、うち1本は継続して運用中。"
  },
  {
    value: "5",
    unit: "点",
    label: "制作を支える自作ツール",
    note: "製本ツール、リプレイエンジン、Bot、素材量産パイプラインなど。Devページに掲載。"
  }
];

export const routes: RecruiterRoute[] = [
  {
    no: "01",
    en: "PLANNER",
    label: "企画・プランナー",
    lead: "「遊んだ人に何が残るか」から逆算して、体験の順番と情報の出し方を設計してきました。",
    roles: ["企画", "体験設計", "シナリオ・ライティング", "情報設計", "UIデザイン", "実装・運用"],
    works: [
      {
        title: "夢語りはティータイムのあとで",
        slug: "yumegatari-teatime",
        point: "全4章のキャンペーンを、4人分の秘匿ハンドアウトで情報の非対称性から設計。MAPはKP用とPL用を出し分けています。"
      },
      {
        title: "扉のむこうの少女",
        slug: "tobira-no-mukou-no-shoujo",
        point: "TRPG未経験者の初回体験を主題にしたブラウザ作品。体験設計から実装までを一人で担当しました。"
      },
      {
        title: "Taku with CoC",
        slug: "taku-with-coc",
        point: "情報ポータルの企画・情報設計・運用。継続更新される媒体としての設計を担当しています。"
      }
    ]
  },
  {
    no: "02",
    en: "2D / CHARACTER",
    label: "2Dデザイン・キャラクター",
    lead: "キャラクター単体ではなく、舞台・役割・関係性からビジュアルを立ち上げます。ご依頼の立ち絵・キャラクターは手描きで制作しています。",
    roles: ["キャラクターデザイン", "立ち絵制作", "衣装設計", "表情差分", "ロゴ", "頒布ビジュアル"],
    works: [
      {
        title: "立ち絵アーカイブ",
        slug: "standing-archive",
        point: "世界観の異なるシナリオごとに設計したキャラクター群。作画の幅を年代別のGalleryで確認できます。"
      },
      {
        title: "夢語りはティータイムのあとで",
        slug: "yumegatari-teatime",
        point: "自作シナリオのNPC立ち絵・ロゴ・頒布ビジュアル。役割と関係性が伝わる形に統一しています。"
      },
      {
        title: "お依頼いただいたお仕事",
        slug: "commission-works",
        point: "ヒアリングから納品データ整理まで。依頼者のキャラクター像を形にする工程を掲載しています。"
      }
    ]
  },
  {
    no: "03",
    en: "ANIMATION",
    label: "映像・アニメーション",
    lead: "自主制作から卒業制作まで、企画・脚本・絵コンテ・演出・背景・編集を担当してきました。",
    roles: ["企画・監督", "脚本", "設定画", "絵コンテ・演出", "レイアウト", "作画", "背景美術", "編集"],
    works: [
      {
        title: "-CORE-",
        slug: "core-animation",
        point: "2人チーム「Blue Tears」で制作し、卒業制作展 アニメ制作ゼミ最優秀賞。脚本から撮影までの10工程と、1カットができるまでを工程順に掲載しています。"
      },
      {
        title: "Glenda",
        slug: "glenda",
        point: "9か月をかけた個人制作。企画・キャラクターデザイン・作画・演出・編集を一人で担当しました。"
      },
      {
        title: "impossible",
        slug: "impossible",
        point: "はじめての自主制作アニメーション。ここから制作を続けてきた出発点です。"
      }
    ]
  }
];

export const strengths = [
  {
    title: "企画から出荷まで、通して担当できる",
    text: "TRPGシナリオ・Webプロダクト・自主制作アニメーションは、企画から制作・販売運営までを一人で担当してきました（卒業制作『-CORE-』のみ2人チーム制作）。工程の全体像が見えるので、どこで何が詰まるかを想像しながら動けます。"
  },
  {
    title: "作りっぱなしにせず、世に出して回す",
    text: "BOOTHでの頒布、Webサイトの公開・更新、ゲームマーケットに向けた物理版の制作まで、届けるところまでを継続しています。"
  },
  {
    title: "AIを段取りの側で使う",
    text: "コーディング・素材量産・情報整理は生成AIを活用し、イラストと作画は手で描く――と用途を分けています。手を動かす時間を、判断が必要な工程に寄せるための使い方です。"
  }
];
