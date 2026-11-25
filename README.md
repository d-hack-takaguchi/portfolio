# DxHack Portfolio

髙口 和弥（DX・AX推進コンサルタント）のポートフォリオ。Next.js 16 / React 19 / Tailwind v4。

## 構成

1ページ構成。上から Hero / サービス / 実績・事例 / プロフィール / 技術スタック。

- 文面と項目は各 `src/components/*.tsx` の先頭の配列に置いている
- 色とフォントは `src/app/globals.css` の `@theme`（白地に紺1色）

## 開発

```bash
npm install
npm run dev
```

出す前に `npm run build` と `npm run lint` を通す。
