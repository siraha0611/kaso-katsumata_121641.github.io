export type NewsCategory = "お知らせ" | "新作" | "イベント" | "制作";

export type NewsItem = {
  /** 表示用の日付。日まで確定していないものは "2026.08" のように月まででよい */
  date: string;
  category: NewsCategory;
  title: string;
  /** "/"始まりは内部リンク、httpは外部リンク */
  href?: string;
};

/** 新しいものを先頭に追記していく */
export const news: NewsItem[] = [
  {
    date: "2026.09.02",
    category: "お知らせ",
    title: "サイトをリニューアルし、KASO集落工房の拠点サイトとして再スタートしました"
  },
  {
    date: "2026.09",
    category: "制作",
    title: "『夢語りはティータイムのあとで』物理版を、ゲームマーケット2026秋に向けて制作中です",
    href: "/works/yumegatari-teatime"
  },
  {
    date: "2026.08.30",
    category: "イベント",
    title: "TRPGマーケットオンラインに出展しました"
  },
  {
    date: "2026.08.22",
    category: "イベント",
    title: "コミックマーケット109（冬コミ）にサークル参加を申し込みました"
  },
  {
    date: "2026.08",
    category: "新作",
    title: "喫茶店・カフェの背景素材など、新作素材パックをBOOTHで頒布中です",
    href: "https://kasokatsumata.booth.pm/"
  }
];

export const latestNews = news.slice(0, 3);
