"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { views } from "@/data/views";

const stats = [
  { prefix: "0 → 約", target: 7500, suffix: "", label: "フォロワー0・投稿開始から16日間の累計再生回数", duration: 1600 },
  { prefix: "", target: 23, suffix: "本", label: "同期間に公開したリール（AI解体新書・AIショートドラマ）", duration: 1100 },
  { prefix: "約", target: 3200, suffix: "", label: "最も伸びた1本（AIショートドラマ「お会計」）の再生回数", duration: 1400 },
];

function Count({ target, duration }: { target: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null); const visible = useInView(ref, { once: true, amount: .8 }); const reduce = useReducedMotion(); const [value,setValue] = useState(reduce ? target : 0);
  useEffect(() => { if (!visible || reduce) { if (reduce) setValue(target); return; } let frame=0; const start=performance.now(); const tick=(now:number)=>{ const p=Math.min((now-start)/duration,1); setValue(Math.round(target*(1-Math.pow(2,-10*p)))); if(p<1) frame=requestAnimationFrame(tick); else setValue(target); }; frame=requestAnimationFrame(tick); return()=>cancelAnimationFrame(frame); },[visible,reduce,target,duration]);
  return <span ref={ref}>{value.toLocaleString("ja-JP")}</span>;
}

export function CreatorStats() {
  const min=2000,max=7800; const points=views.map((v,i)=>`${30+i*(940/(views.length-1))},${210-(v.total-min)/(max-min)*160}`).join(" ");
  return <>
    <div className="mt-12 grid gap-4 sm:grid-cols-3">{stats.map(st=><div key={st.label} className="rounded-3xl border border-white/10 bg-white/[.045] p-6 text-center shadow-[inset_0_1px_rgba(255,255,255,.06)] backdrop-blur-sm"><div data-numeric className="font-display text-3xl font-bold text-[#e8edf5] md:text-4xl"><span className="text-[#2ecaa0]">{st.prefix}</span><Count target={st.target} duration={st.duration}/>{st.suffix}</div><p className="mt-3 text-xs leading-relaxed text-slate-400">{st.label}</p></div>)}</div>
    <p className="mt-3 text-center text-xs text-slate-400">2026年9月14日に投稿を開始（Instagram、時点：9月29日）</p>
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/[.035] p-4 md:p-8">
      <svg viewBox="0 0 1000 250" role="img" aria-label="2026年9月14日から9月28日までの累計再生回数の推移" className="w-full overflow-visible">
        {[50,90,130,170,210].map(y=><line key={y} x1="30" x2="970" y1={y} y2={y} stroke="rgba(232,237,245,.08)" />)}
        <motion.polyline points={points} fill="none" stroke="#2ecaa0" strokeWidth="4" strokeLinejoin="round" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true,amount:.5}} transition={{duration:1.6,ease:[.22,1,.36,1]}} />
        {views.map((v,i)=>{const x=30+i*(940/(views.length-1)),y=210-(v.total-min)/(max-min)*160; return <g key={v.date}><circle cx={x} cy={y} r="4" fill="#0a0f1a" stroke="#2ecaa0" strokeWidth="3"/>{i===6&&<text x={x} y={y-16} textAnchor="middle" fill="#ffb84d" fontSize="13">お会計</text>}{i===views.length-1&&<><circle cx={x} cy={y} r="9" fill="none" stroke="#ffb84d" className="chart-pulse"/><text x={x-4} y={y-18} textAnchor="end" fill="#e8edf5" fontSize="13">9/28・7,512</text></>}</g>})}
      </svg>
    </div>
  </>;
}

type Work = { label:string; title:string; description:string; href:string; cta:string; media?:{video:string;poster:string} };
const works: Work[] = [
  { label:"AIキャラクター", title:"AI解体新書", description:"生成AIでキャラクターを設計し、顔・体格・髪・職業までを1体ずつ「プロファイル」として定義。40体以上のAIタレント候補を、Instagramのリールで連載形式で公開しています。", href:"https://www.instagram.com/kazuya_dhack_ai", cta:"Instagramで見る" },
  { label:"AIショートドラマ", title:"お会計 / 退職代行", description:"AIタレントが出演するショートドラマ。企画・脚本・絵コンテ・生成・編集までを一本のラインで制作。第1作「お会計」は公開から約3日で約3,200回再生されました。", href:"https://www.instagram.com/reel/DdvqzMDJ6GC/", cta:"「お会計」を見る" },
  { label:"制作アプリ", title:"EMBLAZE", description:"ネタを送って承認するだけでAIショートドラマができる、1人用の動画制作アプリ。人は判断だけ、手を動かすのはAI。直近の4カット・42秒の作品は、自分の作業約10分・生成費用720円でした。", href:"https://note.com/kazuya_dhack_ai/n/na5b54681d0d0", cta:"仕組みを読む（note）" },
];

