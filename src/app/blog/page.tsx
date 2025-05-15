// app/blog/page.tsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Q's Musings (Terra's Archive?)
      </h1>
      {allPosts.length === 0 && <p>No posts yet. Stay tuned!</p>}
      <ul className="space-y-6">
        {allPosts.map(({ slug, title, date, excerpt, tags }) => (
          <li
            key={slug}
            className="border border-gray-700 p-4 rounded-md hover:border-blue-500"
          >
            <Link href={`/blog/${slug}`}>
              <h2 className="text-2xl font-semibold mb-1 text-blue-400 hover:text-blue-300">
                {title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400 mb-2">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300 mb-3">{excerpt}</p>
            <div>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
