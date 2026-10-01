"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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

const principles = [
  { title: "AIっぽさは「シチュエーションの再現性」で消す", description: "AI動画が不自然に見えるのは、場面ごとに人物・場所・画角が毎回ばらつくから。同じ人物が、同じ質感の場所で、狙った画角で動く。この再現性を先に設計することを一番大事にしています。" },
  { title: "AI解体新書：人物を「設計図」にして固定する", description: "顔・体格・肌・髪・職業を1体ずつプロファイルとして定義し、同じ顔で出演させ続けます。ファンがつくのは作品ではなく人物なので、ここが崩れない仕組みを最初に作りました。" },
  { title: "カット割りを、撮る前に決める", description: "1本を最大4カット・起承転結に分け、カットごとに秒数・動き・セリフ・言い方まで絵コンテで決めてから生成します。生成してから考えると、やり直しがそのままコストになります。" },
  { title: "Blenderの3D絵コンテで、やり直しの費用を先に消す", description: "灰色の3Dで画角・カメラの動き・人物の位置を先に動画で確認し、直しは安い段で済ませてから本番の生成に進みます。AI動画生成の「回して、外して、また回す」という無駄なコストを抑えます。" },
  { title: "仕組みにして、属人化とスキル格差をなくす", description: "監督の観点表・撮影ルール・プロンプトの型・承認の手順を文書とアプリに落とし込み、勘に頼らず誰がやっても同じ品質になる形にしています。制作ラインとして人に渡せることが、支援の価値になると考えています。" },
];

