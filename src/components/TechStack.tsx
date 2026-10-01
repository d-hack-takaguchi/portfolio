"use client";

import { Blocks, Sparkles, Code, Bot, Cloud, FileText, Clapperboard, Megaphone, Workflow, type LucideIcon } from "lucide-react";

type Stack = { category: string; icon: LucideIcon; items: string[]; render?: boolean };
const stacks: Stack[] = [
  { category: "ローコード・ノーコード", icon: Blocks, items: ["PowerApps", "Power Automate", "Kintone", "SharePoint"] },
  { category: "生成AI・AIツール", icon: Sparkles, items: ["Claude", "ChatGPT", "Gemini", "NotebookLM", "Claude Code"] },
  { category: "開発言語・フレームワーク", icon: Code, items: ["Next.js", "React", "JavaScript", "TypeScript", "HTML/CSS", "VBA", "Python"] },
  { category: "RPA・自動化", icon: Bot, items: ["Power Automate Desktop", "Excel VBA", "Google Apps Script"] },
  { category: "クラウド・コラボ", icon: Cloud, items: ["Microsoft 365", "Google Workspace", "GitHub"] },
  { category: "ドキュメント・設計", icon: FileText, items: ["業務フロー図", "ユーザーストーリー", "提案書", "技術検証レポート"] },
  { category: "AI映像・画像生成", icon: Clapperboard, render: true, items: ["Seedance 2.5", "MiniMax H3", "Blender", "ChatGPT（画像）", "fal", "Higgsfield"] },
  { category: "制作ライン自動化", icon: Workflow, items: ["Claude Code", "Codex（GPT-6 Astra）", "GitHub Actions", "Vercel"] },
  { category: "発信・SNS運用", icon: Megaphone, items: ["Instagram", "Threads", "X", "note"] },
];
const rows = [stacks.slice(0, 5), stacks.slice(5)];

function MarqueeRow({ stacks: row, reverse }: { stacks: Stack[]; reverse?: boolean }) {
  return <div className="tech-marquee-row"><div className={`tech-marquee-track ${reverse ? "tech-marquee-reverse" : ""}`}>{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-3 pr-3">{row.flatMap((stack) => stack.items.map((item) => <div key={`${stack.category}-${item}`} className={`tech-chip flex shrink-0 items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-medium text-slate-700 ${stack.render ? "border-render-amber" : "border-brand-navy/15"}`}><stack.icon size={16} className={stack.render ? "text-amber-500" : "text-brand-mint"} /><span>{item}</span></div>))}</div>)}</div></div>;
}

export default function TechStack() {
  return <section id="techstack" className="overflow-x-clip border-y border-brand-navy/10 bg-white py-24 md:py-32">
    <div className="mx-auto mb-14 max-w-6xl px-6"><span className="text-sm font-semibold tracking-[.18em] text-brand-mint">技術スタック</span></div>
    <div className="tech-marquee relative space-y-16" aria-label={stacks.map((s) => `${s.category}: ${s.items.join("、")}`).join("。")}>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 whitespace-nowrap text-center font-display text-[clamp(3rem,9vw,8rem)] font-bold text-brand-navy/[.06]">{stacks.map((s) => s.category).join(" / ")}</div>
      <MarqueeRow stacks={rows[0]} />
      <MarqueeRow stacks={rows[1]} reverse />
    </div>
  </section>;
}
