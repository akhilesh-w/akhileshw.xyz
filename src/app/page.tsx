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
      <div className="mb-6">
        <Photo src={me} />
      </div>

      <section className="mb-10 space-y-4 leading-relaxed">
        <p>Hey, I'm <strong>Akhilesh</strong> - part coder, part storyteller, full-time explorer of ideas.</p>
        <p>I'm a generalist on a journey to be a polymath - stitching together software, stories, systems and soul.</p>

        <p>
          If this is your first time visiting my site, you might want to start with my <Link href="/about" className="underline">about</Link> page for some more details about who I am and what I do, or my <Link href="/now" className="underline">now</Link> page to see what I'm up to and what's on my mind at the moment.
        </p>

      </section>

      {/* links */}
      <section>
        <div className="flex flex-wrap gap-2">
          {linker({ linktext: "Twitter", href: "https://twitter.com/theakhileshw" })}
          {linker({ linktext: "Farcaster", href: "https://farcaster.xyz/akhileshw" })}
          {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
          {linker({ linktext: "Mastodon", href: "https://universeodon.com/@akhileshw" })}
          {linker({ linktext: "Github", href: "https://github.com/akhilesh-w" })}
          {linker({ linktext: "Bluesky", href: "https://bsky.app/profile/akhileshw.bsky.social" })}
        </div>
      </section>
    </MainLayout>
  );
}