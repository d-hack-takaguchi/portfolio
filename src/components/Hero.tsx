"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { X } from "lucide-react";

// 背景と同じ写真から人物だけを切り抜いた透過 PNG。用意できたら null をパスに替える。
// 切り抜きがあると、流れる名前が人物の「後ろ」を通る。無いあいだは名前が顔に重ならない位置に下げる
const CUTOUT: string | null = null;

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

  const marqueeTop = CUTOUT ? "top-[16vh] sm:top-[14vh]" : "top-[52vh] sm:top-[50vh]";
  const marqueeSize = CUTOUT ? "text-[16vh] sm:text-[26vh]" : "text-[12vh] sm:text-[18vh]";

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-ink">
      {/* 背景の写真。灰色の背景のままだとクリームの文字が読めないので、写真ごと少し暗くする */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/profile.png" alt="" className="anim-fade-in absolute inset-0 h-full w-full object-cover object-[50%_20%] brightness-[.58] contrast-[1.05]" />

      <div className={`anim-fade-up absolute inset-x-0 z-10 overflow-hidden ${marqueeTop}`} style={delay(500)}>
        <div className={`marquee flex w-max whitespace-nowrap font-hn leading-none text-cream ${marqueeSize}`}>
          <span className="pr-[6vw]">Kazuya &mdash; Takaguchi&nbsp;</span>
          <span className="pr-[6vw]" aria-hidden="true">Kazuya &mdash; Takaguchi&nbsp;</span>
        </div>
      </div>

      {CUTOUT && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={CUTOUT} alt="Portrait" className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover object-[50%_20%] brightness-[.58] contrast-[1.05]" />
      )}

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
