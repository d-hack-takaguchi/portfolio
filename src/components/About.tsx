import Image from "next/image";
import Section from "./Section";

const fields = ["DX・AX推進コンサルティング", "ITコンサルティング", "生成AI導入・AIエージェント開発", "ローコード／ノーコード開発", "業務自動化・Webアプリケーション開発", "AIコンテンツ制作"];

const strengths = [
  { title: "現場起点の業務改革", description: "コンタクトセンターの現場運営経験を活かし、実際の業務に即した改善策を設計。" },
  { title: "構想から実装までの一貫対応", description: "課題整理・要件定義・開発・導入・運用まで、実行可能な形に落とし込むことが強み。" },
  { title: "生成AIを活用した高速開発", description: "AIコーディングツールとローコード技術を組み合わせ、小規模な体制でも迅速な開発を実現。" },
  { title: "組織へのAI定着・内製化", description: "AIを一部の人だけが使う状態から、組織全体で活用できる仕組みへ展開。" },
  { title: "業務設計とクリエイティブの融合", description: "業務改善・システム開発の知見を活かし、AIコンテンツ制作の仕組み化にも対応。" },
];

export default function About() {
  return (
    <Section id="about" label="About" title="プロフィール">
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        <div>
          <div className="relative aspect-square max-w-[240px] overflow-hidden rounded-lg">
            <Image src="/profile.png" alt="髙口 和弥" fill sizes="240px" className="object-cover object-[50%_20%]" />
          </div>
          <p className="mt-5 text-lg font-bold">髙口 和弥</p>
          <p className="text-sm text-sub">Kazuya Takaguchi</p>
          <p className="mt-3 text-sm leading-[1.8] text-sub">DX・AX推進コンサルタント<br />フリーランス / フルリモート対応可</p>
          <h3 className="mt-8 text-xs font-medium text-navy">専門領域</h3>
          <ul className="mt-2 space-y-1 text-sm leading-[1.8] text-sub">
            {fields.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4 text-base leading-[2]">
            <p>15年以上にわたるコンタクトセンター業界での現場マネジメント・業務改革経験と、生成AI・ローコード開発の実装スキルを強みに、企業のDX・AX推進を支援しています。</p>
            <p>単なるツール導入ではなく、業務課題の整理から仕組みの構築、現場への定着・内製化までを重視。現場が自ら改善を続けられる仕組みづくりを得意としています。</p>
          </div>

          <h3 className="mt-12 text-sm font-bold">強み・専門性</h3>
          <ol className="mt-3 border-t border-line">
            {strengths.map((v, i) => (
              <li key={v.title} className="flex gap-4 border-b border-line py-4">
                <span className="pt-0.5 text-xs font-medium tabular-nums text-navy">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-bold">{v.title}</p>
                  <p className="mt-1 text-sm leading-[1.9] text-sub">{v.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
