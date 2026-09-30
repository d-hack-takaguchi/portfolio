"use client";

import { MouseEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const cases = [
  { client: "大手SIer（営業部門）", title: "JIRA風タスク管理システム開発", description: "営業部門の案件管理を効率化するため、PowerApps＋SharePoint/Excel Onlineによるカンバン型タスク管理アプリを設計・開発。カンバン・タスク詳細・編集・プロジェクト管理・設定の多画面アーキテクチャを実装し、コメント機能（タスクあたり最大10件、タイムスタンプ付き）やPower Automateによる更新通知フローも構築。モバイルレスポンシブ対応、デプロイ手順書・移行パッケージの整備まで一貫して担当。", image: "/case-kanban.svg" },
  { client: "大手自動車メーカグループ（新規事業部門）", title: "新規事業提案システムのMS365エコシステム移行", description: "老朽化した既存システム（Incubation Suite）からSharePoint Online＋PowerAppsへの移行を設計。SharePointリスト設計・ユーザーストーリー作成・画面遷移図設計を行い、移行アーキテクチャ提案書を作成。内製開発チームへの技術引き継ぎとドキュメント整備を実施し、モダン環境への移行計画確立から開発チームへの完全引き継ぎまでを完遂。", image: "/case-sharepoint.svg" },
  { client: "地方自治体（税部門）", title: "生成AIを活用した滞納整理案件の引継ぎ改革", description: "属人化が進んでいた督促対応業務のナレッジを生成AIで構造化・データベース化。過去の対応履歴やケース別対応方針をソースとして整理し、AIが最適な対応案を提示するプロンプトを構築。口頭引き継ぎをAIアシスト型の構造化ドキュメントに置き換え、担当者交代時の引き継ぎ工数を大幅削減。新担当者がAIに質問しながら業務を習得できる『対話型オンボーディングフロー』を設計・実装。", image: "/case-bpr.svg" },
];

function CaseCard({ item, index }: { item: typeof cases[number]; index: number }) {
  const rotateX = useMotionValue(0), rotateY = useMotionValue(0), glowX = useMotionValue("50%"), glowY = useMotionValue("50%");
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(46,202,160,.16), transparent 30%)`;
  const onMove = (e: MouseEvent<HTMLElement>) => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height; rotateY.set((x-.5)*12); rotateX.set((.5-y)*12); glowX.set(`${x*100}%`); glowY.set(`${y*100}%`); };
  const reset = () => { rotateX.set(0); rotateY.set(0); };
  return <motion.article onMouseMove={onMove} onMouseLeave={reset} style={{ rotateX, rotateY, transformPerspective: 900 }} className="case-card group relative w-full shrink-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white md:w-[min(80vw,720px)]">
    <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: glow }} />
    <span aria-hidden className="absolute left-5 top-36 z-10 font-display text-[7rem] font-bold leading-none text-[#1a3a6c]/[.08] md:left-8 md:top-44 md:text-[10rem]">{String(index+1).padStart(2,"0")}</span>
    <div className="relative aspect-[16/7] overflow-hidden"><Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]" sizes="(max-width: 767px) 100vw, 720px" /></div>
    <div className="relative z-10 p-7 md:p-10"><span className="text-xs text-slate-500">{item.client}</span><h3 className="mb-3 mt-2 text-xl font-bold text-slate-900 md:text-2xl">{item.title}</h3><p className="text-sm leading-[1.9] text-slate-600">{item.description}</p></div>
  </motion.article>;
}

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null); const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0,1], ["0%", reduce ? "0%" : "-68%"]);
  return <section ref={ref} id="cases" className="bg-[#f4f6f9] py-24 md:h-[300vh] md:py-0">
    <div className="mx-auto max-w-6xl px-6 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden">
      <div className="mb-10 md:mb-12"><span className="mb-4 block text-sm font-semibold tracking-wide text-[#2ecaa0]">実績・事例</span><h2 className="max-w-3xl text-3xl font-bold leading-snug text-slate-900 md:text-4xl">DX・AX推進支援の<span className="text-brand-gradient">具体的な実績</span></h2></div>
      <motion.div style={{ x }} className="cases-track flex flex-col gap-7 md:w-max md:flex-row md:gap-10 md:pr-[30vw]">{cases.map((c,i)=><CaseCard key={c.title} item={c} index={i}/>)}</motion.div>
    </div>
  </section>;
}
