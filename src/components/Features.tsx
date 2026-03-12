"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Blocks,
  Bot,
  FileSearch,
  Code,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "DX推進コンサルティング",
    description:
      "課題ヒアリングからロードマップ策定、実行支援まで。As-Is/To-Be分析に基づくBPR提案で、DXの全体像を描きます。",
  },
  {
    icon: Blocks,
    title: "ローコード開発",
    description:
      "PowerApps・Power Automate・Kintone・SharePointによるアプリ・ワークフロー構築。短期間で業務に直結するシステムを実現します。",
  },
  {
    icon: Bot,
    title: "生成AI導入支援",
    description:
      "Claude・ChatGPT・Gemini等の業務活用を支援。プロンプト設計から業務プロセスへの組み込みまで伴走します。",
  },
  {
    icon: FileSearch,
    title: "RPA・OCR自動化",
    description:
      "Power Automate Desktop・VBA・AI-OCRを活用した業務自動化。帳票処理やデータ入力の工数を大幅に削減します。",
  },
  {
    icon: Code,
    title: "システム・Web開発",
    description:
      "React/TypeScriptによるWebアプリ開発、要件定義・画面設計・技術選定支援まで、開発フェーズを幅広くカバーします。",
  },
  {
    icon: Users,
    title: "内製化支援・技術移転",
    description:
      "担当者が自走できる仕組みづくり。技術ドキュメント整備・ハンズオン支援で、持続可能な運用体制を構築します。",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-8 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          サービス
        </span>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2ecaa0]/40 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#1a3a6c]/10 to-[#2ecaa0]/10 p-3 text-[#1a3a6c] transition group-hover:from-[#1a3a6c]/15 group-hover:to-[#2ecaa0]/15">
                <f.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
