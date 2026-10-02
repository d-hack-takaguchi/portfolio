"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { views } from "@/data/views";

const stats = [
  { prefix: "0 → 約", target: 7500, suffix: "", label: "フォロワー0・投稿開始から16日間の累計再生回数" },
  { prefix: "", target: 23, suffix: "本", label: "同期間に公開したリール（AI解体新書・AIショートドラマ）" },
  { prefix: "約", target: 3200, suffix: "", label: "最も伸びた1本（AIショートドラマ「お会計」）の再生回数" },
];

type Work = { label: string; title: string; description: string; href: string; cta: string; image?: string };
// image は素材がそろったら縦長の画像のパスを入れる。無いあいだは線画を出す
const works: Work[] = [
  { label: "AIキャラクター", title: "AI解体新書", description: "生成AIでキャラクターを設計し、顔・体格・髪・職業までを1体ずつ「プロファイル」として定義。40体以上のAIタレント候補を、Instagramのリールで連載形式で公開しています。", href: "https://www.instagram.com/kazuya_dhack_ai", cta: "Instagramで見る" },
  { label: "AIショートドラマ", title: "お会計 / 退職代行", description: "AIタレントが出演するショートドラマ。企画・脚本・絵コンテ・生成・編集までを一本のラインで制作。第1作「お会計」は公開から約3日で約3,200回再生されました。", href: "https://www.instagram.com/reel/DdvqzMDJ6GC/", cta: "「お会計」を見る" },
  { label: "制作アプリ", title: "EMBLAZE", description: "ネタを送って承認するだけでAIショートドラマができる、1人用の動画制作アプリ。人は判断だけ、手を動かすのはAI。直近の4カット・42秒の作品は、自分の作業約10分・生成費用720円でした。", href: "https://note.com/kazuya_dhack_ai/n/na5b54681d0d0", cta: "仕組みを読む（note）" },
];

const steps = ["ネタを1行送る", "企画・脚本・絵コンテを生成", "配役・衣装・場面画像を決める", "全カットの動画を生成", "組み立てて完パケ", "承認して公開", "SNSにメイキングを自動投稿", "実績を回収して次の企画へ"];

const principles = [
  { title: "AIっぽさは「シチュエーションの再現性」で消す", description: "AI動画が不自然に見えるのは、場面ごとに人物・場所・画角が毎回ばらつくから。同じ人物が、同じ質感の場所で、狙った画角で動く。この再現性を先に設計することを一番大事にしています。" },
  { title: "AI解体新書：人物を「設計図」にして固定する", description: "顔・体格・肌・髪・職業を1体ずつプロファイルとして定義し、同じ顔で出演させ続けます。ファンがつくのは作品ではなく人物なので、ここが崩れない仕組みを最初に作りました。" },
  { title: "カット割りを、撮る前に決める", description: "1本を最大4カット・起承転結に分け、カットごとに秒数・動き・セリフ・言い方まで絵コンテで決めてから生成します。生成してから考えると、やり直しがそのままコストになります。" },
  { title: "Blenderの3D絵コンテで、やり直しの費用を先に消す", description: "灰色の3Dで画角・カメラの動き・人物の位置を先に動画で確認し、直しは安い段で済ませてから本番の生成に進みます。AI動画生成の「回して、外して、また回す」という無駄なコストを抑えます。" },
  { title: "仕組みにして、属人化とスキル格差をなくす", description: "監督の観点表・撮影ルール・プロンプトの型・承認の手順を文書とアプリに落とし込み、勘に頼らず誰がやっても同じ品質になる形にしています。制作ラインとして人に渡せることが、支援の価値になると考えています。" },
];

const links = [
  { label: "Instagram", href: "https://www.instagram.com/kazuya_dhack_ai" },
  { label: "Threads", href: "https://www.threads.com/@dhack.ai" },
  { label: "note", href: "https://note.com/kazuya_dhack_ai" },
];

const compareAlt = "AIっぽい。顔が毎回変わる。同じ人物なのに、顔立ち・輪郭・雰囲気がバラバラ。髪型・ライティング・質感の一貫性がない。どこか不自然で、作り物っぽさを感じる。再現性がある。同じ人物を安定して再現。どのカットでも同じ人物だと分かる。顔立ち・輪郭・髪型・雰囲気が一貫している。自然で安定したクオリティで、実在感がある。";

