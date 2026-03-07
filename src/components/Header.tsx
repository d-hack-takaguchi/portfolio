"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "サービス" },
  { href: "#cases", label: "導入事例" },
  { href: "#techstack", label: "技術スタック" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          ConsultPro
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 md:inline-block"
        >
          無料相談
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-slate-200 bg-white px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="py-2">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white"
            >
              無料相談
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
