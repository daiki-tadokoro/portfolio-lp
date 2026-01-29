import Link from "next/link";
import { getAllPosts, getReadingTime, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Blog | Daiki Yamamoto",
  description: "Daiki Yamamoto のブログ。技術的な学びやプロジェクトの振り返りを発信。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-darker pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-muted hover:text-primary font-mono text-sm transition-colors"
          >
            {"<"}- back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-mono mt-6 mb-2">
            <span className="text-light">Blog</span>
          </h1>
          <p className="text-muted font-mono text-sm">
            技術的な学びやプロジェクトの振り返りを発信
          </p>
          <p className="text-muted font-mono text-xs mt-2">
            by <span className="text-primary">daiki</span>
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center text-muted font-mono">
            <p>{"// no posts yet"}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <time className="text-xs font-mono text-muted">
                      {formatDate(post.date)} · {getReadingTime(post.content)} min
                    </time>
                  </div>
                  <h2 className="text-lg font-mono font-bold text-light mb-2 group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-sm font-mono text-muted mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-secondary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