function Count({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1400, 1);
        setValue(Math.round(target * (1 - Math.pow(2, -10 * p))));
        if (p < 1) frame = requestAnimationFrame(tick); else setValue(target);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);
  return <span ref={ref}>{value.toLocaleString("ja-JP")}</span>;
}

function Chart() {
  const min = 2000, max = 7800, w = 1000, h = 220;
  const pts = views.map((v, i) => [20 + i * ((w - 40) / (views.length - 1)), h - 20 - ((v.total - min) / (max - min)) * (h - 50)] as const);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  const last = pts[pts.length - 1];
  const okaikei = pts[6];
  return (
    <Reveal className="mt-16 border-t border-cream/20 pt-8">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="2026年9月14日から9月28日までの累計再生回数の推移" className="w-full overflow-visible">
        <path d={d} pathLength={1} fill="none" stroke="#efeee9" strokeWidth="1.5" className="chart-line" />
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="#0e0e0e" stroke="#efeee9" strokeWidth="1.5" />)}
        <text x={okaikei[0]} y={okaikei[1] - 14} textAnchor="middle" fill="#efeee9" fillOpacity=".6" fontSize="13">お会計</text>
        <text x={last[0]} y={last[1] - 14} textAnchor="end" fill="#efeee9" fontSize="13">9/28・7,512</text>
      </svg>
    </Reveal>
  );
}

// 作品の画像が届くまでの線画（動画・写真は使わない）
function Artwork({ index }: { index: number }) {
  const stroke = { fill: "none", stroke: "#efeee9", strokeOpacity: 0.55, strokeWidth: 1.2 };
  if (index === 0) return <svg viewBox="0 0 240 420" className="h-full w-full"><g {...stroke}><path d="M74 151C71 92 88 54 120 54s49 38 46 97c-3 61-24 91-46 91s-43-30-46-91Z" /><path d="M86 115q34-28 68 0M102 146h5m26 0h5M108 177q12 8 24 0M120 242v78M74 290q46-31 92 0M55 390q8-83 65-83t65 83" /><path d="M72 140H28m140 0h44M93 174H35m112 0h55M120 244H36M73 309H25m142 0h48" /></g></svg>;
  if (index === 1) return <svg viewBox="0 0 240 420" className="h-full w-full"><g {...stroke}>{[20, 117, 214, 311].map((y) => <g key={y}><rect x="18" y={y} width="204" height="89" /><circle cx="145" cy={y + 31} r="13" /><path d={`M145 ${y + 44}v28m-17 5q17-20 34 0M70 ${y + 26}q18-15 36 0v48H70Z`} /></g>)}</g></svg>;
  return <svg viewBox="0 0 240 420" className="h-full w-full"><g {...stroke}><rect x="15" y="20" width="210" height="380" /><path d="M70 20v380M28 57h29M28 82h22M28 107h30" />{Array.from({ length: 8 }, (_, i) => <rect key={i} x="88" y={48 + i * 38} width="110" height="12" />)}<circle cx="172" cy="356" r="24" /><path d="m157 356 10 10 20-23" /></g></svg>;
}

