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

        <p>I'm giving myself permission to put on every single hat, try every coat of identity, take for a spin every life that has called to me, and dedicate myself to it fully 
          (artist, researcher, technologist, programmer, photographer, worldmaker, gardener, designer, cook, and more in the list below that I try to continuously update)
        </p>
        <div className="">
          <img
            src="/images/identities.png"
            alt="A collage of identities"
          />
        </div>

        <p>Take a look at what I'm up to{' '} <Link href="/now" className="tracking-tight underline hover:underline-offset-4 hover:transition-transform">nowdays</Link></p>
      </section>

      {/* links */}
      <section>
        <div className="flex flex-wrap gap-2">
          {linker({ linktext: "Twitter", href: "https://twitter.com/theakhileshw" })}
          {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
          {linker({ linktext: "Github", href: "https://github.com/akhilesh-w" })}
          {linker({ linktext: "Mastodon", href: "https://universeodon.com/@akhileshw" })}
          {linker({ linktext: "Farcaster", href: "https://farcaster.xyz/akhileshw" })}
        </div>
      </section>
    </MainLayout>
  );
}
