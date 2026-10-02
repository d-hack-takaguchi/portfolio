"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

// 送信は Web3Forms。access_key・subject・from_name・botcheck と、項目名（name/email/company/phone/message）は変えない
const field = "w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-sm text-ink placeholder-ink/35 transition focus:border-ink focus:outline-none focus:ring-0";
const labelCls = "block text-xs uppercase tracking-[0.15em] text-ink/55";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setError("");
  };

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") handleClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { window.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError("送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      setError("通信エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="bg-ink px-6 py-28 text-cream sm:px-10 md:py-40">
        <div className="h-px w-full bg-cream/30" />
        <div className="mt-5 grid gap-10 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/55 md:col-span-3">07 — Contact</p>
          <div className="md:col-span-9">
            <h2 className="text-4xl font-medium leading-[1.2] tracking-[-0.01em] md:text-7xl">まずはお気軽に<br />ご相談ください</h2>
            <p className="mt-10 max-w-[560px] text-base leading-[2] text-cream/75">
              「まず話を聞いてほしい」という段階でも大歓迎です。
              <br className="hidden md:block" />
              課題・環境に合わせた最適なソリューションをご提案します。
            </p>
            <p className="mt-4 text-sm text-cream/55">フルリモート対応可</p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-12 inline-flex items-center gap-3 border-b border-cream pb-1 text-xl transition-opacity duration-300 hover:opacity-60 md:text-2xl"
            >
              無料相談する <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      <div className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={handleClose} />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="お問い合わせ" onClick={handleClose}>
          <div className="anim-fade-up relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto bg-cream p-7 text-ink md:p-10" onClick={(e) => e.stopPropagation()}>
            <button type="button" aria-label="閉じる" onClick={handleClose} className="absolute right-5 top-5 transition-opacity hover:opacity-60">
              <X size={24} strokeWidth={1.5} />
            </button>

            {isSuccess ? (
              <div className="py-10">
                <h3 className="text-2xl font-medium">送信完了</h3>
                <p className="mt-4 text-sm leading-[1.9] text-ink/70">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より折り返しご連絡いたします。
                </p>
                <button type="button" onClick={handleClose} className="mt-8 border-b border-ink pb-0.5 text-sm transition-opacity hover:opacity-60">閉じる</button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-medium">お問い合わせ</h3>
                <p className="mt-2 text-sm text-ink/60">以下のフォームにご記入ください。担当者より折り返しご連絡いたします。</p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="d12db114-66ab-4045-9340-39211d5ee200" />
                  <input type="hidden" name="subject" value="【DxHack】ポートフォリオからのお問い合わせ" />
                  <input type="hidden" name="from_name" value="DxHack ポートフォリオ" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <label className="block"><span className={labelCls}>お名前 *</span><input type="text" name="name" required placeholder="山田 太郎" className={field} /></label>
                  <label className="block"><span className={labelCls}>メールアドレス *</span><input type="email" name="email" required placeholder="example@company.com" className={field} /></label>
                  <div className="grid grid-cols-2 gap-6">
                    <label className="block"><span className={labelCls}>会社名</span><input type="text" name="company" placeholder="株式会社〇〇" className={field} /></label>
                    <label className="block"><span className={labelCls}>電話番号</span><input type="tel" name="phone" placeholder="090-1234-5678" className={field} /></label>
                  </div>
                  <label className="block"><span className={labelCls}>ご相談内容 *</span><textarea rows={4} name="message" required placeholder="ご相談したい内容をお書きください" className={field} /></label>

                  {error && <p className="text-sm text-red-700">{error}</p>}

                  <div className="flex items-center gap-8 pt-2">
                    <button type="submit" disabled={isSubmitting} className="bg-ink px-8 py-3.5 text-sm text-cream transition-opacity hover:opacity-80 disabled:opacity-50">
                      {isSubmitting ? "送信中..." : "送信する"}
                    </button>
                    <button type="button" onClick={handleClose} className="border-b border-ink/40 pb-0.5 text-sm text-ink/70 transition-opacity hover:opacity-60">閉じる</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
