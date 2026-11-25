export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 text-xs text-sub">
        <p>髙口 和弥 / DX・AX推進コンサルタント</p>
        <p>&copy; {new Date().getFullYear()} D-Hack. All rights reserved.</p>
      </div>
    </footer>
  );
}
