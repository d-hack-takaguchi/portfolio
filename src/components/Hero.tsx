"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* DX network background illustration */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.svg"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,#2ecaa015_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,#1a3a6c10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            構想から実装まで
            <br />
            <span className="text-brand-gradient">
              一気通貫でDXを推進
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            業務分析・要件定義からローコード開発・生成AI導入まで。
            現場を知るコンサルタントが、貴社の課題に最適なソリューションをご提供します。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              無料相談する
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#2ecaa0] hover:shadow-sm"
            >
              実績・事例を見る
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} className="text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
