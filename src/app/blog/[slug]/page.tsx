import { getAllPostSlugs, getPostBySlug } from "../../../utils/api";
import BlogLayout from "../../../../components/BlogLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "../../../../components/MdxComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <BlogLayout frontmatter={post.frontmatter as any}>
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
