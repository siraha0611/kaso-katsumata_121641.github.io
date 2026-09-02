import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionFx } from "@/components/MotionFx";
import "./globals.css";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const baseUrl = `${siteOrigin}${basePath}`;
const ogImage = `${baseUrl}/og.png`;
const siteDescription =
  "TRPGの「遊ぶ体験」をつくる個人の工房。オンラインセッション向けの背景・演出素材と長編シナリオ『夢語りはティータイムのあとで』をBOOTHで頒布し、立ち絵の受託制作や制作ツールの開発も行っています。代表・制作: 勝俣颯太（KASO）。";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/`),
  title: {
    default: "KASO集落工房 ― TRPG素材・シナリオ・ツールの工房",
    template: "%s | KASO集落工房"
  },
  description: siteDescription,
  keywords: [
    "KASO集落工房",
    "勝俣颯太",
    "KASO",
    "TRPG",
    "TRPG素材",
    "オンラインセッション素材",
    "TRPGシナリオ",
    "夢語りはティータイムのあとで",
    "立ち絵",
    "2Dイラスト",
    "BOOTH"
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${baseUrl}/`,
    siteName: "KASO集落工房",
    title: "KASO集落工房 ― TRPG素材・シナリオ・ツールの工房",
    description: siteDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "KASO集落工房" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "KASO集落工房 ― TRPG素材・シナリオ・ツールの工房",
    description: siteDescription,
    images: [ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <MotionFx />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
