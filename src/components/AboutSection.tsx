import Image from "next/image";

const stats = [
  { label: "Years Exp", value: "5+", icon: "⌛" },
  { label: "PRs Merged", value: "500+", icon: "🔀" },
  { label: "Commits", value: "3k+", icon: "⚡" },
];

const values = [
  {
    title: "Frontend Development",
    description: "React/TypeScriptでの管理画面・Webアプリ開発。UX重視の実装。",
    icon: "< >",
  },
  {
    title: "Backend & Infra",
    description: "Go/Node.jsでのAPI開発、AWS上でのインフラ構築・運用。",
    icon: "{ }",
  },
  {
    title: "AI-Driven Development",
    description: "Claude Code、Copilot等を活用した高速開発。AIとの協働で生産性を最大化。",
    icon: "AI",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-container bg-dark relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="text-muted font-mono text-sm">{"// about"}</span>
        <h2 className="section-title mt-2">
          <span className="text-light">{"<"}</span>
          About
          <span className="text-light">{" />"}</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Bio */}
        <div>
          <div className="card mb-6">
            {/* Profile Image */}
            <div className="float-right ml-4 mb-2">
              <div className="relative w-24 h-24 overflow-hidden rounded border border-gray-700">
                <Image
                  src="/profile.jpg"
                  alt="Daiki Yamamoto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-muted font-mono text-sm">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-2">~/about/daiki.md</span>
            </div>

            <div className="font-mono text-sm leading-relaxed space-y-4">
              <p className="text-light">
                <span className="text-secondary">#</span> Daiki Yamamoto
              </p>
              <p className="text-muted">
                フリーランスのフルスタックエンジニア。
                InsurTech、FoodTech領域でのプロダクト開発に従事。
              </p>
              <p className="text-muted">
                <span className="text-primary">@</span> InsurTechスタートアップ - 保険プラットフォームのバックエンド開発・AWS基盤構築
              </p>
              <p className="text-muted">
                <span className="text-primary">@</span> FoodTechスタートアップ - デリバリーSaaSのフルスタック開発（Go/React/TypeScript）
              </p>
              <p className="text-muted mt-4">
                <span className="text-primary">{">"}</span> 設計から実装、運用まで一貫して対応
                <br />
                <span className="text-primary">{">"}</span> チーム開発でのコードレビュー、技術選定
                <br />
                <span className="text-primary">{">"}</span> 新機能のリリースサイクルを回し続ける
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-muted font-mono uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Values */}
        <div className="space-y-4">
          {values.map((value, index) => (
            <div key={index} className="card group hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-700 flex items-center justify-center font-mono text-primary group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-light font-mono font-bold mb-1">{value.title}</h3>
                  <p className="text-muted text-sm font-mono">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
