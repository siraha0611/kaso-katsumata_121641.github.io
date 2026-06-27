import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const baseUrl = `${siteOrigin}${basePath}`;
const ogImage = `${baseUrl}/og.png`;
const siteDescription =
  "TRPGシナリオライター・2Dイラストレーター・AIネイティブ・ソロプレナー。勝俣颯太のポートフォリオ。卒業制作アニメ『-CORE-』、TRPGシナリオ『夢語りはティータイムのあとで』、Web作品、現実科学の研究まで。";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/`),
  title: {
    default: "勝俣 颯太 ― TRPG・イラスト・アニメーション ポートフォリオ",
    template: "%s | Katsumata Sota"
  },
  description: siteDescription,
  keywords: [
    "勝俣颯太",
    "Katsumata Sota",
    "ポートフォリオ",
    "TRPG",
    "TRPGシナリオ",
    "2Dイラスト",
    "キャラクターデザイン",
    "アニメーション",
    "クトゥルフ神話TRPG",
    "現実科学"
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${baseUrl}/`,
    siteName: "Katsumata Sota Portfolio",
    title: "勝俣 颯太 ― TRPG・イラスト・アニメーション ポートフォリオ",
    description: siteDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Katsumata Sota Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "勝俣 颯太 ― Katsumata Sota Portfolio",
    description: siteDescription,
    images: [ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
