// src/app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData, PostListItem } from '@/lib/posts'; // Import PostListItem if needed for generateStaticParams
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './page.module.css'; // We'll create this CSS Module next

export async function generateStaticParams() {
  const posts: PostListItem[] = getSortedPostsData(); // Use the correct type here
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);
  return {
    title: `${post.title} | QRY.zone Blog`,
    description: post.excerpt,
  };
}

const components = {
  // h2: (props: any) => <h2 className={styles.yourCustomClassForH2} {...props} />,
  // Add other custom components to pass to MDXRemote if needed
};

// In src/app/blog/[slug]/page.tsx, temporarily modify:
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  console.log("Slug received:", params.slug); // Check if slug is correct
  // const post = await getPostData(params.slug); // Comment out for a moment
  const post = { // Mock post data
    title: "Test Title for " + params.slug,
    author: "Test Author",
    date: new Date().toISOString(),
    tags: ["test"],
    content: "# Hello Test",
    slug: params.slug,
    excerpt: "Test excerpt"
  };

  return (
    <article className={styles.articleContainer}>
      <header className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>{post.title}</h1>
        <div className={styles.metaInfo}>
          <span>By {post.author}</span>
          <span> | </span>
          <span>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className={styles.articleContent}>
        @ts-expect-error Server Component types with MDXRemote can be complex
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}