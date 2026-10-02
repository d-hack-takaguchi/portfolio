import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const stacks = [
  { category: "ローコード・ノーコード", items: ["PowerApps", "Power Automate", "Kintone", "SharePoint"] },
  { category: "生成AI・AIツール", items: ["Claude", "ChatGPT", "Gemini", "NotebookLM", "Claude Code"] },
  { category: "開発言語・フレームワーク", items: ["Next.js", "React", "JavaScript", "TypeScript", "HTML/CSS", "VBA", "Python"] },
  { category: "RPA・自動化", items: ["Power Automate Desktop", "Excel VBA", "Google Apps Script"] },
  { category: "クラウド・コラボ", items: ["Microsoft 365", "Google Workspace", "GitHub"] },
  { category: "ドキュメント・設計", items: ["業務フロー図", "ユーザーストーリー", "提案書", "技術検証レポート"] },
  { category: "AI映像・画像生成", items: ["Seedance 2.5", "MiniMax H3", "Blender", "ChatGPT（画像）", "fal", "Higgsfield"] },
  { category: "制作ライン自動化", items: ["Claude Code", "Codex（GPT-6 Astra）", "GitHub Actions", "Vercel"] },
  { category: "発信・SNS運用", items: ["Instagram", "Threads", "X", "note"] },
];

export default function Stack() {
  return (
    <section id="techstack" className="bg-cream px-6 pb-28 text-ink sm:px-10 md:pb-36">
      <SectionHead tone="light" index="06" label="Stack" title="技術スタック" />
      <dl className="border-t border-ink/20">
        {stacks.map((s) => (
          <Reveal key={s.category} className="grid gap-2 border-b border-ink/20 py-5 md:grid-cols-12 md:gap-6">
            <dt className="text-sm text-ink/55 md:col-span-3">{s.category}</dt>
            <dd className="text-base md:col-span-9">{s.items.join(" / ")}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
