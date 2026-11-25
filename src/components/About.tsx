import Image from "next/image";
import Section from "./Section";

const values = [
  { title: "現場起点の課題解決", description: "机上の提案ではなく、現場の声を聞き、実際に使われるシステムを一緒に作ります。" },
  { title: "一気通貫の対応力", description: "上流の業務設計から実装・テスト・内製化支援まで、一人で幅広くカバーできることが強みです。" },
  { title: "技術移転・内製化", description: "納品して終わりではなく、お客様が自走できる仕組みづくりと知識移転を重視しています。" },
];

const skills = ["PowerApps", "AppSheet", "Kintone", "MS365", "GoogleWorkSpace", "RPA", "PowerAutomate", "OCR", "Claude / ClaudeCode", "ChatGPT", "GenSpark", "PowerQuery", "VBA", "GAS", "HTML", "JavaScript", "JSON", "React", "TypeScript", "Next.js", "BPR", "要件定義"];

export default function About() {
  return (
    <Section id="about" label="About" title="プロフィール">
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        <div>
          <div className="relative aspect-square max-w-[240px] overflow-hidden rounded-lg">
            <Image src="/profile.png" alt="髙口 和弥" fill sizes="240px" className="object-cover object-[50%_20%]" />
          </div>
          <p className="mt-5 text-lg font-bold">髙口 和弥</p>
          <p className="text-sm text-sub">Kazuya Takaguchi</p>
          <p className="mt-3 text-sm leading-[1.8] text-sub">DX・AX推進コンサルタント / ITコンサルタント<br />フリーランス / フルリモート対応可</p>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4 text-base leading-[2]">
            <p>サントリーグループのコンタクトセンター運営事業会社での経験を活かし、業務分析・要件定義からローコード開発、生成AI導入支援まで幅広く対応。行政機関・上場企業グループ・大手SIerなど多様な業種での支援実績を持ち、現場に寄り添ったDX推進が得意です。</p>
            <p>「技術」と「業務理解」の両軸を武器に、お客様が本当に使えるシステムを一緒に作り上げます。</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => <li key={s} className="rounded border border-line px-2.5 py-1 text-xs text-sub">{s}</li>)}
          </ul>

          <h3 className="mt-12 text-sm font-bold">大切にしていること</h3>
          <ul className="mt-3 border-t border-line">
            {values.map((v) => (
              <li key={v.title} className="border-b border-line py-4">
                <p className="font-bold">{v.title}</p>
                <p className="mt-1 text-sm leading-[1.9] text-sub">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
