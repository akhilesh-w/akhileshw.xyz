import { Metadata } from "next";
import MainLayout from "../../components/main-layout";
import { Photo } from "../../components/photo";
import me from "../../public/me.jpg";
import { getAllPosts } from "../utils/api";
import Link from "next/link";
import linker from "../../components/linker";

export const metadata: Metadata = {}

const featuredProjects = [
  {
    title: "akhileshw.xyz",
    description: "Personal site built with nextjs",
    repo: "https://github.com/akhilesh-w/akhileshw.xyz",
  },
  {
    title: "dotfiles",
    description: "dotfiles for my Arch setup",
    repo: "https://github.com/akhilesh-w/dotfiles",
  },
  {
    title: "log",
    description: "canvas for your thoughts",
    repo: "https://log.akhileshw.xyz",
  }
]

export default async function Home() {
  const posts = await getAllPosts();

  // const sortedPosts = posts.sort((a, b) =>
  //   new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  // );

  return (
    <MainLayout>
      <div className="mb-6">
        <Photo src={me} />
      </div>

      <section className="mb-10 space-y-4 leading-relaxed">
        <p>Hi there, I'm <strong>Akhilesh</strong> aka <strong>dopamine</strong>, a software developer from India. I'm passionate about the internet and love creating things for the web.</p>
        <p>I'm also pretty active in the web3 and blockchain space. Always open to talk about it.</p>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects?.map((project, index) =>
            <div key={index}>
              <a
                href={project.repo}
                className="underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500"
                target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
              <p className="mt-2 text-neutral-400">{project.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500">
              <h3>{post.frontmatter.title}</h3>
              <p className="mt-1 opacity-60 text-sm">{post.frontmatter.date}</p>
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">View all posts →</Link>
        </div>
      </section>

      {/* links */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Links</h2>
        <div className="flex flex-wrap gap-2">
          {linker({ linktext: "Twitter", href: "https://twitter.com/the_akhilesh_w" })}
          {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
          {linker({ linktext: "Github", href: "https://github.com/akhilesh-w" })}
          {linker({ linktext: "Mastodon", href: "https://universeodon.com/@akhileshw" })}
          {linker({ linktext: "Warpcast", href: "https://warpcast.com/akhileshw" })}
        </div>
      </section>
    </MainLayout>
  );
}
