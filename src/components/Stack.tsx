import Section from "./Section";

const stacks = [
  { category: "ローコード・ノーコード", items: ["PowerApps", "Power Automate", "Kintone", "SharePoint", "AppSheet"] },
  { category: "生成AI・AIツール", items: ["Claude", "ChatGPT", "Gemini", "NotebookLM", "Claude Code"] },
  { category: "開発言語・フレームワーク", items: ["Next.js", "React", "JavaScript", "TypeScript", "HTML/CSS", "VBA", "Python"] },
  { category: "RPA・自動化", items: ["Power Automate Desktop", "Excel VBA", "Google Apps Script", "AI-OCR"] },
  { category: "クラウド・コラボ", items: ["Microsoft 365", "Google Workspace", "GitHub"] },
  { category: "ドキュメント・設計", items: ["業務フロー図", "ユーザーストーリー", "提案書", "技術検証レポート"] },
];

export default function Stack() {
  return (
    <Section id="techstack" label="Tech Stack" title="技術スタック" soft>
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
