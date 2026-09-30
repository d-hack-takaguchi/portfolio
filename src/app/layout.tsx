import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DxHack | 髙口 和弥 - DX・AX推進コンサルタント / AIクリエイター",
  description:
    "業務分析・要件定義からローコード開発・生成AI導入まで、構想から実装まで一気通貫でDXを推進。AIキャラクター・AIショートドラマの制作と、制作ラインの構築にも取り組むフリーランスコンサルタント。",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
