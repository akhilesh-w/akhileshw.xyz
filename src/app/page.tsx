import { Metadata } from "next";
import MainLayout from "@/components/main-layout";
import { Photo } from "@/components/photo";
import me from "../../public/me.jpg";
import Linker from "@/components/linker";
import NowPlaying from "@/components/NowPlaying";
import { YearProgress } from "@/components/YearProgress";
import RecentPosts from "@/components/blog";
import { Signature } from "@/components/Signature";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  return (
    <>
    <MainLayout>
      <h1 className="sr-only">{siteConfig.name}</h1>
      <div className="mb-6 appear stagger-1">
        <Photo src={me} />
      </div>

      <section className="mb-10 space-y-4 leading-relaxed">
        <p className="appear stagger-2">Hey, I'm <strong>Akhilesh</strong>, coder, occasional writer, full-time rabbit-hole enthusiast.</p>
        <p className="appear stagger-3">Curious about most things: software, stories, the future, how people think.</p>
        <p className="appear stagger-4">This site is where I think out loud. Glad you're here.</p>
      </section>

      {/* Recent posts */}
      <section className="mb-10 appear stagger-5">
        <RecentPosts />
      </section>

      {/* Spotify Now Playing */}
      <section className="mb-10 appear stagger-6">
        <NowPlaying />
      </section>

      {/* Year in Progress */}
      <section className="mb-10 appear stagger-7">
        <YearProgress />
      </section>

      {/* links */}
      <section className="appear stagger-7">
        <div className="flex flex-wrap gap-2">
          <Linker href="https://twitter.com/theakhileshw">Twitter</Linker>
          <Linker href="https://farcaster.xyz/akhileshw">Farcaster</Linker>
          <Linker href="https://www.linkedin.com/in/akhilesh-w/">LinkedIn</Linker>
        </div>
      </section>
    </MainLayout>

    <div className="mx-auto max-w-[52rem] px-6 xs:px-0">
      <Signature />
    </div>
    </>

  );
}
