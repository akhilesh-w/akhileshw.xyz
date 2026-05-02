import { Metadata } from "next";
import MainLayout from "@/components/main-layout";
import Link from "next/link";
import { getAllPosts } from "../../utils/api";

export const metadata: Metadata = {
  title: "Blog",
};

function dateTimeAttr(dateStr: string | undefined): string | undefined {
  if (!dateStr) return undefined;
  const t = Date.parse(dateStr);
  if (Number.isNaN(t)) return undefined;
  return new Date(t).toISOString();
}

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
          {posts.map((post, index) => {
            const fm = post.frontmatter as {
              title: string;
              date?: string;
              description?: string;
              readingTime?: string;
            };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`py-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6 group cursor-pointer appear stagger-${Math.min(index + 2, 5)} hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-all px-2 -mx-2 rounded-lg`}
              >
                <div className="min-w-0 flex-1">
                  <span className="text-md text-neutral-800 dark:text-neutral-400 group-hover:underline decoration-neutral-400 underline-offset-4 transition-all font-medium">
                    {fm.title}
                  </span>
                  {fm.description ? (
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500 leading-snug line-clamp-2">
                      {fm.description}
                    </p>
                  ) : null}
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-col sm:items-end sm:text-right">
                  {fm.readingTime ? (
                    <span className="tabular-nums not-italic">{fm.readingTime}</span>
                  ) : null}
                  {fm.date ? (
                    <time className="italic tabular-nums" dateTime={dateTimeAttr(fm.date)}>
                      {fm.date}
                    </time>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </MainLayout>
  );
}
