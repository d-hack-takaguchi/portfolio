export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 text-cream sm:px-10">
      <div className="h-0.5 w-full bg-cream" />
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6 text-xs leading-relaxed sm:text-sm">
        <div>
          <p>Kazuya Takaguchi</p>
          <p className="text-cream/55">DX・AX推進コンサルタント / AIクリエイター</p>
        </div>
        <p className="text-cream/55">&copy; {new Date().getFullYear()} D-Hack. All rights reserved.</p>
      </div>
    </footer>
  );
}
