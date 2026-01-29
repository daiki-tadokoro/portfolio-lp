const stats = [
  { label: "Years Exp", value: "5+", icon: "⌛" },
  { label: "Projects", value: "50+", icon: "📁" },
  { label: "Commits", value: "10k+", icon: "⚡" },
];

const values = [
  {
    title: "Clean Code",
    description: "読みやすく、保守しやすいコードを書く。技術的負債は作らない。",
    icon: "{ }",
  },
  {
    title: "Fast Delivery",
    description: "スピード重視。でも品質は落とさない。",
    icon: ">>",
  },
  {
    title: "Problem Solver",
    description: "技術で課題を解決する。それがエンジニアの仕事。",
    icon: "//",
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
            <div className="flex items-center gap-2 mb-4 text-muted font-mono text-sm">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-2">~/about/daiki.md</span>
            </div>

            <div className="font-mono text-sm leading-relaxed space-y-4">
              <p className="text-light">
                <span className="text-secondary">#</span> Daiki Tadokoro
              </p>
              <p className="text-muted">
                フリーランスのフルスタックエンジニア。
                スタートアップから大企業まで、様々なプロジェクトに参画。
              </p>
              <p className="text-muted">
                技術選定から設計、実装、運用まで一貫して対応可能。
                特にWebアプリケーション開発とシステムアーキテクチャが得意。
              </p>
              <p className="text-muted">
                <span className="text-primary">{">"}</span> 新しい技術を学ぶのが好き。
                <br />
                <span className="text-primary">{">"}</span> 問題解決が好き。
                <br />
                <span className="text-primary">{">"}</span> 良いプロダクトを作るのが好き。
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
