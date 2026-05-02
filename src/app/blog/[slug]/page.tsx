import { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "../../../utils/api";
import BlogLayout from "@/components/BlogLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/MdxComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { siteConfig } from "@/utils/site";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  const { title, description } = post.frontmatter;
  const safeDescription = typeof description === "string" ? description : undefined;

  return {
    title,
    description: safeDescription,
    openGraph: {
      title,
      description: safeDescription,
      type: "article",
      url: `${siteConfig.url}/blog/${params.slug}`,
      images: [{ url: siteConfig.ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: safeDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <BlogLayout frontmatter={post.frontmatter as any} slug={params.slug}>
      <MDXRemote
        source={post.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeHighlight, rehypeKatex],
          }
        }}
      />
    </BlogLayout>
  );
}
