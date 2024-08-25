import { ReactNode } from "react";
import MainLayout from "./main-layout";

interface BlogLayoutProps {
  children: ReactNode;
  frontmatter: {
    title: string;
    date: string;
    author: string;
  };
}

export default function BlogLayout({ children, frontmatter }: BlogLayoutProps) {
  return (
    <MainLayout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <div className="text-neutral-500 text-sm">
            By {frontmatter.author} on {frontmatter.date}
          </div>
        </header>
        <div className="prose lg:prose-xl max-w-none space-y-6 leading-relaxed prose-links">
          {children}
        </div>
      </article>
    </MainLayout>
  );
}
