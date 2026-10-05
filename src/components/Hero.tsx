"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { X } from "lucide-react";

// トップは自分の顔や名前ではなく、作ったコンテンツがゆっくり流れ続ける壁にする（2026-10-05 オーナー指示:「顔と名前は主張しすぎ」）。
// 画像は既存の作品・EMBLAZE の画面。列ごとに向きと速さを変え、同じ列を2回並べて（間隔は gap でなく各画像の下マージンにして、半分動くと元と一致するように）継ぎ目なく繰り返す
type Tile = { src: string; ratio: string; pos?: string };
const columns: { tiles: Tile[]; duration: number; reverse?: boolean; className?: string }[] = [
  { duration: 70, tiles: [{ src: "/creator/work-kaitai.webp", ratio: "aspect-[4/5]" }, { src: "/creator/flow-script.webp", ratio: "aspect-[4/3]", pos: "object-left" }, { src: "/creator/work-okaikei.webp", ratio: "aspect-[4/5]", pos: "object-[50%_30%]" }] },
  { duration: 86, reverse: true, tiles: [{ src: "/creator/flow-produce.webp", ratio: "aspect-[4/3]" }, { src: "/creator/work-emblaze.png", ratio: "aspect-[4/5]", pos: "object-left-top" }, { src: "/creator/work-ad.webp", ratio: "aspect-[4/5]", pos: "object-[50%_30%]" }, { src: "/creator/flow-idea.webp", ratio: "aspect-[4/3]" }] },
  { duration: 78, className: "hidden sm:flex", tiles: [{ src: "/creator/work-okaikei.webp", ratio: "aspect-[4/5]", pos: "object-[50%_30%]" }, { src: "/creator/flow-works.webp", ratio: "aspect-square" }, { src: "/creator/flow-script.webp", ratio: "aspect-[4/3]", pos: "object-left" }] },
  { duration: 94, reverse: true, className: "hidden lg:flex", tiles: [{ src: "/creator/work-emblaze.png", ratio: "aspect-[4/5]", pos: "object-left-top" }, { src: "/creator/work-ad.webp", ratio: "aspect-[4/5]", pos: "object-[50%_30%]" }, { src: "/creator/flow-works.webp", ratio: "aspect-square" }, { src: "/creator/flow-produce.webp", ratio: "aspect-[4/3]" }] },
];

