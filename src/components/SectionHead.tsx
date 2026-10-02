// 各セクションの頭。細い罫線の下に、左に番号と英字、右に日本語の見出し
export default function SectionHead({ index, label, title, tone = "dark" }: { index: string; label: string; title: React.ReactNode; tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "bg-cream/30" : "bg-ink/25";
  const sub = tone === "dark" ? "text-cream/55" : "text-ink/55";
  return (
    <div className="mb-14 md:mb-20">
      <div className={`h-px w-full ${line}`} />
      <div className="mt-5 grid gap-6 md:grid-cols-12">
        <p className={`text-xs uppercase tracking-[0.2em] md:col-span-3 ${sub}`}>{index} — {label}</p>
        <h2 className="text-3xl font-medium leading-[1.25] tracking-[-0.01em] md:col-span-9 md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}
