"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

// 送信は Web3Forms。access_key・subject・from_name・botcheck と、項目名（name/email/company/phone/message）は変えない
const field = "mt-1.5 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder-ink/35 transition-colors focus:border-navy focus:outline-none";
const labelCls = "block text-xs font-medium text-sub";

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
      <section id="contact" className="bg-navy px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">Contact</p>
          <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">まずはお気軽にご相談ください</h2>
          <p className="mt-6 max-w-2xl text-base leading-[2] text-white/85">
            「まず話を聞いてほしい」という段階でも大歓迎です。課題・環境に合わせた最適なソリューションをご提案します。フルリモート対応可。
          </p>
          <button type="button" onClick={() => setIsOpen(true)} className="mt-9 rounded-md bg-white px-7 py-3.5 text-sm font-medium text-navy transition-opacity hover:opacity-85">
            無料相談する
          </button>
        </div>
      </section>

      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={handleClose} />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="お問い合わせ" onClick={handleClose}>
          <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-7 text-ink md:p-10" onClick={(e) => e.stopPropagation()}>
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

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="d12db114-66ab-4045-9340-39211d5ee200" />
                  <input type="hidden" name="subject" value="【DxHack】ポートフォリオからのお問い合わせ" />
                  <input type="hidden" name="from_name" value="DxHack ポートフォリオ" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <label className="block"><span className={labelCls}>お名前 *</span><input type="text" name="name" required placeholder="山田 太郎" className={field} /></label>
                  <label className="block"><span className={labelCls}>メールアドレス *</span><input type="email" name="email" required placeholder="example@company.com" className={field} /></label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block"><span className={labelCls}>会社名</span><input type="text" name="company" placeholder="株式会社〇〇" className={field} /></label>
                    <label className="block"><span className={labelCls}>電話番号</span><input type="tel" name="phone" placeholder="090-1234-5678" className={field} /></label>
                  </div>
                  <label className="block"><span className={labelCls}>ご相談内容 *</span><textarea rows={4} name="message" required placeholder="ご相談したい内容をお書きください" className={field} /></label>

                  {error && <p className="text-sm text-red-700">{error}</p>}

                  <div className="flex items-center gap-8 pt-2">
                    <button type="submit" disabled={isSubmitting} className="rounded-md bg-navy px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50">
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
