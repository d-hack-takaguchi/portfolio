import Image from "next/image";
import Section from "./Section";

// クライアントは業種までにとどめ、会社名・部門名は出さない
const cases = [
  {
    client: "大手SIer",
    title: "Jira風タスク管理システムの開発",
    lead: "Power AppsとSharePoint／Excel Onlineを活用し、カンバン型タスク管理アプリを設計・開発。",
    points: ["複数画面によるタスク管理", "コメント機能、タイムスタンプ管理", "Power Automateによる更新通知", "モバイル対応", "デプロイ手順書・移行パッケージ整備"],
    result: "要件整理から設計・開発・移行準備まで一貫して対応。",
    image: "/case-kanban.svg",
  },
  {
    client: "大手自動車メーカーグループ",
    title: "新規事業提案システムのMicrosoft 365移行",
    lead: "老朽化した既存システムから、SharePoint Online＋Power Appsへの移行アーキテクチャを設計。",
    points: ["業務要件・ユーザーストーリーの整理", "SharePointリスト設計", "画面遷移図・システム構成の設計", "移行アーキテクチャ提案書の作成", "内製開発チームへの技術移転"],
    result: "既存システムの課題整理から新環境への移行設計までを支援。",
    image: "/case-sharepoint.svg",
  },
  {
    client: "地方自治体",
    title: "生成AIを活用した滞納整理業務の引継ぎ改革",
    lead: "属人化した督促対応のノウハウを生成AIで構造化・データベース化。",
    points: ["過去対応事例・判断基準の整理", "生成AIによる対応案提示プロンプトの設計", "対話型ナレッジ検索の仕組みを構築", "新任担当者向けAIオンボーディングを設計"],
    result: "担当者がAIに質問しながら業務を習得できる仕組みを実装。",
    image: "/case-bpr.svg",
  },
];

export default function Cases() {
  return (
    <Section id="cases" label="Cases" title="DX・AX推進支援の主な実績">
      <div className="space-y-12 md:space-y-16">
        {cases.map((c, i) => (
          <article key={c.title} className="grid gap-6 md:grid-cols-5 md:gap-10">
            <div className="relative aspect-[2/1] self-start overflow-hidden rounded-lg border border-line md:col-span-2">
              <Image src={c.image} alt="" fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="md:col-span-3">
              <p className="text-xs font-medium text-navy">実績{String(i + 1).padStart(2, "0")} / {c.client}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug">{c.title}</h3>
              <p className="mt-4 text-sm leading-[1.9]">{c.lead}</p>
              <ul className="mt-3 space-y-1 text-sm leading-[1.8] text-sub">
                {c.points.map((p) => <li key={p} className="relative pl-3.5 before:absolute before:left-0 before:top-[0.75em] before:h-1 before:w-1 before:rounded-full before:bg-sub/50">{p}</li>)}
              </ul>
              <p className="mt-3 text-sm leading-[1.9]">{c.result}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
