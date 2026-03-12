"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, X, Phone } from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  return (
    <>
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a3a6c] to-[#2ecaa0] p-8 md:p-16">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  まずはお気軽に
                  <br />
                  ご相談ください
                </h2>
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
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#1a3a6c] shadow-lg transition hover:bg-emerald-50 hover:shadow-xl"
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
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    お問い合わせ
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    以下のフォームにご記入ください。担当者より折り返しご連絡いたします。
                  </p>
                </div>

                {/* Form */}
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
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
                      placeholder="ご相談したい内容をお書きください"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2ecaa0] focus:outline-none focus:ring-2 focus:ring-[#2ecaa0]/20"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1a3a6c] to-[#2ecaa0] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg"
                    >
                      <Send size={16} />
                      送信する
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                      閉じる
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