export default function Creator() {
  return (
    <section id="creator" className="bg-ink px-6 py-28 text-cream sm:px-10 md:py-36">
      <SectionHead index="03" label="AI Creator" title={<>AIで「作品」を作り、<br />作る仕組みまで自分で組む</>} />
      <Reveal className="grid md:grid-cols-12">
        <p className="max-w-[640px] text-base leading-[2] text-cream/75 md:col-span-9 md:col-start-4">
          2026年9月から、AIキャラクターとAIショートドラマの制作・発信を始めました。
          コンサルで培った業務設計と実装の力を、クリエイティブの制作ラインづくりにも使っています。
          作品を出すたびにメイキングも公開し、仕組みそのものを見せながら育てています。
        </p>
      </Reveal>

      <div className="mt-20 grid border-t border-cream/20 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} className={`py-8 md:px-8 ${i ? "border-t border-cream/20 md:border-l md:border-t-0" : "md:pl-0"}`}>
            <p className="text-5xl font-medium tabular-nums tracking-[-0.02em] md:text-6xl">{s.prefix}<Count target={s.target} />{s.suffix}</p>
            <p className="mt-4 text-xs leading-relaxed text-cream/55">{s.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-2 text-xs text-cream/40">2026年9月14日に投稿を開始（Instagram、時点：9月29日）</p>
      <Chart />

      <div className="mt-28 grid gap-16 md:grid-cols-3 md:gap-8">
        {works.map((w, i) => (
          <Reveal as="article" key={w.title}>
            <a href={w.href} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-[9/16] overflow-hidden bg-[#161616]">
                {w.image
                  ? <Image src={w.image} alt={w.title} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  : <div className="absolute inset-0 p-10 transition duration-700 group-hover:scale-[1.03]"><Artwork index={i} /></div>}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/50">{w.label}</p>
              <h3 className="mt-2 text-2xl font-medium">{w.title}</h3>
              <p className="mt-4 text-sm leading-[1.9] text-cream/70">{w.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 border-b border-cream/40 pb-0.5 text-sm transition-opacity duration-300 group-hover:opacity-60">{w.cta}<ArrowUpRight size={14} strokeWidth={1.5} /></span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-32 grid gap-10 md:grid-cols-12">
        <h3 className="text-xs uppercase tracking-[0.2em] text-cream/55 md:col-span-3">1本ができるまで</h3>
        <ol className="grid border-t border-cream/20 sm:grid-cols-2 md:col-span-9">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} className="flex gap-5 border-b border-cream/20 py-5 sm:odd:pr-6">
              <span className="w-6 text-sm tabular-nums text-cream/45">{i + 1}</span>
              <span className="text-base">{s}</span>
            </Reveal>
          ))}
        </ol>
      </div>
      <p className="mt-6 text-xs text-cream/45 md:ml-[25%]">掲載している人物・映像・音声はすべてAIで生成したフィクションです。</p>

      <div className="mt-32">
        <SectionHead index="04" label="Principles" title="SNS向けAI動画制作で大切にしていること" />
        <ol className="border-t border-cream/20">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} className="grid gap-3 border-b border-cream/20 py-8 md:grid-cols-12 md:gap-6">
              <span className="text-sm tabular-nums text-cream/45 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="text-xl font-medium leading-snug md:col-span-5">{p.title}</h4>
              <p className="max-w-[560px] text-sm leading-[1.9] text-cream/70 md:col-span-6">{p.description}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="relative mt-16 aspect-[1672/940] overflow-hidden">
          <Image src="/creator/reproducibility.webp" alt={compareAlt} fill sizes="(max-width: 767px) 100vw, 90vw" className="object-cover" />
        </Reveal>
      </div>

      <div className="mt-36 grid gap-10 md:grid-cols-12">
        <p className="text-xs uppercase tracking-[0.2em] text-cream/55 md:col-span-3">行きついた考え</p>
        <Reveal className="md:col-span-9">
          <h3 className="text-3xl font-medium leading-[1.3] tracking-[-0.01em] md:text-5xl">AIが、人間の制作物を超える。<br />それはもう、始まっている。</h3>
          <div className="mt-10 max-w-[680px] space-y-6 text-base leading-[2.1] text-cream/80 md:text-lg">
            <p>GPT-6 Astra や Seedance 2.5 などを組み合わせると、人間が作ったものを超える作品が、低コスト・高品質・短納期で作れる時代になりました。 広告も同じです。自社のAIモデル（AIタレント）を持てば、高品質なCMも、インフルエンサーによる商品レビュー動画も、大量に出せます。</p>
            <p>これが当たり前になる時代は、もう来ています。それでも、ここに特化した人材はまだ多く見かけません。だからこそ、この領域の先駆者になりたいと考えています。</p>
          </div>
          <div className="mt-14 border-t border-cream/30 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/55">目指す姿</p>
            <p className="mt-3 max-w-[680px] text-base leading-[2]">映像コンテンツを主軸に、ドラマ・映画を制作し、企業の広告も手がけるAIクリエイター。DX・AX推進で培った業務設計の力で、「作れる」だけでなく「繰り返し作れる」制作の仕組みまで届けます。</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-b border-cream/40 pb-0.5 transition-opacity duration-300 hover:opacity-60">{l.label}<ArrowUpRight size={14} strokeWidth={1.5} /></a>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
