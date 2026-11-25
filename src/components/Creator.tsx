import Section from "./Section";

const activities = ["AIキャラクターの企画・制作", "生成AIによるショートドラマ制作", "画像生成AI・動画生成AIの活用", "制作プロセスの標準化・自動化", "AIを活用したコンテンツ制作ラインの構築", "Instagram等での作品・メイキング発信"];

export default function Creator() {
  return (
    <Section id="creator" label="AI Creator" title="AIクリエイター活動">
      <div className="grid gap-8 md:grid-cols-5 md:gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium text-navy">2026年9月〜</p>
          <p className="mt-2 text-lg font-bold leading-snug">AIで作品を作り、作る仕組みまで自分で組む</p>
          <div className="mt-4 space-y-4 text-sm leading-[2] text-sub">
            <p>生成AIを活用したAIキャラクターやショートドラマの制作・発信に取り組んでいます。DX・AXコンサルティングで培った業務設計・自動化・システム開発の知見を、コンテンツ制作にも応用。</p>
            <p>単発の作品制作だけでなく、企画・生成・編集・公開までの制作工程を仕組み化することを重視しています。</p>
          </div>
        </div>
        <ul className="self-start border-t border-line text-sm md:col-span-2">
          {activities.map((a) => <li key={a} className="border-b border-line py-2.5">{a}</li>)}
        </ul>
      </div>
    </Section>
  );
}
