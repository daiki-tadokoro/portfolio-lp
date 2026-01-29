export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
};

// ブログ記事はここに追加
export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "ブログを始めました",
    date: "2025-01-29",
    excerpt: "エンジニアとしての学びや経験を発信していきます。",
    content: `
# ブログを始めました

エンジニアとしての学びや経験を発信していきます。

## 発信予定のトピック

- 技術的な学び
- プロジェクトの振り返り
- ツールやライブラリの紹介

よろしくお願いします。
    `.trim(),
    tags: ["日記"],
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 400; // 日本語は文字数ベース
  const charCount = content.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(charCount / wordsPerMinute));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
