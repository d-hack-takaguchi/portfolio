"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                まずはお気軽に
                <br />
                ご相談ください
              </h2>
              <p className="mt-4 text-indigo-100">
                現状のヒアリングから改善提案まで、初回相談は無料です。
                お客様の課題に最適なソリューションをご提案いたします。
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-indigo-100">
                  <Mail size={18} />
                  <span>contact@consultpro.example.com</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-100">
                  <MapPin size={18} />
                  <span>東京都渋谷区</span>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="お名前"
                className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-indigo-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-indigo-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="text"
                placeholder="会社名"
                className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-indigo-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <textarea
                rows={4}
                placeholder="ご相談内容"
                className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-indigo-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                送信する <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
