"use client";

import { MotionConfig } from "framer-motion";

// framer-motion の JS アニメーションは CSS の prefers-reduced-motion では止まらない。
// reducedMotion="user" で OS の設定に従わせ、出現アニメーションを最終状態で表示する
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
