"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Clapperboard,
  Users,
  Workflow,
  ArrowUpRight,
  Instagram,
  BookOpen,
  AtSign,
} from "lucide-react";

const stats = [
  { value: "0 → 約7,500", label: "フォロワー0・投稿開始から16日間の累計再生回数" },
  { value: "23本", label: "同期間に公開したリール（AI解体新書・AIショートドラマ）" },
  { value: "約3,200", label: "最も伸びた1本（AIショートドラマ「お会計」）の再生回数" },
];

const principles = [
  {
    title: "AIっぽさは「シチュエーションの再現性」で消す",
    description:
      "AI動画が不自然に見えるのは、場面ごとに人物・場所・画角が毎回ばらつくから。同じ人物が、同じ質感の場所で、狙った画角で動く。この再現性を先に設計することを一番大事にしています。",
  },
  {
    title: "AI解体新書：人物を「設計図」にして固定する",
    description:
      "顔・体格・肌・髪・職業を1体ずつプロファイルとして定義し、同じ顔で出演させ続けます。ファンがつくのは作品ではなく人物なので、ここが崩れない仕組みを最初に作りました。",
  },
  {
    title: "カット割りを、撮る前に決める",
    description:
      "1本を最大4カット・起承転結に分け、カットごとに秒数・動き・セリフ・言い方まで絵コンテで決めてから生成します。生成してから考えると、やり直しがそのままコストになります。",
  },
  {
    title: "Blenderの3D絵コンテで、やり直しの費用を先に消す",
    description:
      "灰色の3Dで画角・カメラの動き・人物の位置を先に動画で確認し、直しは安い段で済ませてから本番の生成に進みます。AI動画生成の「回して、外して、また回す」という無駄なコストを抑えます。",
  },
  {
    title: "仕組みにして、属人化とスキル格差をなくす",
    description:
      "監督の観点表・撮影ルール・プロンプトの型・承認の手順を文書とアプリに落とし込み、勘に頼らず誰がやっても同じ品質になる形にしています。制作ラインとして人に渡せることが、支援の価値になると考えています。",
  },
];

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
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "start start"] });
  const colorWidth = useTransform(scrollYProgress, [0, .7], [reducedMotion ? "100%" : "0%", "100%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 0 : -70, 0]);

  return (
    <section ref={sectionRef} id="creator" className="relative overflow-hidden bg-[#0a0f1a] pb-24 pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden">
        <motion.div className="absolute -inset-x-20 -top-40 h-[440px] origin-top [transform:perspective(500px)_rotateX(62deg)]" style={{ y: gridY }}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,237,245,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(232,237,245,.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <motion.div className="absolute inset-0 overflow-hidden" style={{ width: colorWidth }}>
            <div className="h-full w-[calc(100vw+10rem)] bg-[linear-gradient(rgba(46,202,160,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,184,77,.26)_1px,transparent_1px)] bg-[size:42px_42px]" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6f9] via-[#0a0f1a]/55 to-[#0a0f1a]" />
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

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((st) => (
            <div
              key={st.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
            >
              <div className="text-brand-gradient text-3xl font-extrabold md:text-4xl">
                {st.value}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {st.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          2026年9月14日に投稿を開始（Instagram、時点：9月29日）
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
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

        {/* Principles */}
        <div className="mt-20">
          <span className="mb-3 block text-center text-sm font-semibold tracking-wide text-[#2ecaa0]">
            SNS向けAI動画制作で大切にしていること
          </span>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a3a6c] to-[#0f2547] p-8 text-white md:p-12"
        >
          <span className="text-sm font-semibold tracking-wide text-[#2ecaa0]">
            行きついた考え
          </span>
          <h3 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
            AIが、人間の制作物を超える。
            <br className="hidden sm:block" />
            それはもう、始まっている。
          </h3>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
            <p>
              GPT-6 Astra や Seedance 2.5 などを組み合わせると、人間が作ったものを超える作品が、低コスト・高品質・短納期で作れる時代になりました。
              広告も同じです。自社のAIモデル（AIタレント）を持てば、高品質なCMも、インフルエンサーによる商品レビュー動画も、大量に出せます。
            </p>
            <p>
              これが当たり前になる時代は、もう来ています。それでも、ここに特化した人材はまだ多く見かけません。だからこそ、この領域の先駆者になりたいと考えています。
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
            <div className="text-xs font-semibold tracking-wide text-[#2ecaa0]">
              目指す姿
            </div>
            <p className="mt-2 text-sm leading-relaxed md:text-base">
              映像コンテンツを主軸に、ドラマ・映画を制作し、企業の広告も手がけるAIクリエイター。
              DX・AX推進で培った業務設計の力で、「作れる」だけでなく「繰り返し作れる」制作の仕組みまで届けます。
            </p>
          </div>
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
