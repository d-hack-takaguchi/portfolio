import Section from "./Section";

// 本業の経歴。会社名・部門名は出さない
type Group = { title: string; points: string[]; subs?: { title: string; points: string[] }[] };
const career: { period: string; role: string; theme: string; groups: Group[] }[] = [
  {
    period: "2026年〜現在",
    role: "リーダーSV職（マネージャー補佐）",
    theme: "社内システム運用・DX／AX推進",
    groups: [
      { title: "社内システム企画・開発・運用", points: [
        "社内システムの運用管理、改善企画、開発を推進",
        "勤怠管理システムの刷新プロジェクトを推進（製品選定・導入・移行・定着化支援）",
        "Power Automateによる申請・承認・通知の自動化",
        "SharePoint、Power Apps、kintone等を活用した業務アプリケーション・ワークフローの構築",
        "BIツールの更新基盤を再設計し、RPA依存の処理から安定したデータ連携方式へ改善",
        "SharePointで社内ポータルを構築し、社内問い合わせ・業務改善相談の窓口を設置",
      ] },
      { title: "生成AIを活用したシステム内製開発", points: [
        "生成AIを開発プロセスに組み込み、社内業務アプリケーションの内製化を推進",
        "非SEの担当者2名による開発体制で、5か月間に20以上の社内アプリケーションを開発",
        "Claude Code、Copilot等を活用した要件整理・設計・コーディング・レビューを実践",
        "外部委託に依存しない迅速な改善体制を構築",
        "開発資産の一元管理、品質管理、保守性向上など、継続運用を見据えた開発標準化を推進",
      ] },
      { title: "全社AI・IT活用推進プロジェクト", points: [
        "全社横断のAI・IT活用推進プロジェクトに参画し、生成AIの業務実装と組織への定着を推進",
        "部門横断での業務課題の整理、As-Is／To-Be分析、AI活用施策の企画・実行",
        "AI活用を個人の試行から組織全体の業務改革へ展開",
        "資料作成、会議、ナレッジ検索など、日常業務に直結するAI活用モデルを整備",
      ], subs: [
        { title: "社内AI情報ポータルサイトの構築・展開", points: [
          "全社員向けAI活用ポータルを2026年10月にリリース",
          "Copilot Studioで構築した自律型AIエージェント、プロンプト集、利用ガイド、学習コンテンツ等を一元化",
          "利用状況の可視化、アンケート、勉強会等を通じて継続的な利用促進と定着化を推進",
        ] },
        { title: "業務特化型AIエージェントの開発", points: [
          "資料作成支援エージェントの企画・展開",
          "会議議事録の自動生成と標準化",
          "会議設定・タスク管理の効率化",
          "1on1支援AIエージェントの企画・検討",
          "Copilot Studio等を活用した業務特化型AIエージェントの検証",
        ] },
        { title: "生成AI利用環境の整備", points: [
          "Microsoft 365 Copilotの社内活用を推進",
          "今期のCopilot有償ライセンス利用者を、全社員の約20％から80％まで拡大",
          "利用状況の可視化、ライセンス管理、適正配置に向けた運用体制を整備",
        ] },
      ] },
      { title: "コンタクトセンター業務へのAI実装", points: [
        "AIナレッジマネジメントの高度化",
        "応対音声テキストと対応履歴を活用した過去対応事例のナレッジ化を推進",
        "生成AIによるナレッジ生成エージェントを開発・検証",
        "問い合わせ内容、確認事項、案内内容、対応結果を構造化する仕組みを設計",
        "ASVの判断支援、教育効率化、属人化解消に向けた活用を検討",
        "情報セキュリティやアクセス制御を考慮した現場導入・運用設計を推進",
      ] },
      { title: "RPA内製化・市民開発の推進", points: [
        "各部署が主体的に自動化へ取り組める市民開発の推進体制を整備",
        "RPAの開発・保守・運用に関する標準化を推進",
        "技術ドキュメントや教育コンテンツを整備",
        "AIを活用したRPA開発・保守の効率化を推進",
        "担当者依存を減らし、継続的に改善できる組織運用モデルの構築に取り組む",
      ] },
    ],
  },
  {
    period: "2024年〜2025年",
    role: "リーダーSV職（マネージャー補佐）",
    theme: "大規模組織マネジメント・DX推進",
    groups: [
      { title: "大規模コンタクトセンターの運営管理", points: ["約200名規模のコンタクトセンターにおける現場統括", "業務品質、生産性、人員配置の最適化を推進", "業務プロセスの可視化・標準化・効率化を主導"] },
      { title: "BPR・DX推進", points: ["既存業務のAs-Is／To-Be分析と業務プロセス再設計", "生成AI、ローコードツール等の導入企画・推進", "現場の課題を起点とした業務改善施策の立案・実行"] },
      { title: "人材育成・組織マネジメント", points: ["オペレーター、ASV、SVの段階的な育成体系を設計", "スキルマップの整備と人材配置の最適化", "評価・育成・組織運営を通じたチーム力強化"] },
    ],
  },
  {
    period: "2018年〜2023年",
    role: "リーダーSV職（マネージャー補佐）",
    theme: "EC事業運営管理・業務効率化",
    groups: [
      { title: "EC事業の運営管理", points: ["自社ECサイトおよび外部ECモールの受注管理を統括", "業務品質の維持・向上と生産性改善を推進"] },
      { title: "OCR・RPAを活用した業務改革", points: ["はがき媒体によるオフライン受注業務のDXを主導", "OCRとRPAを組み合わせ、手作業を自動化", "従来比80％の処理時間削減を実現"] },
      { title: "データ活用基盤の構築", points: ["kintoneによる業務実績管理システムを構築", "集計業務の自動化とリアルタイム可視化を実現", "データに基づく迅速な意思決定を支援"] },
    ],
  },
];

const dot = "relative pl-3.5 before:absolute before:left-0 before:top-[0.75em] before:h-1 before:w-1 before:rounded-full before:bg-sub/50";

function Points({ points }: { points: string[] }) {
  return (
    <ul className="mt-2 space-y-1 text-sm leading-[1.8] text-sub">
      {points.map((p) => <li key={p} className={dot}>{p}</li>)}
    </ul>
  );
}

export default function Career() {
  return (
    <Section id="career" label="Career" title="経歴・取り組み" soft>
      <p className="max-w-3xl text-base leading-[2]">
        本業では、コンタクトセンターの現場マネジメントから社内システムの企画・開発、DX・AX推進まで、業務改革とテクノロジー活用を幅広く経験。
        現場で培った業務理解を強みに、課題発見・要件定義・システム開発・運用定着まで一気通貫した業務改善を推進しています。
      </p>
      <div className="mt-12 border-t border-line">
        {career.map((c) => (
          <div key={c.period} className="grid gap-6 border-b border-line py-10 md:grid-cols-4 md:gap-10">
            <div>
              <p className="text-sm font-bold text-navy">{c.period}</p>
              <p className="mt-2 font-bold leading-snug">{c.theme}</p>
              <p className="mt-1 text-xs text-sub">{c.role}</p>
            </div>
            <div className="space-y-8 md:col-span-3">
              {c.groups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-sm font-bold">{g.title}</h3>
                  <Points points={g.points} />
                  {g.subs && (
                    <div className="mt-4 space-y-4 rounded-lg border border-line bg-white p-5">
                      <p className="text-xs font-medium text-navy">主な取り組み</p>
                      {g.subs.map((s) => (
                        <div key={s.title}>
                          <h4 className="text-sm font-medium">{s.title}</h4>
                          <Points points={s.points} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
