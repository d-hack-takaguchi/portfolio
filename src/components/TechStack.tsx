"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Sparkles,
  Code,
  Bot,
  Cloud,
  FileText,
} from "lucide-react";

const stacks = [
  {
    category: "ローコード・ノーコード",
    icon: Blocks,
    items: ["PowerApps", "Power Automate", "Kintone", "SharePoint"],
  },
  {
    category: "生成AI・AIツール",
    icon: Sparkles,
    items: ["Claude", "ChatGPT", "Gemini", "NotebookLM", "Claude Code"],
  },
  {
    category: "開発言語・フレームワーク",
    icon: Code,
    items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "VBA", "Python"],
  },
  {
    category: "RPA・自動化",
    icon: Bot,
    items: ["Power Automate Desktop", "Excel VBA", "Google Apps Script"],
  },
  {
    category: "クラウド・コラボ",
    icon: Cloud,
    items: ["Microsoft 365", "Google Workspace", "GitHub"],
  },
  {
    category: "ドキュメント・設計",
    icon: FileText,
    items: ["業務フロー図", "ユーザーストーリー", "提案書", "技術検証レポート"],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-8 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          技術スタック
        </span>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-[#1a3a6c]/10 to-[#2ecaa0]/10 p-2 text-[#1a3a6c]">
                  <s.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900">{s.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
