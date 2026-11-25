import Section from "./Section";

const stacks = [
  { category: "生成AI・AI開発", items: ["ChatGPT", "Claude", "Claude Code", "Gemini", "Microsoft Copilot", "Copilot Studio", "プロンプトエンジニアリング", "AIエージェント開発"] },
  { category: "ローコード・業務自動化", items: ["Power Apps", "Power Automate", "Power Automate Desktop", "kintone", "SharePoint", "RPA", "VBA", "AI-OCR"] },
  { category: "Web・システム開発", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "JSON", "SQL"] },
  { category: "業務改革・マネジメント", items: ["DX・AX推進", "BPR", "業務分析", "As-Is／To-Be設計", "要件定義", "プロジェクトマネジメント", "ナレッジマネジメント", "内製化支援"] },
];

export default function Stack() {
  return (
    <Section id="techstack" label="Tech Stack" title="主な技術・ツール" soft>
      <dl className="border-t border-line">
        {stacks.map((s) => (
          <div key={s.category} className="grid gap-1 border-b border-line py-4 md:grid-cols-4 md:gap-6">
            <dt className="text-sm text-sub">{s.category}</dt>
            <dd className="text-sm leading-[1.9] md:col-span-3">{s.items.join(" / ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
