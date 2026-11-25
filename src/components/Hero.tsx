export default function Hero() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium text-navy">DX・AX推進コンサルタント / 髙口 和弥</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.3] tracking-tight md:text-6xl md:leading-[1.25]">
          構想から実装まで、<br />一気通貫でDX・AXを推進。
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-[2] text-sub">
          コンタクトセンターの現場マネジメントと業務改革の経験、生成AI・ローコード開発の実装スキルを強みに、
          業務課題の整理から仕組みの構築、現場への定着・内製化までを支援します。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#cases" className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-85">実績を見る</a>
        </div>
      </div>
    </section>
  );
}
