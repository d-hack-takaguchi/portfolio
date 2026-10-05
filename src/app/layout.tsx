import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// 欧文は Helvetica 系、和文はこの Noto Sans JP に落ちる（Helvetica に日本語の字形が無いため）
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto-sans-jp", display: "swap" });

export const metadata: Metadata = {
  title: "Kazuya — Takaguchi | DX・AX推進コンサルタント / AIクリエイター",
  description:
    "業務分析・要件定義からローコード開発・生成AI導入まで、構想から実装まで一気通貫でDXを推進。AIキャラクター・AIショートドラマ・AI広告の制作と、制作ラインの構築にも取り組むフリーランスコンサルタント。",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  );
}
