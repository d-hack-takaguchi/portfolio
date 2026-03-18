"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseItem {
  client: string;
  title: string;
  description: string;
  image: string;
}

const cases: CaseItem[] = [
  {
    client: "大手SIer（営業部門）",
    title: "JIRA風タスク管理システム開発",
    description:
      "営業部門の案件管理を効率化するため、PowerApps＋SharePoint/Excel Onlineによるカンバン型タスク管理アプリを設計・開発。カンバン・タスク詳細・編集・プロジェクト管理・設定の多画面アーキテクチャを実装し、コメント機能（タスクあたり最大10件、タイムスタンプ付き）やPower Automateによる更新通知フローも構築。モバイルレスポンシブ対応、デプロイ手順書・移行パッケージの整備まで一貫して担当。",
    image: "/case-kanban.svg",
  },
  {
    client: "大手自動車メーカグループ（新規事業部門）",
    title: "新規事業提案システムのMS365エコシステム移行",
    description:
      "老朽化した既存システム（Incubation Suite）からSharePoint Online＋PowerAppsへの移行を設計。SharePointリスト設計・ユーザーストーリー作成・画面遷移図設計を行い、移行アーキテクチャ提案書を作成。内製開発チームへの技術引き継ぎとドキュメント整備を実施し、モダン環境への移行計画確立から開発チームへの完全引き継ぎまでを完遂。",
    image: "/case-sharepoint.svg",
  },
  {
    client: "地方自治体（税部門）",
    title: "生成AIを活用した滞納整理案件の引継ぎ改革",
    description:
      "属人化が進んでいた督促対応業務のナレッジを生成AIで構造化・データベース化。過去の対応履歴やケース別対応方針をソースとして整理し、AIが最適な対応案を提示するプロンプトを構築。口頭引き継ぎをAIアシスト型の構造化ドキュメントに置き換え、担当者交代時の引き継ぎ工数を大幅削減。新担当者がAIに質問しながら業務を習得できる『対話型オンボーディングフロー』を設計・実装。",
    image: "/case-bpr.svg",
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
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
