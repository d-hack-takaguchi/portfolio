import Section from "./Section";

const services = [
  { title: "DX・AX推進コンサルティング", description: "課題ヒアリングからロードマップ策定、実行支援まで。As-Is/To-Be分析に基づくBPR提案で、DX・AXの全体像を描きます。" },
  { title: "ローコード開発", description: "PowerApps・Power Automate・Kintone・SharePointによるアプリ・ワークフロー構築。短期間で業務に直結するシステムを実現します。" },
  { title: "生成AI導入支援", description: "Claude・ChatGPT・Gemini等の業務活用を支援。プロンプト設計から業務プロセスへの組み込みまで伴走します。" },
  { title: "RPA・OCR自動化", description: "Power Automate Desktop・VBA・AI-OCRを活用した業務自動化。帳票処理やデータ入力の工数を大幅に削減します。" },
  { title: "システム・Web開発", description: "React/TypeScriptによるWebアプリ開発、要件定義・画面設計・技術選定支援まで、開発フェーズを幅広くカバーします。" },
  { title: "内製化支援・技術移転", description: "担当者が自走できる仕組みづくり。技術ドキュメント整備・ハンズオン支援で、持続可能な運用体制を構築します。" },
];

export default function Services() {
  return (
    <Section id="services" label="Services" title="サービス" soft>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.title} className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-base font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-[1.9] text-sub">{s.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
