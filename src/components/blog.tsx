import Link from "next/link";
import { getAllPosts } from "@/utils/api";

const RecentPosts = async () => {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 3);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Recent writing</h2>
      {recent.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex justify-between items-baseline gap-4 group"
        >
          <p className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 transition-colors group-hover:decoration-neutral-600 dark:group-hover:decoration-neutral-400 truncate">
            {post.frontmatter.title}
          </p>
          <span className="text-sm text-neutral-400 dark:text-neutral-500 shrink-0">
            {post.frontmatter.date}
          </span>
        </Link>
      ))}
      <Link
        href="/blog"
        className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mt-1"
      >
        All posts →
      </Link>
    </div>
  );
};

export default RecentPosts;
