import { getAllPostSlugs, getPostBySlug } from "../../../utils/api";
import BlogLayout from "../../../../components/BlogLayout";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const { title, date, author, ...restFrontmatter } = post.frontmatter;

  return (
    <BlogLayout frontmatter={{ title, date, author }}>
      <MDXRemote source={post.content} />
    </BlogLayout>
  );
}
