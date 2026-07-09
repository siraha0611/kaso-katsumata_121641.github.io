# Katsumata Sota — Portfolio 2026

TRPGシナリオ・2Dイラスト・アニメーション・Web企画を横断する、勝俣颯太のポートフォリオサイトです。

**Live:** https://siraha0611.github.io/kaso-katsumata_121641.github.io/

## 構成

- **Next.js 14**（App Router・`output: export` による完全静的書き出し）
- コンテンツはすべてデータ駆動：作品は `src/data/works.ts`、プロフィールは `src/data/profile.ts`、トップの3軸は `src/data/axes.ts`
- 画像は `public/assets/`（原寸）＋ `public/assets/thumbs/`（表示用1100px）の2層。`thumbnailPath()` が自動でサムネを参照します
- 動画は `public/assets/video/` に H.264/faststart のMP4（音声なし・可視域のみ自動再生）

## 主なページと仕掛け

| ページ | 内容 |
|---|---|
| `/works/core-animation` | 卒業制作アニメ『-CORE-』。脚本→絵コンテ→LO→セル→背景→撮影の**「1カットができるまで」**を実素材で展示 |
| `/storyboard` | 『-CORE-』絵コンテ**全39ページ**のアーカイブ |
| `/tools` | シナリオ製本ツール・リプレイ動画エンジンなど、制作を支える**自作ツール群** |
| `/story` | 生い立ち。各章から関連作品へリンク |

実装面の工夫：

- **日本語見出しのフレーズ改行制御** — タイトル内の `\n` をフレーズ区切りとして `inline-block` 化し、最長フレーズが1行に収まるようフォントサイズを自動フィット（`SectionTitle`）
- **LiteYouTube** — YouTube埋め込みをクリック時にのみ読み込むファサード。初期ロードの外部JS約700KBを削減
- **MotionFx** — IntersectionObserverによるスクロールリビールと動画の可視域再生。`prefers-reduced-motion` では全演出を自動無効化
- 作品ごとのOGP画像、カスタム404、サイトマップ自動生成

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 静的書き出し → out/
```

## デプロイ

`main` へ push すると `.github/workflows/deploy.yml` が build → GitHub Pages 公開まで自動実行します（`NEXT_PUBLIC_BASE_PATH` はCIが設定）。

## クレジット

サイトの設計・実装・運用は勝俣颯太が [Claude Code](https://claude.com/claude-code) を活用して行っています。掲載作品の著作権はすべて勝俣颯太に帰属します（クレジット記載のある素材・楽曲を除く）。無断転載はご遠慮ください。
