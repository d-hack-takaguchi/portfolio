// 各セクションの共通の枠。英字の小見出しと日本語の見出しだけ
export default function Section({ id, label, title, soft = false, children }: { id: string; label: string; title: string; soft?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 md:py-28 ${soft ? "bg-soft" : "bg-white"}`}>
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy">{label}</p>
        <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">{title}</h2>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
