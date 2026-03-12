import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DxHack | 髙口 和弥 - DX推進コンサルタント・ITコンサルタント",
  description:
    "業務分析・要件定義からローコード開発・生成AI導入まで。構想から実装まで一気通貫でDXを推進するフリーランスコンサルタント。",
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