function Artwork({ index }: { index:number }) {
  if(index===0)return <svg viewBox="0 0 240 420" className="h-full w-full"><g className="art-lines" fill="none" stroke="#93a4bd" strokeWidth="1.5"><path d="M74 151C71 92 88 54 120 54s49 38 46 97c-3 61-24 91-46 91s-43-30-46-91Z"/><path d="M86 115q34-28 68 0M102 146h5m26 0h5M108 177q12 8 24 0M120 242v78M74 290q46-31 92 0M55 390q8-83 65-83t65 83"/><path d="M72 140H28m140 0h44M93 174H35m112 0h55M120 244H36M73 309H25m142 0h48"/></g>{[[28,140],[212,140],[35,174],[202,174],[36,244]].map(([x,y])=><circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#ffb84d"/> )}</svg>;
  if(index===1)return <svg viewBox="0 0 240 420" className="h-full w-full"><g className="art-lines" fill="none" stroke="#93a4bd" strokeWidth="1.5">{[20,117,214,311].map((y,i)=><g key={y}><rect x="18" y={y} width="204" height="89" rx="5" fill={i===3?"rgba(46,202,160,.18)":"none"}/><circle cx="145" cy={y+31} r="13"/><path d={`M145 ${y+44}v28m-17 5q17-20 34 0M70 ${y+26}q18-15 36 0v48H70Z`}/></g>)}</g></svg>;
  return <svg viewBox="0 0 240 420" className="h-full w-full"><g className="art-lines" fill="none" stroke="#93a4bd" strokeWidth="1.5"><rect x="15" y="20" width="210" height="380" rx="8"/><path d="M70 20v380M28 57h29M28 82h22M28 107h30"/>{Array.from({length:8},(_,i)=><g key={i}><rect x="88" y={48+i*38} width="110" height="12" rx="6"/><path stroke="#2ecaa0" strokeWidth="5" d={`M91 ${54+i*38}h${20+i*9}`}/></g>)}<circle cx="172" cy="356" r="24" stroke="#ffb84d"/><path stroke="#ffb84d" d="m157 356 10 10 20-23"/></g></svg>;
}

export function CreatorWorks() { return <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">{works.map((w,i)=><motion.a key={w.title} href={w.href} target="_blank" rel="noopener noreferrer" initial={{opacity:0,y:45,rotate:i===0?-3:i===2?3:0}} whileInView={{opacity:1,y:0,rotate:i===0?-3:i===2?3:0}} whileHover={{y:-12,rotate:0,zIndex:10}} viewport={{once:true,amount:.25}} transition={{duration:.75,delay:i*.1}} className={`group relative flex flex-col rounded-[2rem] border border-white/10 bg-[#111827] p-5 shadow-2xl ${i===0?"md:translate-x-8":i===2?"md:-translate-x-8":"md:z-[2]"}`}>
    <div className="mx-auto w-full max-w-[240px] rounded-[2rem] border-[7px] border-[#202a3b] bg-[#0c1320] p-2 shadow-[0_20px_60px_rgba(0,0,0,.45)]"><div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-slate-700"/><div className="aspect-[9/16] overflow-hidden rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_20%,rgba(46,202,160,.12),transparent_42%)]">{w.media?<video src={w.media.video} poster={w.media.poster} muted playsInline className="h-full w-full object-cover"/>:<Artwork index={i}/>}</div></div>
    <div className="flex flex-1 flex-col px-1 pb-2 pt-6"><span className="text-xs font-medium text-[#2ecaa0]">{w.label}</span><h3 className="mb-2 mt-1 text-xl font-bold text-[#e8edf5]">{w.title}</h3><p className="mb-5 flex-1 text-sm leading-[1.85] text-slate-400">{w.description}</p><span className="inline-flex items-center gap-1 text-sm font-semibold text-[#ffb84d]">{w.cta}<ArrowUpRight size={14}/></span></div>
  </motion.a>)}</div>; }
