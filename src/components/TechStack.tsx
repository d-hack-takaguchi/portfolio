"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Container,
  GitBranch,
  Monitor,
  Lock,
} from "lucide-react";

const stacks = [
  {
    category: "クラウド",
    icon: Cloud,
    items: ["Google Cloud", "AWS", "Azure", "Terraform"],
  },
  {
    category: "コンテナ & オーケストレーション",
    icon: Container,
    items: ["Docker", "Kubernetes", "Cloud Run", "Istio"],
  },
  {
    category: "データベース & 分析",
    icon: Database,
    items: ["BigQuery", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    category: "CI/CD & DevOps",
    icon: GitBranch,
    items: ["GitHub Actions", "Cloud Build", "ArgoCD", "Datadog"],
  },
  {
    category: "フロントエンド",
    icon: Monitor,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "セキュリティ",
    icon: Lock,
    items: ["IAM", "Secret Manager", "WAF", "SIEM"],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-indigo-600">
            技術スタック
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            幅広い技術領域をカバー
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
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
