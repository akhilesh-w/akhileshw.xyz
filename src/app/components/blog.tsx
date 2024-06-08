import Link from "next/link";

const Blogs = ({ name, href, date }: { name: string; href: string; date: string }) => (
  <Link href={href} as={href} className="flex justify-between">
    <p className="underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500">{name}</p>
    <p>{date}</p>
  </Link >
)



const BlogPage = () => (

  <div className="flex flex-col gap-4">
    <h2 className="mt-8 text-xl font-semibold">Blogs</h2>
    <Blogs name="The power of LLMs" href="/blog/The-power-of-LLMs" date="May 2, 2023" />
    <Blogs name="The writing process for all beginners" href="/blog/the-writing-process-for-all-beginners" date="July 18, 2022" />
    <Blogs name="Set Your Expectations" href="/blog/set-your-expectations" date="Jan 16, 2022" />

    <a className="underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500" href="/blog">All posts</a>
  </div>
)


export default BlogPage
