import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const cases = [
  { client: "大手SIer（営業部門）", title: "JIRA風タスク管理システム開発", description: "営業部門の案件管理を効率化するため、PowerApps＋SharePoint/Excel Onlineによるカンバン型タスク管理アプリを設計・開発。カンバン・タスク詳細・編集・プロジェクト管理・設定の多画面アーキテクチャを実装し、コメント機能（タスクあたり最大10件、タイムスタンプ付き）やPower Automateによる更新通知フローも構築。モバイルレスポンシブ対応、デプロイ手順書・移行パッケージの整備まで一貫して担当。", image: "/case-kanban.svg" },
  { client: "大手自動車メーカグループ（新規事業部門）", title: "新規事業提案システムのMS365エコシステム移行", description: "老朽化した既存システム（Incubation Suite）からSharePoint Online＋PowerAppsへの移行を設計。SharePointリスト設計・ユーザーストーリー作成・画面遷移図設計を行い、移行アーキテクチャ提案書を作成。内製開発チームへの技術引き継ぎとドキュメント整備を実施し、モダン環境への移行計画確立から開発チームへの完全引き継ぎまでを完遂。", image: "/case-sharepoint.svg" },
  { client: "地方自治体（税部門）", title: "生成AIを活用した滞納整理案件の引継ぎ改革", description: "属人化が進んでいた督促対応業務のナレッジを生成AIで構造化・データベース化。過去の対応履歴やケース別対応方針をソースとして整理し、AIが最適な対応案を提示するプロンプトを構築。口頭引き継ぎをAIアシスト型の構造化ドキュメントに置き換え、担当者交代時の引き継ぎ工数を大幅削減。新担当者がAIに質問しながら業務を習得できる『対話型オンボーディングフロー』を設計・実装。", image: "/case-bpr.svg" },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-cream px-6 pb-28 text-ink sm:px-10 md:pb-36">
      <SectionHead tone="light" index="02" label="Cases" title={<>DX・AX推進支援の具体的な実績</>} />
      <div className="space-y-20 md:space-y-28">
        {cases.map((c, i) => (
          <Reveal as="article" key={c.title} className="group grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="relative aspect-[16/10] overflow-hidden md:col-span-5">
              {/* 今の画像は色の強いイラストなので、黒とクリームの中では白黒で見せ、乗せたときだけ色を戻す */}
              <Image src={c.image} alt={c.title} fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-xs tracking-[0.15em] text-ink/50">{String(i + 1).padStart(2, "0")} / {c.client}</p>
              <h3 className="mt-4 text-2xl font-medium leading-snug md:text-3xl">{c.title}</h3>
              <p className="mt-6 max-w-[560px] text-sm leading-[2] text-ink/70">{c.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
