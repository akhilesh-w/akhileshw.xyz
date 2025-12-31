import MainLayout from "../../../components/main-layout";
import Link from "next/link";
import { getAllPosts } from "../../utils/api";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-12 text-neutral-800 dark:text-neutral-400">
          posts
        </h1>
      </header>
      <main>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`py-4 flex justify-between items-center group cursor-pointer appear stagger-${Math.min(index + 2, 5)} hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-all px-2 -mx-2 rounded-lg`}
            >
              <span className="text-md text-neutral-800 dark:text-neutral-400 group-hover:underline decoration-neutral-400 underline-offset-4 transition-all">
                {post.frontmatter.title}
              </span>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                {post.frontmatter.date}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
