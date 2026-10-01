"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Send, MapPin, X, Phone, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const reducedMotion = useReducedMotion();
  const headingSkew = useMotionValue(0);
  const smoothSkew = useSpring(headingSkew, { stiffness: 130, damping: 20 });

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && handleClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  });

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setError("");
  };

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
      <section id="contact" className="overflow-x-clip bg-blueprint-paper py-24 md:py-32" onPointerMove={(event) => {
        if (reducedMotion) return;
        headingSkew.set(((event.clientX / window.innerWidth) * 4) - 2);
      }} onPointerLeave={() => headingSkew.set(0)}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-16 md:px-12 md:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 style={{ skewX: smoothSkew }} className="relative whitespace-nowrap text-[clamp(1.8rem,5.5vw,4.75rem)] font-bold text-white">まずはお気軽にご相談ください</motion.h2>
                <p className="mt-4 text-emerald-100">
                  「まず話を聞いてほしい」という段階でも大歓迎です。
                  <br className="hidden md:block" />
                  課題・環境に合わせた最適なソリューションをご提案します。
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 text-emerald-100">
                  <MapPin size={18} />
                  <span>フルリモート対応可</span>
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  data-magnetic
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-brand-navy shadow-lg transition hover:bg-emerald-50 hover:shadow-xl"
                >
                  <Send size={18} />
                  無料相談する
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#0a0f1a]/65 backdrop-blur-md"
              onClick={handleClose}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label="お問い合わせ"
              onClick={handleClose}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: .05, delayChildren: .08 } } }}
                className="relative max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/50 bg-white p-6 shadow-2xl md:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={20} />
                </button>

                {isSuccess ? (
                  /* Success message */
                  <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center py-8 text-center">
                    <CheckCircle size={48} className="text-[#2ecaa0]" />
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      送信完了
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      お問い合わせありがとうございます。
                      <br />
                      担当者より折り返しご連絡いたします。
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 rounded-lg bg-gradient-to-r from-[#1a3a6c] to-[#2ecaa0] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                    >
                      閉じる
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        お問い合わせ
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        以下のフォームにご記入ください。担当者より折り返しご連絡いたします。
                      </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="space-y-4" onSubmit={handleSubmit}>
                      {/* Web3Forms access key */}
                      <input
                        type="hidden"
                        name="access_key"
                        value="d12db114-66ab-4045-9340-39211d5ee200"
                      />
                      {/* Send notification to this email */}
                      <input type="hidden" name="subject" value="【DxHack】ポートフォリオからのお問い合わせ" />
                      <input type="hidden" name="from_name" value="DxHack ポートフォリオ" />
                      {/* Honeypot for spam prevention */}
                      <input type="checkbox" name="botcheck" className="hidden" />

                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="山田 太郎"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="example@company.com"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1 block text-sm font-medium text-slate-700">
                            会社名
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="株式会社〇〇"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-medium text-slate-700">
                            電話番号
                          </label>
                          <div className="relative">
                            <Phone
                              size={16}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="090-1234-5678"
                              className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                          ご相談内容 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          placeholder="ご相談したい内容をお書きください"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500">{error}</p>
                      )}

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1a3a6c] to-[#2ecaa0] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg disabled:opacity-50"
                        >
                          <Send size={16} />
                          {isSubmitting ? "送信中..." : "送信する"}
                        </button>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                        >
                          閉じる
                        </button>
                      </div>
                    </motion.form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
