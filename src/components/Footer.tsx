import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="DxHack"
            width={120}
            height={32}
            className="h-8 w-auto opacity-60"
          />
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} D-Hack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
