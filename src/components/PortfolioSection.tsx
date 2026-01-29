const projects = [
  {
    title: "フードデリバリーSaaS",
    description: "飲食店向けデリバリー管理プラットフォーム。注文管理、配達設定、メニュー管理機能を開発。Go + React/TypeScriptでのフルスタック開発。",
    tags: ["Go", "React", "TypeScript", "AWS", "PostgreSQL"],
    role: "Fullstack Engineer",
  },
  {
    title: "店舗管理ダッシュボード",
    description: "飲食店オーナー向け管理画面。売上分析、商品管理、要望欄機能などを実装。UX改善とパフォーマンス最適化を担当。",
    tags: ["React", "TypeScript", "Go", "CloudFormation"],
    role: "Frontend Lead",
  },
  {
    title: "保険プラットフォーム基盤",
    description: "InsurTechスタートアップでのバックエンド開発。API Gateway、認証基盤、AWS Lambda を活用したサーバーレスアーキテクチャ。",
    tags: ["AWS", "Lambda", "DynamoDB", "API Gateway"],
    role: "Backend Engineer",
  },
  {
    title: "Slack連携ツール",
    description: "Slack APIを活用した社内ツール開発。スタンプランキング、チャンネル分析機能を実装。",
    tags: ["Go", "Slack API", "REST API"],
    role: "Solo Developer",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-container bg-dark relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="text-muted font-mono text-sm">{"// portfolio"}</span>
        <h2 className="section-title mt-2">
          <span className="text-light">{"<"}</span>
          Works
          <span className="text-light">{" />"}</span>
        </h2>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card group hover:border-primary/50">
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="ml-2 text-muted font-mono text-xs">project_{index + 1}</span>
              </div>
              <span className="text-xs font-mono text-secondary">[{project.role}]</span>
            </div>

            {/* Project info */}
            <div className="mb-4">
              <h3 className="text-light font-mono font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm font-mono leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 border border-gray-700 text-xs font-mono text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* More projects hint */}
      <div className="text-center mt-10">
        <div className="inline-block border border-gray-800 px-6 py-3">
          <span className="text-muted font-mono text-sm">
            <span className="text-secondary">$</span> git log --oneline | wc -l
            <br />
            <span className="text-primary">→ more projects available on request</span>
          </span>
        </div>
      </div>
    </section>
  );
}
