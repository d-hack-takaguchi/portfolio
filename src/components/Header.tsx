"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "サービス" },
  { href: "#cases", label: "実績・事例" },
  { href: "#creator", label: "AIクリエイター" },
  { href: "#about", label: "About Me" },
  { href: "#techstack", label: "技術スタック" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(latest < 80 || latest < previous);
  });

  useEffect(() => {
    const observers = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(`#${entry.target.id}`);
        setDark(entry.target.id === "creator");
      }
    }), { rootMargin: "-30% 0px -60%" });
    navLinks.forEach(({ href }) => { const el = document.querySelector(href); if (el) observers.observe(el); });
    return () => observers.disconnect();
  }, []);

  const text = dark ? "text-white" : "text-slate-700";

  return (
    <motion.header
      animate={{ y: visible || open ? 0 : "-110%" }}
      transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
      className={`fixed top-[3px] z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${dark ? "border-white/10 bg-[#0a0f1a]/90" : "border-slate-900/10 bg-[#f4f6f9]/88"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3" aria-label="メインナビゲーション">
        <a href="#" className="flex items-center gap-2 transition-transform">
          <Image src="/logo.png" alt="DxHack" width={280} height={70} className={`h-10 w-auto md:h-11 ${dark ? "brightness-0 invert" : ""}`} priority />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => <li key={link.href}>
            <a href={link.href} className={`relative block py-2 text-sm font-medium transition-colors hover:text-[#2ecaa0] ${text}`}>
              {link.label}
              {active === link.href && <motion.span layoutId="active-navigation" className={`absolute inset-x-0 bottom-0 h-px ${dark ? "bg-[#ffb84d]" : "bg-[#2ecaa0]"}`} transition={{ duration: .45, ease: [.22, 1, .36, 1] }} />}
            </a>
          </li>)}
        </ul>

        <button onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))} className={`hidden rounded-full border px-5 py-2 text-sm font-medium transition-all lg:inline-block ${dark ? "border-[#ffb84d] text-white hover:bg-[#ffb84d] hover:text-[#0a0f1a]" : "border-[#1a3a6c] bg-[#1a3a6c] text-white hover:border-[#2ecaa0] hover:bg-[#2ecaa0]"}`}>
          無料相談
        </button>

        <button className={text + " lg:hidden"} onClick={() => setOpen(!open)} aria-label="メニュー" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className={`overflow-hidden border-t px-6 pb-4 lg:hidden ${dark ? "border-white/10 bg-[#0a0f1a]" : "border-slate-200 bg-[#f4f6f9]"}`}>
          {navLinks.map((link) => <li key={link.href} className="py-2"><a href={link.href} onClick={() => setOpen(false)} className={`text-sm font-medium ${text}`}>{link.label}</a></li>)}
          <li className="pt-2"><button onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent("open-contact-modal")); }} className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-white">無料相談</button></li>
        </motion.ul>}
      </AnimatePresence>
    </motion.header>
  );
}
