// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags?: string[]; // Tags are optional
  excerpt: string;
  content: string; // For the individual post page, includes MDX body
}

// Type for the list items, omitting full content
export interface PostListItem extends Omit<PostData, 'content'> {}


export function getSortedPostsData(): PostListItem[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: matterResult.data.title || 'Untitled Post', // Provide defaults
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      author: matterResult.data.author || 'Anonymous',
      tags: matterResult.data.tags || [], // Default to empty array if tags are missing
      excerpt: matterResult.data.excerpt || '',
      // 'content' is not included here for the list
    } as PostListItem; // Asserting the type for the list items
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
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    title: matterResult.data.title || 'Untitled Post',
    date: matterResult.data.date || new Date().toISOString().split('T')[0],
    author: matterResult.data.author || 'Anonymous',
    tags: matterResult.data.tags || [],
    excerpt: matterResult.data.excerpt || '',
  };
}