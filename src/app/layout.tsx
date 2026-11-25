import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto-sans-jp", display: "swap" });

export const metadata: Metadata = {
  title: "DxHack | 髙口 和弥 - DX・AX推進コンサルタント",
  description:
    "構想から実装まで、一気通貫でDX・AXを推進。現場マネジメントと業務改革の経験、生成AI・ローコード開発の実装スキルを強みに、課題整理から定着・内製化まで支援するフリーランスコンサルタント。",
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
