"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Instagram,
  BookOpen,
  AtSign,
} from "lucide-react";
import { CreatorStats, CreatorWorks } from "./CreatorPhase3";
import { Principles, ProductionStory, Vision } from "./CreatorPhase4";

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
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "start start"] });
  const colorWidth = useTransform(scrollYProgress, [0, .7], [reducedMotion ? "100%" : "0%", "100%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 0 : -70, 0]);

  return (
    <section ref={sectionRef} id="creator" className="creator-section relative overflow-hidden bg-[#0a0f1a] pb-24 pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden">
        <motion.div className="absolute -inset-x-20 -top-40 h-[440px] origin-top [transform:perspective(500px)_rotateX(62deg)]" style={{ y: gridY }}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,237,245,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(232,237,245,.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <motion.div className="absolute inset-0 overflow-hidden" style={{ width: colorWidth }}>
            <div className="h-full w-[calc(100vw+10rem)] bg-[linear-gradient(rgba(46,202,160,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,184,77,.26)_1px,transparent_1px)] bg-[size:42px_42px]" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#0a0f1a]/55 to-[#0a0f1a]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="mb-4 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
          AIクリエイター活動
        </span>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-snug text-[#e8edf5] md:text-4xl">
          AIで「作品」を作り、
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#2ecaa0] to-[#ffb84d] bg-clip-text text-transparent">作る仕組みまで自分で組む</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-slate-300">
          2026年9月から、AIキャラクターとAIショートドラマの制作・発信を始めました。
          コンサルで培った業務設計と実装の力を、クリエイティブの制作ラインづくりにも使っています。
          作品を出すたびにメイキングも公開し、仕組みそのものを見せながら育てています。
        </p>

        <CreatorStats />
        <CreatorWorks />

        <ProductionStory />
        <Principles />
        <Vision />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-5 py-2.5 text-sm font-semibold text-[#e8edf5] transition hover:border-[#ffb84d] hover:bg-white/10"
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
