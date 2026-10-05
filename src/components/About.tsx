import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const values = [
  { title: "現場起点の課題解決", description: "机上の提案ではなく、現場の声を聞き、実際に使われるシステムを一緒に作ります。" },
  { title: "一気通貫の対応力", description: "上流の業務設計から実装・テスト・内製化支援まで、一人で幅広くカバーできることが強みです。" },
  { title: "技術移転・内製化", description: "納品して終わりではなく、お客様が自走できる仕組みづくりと知識移転を重視しています。" },
];

const skills = ["PowerApps", "AppSheet", "Kintone", "MS365", "GoogleWorkSpace", "RPA", "PowerAutomate", "OCR", "Claude / ClaudeCode", "ChatGPT", "Next.js", "Seedance", "MiniMax H3", "Blender", "GitHub Actions", "GenSpark", "powerquery", "VBA", "GAS", "HTML", "JavaScript", "jSON", "React", "TypeScript", "BPR", "要件定義"];

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-28 text-ink sm:px-10 md:py-36">
      <SectionHead tone="light" index="05" label="About" title="髙口 和弥" />
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/profile.png" alt="髙口 和弥" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover object-[50%_20%]" />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-6">
          <p className="text-sm">Kazuya Takaguchi</p>
          <p className="mt-1 text-sm text-ink/60">DX・AX推進コンサルタント / ITコンサルタント / AIクリエイター</p>
          <p className="mt-1 text-sm text-ink/60">フルリモート対応可 / フリーランス</p>
          <div className="mt-10 space-y-5 text-base leading-[2] text-ink/80">
            <p>サントリーグループのコンタクトセンター運営事業会社での経験を活かし、業務分析・要件定義からローコード開発、生成AI導入支援まで幅広く対応。行政機関・上場企業グループ・大手SIerなど多様な業種での支援実績を持ち、現場に寄り添ったDX推進が得意です。</p>
            <p>「技術」と「業務理解」の両軸を武器に、お客様が本当に使えるシステムを一緒に作り上げます。</p>
            <p>2026年からはAIクリエイターとしても活動。AIキャラクター「AI解体新書」やAIショートドラマ・AI広告を発信しながら、企画から公開・実績の回収までを自動化する制作アプリ「EMBLAZE」を自作しています。自分で作って使い込んだ生成AIの知見を、お客様の業務への導入にも還元しています。</p>
          </div>
          <p className="mt-10 text-sm leading-[2] text-ink/60">{skills.join(" / ")}</p>

          <h3 className="mt-16 text-xs uppercase tracking-[0.2em] text-ink/55">大切にしていること</h3>
          <ul className="mt-4 border-t border-ink/20">
            {values.map((v) => (
              <li key={v.title} className="border-b border-ink/20 py-5">
                <p className="text-lg font-medium">{v.title}</p>
                <p className="mt-1 text-sm leading-[1.9] text-ink/70">{v.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
