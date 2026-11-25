"use client";

// お問い合わせモーダルを開くボタン。モーダル本体は Contact.tsx が "open-contact-modal" を受けて開く
export default function ContactButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}>
      {children}
    </button>
  );
}
