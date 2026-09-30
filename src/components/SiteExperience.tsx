"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

const sections = [
  { id: "features", label: "サービス" },
  { id: "cases", label: "実績・事例" },
  { id: "creator", label: "AIクリエイター" },
  { id: "about", label: "About Me" },
  { id: "techstack", label: "技術スタック" },
  { id: "contact", label: "お問い合わせ" },
];

export default function SiteExperience() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("");
  const [renderAct, setRenderAct] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(12);
  const smoothX = useSpring(cursorX, { stiffness: 700, damping: 48, mass: .15 });
  const smoothY = useSpring(cursorY, { stiffness: 700, damping: 48, mass: .15 });
  const cursorOffset = useTransform(cursorSize, (size) => -size / 2);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const lenis = reduced ? null : new Lenis({ duration: 1.05, easing: (t: number) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    const tick = (time: number) => { lenis?.raf(time); frame = requestAnimationFrame(tick); };
    if (lenis) frame = requestAnimationFrame(tick);

    const scrollTo = (id: string) => {
      const target = id ? document.getElementById(id) : 0;
      if (target === null) return;
      if (lenis) lenis.scrollTo(target, { offset: -72 });
      else if (typeof target === "number") window.scrollTo({ top: target });
      else target.scrollIntoView();
    };
    const click = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      event.preventDefault();
      scrollTo(anchor.hash.slice(1));
    };
    document.addEventListener("click", click);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        setActive(visible.target.id);
        setRenderAct(visible.target.id === "creator");
      }
    }, { rootMargin: "-30% 0px -55%", threshold: [0, .25, .5, .75] });
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });

    const reveals = Array.from(document.querySelectorAll<HTMLElement>("main section h2, main section h3, main section p"));
    reveals.forEach((el, index) => {
      el.dataset.reveal = "";
      el.style.setProperty("--reveal-delay", `${(index % 5) * 40}ms`);
    });
    const revealObserver = new IntersectionObserver((entries, self) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); self.unobserve(entry.target); }
    }), { threshold: .12 });
    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      document.removeEventListener("click", click);
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    // 動きを減らす設定では、ボタンが引き寄せられる動きも止める
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      const interactive = (event.target as HTMLElement).closest<HTMLElement>("a, button");
      cursorSize.set(interactive ? 56 : 12);
      if (interactive && !reduced) {
        const box = interactive.getBoundingClientRect();
        interactive.setAttribute("data-magnetic", "");
        interactive.style.transform = `translate(${Math.max(-8, Math.min(8, (event.clientX - box.left - box.width / 2) * .18))}px, ${Math.max(-8, Math.min(8, (event.clientY - box.top - box.height / 2) * .18))}px)`;
      }
    };
    const out = (event: MouseEvent) => {
      const interactive = (event.target as HTMLElement).closest<HTMLElement>("a, button");
      if (interactive) interactive.style.transform = "";
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseout", out); };
  }, [cursorSize, cursorX, cursorY]);

  return <>
    <motion.div className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-[#2ecaa0] to-[#ffb84d]" style={{ scaleX: scrollYProgress }} />
    <nav aria-label="ページ内セクション" className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <ul className="flex flex-col items-end gap-3">
        {sections.map((section) => <li key={section.id}>
          <a href={`#${section.id}`} aria-label={section.label} aria-current={active === section.id ? "location" : undefined} className={`block h-2 rounded-full transition-all duration-500 ${active === section.id ? `w-8 ${renderAct ? "bg-[#ffb84d] shadow-[0_0_12px_#ffb84d]" : "bg-[#2ecaa0] shadow-[0_0_12px_#2ecaa0]"}` : "w-2 bg-slate-400/50"}`} />
        </li>)}
      </ul>
    </nav>
    <motion.div ref={cursor} aria-hidden className={`custom-cursor pointer-events-none fixed left-0 top-0 z-[110] rounded-full ${renderAct ? "bg-[#ffb84d]" : "bg-[#2ecaa0]"}`} style={{ x: smoothX, y: smoothY, width: cursorSize, height: cursorSize, translateX: cursorOffset, translateY: cursorOffset, mixBlendMode: "difference" }} />
  </>;
}
