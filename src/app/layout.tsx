import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConsultPro | ITコンサルティング",
  description:
    "クラウドネイティブ・アーキテクチャの設計から実装まで。DX推進のパートナーとして、貴社のIT戦略を成功に導きます。",
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
