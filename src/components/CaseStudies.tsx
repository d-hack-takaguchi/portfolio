"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseItem {
  tag: string;
  client: string;
  title: string;
  description: string;
  metrics: string[];
  image: string;
}

const cases: CaseItem[] = [
  {
    tag: "Kintone移行",
    client: "地方自治体（環境部門）",
    title: "業者登録システムの Kintone 移行",
    description:
      "Excel管理の浄化槽業者登録・更新業務をデジタル化。As-Is/To-Be業務フロー設計、Kintoneアプリ設計、CSV差分比較ツール開発を実施。",
    metrics: ["手作業確認の大幅削減", "段階的移行計画策定"],
    image: "/case-kintone.svg",
  },
  {
    tag: "PowerApps",
    client: "大手SIer（営業部門）",
    title: "JIRA風タスク管理システム構築",
    description:
      "PowerApps + SharePointによるカンバン型タスク管理アプリを開発。コメント・日付管理・モバイル対応・Power Automate通知連携を実装。",
    metrics: ["案件ステータス可視化", "フォローアップ漏れ防止"],
    image: "/case-kanban.svg",
  },
  {
    tag: "SharePoint移行",
    client: "大手製造業グループ（新規事業部門）",
    title: "新規事業提案システムのモダン化",
    description:
      "既存システムからSharePoint Online + PowerAppsへの移行を推進。SharePointリスト設計、ユーザーストーリー作成、画面遷移図設計を担当。",
    metrics: ["モダン環境への移行確立", "内製チームへ技術移転"],
    image: "/case-sharepoint.svg",
  },
  {
    tag: "BPR提案",
    client: "地方自治体（教育局）",
    title: "休憩室情報管理システムの電子化",
    description:
      "紙・口頭ベースの情報管理をKintone/SharePointで電子化する提案を実施。現状課題の整理からシステム化提案まで担当。",
    metrics: ["電子化方針の合意形成", "低運用負荷の仕組み設計"],
    image: "/case-bpr.svg",
  },
  {
    tag: "技術支援",
    client: "大手SIer（技術顧問）",
    title: "PowerAppsアプリの機能拡張・技術支援",
    description:
      "既存PowerAppsアプリへの追加機能実装、パフォーマンス改善、Power Automate連携強化。内製チームのスキルアップ支援も並行実施。",
    metrics: ["スケジュール通りリリース", "保守性の大幅向上"],
    image: "/case-support.svg",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-8 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          実績・事例
        </span>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#2ecaa0]/40 hover:shadow-lg"
            >
              {/* Card image header */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Tag overlay */}
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1a3a6c] shadow-sm backdrop-blur-sm">
                    {c.tag}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs text-slate-500">{c.client}</span>
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
                      className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-[#1a3a6c]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
