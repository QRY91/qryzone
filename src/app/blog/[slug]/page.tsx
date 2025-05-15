// app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc"; // For RSC compatible MDX rendering
// Note: 'next-mdx-remote/rsc' is for App Router.
// If using Pages Router, you'd use 'next-mdx-remote/serialize' and 'next-mdx-remote'

// This function is needed for Next.js to know which slugs to pre-render at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);
  return {
    title: `${post.title} | QRY.zone Blog`,
    description: post.excerpt,
  };
}

// Custom components you want to use in your MDX
// For example, if you want to use a <CustomImage /> component in MDX
const components = {
  // h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  // p: (props: any) => <p className="text-lg my-3 leading-relaxed" {...props} />,
  // Add more custom components as needed
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return (
    <article className="prose prose-invert prose-lg mx-auto">
      {" "}
      {/* Tailwind Typography for MDX styling */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          {post.title}
        </h1>
        <p className="text-gray-400">
          By {post.author} on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-blue-700 text-blue-100 px-2 py-0.5 rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      {/* Render the MDX content */}
      {/* @ts-expect-error RSC and MDXRemote types can be tricky */}
      <MDXRemote source={post.content} components={components} />
    </article>
  );
}
