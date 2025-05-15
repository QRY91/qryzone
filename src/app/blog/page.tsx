// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css'; // We'll create this CSS Module next

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData();

  return (
    <div>
      <h1 className={styles.pageTitle}>Q's Musings</h1>
      {allPosts.length === 0 && <p>No posts yet. Terra is still contemplating...</p>}
      <ul className={styles.postsList}>
        {allPosts.map(({ slug, title, date, excerpt, tags }) => (
          <li key={slug} className={styles.postCard}>
            <Link href={`/blog/${slug}`}> {/* Link wraps the title */}
              <h2 className={styles.postTitle}>{title}</h2>
            </Link>
            <p className={styles.postDate}>
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className={styles.postExcerpt}>{excerpt}</p>
            {/* Safely render tags only if they exist and have items */}
            {tags && tags.length > 0 && (
              <div className={styles.tagsContainer}>
                {tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}