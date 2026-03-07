"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "クラウド移行",
    title: "大手製造業のフルクラウド化",
    description:
      "オンプレミス環境からGCP へ全面移行。インフラコスト40%削減、デプロイ頻度を月1回から日次へ向上。",
    metrics: ["コスト 40% 削減", "デプロイ頻度 30x"],
  },
  {
    tag: "データ分析",
    title: "小売チェーンの需要予測基盤構築",
    description:
      "BigQuery + Vertex AI を活用した需要予測モデルを構築。廃棄ロス25%削減と売上3%向上を実現。",
    metrics: ["廃棄ロス 25% 削減", "売上 3% 向上"],
  },
  {
    tag: "セキュリティ",
    title: "金融系SaaSのゼロトラスト導入",
    description:
      "ISMS 準拠のゼロトラストアーキテクチャを設計・実装。セキュリティインシデント発生率を95%低減。",
    metrics: ["インシデント 95% 低減", "監査工数 60% 削減"],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-indigo-600">
            導入事例
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            成果を証明する実績
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg"
            >
              <span className="mb-3 inline-block w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                {c.tag}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {c.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
                詳細を見る <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
