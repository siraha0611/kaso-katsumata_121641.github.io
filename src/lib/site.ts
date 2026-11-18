// サイトの公開URL。ホスト先ごとにビルド時の環境変数で切り替える。
// - NEXT_PUBLIC_SITE_ORIGIN: 例 "https://kaso-kobo.com"（未設定なら GitHub Pages）
// - NEXT_PUBLIC_BASE_PATH:   例 "/kaso-katsumata_121641.github.io"（独自ドメインでは空）
export const siteOrigin = (process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://siraha0611.github.io").replace(/\/+$/, "");
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = `${siteOrigin}${basePath}`;
