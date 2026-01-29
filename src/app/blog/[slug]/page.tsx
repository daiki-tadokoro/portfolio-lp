import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getReadingTime, formatDate } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Daiki Yamamoto`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-darker pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-muted hover:text-primary font-mono text-sm transition-colors"
          >
            {"<"}- back to blog
          </Link>
        </div>

        {/* Article */}
        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <time className="text-xs font-mono text-muted">
                {formatDate(post.date)} · {getReadingTime(post.content)} min
              </time>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-mono text-light mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted">
                by <span className="text-primary">daiki</span>
              </span>
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
            </div>
          </header>

          {/* Content */}
          <div className="card">
            <div className="prose prose-invert prose-sm max-w-none font-mono">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={i} className="text-xl font-bold text-light mt-6 mb-4">
                      {line.slice(2)}
                    </h1>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-lg font-bold text-light mt-6 mb-3">
                      {line.slice(3)}
                    </h2>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="text-muted ml-4">
                      {line.slice(2)}
                    </li>
                  );
                }
                if (line.trim() === "") {
                  return <br key={i} />;
                }
                return (
                  <p key={i} className="text-muted mb-2">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-muted hover:text-primary font-mono text-sm transition-colors"
          >
            {"<"}- back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}
