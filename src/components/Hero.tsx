"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const firstLine = "構想から実装まで";
const secondLineStart = "一気通貫で";
const secondLineAccent = "DX・AX";
const secondLineEnd = "を推進";

function AnimatedCharacters({ text, offset = 0 }: { text: string; offset?: number }) {
  const reducedMotion = useReducedMotion();

  return <>{Array.from(text).map((character, index) => (
    <motion.span
      aria-hidden="true"
      className="inline-block"
      initial={reducedMotion ? false : { opacity: 0, y: ".45em" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reducedMotion ? 0 : (offset + index) * .03, duration: .65, ease: [.22, 1, .36, 1] }}
      key={`${character}-${index}`}
    >
      {character}
    </motion.span>
  ))}</>;
}

function BlueprintScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="blueprint-small-grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M 42 0 L 0 0 0 42" fill="none" stroke="currentColor" strokeOpacity=".16" strokeWidth="1" />
        </pattern>
        <linearGradient id="blueprint-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset=".38" stopColor="white" stopOpacity=".34" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <mask id="floor-fade"><rect width="1600" height="900" fill="url(#blueprint-fade)" /></mask>
      </defs>

      <g className="blueprint-floor" mask="url(#floor-fade)" fill="none" stroke="currentColor" strokeWidth="1.25" opacity=".55">
        {[-800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400].map((x) =>
          <path key={x} d={`M800 335 L${x} 900`} />)}
        {[370, 415, 470, 540, 625, 730, 855].map((y) =>
          <path key={y} d={`M${800 - (y - 335) * 2.85} ${y} H${800 + (y - 335) * 2.85}`} />)}
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="2" opacity=".58">
        <path d="M155 305 335 250l180 76-178 61z M155 305v183l182 82V387 M337 570l178-70V326" />
        <path d="m155 488 180-61 180 73 M335 250v177" strokeDasharray="7 8" opacity=".55" />
        <path d="M1275 235 1418 285v171l-143 58-142-60V285z M1133 285l142 54 143-54 M1275 339v175" />
        <path d="M1133 454l142-62 143 64 M1275 235v157" strokeDasharray="7 8" opacity=".55" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="2" opacity=".7">
        <ellipse cx="1164" cy="500" rx="42" ry="50" />
        <path d="M1122 486c8-36 22-57 43-58 22 1 37 23 41 60M1141 542v26c-41 13-66 55-70 131M1187 542v26c41 13 66 55 70 131M1103 699l18-94m104 94-18-94M1142 568l22 15 23-15v132" />
        <path d="M1147 505h8m18 0h8m-24 20h15" strokeWidth="1.3" />
        <path d="M1071 699h186 M1060 714h208" strokeDasharray="6 8" opacity=".45" />
      </g>

      <g fill="currentColor" opacity=".38">
        <circle cx="155" cy="305" r="4" /><circle cx="515" cy="326" r="4" /><circle cx="337" cy="570" r="4" />
        <circle cx="1133" cy="285" r="4" /><circle cx="1418" cy="285" r="4" /><circle cx="1275" cy="514" r="4" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const sceneX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const sceneY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 150]);
  const accentReveal = useTransform(scrollYProgress, [0, .32], [reducedMotion ? "100%" : "0%", "100%"]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || window.innerWidth < 768) return;
    const x = event.clientX / window.innerWidth - .5;
    const y = event.clientY / window.innerHeight - .5;
    pointerX.set(x * 5);
    pointerY.set(y * -4);
  };

  const characterOffset = firstLine.length + secondLineStart.length;

  return (
    <section ref={sectionRef} onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }} className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#f4f6f9] pt-20 text-[#0f172a]">
      <motion.div className="pointer-events-none absolute -inset-8 text-[#1a3a6c] [transform-style:preserve-3d]" style={{ y: gridY, rotateY: sceneX, rotateX: sceneY }}>
        <BlueprintScene />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(244,246,249,.96),rgba(244,246,249,.62)_48%,rgba(244,246,249,.2)),radial-gradient(circle_at_50%_42%,transparent_0%,rgba(244,246,249,.38)_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-10">
        <div className="max-w-6xl">
          <h1 aria-label={`${firstLine} ${secondLineStart}${secondLineAccent}${secondLineEnd}`} className="font-display text-[clamp(2rem,8vw,6.25rem)] font-bold tracking-[-.055em] text-[#0f172a]">
            {/* 2行目（約10.4文字分）が 390px 幅の余白内にも収まる大きさ。nowrap なので、はみ出すと画面の外で切れる */}
            <span className="block whitespace-nowrap"><AnimatedCharacters text={firstLine} /></span>
            <span className="block whitespace-nowrap">
              <AnimatedCharacters text={secondLineStart} offset={firstLine.length} />
              <span className="relative inline-block">
                <span className="text-[#1a3a6c]"><AnimatedCharacters text={secondLineAccent} offset={characterOffset} /></span>
                <motion.span aria-hidden className="absolute inset-0 overflow-hidden whitespace-nowrap bg-gradient-to-r from-[#1a3a6c] to-[#2ecaa0] bg-clip-text text-transparent" style={{ width: accentReveal }}>
                  {secondLineAccent}
                </motion.span>
              </span>
              <AnimatedCharacters text={secondLineEnd} offset={characterOffset + secondLineAccent.length} />
            </span>
          </h1>

          <motion.p initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : 1.05, duration: .8, ease: [.22, 1, .36, 1] }} className="mt-7 max-w-2xl text-base leading-[1.9] text-slate-600 md:text-lg">
            業務分析・要件定義からローコード開発・生成AI導入まで。
            現場を知るコンサルタントが、貴社の課題に最適なソリューションをご提供します。
            いまはAIキャラクターとAIショートドラマの制作にも取り組み、作る仕組みごと形にしています。
          </motion.p>

          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : 1.15, duration: .8, ease: [.22, 1, .36, 1] }} className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#1a3a6c] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f2547]">
              無料相談する <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#cases" className="inline-flex items-center gap-2 rounded-full border border-[#1a3a6c]/25 bg-[#f4f6f9]/80 px-8 py-3.5 text-sm font-semibold text-[#0f2547] transition-colors hover:border-[#1a3a6c]">実績・事例を見る</a>
            <a href="#creator" className="inline-flex items-center gap-2 rounded-full border border-[#1a3a6c]/25 bg-[#f4f6f9]/80 px-8 py-3.5 text-sm font-semibold text-[#0f2547] transition-colors hover:border-[#1a3a6c]">AIクリエイター活動</a>
          </motion.div>
        </div>
      </div>

      <motion.div aria-hidden initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }} className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 overflow-hidden bg-[#1a3a6c]/20">
        <motion.span className="block h-1/2 w-full bg-[#1a3a6c]" animate={reducedMotion ? undefined : { y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
