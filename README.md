# Portfolio 2026_5

2D制作、TRPG、アニメーション作品を掲載するポートフォリオサイトです。

## 使い方

```bash
npm install
npm run dev
```

作品データは `src/data/works.ts`、プロフィールと連絡先は `src/data/profile.ts` を編集してください。
画像・動画は `public/assets/` に追加し、データ内のパスを書き換えるだけで差し替えできます。

## GitHub Pagesで公開する

このサイトはNext.jsの静的書き出しに対応しています。

```bash
npm run build
```

GitHubでは、リポジトリの `Settings` → `Pages` → `Build and deployment` → `Source` を `GitHub Actions` に設定してください。
`main` ブランチへpushすると `.github/workflows/deploy.yml` が実行され、`out/` の内容がGitHub Pagesへ公開されます。
