import Section from "./Section";

const services = [
  { title: "DX・AX推進コンサルティング", points: ["業務課題のヒアリング・現状分析", "As-Is／To-Be分析、BPR提案", "DX・AX推進ロードマップの策定", "施策の優先順位付け、PoC、実装支援", "組織への定着化、運用体制の構築"] },
  { title: "ローコード・ノーコード開発", points: ["Power Appsによる業務アプリ開発", "Power Automateによるワークフロー自動化", "SharePointによる業務管理基盤の構築", "kintoneによる業務アプリ・データ管理", "Microsoft 365を活用した業務システム構築"] },
  { title: "生成AI導入・AIエージェント開発", points: ["ChatGPT、Claude、Gemini、Copilot等の導入支援", "業務特化型AIエージェントの企画・設計", "プロンプトエンジニアリング", "生成AIと既存業務システムの連携", "AI活用ガイドライン・運用ルールの整備", "社員向けAI研修・ハンズオン支援"] },
  { title: "業務自動化・Webアプリ開発", points: ["Power Automate DesktopによるRPA開発", "VBA、AI-OCRによる定型業務の自動化", "HTML、JavaScriptによる業務支援ツール開発", "React、TypeScriptによるWebアプリ開発", "既存業務システムの改善・再構築"] },
  { title: "AIコンテンツ制作・制作ライン構築", points: ["AIキャラクター・AIショートドラマの企画・制作", "画像・動画生成AIを活用したコンテンツ制作", "制作工程の自動化・効率化", "企画から制作・公開までのワークフロー設計", "SNS発信・継続運用の仕組みづくり"] },
  { title: "内製化支援・技術移転", points: ["社内開発人材の育成", "技術ドキュメント・運用マニュアル整備", "ハンズオン形式での技術移転", "市民開発の推進体制づくり", "外部依存を減らす自走型組織の構築"] },
];

export default function Services() {
  return (
    <Section id="services" label="Services" title="サービス" soft>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-line bg-white p-6">
            <p className="text-xs font-medium tabular-nums text-navy">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-base font-bold">{s.title}</h3>
            <ul className="mt-4 space-y-1.5 text-sm leading-[1.7] text-sub">
              {s.points.map((p) => <li key={p} className="relative pl-3.5 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-sub/50">{p}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
