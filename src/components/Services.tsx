import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const services = [
  { title: "DX・AX推進コンサルティング", description: "課題ヒアリングからロードマップ策定、実行支援まで。As-Is/To-Be分析に基づくBPR提案で、DXの全体像を描きます。" },
  { title: "ローコード開発", description: "PowerApps・Power Automate・Kintone・SharePointによるアプリ・ワークフロー構築。短期間で業務に直結するシステムを実現します。" },
  { title: "生成AI導入支援", description: "Claude・ChatGPT・Gemini等の業務活用を支援。プロンプト設計から業務プロセスへの組み込みまで伴走します。" },
  { title: "RPA・OCR自動化・Web開発", description: "Power Automate Desktop・VBA・AI-OCRによる業務自動化と、React/TypeScriptによるWebアプリ開発。要件定義から画面設計まで対応します。" },
  { title: "AIコンテンツ制作・制作ライン構築", description: "AIキャラクター・ショートドラマの制作と、企画から公開までを自動化する制作ラインの設計・構築。SNS発信の仕組みづくりまで支援します。" },
  { title: "内製化支援・技術移転", description: "担当者が自走できる仕組みづくり。技術ドキュメント整備・ハンズオン支援で、持続可能な運用体制を構築します。" },
];

export default function Services() {
  return (
    <section id="features" className="bg-cream px-6 py-28 text-ink sm:px-10 md:py-36">
      <SectionHead tone="light" index="01" label="Services" title={<>構想から実装まで<br />一気通貫でDX・AXを推進</>} />
      <Reveal className="mb-20 grid md:grid-cols-12">
        <p className="max-w-[640px] text-base leading-[2] text-ink/75 md:col-span-9 md:col-start-4">
          業務分析・要件定義からローコード開発・生成AI導入まで。
          現場を知るコンサルタントが、貴社の課題に最適なソリューションをご提供します。
          いまはAIキャラクターとAIショートドラマの制作にも取り組み、作る仕組みごと形にしています。
        </p>
      </Reveal>
      <ol className="border-t border-ink/20">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} className="grid gap-3 border-b border-ink/20 py-8 md:grid-cols-12 md:gap-6">
            <span className="text-sm tabular-nums text-ink/45 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-medium md:col-span-4 md:text-2xl">{s.title}</h3>
            <p className="max-w-[560px] text-sm leading-[1.9] text-ink/70 md:col-span-6 md:col-start-7">{s.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