const nav = [
  { label: "Cases", href: "#cases" },
  { label: "Creator", href: "#creator" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const social = [
  { label: "Instagram", href: "https://www.instagram.com/kazuya_dhack_ai" },
  { label: "Threads", href: "https://www.threads.com/@dhack.ai" },
  { label: "note", href: "https://note.com/kazuya_dhack_ai" },
];

const ease = "cubic-bezier(0.76, 0, 0.24, 1)";
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

function ExternalOrAnchor({ href, children, className, style, onClick }: { href: string; children: React.ReactNode; className?: string; style?: CSSProperties; onClick?: () => void }) {
  const external = href.startsWith("http");
  return <a href={href} className={className} style={style} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-ink">
      {/* 作品の壁。読みやすさのため全体を少し暗くし、上下は黒へ溶かす */}
      <div className="anim-fade-in absolute inset-0 flex justify-center gap-3 px-3 opacity-45 sm:gap-4 sm:px-4" aria-hidden="true">
        {columns.map((c, i) => (
          <div key={i} className={`drift-col relative h-full min-w-0 flex-1 overflow-hidden ${c.className ?? "flex"}`}>
            <div className={`drift flex flex-col ${c.reverse ? "drift-reverse" : ""}`} style={{ animationDuration: `${c.duration}s` }}>
              {[0, 1].flatMap((n) => c.tiles.map((t, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`${n}-${j}`} src={t.src} alt="" loading={n === 0 ? "eager" : "lazy"} decoding="async" className={`mb-3 w-full shrink-0 object-cover sm:mb-4 ${t.ratio} ${t.pos ?? "object-center"}`} />
              )))}
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink/85 via-transparent via-45% to-ink/95" />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 text-cream sm:px-10 sm:pt-8">
        <a href="#" className="anim-fade-up font-hn text-lg tracking-wide" style={delay(800)}>Kazuya</a>
        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm" style={delay(900)}>2026</span>
          <nav className="flex flex-col gap-0.5 text-sm" aria-label="サイト内">
            {nav.map((l, i) => <a key={l.label} href={l.href} className="anim-fade-up transition-opacity duration-300 hover:opacity-60" style={delay(1000 + i * 80)}>{l.label}</a>)}
          </nav>
          <nav className="flex flex-col gap-0.5 text-sm" aria-label="SNS">
            {social.map((l, i) => <ExternalOrAnchor key={l.label} href={l.href} className="anim-fade-up transition-opacity duration-300 hover:opacity-60" style={delay(1150 + i * 80)}>{l.label}</ExternalOrAnchor>)}
          </nav>
        </div>
      </header>

      {/* ハンバーガー（スマホ）。開くと X に変わる */}
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="anim-fade-up absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center sm:hidden"
        style={delay(900)}
      >
        <span className="relative block h-4 w-6">
          <span className="absolute left-0 top-0 block h-px w-6 bg-cream" style={{ transition: `transform 500ms ${ease}, top 500ms ${ease}`, top: open ? "50%" : "0", transform: open ? "rotate(45deg)" : "none" }} />
          <span className="absolute left-0 top-1/2 block h-px w-6 bg-cream" style={{ transition: "opacity 300ms", opacity: open ? 0 : 1 }} />
          <span className="absolute left-0 block h-px w-6 bg-cream" style={{ transition: `transform 500ms ${ease}, top 500ms ${ease}`, top: open ? "50%" : "100%", transform: open ? "rotate(-45deg)" : "none" }} />
        </span>
      </button>

      {/* スマホのメニュー */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
      <aside
        className="fixed right-0 top-0 z-40 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 text-cream sm:hidden"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)", transition: `transform 600ms ${ease}` }}
        aria-hidden={!open}
      >
        <button type="button" aria-label="メニューを閉じる" onClick={() => setOpen(false)} className="absolute right-6 top-6" style={{ transition: "transform 500ms, opacity 500ms", transitionDelay: open ? "300ms" : "0ms", transform: open ? "rotate(0deg)" : "rotate(90deg)", opacity: open ? 1 : 0 }}>
          <X size={26} strokeWidth={1.5} />
        </button>
        <p className="mt-14 text-xs uppercase tracking-[0.2em] text-cream/50" style={{ transition: "all 600ms", transitionDelay: open ? "250ms" : "0ms", transform: open ? "none" : "translateY(16px)", opacity: open ? 1 : 0 }}>Site Index</p>
        <nav className="mt-4 flex flex-col gap-2">
          {nav.map((l, i) => <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-4xl" style={{ transition: `all 600ms ${ease}`, transitionDelay: open ? `${300 + i * 80}ms` : "0ms", transform: open ? "none" : "translateY(24px)", opacity: open ? 1 : 0 }}>{l.label}</a>)}
        </nav>
        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-cream/50" style={{ transition: "all 600ms", transitionDelay: open ? "500ms" : "0ms", transform: open ? "none" : "translateY(16px)", opacity: open ? 1 : 0 }}>Find Me</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {social.map((l, i) => <ExternalOrAnchor key={l.label} href={l.href} style={{ transition: `all 600ms ${ease}`, transitionDelay: open ? `${550 + i * 60}ms` : "0ms", transform: open ? "none" : "translateY(16px)", opacity: open ? 1 : 0 }}>{l.label}</ExternalOrAnchor>)}
        </div>
      </aside>

      <p className="anim-fade-up absolute inset-x-6 bottom-[8.5rem] z-20 max-w-[18em] font-hn text-2xl leading-[1.35] text-cream sm:inset-x-10 sm:bottom-40 sm:max-w-none sm:text-4xl" style={delay(1200)}>AIで作品を作り、<br />作る仕組みまで組む。</p>

      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28" />

      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={delay(1400)}>
          <p>DX・AX推進コンサルタント</p>
          <p>AIクリエイター</p>
          <p>構想から実装まで、一気通貫で。</p>
        </div>
        <div className="anim-fade-up text-right" style={delay(1550)}>
          <p>Freelance since 2024</p>
          <p>DxHack</p>
        </div>
      </div>
    </section>
  );
}
