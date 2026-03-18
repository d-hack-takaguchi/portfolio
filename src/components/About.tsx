"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

const career = [
  {
    period: "現在",
    role: "フリーランス DX推進コンサルタント / ITコンサルタント",
    org: "DxHack（個人事業）",
    description:
      "ローコード開発・生成AI導入・業務自動化など、構想から実装まで一気通貫でDX推進を支援。",
  },
  {
    period: "前職",
    role: "DX推進コンサルタント",
    org: "コンサルティングファーム",
    description:
      "行政機関・製造業・SIerを対象にBPR、ローコード開発、システム導入支援を担当。",
  },
];

const values = [
  {
    icon: Heart,
    title: "現場起点の課題解決",
    description: "机上の提案ではなく、現場の声を聞き、実際に使われるシステムを一緒に作ります。",
  },
  {
    icon: Award,
    title: "一気通貫の対応力",
    description: "上流の業務設計から実装・テスト・内製化支援まで、一人で幅広くカバーできることが強みです。",
  },
  {
    icon: GraduationCap,
    title: "技術移転・内製化",
    description: "納品して終わりではなく、お客様が自走できる仕組みづくりと知識移転を重視しています。",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-8 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          About Me
        </span>
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex flex-col md:flex-row">
            {/* Photo side */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#1a3a6c] to-[#2ecaa0] p-10 md:w-2/5">
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/30 md:h-64 md:w-64">
                <Image
                  src="/profile.png"
                  alt="髙口 和弥"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info side */}
            <div className="flex-1 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                髙口 和弥
              </h3>
              <p className="mt-1 text-sm font-medium text-[#2ecaa0]">
                Kazuya Takaguchi
              </p>
              <p className="mt-1 text-sm text-slate-500">
                DX推進コンサルタント / ITコンサルタント
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#2ecaa0]" />
                  フルリモート対応可
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-[#2ecaa0]" />
                  フリーランス
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-slate-600">
                サントリーグループ出身。事業会社での経験を活かし、業務分析・要件定義からローコード開発、
                生成AI導入支援まで幅広く対応。行政機関・上場企業グループ・大手SIerなど
                多様な業種での支援実績を持ち、現場に寄り添ったDX推進が得意です。
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                「技術」と「業務理解」の両軸を武器に、お客様が本当に使えるシステムを
                一緒に作り上げます。
              </p>

              {/* Skill tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "PowerApps",
                  "Kintone",
                  "SharePoint",
                  "Power Automate",
                  "Claude / ChatGPT",
                  "React",
                  "TypeScript",
                  "BPR",
                  "要件定義",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-[#1a3a6c]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-900">
            大切にしていること
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#1a3a6c]/10 to-[#2ecaa0]/10 p-3 text-[#1a3a6c]">
                  <v.icon size={24} />
                </div>
                <h4 className="mb-2 font-semibold text-slate-900">{v.title}</h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
