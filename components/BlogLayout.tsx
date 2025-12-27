import { ReactNode } from "react";
import MainLayout from "./main-layout";
import { ReadingProgressBar } from "./ReadingProgressBar";
import Link from "next/link";

interface BlogLayoutProps {
  children: ReactNode;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    description?: string;
    readingTime?: string;
    substack?: string;
    medium?: string;
    paragraph?: string;
    other?: string;
  };
}

export default function BlogLayout({ children, frontmatter }: BlogLayoutProps) {
  return (
    <MainLayout>
      <ReadingProgressBar />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6 font-sans">
        <header className="mb-8 appear stagger-1 relative">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 mb-6 inline-block transition-colors"
          >
            ← back
          </Link>

          <div className="flex justify-between items-end">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
                {frontmatter.title}
              </h1>

              {frontmatter.description && (
                <p className="text-neutral-500 dark:text-neutral-400 mb-3 text-base leading-snug">
                  {frontmatter.description}
                </p>
              )}

              <div className="flex items-center gap-1">
                <p className="text-[12px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-tighter">
                  {frontmatter.date} • {frontmatter.readingTime && `${frontmatter.readingTime} read • `}{frontmatter.author}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-2 text-xs font-medium pb-1">
              {frontmatter.substack && (
                <Link
                  href={frontmatter.substack}
                  target="_blank"
                  className="text-[#FF6719] hover:underline flex items-center gap-1"
                >
                  Also available on Substack ↗{"\uFE0E"}
                </Link>
              )}
              {frontmatter.medium && (
                <Link
                  href={frontmatter.medium}
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-400 hover:underline flex items-center gap-1"
                >
                  Read on Medium ↗{"\uFE0E"}
                </Link>
              )}
              {frontmatter.paragraph && (
                <Link
                  href={frontmatter.paragraph}
                  target="_blank"
                  className="text-neutral-500 dark:text-neutral-400 hover:underline flex items-center gap-1"
                >
                  Read on Paragraph ↗{"\uFE0E"}
                </Link>
              )}
              {frontmatter.other && (
                <Link
                  href={frontmatter.other}
                  target="_blank"
                  className="text-neutral-500 dark:text-neutral-400 hover:underline flex items-center gap-1"
                >
                  Read more ↗{"\uFE0E"}
                </Link>
              )}
            </div>
          </div>

          <div className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-800 mt-8" />
        </header>

        <div className="prose dark:prose-invert prose-neutral max-w-none leading-relaxed appear stagger-2">
          {children}
        </div>
      </article>
    </MainLayout>
  );
}
