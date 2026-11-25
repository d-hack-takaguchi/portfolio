import Image from "next/image";
import Section from "./Section";

const cases = [
  { client: "大手SIer（営業部門）", title: "JIRA風タスク管理システム開発", description: "営業部門の案件管理を効率化するため、PowerApps＋SharePoint/Excel Onlineによるカンバン型タスク管理アプリを設計・開発。カンバン・タスク詳細・編集・プロジェクト管理・設定の多画面アーキテクチャを実装し、コメント機能（タスクあたり最大10件、タイムスタンプ付き）やPower Automateによる更新通知フローも構築。モバイルレスポンシブ対応、デプロイ手順書・移行パッケージの整備まで一貫して担当。", image: "/case-kanban.svg" },
  { client: "大手自動車メーカグループ（新規事業部門）", title: "新規事業提案システムのMS365エコシステム移行", description: "老朽化した既存システム（Incubation Suite）からSharePoint Online＋PowerAppsへの移行を設計。SharePointリスト設計・ユーザーストーリー作成・画面遷移図設計を行い、移行アーキテクチャ提案書を作成。内製開発チームへの技術引き継ぎとドキュメント整備を実施し、モダン環境への移行計画確立から開発チームへの完全引き継ぎまでを完遂。", image: "/case-sharepoint.svg" },
  { client: "地方自治体（税部門）", title: "生成AIを活用した滞納整理案件の引継ぎ改革", description: "属人化が進んでいた督促対応業務のナレッジを生成AIで構造化・データベース化。過去の対応履歴やケース別対応方針をソースとして整理し、AIが最適な対応案を提示するプロンプトを構築。口頭引き継ぎをAIアシスト型の構造化ドキュメントに置き換え、担当者交代時の引き継ぎ工数を大幅削減。新担当者がAIに質問しながら業務を習得できる『対話型オンボーディングフロー』を設計・実装。", image: "/case-bpr.svg" },
];

export default function Cases() {
  return (
    <Section id="cases" label="Cases" title="実績・事例">
      <div className="space-y-12 md:space-y-16">
        {cases.map((c) => (
          <article key={c.title} className="grid gap-6 md:grid-cols-5 md:gap-10">
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg border border-line md:col-span-2">
              <Image src={c.image} alt="" fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="md:col-span-3">
              <p className="text-xs font-medium text-navy">{c.client}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug">{c.title}</h3>
              <p className="mt-4 text-sm leading-[2] text-sub">{c.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
