"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Heart, MapPin } from "lucide-react";

const values = [
  { icon: Heart, title: "現場起点の課題解決", description: "机上の提案ではなく、現場の声を聞き、実際に使われるシステムを一緒に作ります。" },
  { icon: Award, title: "一気通貫の対応力", description: "上流の業務設計から実装・テスト・内製化支援まで、一人で幅広くカバーできることが強みです。" },
  { icon: GraduationCap, title: "技術移転・内製化", description: "納品して終わりではなく、お客様が自走できる仕組みづくりと知識移転を重視しています。" },
];

const skills = ["PowerApps", "AppSheet", "Kintone", "MS365", "GoogleWorkSpace", "RPA", "PowerAutomate", "OCR", "Claude / ClaudeCode", "ChatGPT", "Next.js", "Seedance", "MiniMax H3", "Blender", "GitHub Actions", "GenSpark", "powerquery", "VBA", "GAS", "HTML", "JavaScript", "jSON", "React", "TypeScript", "BPR", "要件定義"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const grayscale = useTransform(scrollYProgress, [0.12, 0.55], [1, 0]);
  const imageFilter = useTransform(grayscale, (value) => `grayscale(${reducedMotion ? 0 : value})`);

  return (
    <section ref={sectionRef} id="about" className="bg-blueprint-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-12 block text-sm font-semibold tracking-[.18em] text-brand-mint">About Me</span>
        <div className="grid items-start gap-12 md:grid-cols-[minmax(260px,.78fr)_1.22fr] md:gap-16">
          <div className="md:sticky md:top-28">
            <motion.div className="about-portrait relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-brand-navy to-brand-mint p-3 shadow-[0_24px_60px_rgba(15,37,71,.16)]" style={{ filter: imageFilter }}>
              <div className="relative h-full overflow-hidden rounded-[1.4rem]">
                <Image src="/profile.png" alt="髙口 和弥" fill sizes="(max-width: 767px) 80vw, 38vw" className="object-cover" priority={false} />
              </div>
              <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] border border-white/30" />
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
              <h3 className="text-3xl font-bold text-slate-900 md:text-5xl">髙口 和弥</h3>
              <p className="mt-2 text-sm font-medium text-brand-mint">Kazuya Takaguchi</p>
              <p className="mt-2 text-sm text-slate-500">DX・AX推進コンサルタント / ITコンサルタント / AIクリエイター</p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-600">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-brand-mint" />フルリモート対応可</span>
                <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-brand-mint" />フリーランス</span>
              </div>
              <div className="mt-8 space-y-4 border-l border-brand-navy/15 pl-6 text-slate-600">
                <p>サントリーグループのコンタクトセンター運営事業会社での経験を活かし、業務分析・要件定義からローコード開発、生成AI導入支援まで幅広く対応。行政機関・上場企業グループ・大手SIerなど多様な業種での支援実績を持ち、現場に寄り添ったDX推進が得意です。</p>
                <p>「技術」と「業務理解」の両軸を武器に、お客様が本当に使えるシステムを一緒に作り上げます。</p>
                <p>2026年からはAIクリエイターとしても活動。AIキャラクター「AI解体新書」やAIショートドラマを発信しながら、企画から公開までを自動化する制作アプリ「EMBLAZE」を自作しています。自分で作って使い込んだ生成AIの知見を、お客様の業務への導入にも還元しています。</p>
              </div>
            </motion.div>

            <div className="skill-cloud mt-10" aria-label={skills.join("、")}>
              {[skills.slice(0, 13), skills.slice(13)].map((row, rowIndex) => (
                <div key={rowIndex} className="skill-cloud-row">
                  <div className={`skill-cloud-track ${rowIndex ? "skill-cloud-track-reverse" : ""}`}>
                    {[0, 1].map((copy) => <div key={copy} aria-hidden="true" className="flex shrink-0 gap-2 pr-2">{row.map((skill) => <span key={skill} className="skill-chip rounded-full border border-brand-navy/15 bg-white px-4 py-1.5 text-xs font-medium text-brand-navy">{skill}</span>)}</div>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="mb-8 text-xl font-bold text-slate-900">大切にしていること</h3>
              <div className="space-y-4">
                {values.map((v, i) => <motion.div key={v.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-slate-900/10 bg-white p-6"><div className="rounded-2xl bg-brand-navy/5 p-3 text-brand-navy"><v.icon size={24} /></div><div><h4 className="font-semibold text-slate-900">{v.title}</h4><p className="mt-1 text-sm text-slate-600">{v.description}</p></div></motion.div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
