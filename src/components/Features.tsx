"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Blocks, Bot, FileSearch, Clapperboard, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "DX・AX推進コンサルティング", description: "課題ヒアリングからロードマップ策定、実行支援まで。As-Is/To-Be分析に基づくBPR提案で、DXの全体像を描きます。" },
  { icon: Blocks, title: "ローコード開発", description: "PowerApps・Power Automate・Kintone・SharePointによるアプリ・ワークフロー構築。短期間で業務に直結するシステムを実現します。" },
  { icon: Bot, title: "生成AI導入支援", description: "Claude・ChatGPT・Gemini等の業務活用を支援。プロンプト設計から業務プロセスへの組み込みまで伴走します。" },
  { icon: FileSearch, title: "RPA・OCR自動化・Web開発", description: "Power Automate Desktop・VBA・AI-OCRによる業務自動化と、React/TypeScriptによるWebアプリ開発。要件定義から画面設計まで対応します。" },
  { icon: Clapperboard, title: "AIコンテンツ制作・制作ライン構築", description: "AIキャラクター・ショートドラマの制作と、企画から公開までを自動化する制作ラインの設計・構築。SNS発信の仕組みづくりまで支援します。", isNew: true },
  { icon: Users, title: "内製化支援・技術移転", description: "担当者が自走できる仕組みづくり。技術ドキュメント整備・ハンズオン支援で、持続可能な運用体制を構築します。" },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, reduce ? 0 : -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);
  const columns = [features.filter((_, i) => i % 2 === 0), features.filter((_, i) => i % 2 === 1)];

  return (
    <section ref={ref} id="features" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <span className="mb-12 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">サービス</span>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {columns.map((column, columnIndex) => (
            <motion.div key={columnIndex} className={`space-y-6 md:space-y-8 ${columnIndex ? "md:pt-[60px]" : ""}`} style={{ y: columnIndex ? rightY : leftY }}>
              {column.map((f, i) => (
                <motion.article key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .08, duration: .7 }} className="feature-card group relative overflow-hidden rounded-3xl p-px">
                  <div className="relative h-full rounded-[calc(1.5rem-1px)] border border-slate-200 bg-white p-7 md:p-8">
                    {f.isNew && <span aria-hidden className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-[#ffb84d] shadow-[0_0_16px_rgba(255,184,77,.75)]" />}
                    <div className="mb-5 inline-flex rounded-2xl bg-[#1a3a6c]/[.06] p-3.5 text-[#1a3a6c]">
                      <f.icon size={27} strokeWidth={1.5} className="feature-icon" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">{f.title}</h3>
                    <p className="text-sm leading-[1.9] text-slate-600">{f.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
