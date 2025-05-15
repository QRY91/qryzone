// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // For parsing frontmatter

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  content: string; // The MDX content itself
}

export function getSortedPostsData(): Omit<PostData, "content">[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        author: string;
        tags: string[];
        excerpt: string;
      }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // matterResult.content is the MDX string
  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as {
      title: string;
      date: string;
      author: string;
      tags: string[];
      excerpt: string;
    }),
  };
}
