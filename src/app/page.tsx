import { Metadata } from "next";
import MainLayout from "../../components/main-layout";
import { Photo } from "../../components/photo";
import me from "../../public/me.jpg";
import { getAllPosts } from "../utils/api";
import Link from "next/link";
import linker from "../../components/linker";

export const metadata: Metadata = {}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <div className="mb-6 appear stagger-1">
        <Photo src={me} />
      </div>

      <section className="mb-10 space-y-4 leading-relaxed">
        <p className="appear stagger-2">Hey, I'm <strong>Akhilesh</strong> - part coder, part storyteller, full-time explorer of ideas.</p>
        <p className="appear stagger-3">I'm a generalist on a journey to be a polymath - stitching together software, stories, systems and soul.</p>

        <p className="appear stagger-4">
          If this is your first time visiting my site, you might want to start with my <Link href="/about" className="underline">about</Link> page for some more details about who I am and what I do, or my <Link href="/now" className="underline">now</Link> page to see what I'm up to and what's on my mind at the moment.
        </p>

      </section>

      {/* links */}
      <section className="appear stagger-5">
        <div className="flex flex-wrap gap-2">
          {linker({ linktext: "Twitter", href: "https://twitter.com/theakhileshw" })}
          {linker({ linktext: "Farcaster", href: "https://farcaster.xyz/akhileshw" })}
          {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
        </div>
      </section>
    </MainLayout>
  );
}