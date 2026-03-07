"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, BarChart3, Workflow } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "クラウド移行・最適化",
    description:
      "AWS / GCP / Azure を活用したクラウドネイティブアーキテクチャの設計と移行支援。コスト最適化まで一貫して伴走します。",
  },
  {
    icon: ShieldCheck,
    title: "セキュリティ強化",
    description:
      "ゼロトラストモデルの導入から脆弱性診断まで、エンタープライズレベルのセキュリティ基盤を構築します。",
  },
  {
    icon: BarChart3,
    title: "データ分析基盤",
    description:
      "データレイク・ウェアハウスの設計からBI ダッシュボード構築まで、データドリブン経営を実現します。",
  },
  {
    icon: Workflow,
    title: "業務プロセス自動化",
    description:
      "CI/CD パイプライン構築、IaC 導入、既存ワークフローの自動化により開発生産性を飛躍的に向上させます。",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-indigo-600">
            サービス
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            包括的なITコンサルティング
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            戦略策定からハンズオン実装まで、テクノロジーのあらゆるフェーズをカバーします。
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 transition group-hover:bg-indigo-100">
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
