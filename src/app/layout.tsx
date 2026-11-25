import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto-sans-jp", display: "swap" });

export const metadata: Metadata = {
  title: "DxHack | 髙口 和弥 - DX・AX推進コンサルタント",
  description:
    "業務分析・要件定義からローコード開発・生成AI導入まで。構想から実装まで一気通貫でDX・AXを推進するフリーランスコンサルタント。",
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
