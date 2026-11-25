import Image from "next/image";

const nav = [
  { href: "#services", label: "サービス" },
  { href: "#cases", label: "実績" },
  { href: "#about", label: "プロフィール" },
  { href: "#techstack", label: "技術スタック" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="DxHack トップへ">
          <Image src="/logo.png" alt="DxHack" width={614} height={155} className="h-8 w-auto" priority />
        </a>
        <nav className="hidden gap-7 text-sm text-sub sm:flex" aria-label="サイト内">
          {nav.map((l) => <a key={l.href} href={l.href} className="transition-colors hover:text-ink">{l.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
