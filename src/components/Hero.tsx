export default function Hero() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium text-navy">DX・AX推進コンサルタント / 髙口 和弥</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.3] tracking-tight md:text-6xl md:leading-[1.25]">
          構想から実装まで、<br />一気通貫でDX・AXを推進。
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-[2] text-sub">
          業務分析・要件定義からローコード開発・生成AI導入まで。
          現場を知るコンサルタントが、貴社の課題に最適なソリューションをご提供します。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#cases" className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-85">実績を見る</a>
        </div>
      </div>
    </section>
  );
}
