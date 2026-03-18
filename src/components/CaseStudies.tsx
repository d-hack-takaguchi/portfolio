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
    title: "業者登録システムのVBA → Kintone移行支援",
    description:
      "VBA＋Excelで属人化していた浄化槽業者の登録・更新業務をKintoneへ移行。As-Is/To-Be業務フロー設計とドキュメント整備を行い、マスター・サブアプリ・変更履歴記録アプリの3層構成でKintoneアプリを設計。Must要件であった変更履歴の自動生成のため、Excel数式のみ（VBAなし）で動作するCSV差分比較ツールを開発し、非IT人材でも継続運用できる仕組みを実現。",
    metrics: ["2025年〜2026年", "DXコンサルタント／ツール開発"],
    image: "/case-kintone.svg",
  },
  {
    tag: "PowerApps",
    client: "大手SIer（営業部門）",
    title: "JIRA風タスク管理システム開発",
    description:
      "営業部門の案件管理を効率化するため、PowerApps＋SharePoint/Excel Onlineによるカンバン型タスク管理アプリを設計・開発。カンバン・タスク詳細・編集・プロジェクト管理・設定の多画面アーキテクチャを実装し、コメント機能（タスクあたり最大10件、タイムスタンプ付き）やPower Automateによる更新通知フローも構築。モバイルレスポンシブ対応、デプロイ手順書・移行パッケージの整備まで一貫して担当。",
    metrics: ["2025年", "ローコードエンジニア／PJリード"],
    image: "/case-kanban.svg",
  },
  {
    tag: "MS365移行",
    client: "大手自動車メーカグループ（新規事業部門）",
    title: "新規事業提案システムのMS365エコシステム移行",
    description:
      "老朽化した既存システム（Incubation Suite）からSharePoint Online＋PowerAppsへの移行を設計。SharePointリスト設計・ユーザーストーリー作成・画面遷移図設計を行い、移行アーキテクチャ提案書を作成。内製開発チームへの技術引き継ぎとドキュメント整備を実施し、モダン環境への移行計画確立から開発チームへの完全引き継ぎまでを完遂。",
    metrics: ["2025年", "ITコンサルタント／アーキテクチャ設計"],
    image: "/case-sharepoint.svg",
  },
  {
    tag: "生成AI活用",
    client: "地方自治体（税部門）",
    title: "生成AIを活用した滞納整理案件の引継ぎ改革",
    description:
      "属人化が進んでいた督促対応業務のナレッジを生成AIで構造化・データベース化。過去の対応履歴やケース別対応方針をソースとして整理し、AIが最適な対応案を提示するプロンプトを構築。口頭引き継ぎをAIアシスト型の構造化ドキュメントに置き換え、担当者交代時の引き継ぎ工数を大幅削減。新担当者がAIに質問しながら業務を習得できる『対話型オンボーディングフロー』を設計・実装。",
    metrics: ["2025年", "企画立案・設計・開発リード"],
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
