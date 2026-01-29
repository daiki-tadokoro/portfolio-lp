import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GoogleGenerativeAI } from "@google/generative-ai";

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const THUMBNAILS_DIR = path.join(process.cwd(), "public/thumbnails");
const CACHE_FILE = path.join(process.cwd(), ".thumbnail-cache.json");

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
}

interface CacheEntry {
  hash: string;
  thumbnail: string;
}

type Cache = Record<string, CacheEntry>;

function getContentHash(content: string): string {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

function loadCache(): Cache {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    }
  } catch {
    // Ignore cache errors
  }
  return {};
}

function saveCache(cache: Cache): void {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function generateThumbnail(
  genAI: GoogleGenerativeAI,
  title: string,
  excerpt: string,
  tags: string[]
): Promise<Buffer | null> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    generationConfig: {
      responseModalities: ["image", "text"],
    },
  } as Parameters<typeof genAI.getGenerativeModel>[0]);

  const prompt = `Create a minimalist, dark-themed blog thumbnail image for a tech article.
Title: "${title}"
Summary: "${excerpt}"
Tags: ${tags.join(", ")}

Style requirements:
- Dark background (#0a0a0a or similar)
- Minimal, clean design
- Tech/code aesthetic
- No text in the image
- Abstract geometric shapes or subtle code-related visuals
- Color accent: cyan/teal (#00d4ff)
- Aspect ratio: 16:9
- Professional, modern look`;

  try {
    const response = await model.generateContent(prompt);
    const parts = response.response.candidates?.[0]?.content?.parts;

    if (parts) {
      for (const part of parts) {
        if ("inlineData" in part && part.inlineData?.data) {
          return Buffer.from(part.inlineData.data, "base64");
        }
      }
    }
  } catch (error) {
    console.error(`Failed to generate thumbnail for "${title}":`, error);
  }

  return null;
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log("GEMINI_API_KEY not set. Skipping thumbnail generation.");
    console.log("Set GEMINI_API_KEY environment variable to enable auto-generation.");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  // Ensure thumbnails directory exists
  if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
  }

  // Load cache
  const cache = loadCache();
  let cacheUpdated = false;

  // Get all markdown files
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(".md", "");
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    const frontmatter = data as PostFrontmatter;

    // Skip if thumbnail already exists in frontmatter
    if (frontmatter.thumbnail) {
      console.log(`Skipping ${slug}: thumbnail already specified`);
      continue;
    }

    const hash = getContentHash(content);
    const thumbnailPath = `/thumbnails/${slug}.png`;
    const thumbnailFile = path.join(THUMBNAILS_DIR, `${slug}.png`);

    // Check cache
    if (cache[slug]?.hash === hash && fs.existsSync(thumbnailFile)) {
      console.log(`Skipping ${slug}: cached`);
      continue;
    }

    console.log(`Generating thumbnail for: ${slug}`);

    const imageBuffer = await generateThumbnail(
      genAI,
      frontmatter.title,
      frontmatter.excerpt,
      frontmatter.tags || []
    );

    if (imageBuffer) {
      fs.writeFileSync(thumbnailFile, imageBuffer);
      cache[slug] = { hash, thumbnail: thumbnailPath };
      cacheUpdated = true;
      console.log(`Generated: ${thumbnailPath}`);
    }

    // Rate limit: wait between requests
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  if (cacheUpdated) {
    saveCache(cache);
  }

  console.log("Thumbnail generation complete!");
}

main().catch(console.error);
