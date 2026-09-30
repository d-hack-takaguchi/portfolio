"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  Users,
  Workflow,
  ArrowUpRight,
  Instagram,
  BookOpen,
  AtSign,
} from "lucide-react";

const works = [
  {
    icon: Users,
    label: "AIキャラクター",
    title: "AI解体新書",
    description:
      "生成AIでキャラクターを設計し、顔・体格・髪・職業までを1体ずつ「プロファイル」として定義。40体以上のAIタレント候補を、Instagramのリールで連載形式で公開しています。",
    href: "https://www.instagram.com/kazuya_dhack_ai",
    cta: "Instagramで見る",
  },
  {
    icon: Clapperboard,
    label: "AIショートドラマ",
    title: "お会計 / 退職代行",
    description:
      "AIタレントが出演するショートドラマ。企画・脚本・絵コンテ・生成・編集までを一本のラインで制作。第1作「お会計」は公開から約3日で約3,200回再生されました。",
    href: "https://www.instagram.com/reel/DdvqzMDJ6GC/",
    cta: "「お会計」を見る",
  },
  {
    icon: Workflow,
    label: "制作アプリ",
    title: "EMBLAZE",
    description:
      "ネタを送って承認するだけでAIショートドラマができる、1人用の動画制作アプリ。人は判断だけ、手を動かすのはAI。直近の4カット・42秒の作品は、自分の作業約10分・生成費用720円でした。",
    href: "https://note.com/kazuya_dhack_ai/n/na5b54681d0d0",
    cta: "仕組みを読む（note）",
  },
];

const steps = [
  "ネタを1行送る",
  "企画・脚本・絵コンテを生成",
  "配役・衣装・場面画像を決める",
  "全カットの動画を生成",
  "組み立てて完パケ",
  "承認して公開",
  "SNSにメイキングを自動投稿",
  "実績を回収して次の企画へ",
];

const links = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kazuya_dhack_ai",
  },
  {
    icon: AtSign,
    label: "Threads",
    href: "https://www.threads.com/@dhack.ai",
  },
  {
    icon: BookOpen,
    label: "note",
    href: "https://note.com/kazuya_dhack_ai",
  },
];

export default function AICreator() {
  return (
    <section id="creator" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-4 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          AIクリエイター活動
        </span>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-snug text-slate-900 md:text-4xl">
          AIで「作品」を作り、
          <br className="hidden sm:block" />
          <span className="text-brand-gradient">作る仕組みまで自分で組む</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-slate-600">
          2026年9月から、AIキャラクターとAIショートドラマの制作・発信を始めました。
          コンサルで培った業務設計と実装の力を、クリエイティブの制作ラインづくりにも使っています。
          作品を出すたびにメイキングも公開し、仕組みそのものを見せながら育てています。
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2ecaa0]/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-[#1a3a6c]/10 to-[#2ecaa0]/10 p-3 text-[#1a3a6c]">
                  <w.icon size={24} />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {w.label}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {w.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                {w.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3a6c] transition group-hover:text-[#2ecaa0]">
                {w.cta}
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Production line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10"
        >
          <h3 className="text-center text-lg font-bold text-slate-900">
            1本ができるまで
          </h3>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-white">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">
            掲載している人物・映像・音声はすべてAIで生成したフィクションです。
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#2ecaa0] hover:shadow-sm"
            >
              <l.icon size={16} className="text-[#2ecaa0]" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
