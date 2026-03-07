"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f033_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f033_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700">
            IT戦略 &times; テクノロジー
          </span>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
            テクノロジーで
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ビジネスを加速
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            クラウドネイティブ・アーキテクチャの設計から実装まで。
            DX推進のパートナーとして、貴社のIT戦略を成功に導きます。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              無料相談を予約
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:shadow-sm"
            >
              導入事例を見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
