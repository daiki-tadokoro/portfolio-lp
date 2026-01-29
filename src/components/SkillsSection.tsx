const skillCategories = [
  {
    title: "Frontend",
    command: "ls ./frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    command: "ls ./backend",
    skills: ["Go", "Node.js", "PostgreSQL", "GraphQL", "REST API"],
  },
  {
    title: "Infrastructure",
    command: "ls ./infra",
    skills: ["AWS", "Docker", "Terraform", "Datadog", "ECS"],
  },
];

const aiTools = [
  "Claude Code", "GitHub Copilot", "Codex", "Cursor", "v0"
];

const tools = [
  "Git", "GitHub", "Vercel", "Firebase", "Redis",
  "DynamoDB", "Slack API", "CI/CD", "Linux"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container bg-darker grid-bg relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="text-muted font-mono text-sm">{"// skills"}</span>
        <h2 className="section-title mt-2">
          <span className="text-light">{"<"}</span>
          Skills
          <span className="text-light">{" />"}</span>
        </h2>
      </div>

      {/* Skill categories */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="card">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="ml-2 text-muted font-mono text-xs">{category.title.toLowerCase()}</span>
            </div>

            {/* Command */}
            <div className="mb-4">
              <span className="text-secondary font-mono text-sm">$</span>
              <span className="text-muted font-mono text-sm ml-2">{category.command}</span>
            </div>

            {/* Skills list */}
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-sm font-mono group"
                >
                  <span className="text-primary">→</span>
                  <span className="text-light group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI-Driven Development */}
      <div className="card mb-8">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
          <span className="text-secondary font-mono text-sm">$</span>
          <span className="text-muted font-mono text-sm">cat ./ai-driven-dev.txt</span>
          <span className="ml-auto text-xs font-mono text-primary">[featured]</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {aiTools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 border border-primary/50 text-sm font-mono text-primary hover:bg-primary/10 transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
          <span className="text-secondary font-mono text-sm">$</span>
          <span className="text-muted font-mono text-sm">cat ./tools.txt</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 border border-gray-700 text-sm font-mono text-muted hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
