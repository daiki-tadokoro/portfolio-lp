import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const CACHE_FILE = path.join(process.cwd(), ".thumbnail-cache.json");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  thumbnail?: string;
};

interface ThumbnailCache {
  [slug: string]: {
    hash: string;
    thumbnail: string;
  };
}

function loadThumbnailCache(): ThumbnailCache {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    }
  } catch {
    // Ignore cache errors
  }
  return {};
}

export function getAllPosts(): Post[] {
  const cache = loadThumbnailCache();

  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Check for thumbnail in frontmatter or cache
    const thumbnail = data.thumbnail || cache[slug]?.thumbnail;

    return {
      slug,
      title: data.title || slug,
      date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
      excerpt: data.excerpt || "",
      content: content.trim(),
      tags: data.tags || [],
      thumbnail,
    } as Post;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
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
