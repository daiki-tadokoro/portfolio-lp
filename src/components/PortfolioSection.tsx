const projects = [
  {
    title: "E-Commerce Platform",
    description: "Next.js + Stripe のフルスタックECサイト。決済、在庫管理、管理画面を実装。",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    status: "completed",
  },
  {
    title: "SaaS Dashboard",
    description: "リアルタイムデータ可視化の管理画面。GraphQL API、認証基盤を構築。",
    tags: ["React", "Node.js", "GraphQL", "AWS"],
    status: "completed",
  },
  {
    title: "Booking System",
    description: "予約管理システム。カレンダー連携、自動リマインダー、顧客管理機能。",
    tags: ["Vue.js", "Firebase", "Cloud Functions"],
    status: "completed",
  },
  {
    title: "Automation Tool",
    description: "ワークフロー自動化ツール。Slack連携、レポート自動生成機能。",
    tags: ["Python", "FastAPI", "Docker"],
    status: "completed",
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
              <span className="text-xs font-mono text-primary">[{project.status}]</span>
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