function ProcessScreen({ step }: { step: number }) {
  const storyboard = step === 1 || step === 2;
  const render = step === 3;
  const timeline = step === 4 || step === 5;
  const loop = step >= 6;
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1524] shadow-[0_30px_90px_rgba(0,0,0,.45)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4" aria-hidden>
        <i className="h-1.5 w-1.5 rounded-full bg-[#ffb84d]" /><i className="h-1.5 w-1.5 rounded-full bg-white/20" /><i className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-9 p-5 md:p-8">
        {step === 0 && <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.1 }} className="mt-[28%] h-3 rounded-full bg-gradient-to-r from-[#2ecaa0] to-[#e8edf5]" />}
        {storyboard && <div className="grid h-full grid-cols-2 gap-3">{Array.from({ length: 4 }, (_, i) => <motion.div key={i} initial={{ opacity: 0, rotateY: 80 }} animate={{ opacity: 1, rotateY: 0 }} transition={{ delay: i * .12 }} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[.04]"><span className="absolute left-[20%] top-[22%] h-8 w-8 rounded-full border border-slate-500"/><span className="absolute bottom-[18%] left-[12%] right-[12%] h-px rotate-[-8deg] bg-slate-600"/></motion.div>)}</div>}
        {render && <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#252d39,#111827)]"><div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.18)_1px,transparent_1px)] bg-[size:24px_24px]"/><motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.2 }} className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,#ffcf89,transparent_25%),linear-gradient(145deg,#153a54,#346d68_52%,#192334)]"><span className="absolute bottom-[15%] left-[35%] h-[60%] w-[28%] rounded-t-full bg-[#d7a178]/80"/></motion.div></div>}
        {timeline && <div className="flex h-full flex-col justify-center gap-5"><div className="grid grid-cols-4 gap-2">{Array.from({length:4},(_,i)=><div key={i} className="aspect-video rounded-md bg-gradient-to-br from-[#244963] to-[#cf9167]"/>)}</div><motion.div initial={{scaleX:0}} animate={{scaleX:1}} className="h-3 origin-left rounded-full bg-[#2ecaa0]"/>{step === 5 && <motion.div initial={{scale:1.6,opacity:0}} animate={{scale:1,opacity:1}} className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-[#ffb84d] text-4xl text-[#ffb84d]">✓</motion.div>}</div>}
        {loop && <div className="relative grid h-full place-items-center"><motion.div initial={{rotate:-120,opacity:0}} animate={{rotate:0,opacity:1}} className="h-40 w-40 rounded-full border-[3px] border-[#2ecaa0] border-l-transparent"/><span data-numeric className="absolute font-display text-4xl font-bold text-[#e8edf5]">7,512</span><span className="absolute right-[12%] top-1/2 text-4xl text-[#ffb84d]">↗</span></div>}
      </div>
    </div>
  );
}

export function ProductionStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", value => { if (!reduced) setActive(Math.min(7, Math.floor(value * 8))); });
  return <div ref={ref} className="mt-24 md:h-[520vh]">
    <div className="md:sticky md:top-0 md:flex md:min-h-screen md:flex-col md:justify-center md:py-20">
      <h3 className="text-center text-xl font-bold text-[#e8edf5]">1本ができるまで</h3>
      <div className="mt-8 hidden grid-cols-[minmax(250px,.75fr)_1.5fr] items-center gap-10 md:grid">
        <ol className="space-y-1">{steps.map((s,i)=><li key={s} className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-[transform,color,background-color] duration-500 ${active===i?"translate-x-3 bg-white/[.07] text-[#e8edf5]":"text-slate-500"}`}><span data-numeric className={`font-display text-xs ${active===i?"text-[#ffb84d]":"text-slate-600"}`}>{i+1}</span><span className={active===i?"font-bold":""}>{s}</span></li>)}</ol>
        <motion.div key={active} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}><ProcessScreen step={active}/></motion.div>
      </div>
      <ol className="mt-8 space-y-10 md:hidden">{steps.map((s,i)=><li key={s}><div className="mb-4 flex items-center gap-3 text-[#e8edf5]"><span data-numeric className="font-display text-xs text-[#ffb84d]">{i+1}</span><span className="font-bold">{s}</span></div><ProcessScreen step={i}/></li>)}</ol>
      <p className="mt-8 text-center text-xs leading-relaxed text-slate-400">掲載している人物・映像・音声はすべてAIで生成したフィクションです。</p>
    </div>
  </div>;
}

export function Principles() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:imageRef, offset:["start end","end center"] });
  const clipPath = useTransform(scrollYProgress,[0,1],["inset(0 50% 0 50%)","inset(0 0% 0 50%)"]);
  // 左半分（AIっぽい）はグレーのまま。右半分（再現性がある）だけ左から右へ色がつく（発注書の指定）
  const brightness = useTransform(scrollYProgress,[.93,.97,1],[1,1.15,1]);
  const filter = useTransform(brightness, value => `brightness(${value})`);
  const alt = "AIっぽい。顔が毎回変わる。同じ人物なのに、顔立ち・輪郭・雰囲気がバラバラ。髪型・ライティング・質感の一貫性がない。どこか不自然で、作り物っぽさを感じる。再現性がある。同じ人物を安定して再現。どのカットでも同じ人物だと分かる。顔立ち・輪郭・髪型・雰囲気が一貫している。自然で安定したクオリティで、実在感がある。";
  return <div className="mt-24">
    <span className="block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">SNS向けAI動画制作で大切にしていること</span>
    <div className="film-strip mt-8 overflow-hidden border-y border-white/10 py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{principles.map((p,i)=><motion.article key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{delay:i*.06}} className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><h3 className="font-semibold leading-relaxed text-[#e8edf5]">{p.title}</h3><p className="mt-3 text-sm leading-[1.85] text-slate-400">{p.description}</p></motion.article>)}</div>
    </div>
    <div ref={imageRef} className="relative mt-8 aspect-[1672/940] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
      <Image src="/creator/reproducibility.webp" alt={alt} fill sizes="(max-width: 768px) 100vw, 1152px" className="object-cover grayscale"/>
      <motion.div aria-hidden className="absolute inset-0" style={reduced?undefined:{clipPath,filter}}><Image src="/creator/reproducibility.webp" alt="" fill sizes="(max-width: 768px) 100vw, 1152px" className="object-cover"/></motion.div>
    </div>
  </div>;
}

function RevealText({ children }: { children:string }) {
  const ref=useRef<HTMLParagraphElement>(null); const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:["start .9","end .45"]});
  const parts=children.split(/(?<=[。、])/);
  return <p ref={ref}>{parts.map((part,i)=><RevealPart key={i} progress={scrollYProgress} index={i} count={parts.length} reduced={!!reduced}>{part}</RevealPart>)}</p>;
}
function RevealPart({children,progress,index,count,reduced}:{children:string;progress:ReturnType<typeof useScroll>["scrollYProgress"];index:number;count:number;reduced:boolean}) { const opacity=useTransform(progress,[index/count,(index+1)/count],[.2,1]); return <motion.span style={{opacity:reduced?1:opacity}}>{children}</motion.span>; }

export function Vision() {
  return <div className="relative left-1/2 mt-28 w-screen -translate-x-1/2 bg-[#070b12] py-28 md:py-40"><div className="mx-auto max-w-4xl px-6">
    <motion.span initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="block text-sm font-semibold tracking-wide text-[#2ecaa0]">行きついた考え</motion.span>
    <motion.h3 initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="mt-5 text-3xl font-bold leading-snug text-[#e8edf5] md:text-5xl">AIが、人間の制作物を超える。<br className="hidden sm:block" />それはもう、始まっている。</motion.h3>
    <div className="mt-12 space-y-8 text-lg leading-[2.1] text-[#e8edf5] md:text-xl"><RevealText>GPT-6 Astra や Seedance 2.5 などを組み合わせると、人間が作ったものを超える作品が、低コスト・高品質・短納期で作れる時代になりました。 広告も同じです。自社のAIモデル（AIタレント）を持てば、高品質なCMも、インフルエンサーによる商品レビュー動画も、大量に出せます。</RevealText><RevealText>これが当たり前になる時代は、もう来ています。それでも、ここに特化した人材はまだ多く見かけません。だからこそ、この領域の先駆者になりたいと考えています。</RevealText></div>
    <motion.div initial={{borderColor:"rgba(255,184,77,0)"}} whileInView={{borderColor:"rgba(255,184,77,.75)"}} viewport={{once:true,amount:.8}} transition={{duration:.8}} className="mt-14 rounded-2xl border bg-white/[.025] p-6 md:p-8"><div className="text-xs font-semibold tracking-wide text-[#ffb84d]">目指す姿</div><p className="mt-3 leading-relaxed text-[#e8edf5]">映像コンテンツを主軸に、ドラマ・映画を制作し、企業の広告も手がけるAIクリエイター。DX・AX推進で培った業務設計の力で、「作れる」だけでなく「繰り返し作れる」制作の仕組みまで届けます。</p></motion.div>
  </div></div>;
}
