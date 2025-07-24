import MainLayout from "../../../components/main-layout";
import Link from "next/link";
import { getAllPosts } from "../../utils/api";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          posts
        </h1>
      </header>
      <main>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="flex justify-between items-center">
              <Link href={`/blog/${post.slug}`} className="text-lg hover:underline" >{post.frontmatter.title}</Link>
              <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </MainLayout>
  );
}
