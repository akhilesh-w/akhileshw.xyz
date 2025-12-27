import { Metadata } from "next";
import React, { Children } from "react";
import MainLayout from "../../../components/main-layout";
import linker from "../../../components/linker";
import ProjectsSection from '../../../components/ProjectsSection';

export const metadata: Metadata = {}

export default function About() {
  return (
    <MainLayout>
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">hi!</h1>
      </header>

      <main>

        <p className="mb-6 appear stagger-2">exploring random things. onchain, offchain, and everything in between. creating things for the web.</p>

        <div className="appear stagger-3">
          <ProjectsSection />
        </div>

        <section className="mb-6 leading-relaxed mt-12 appear stagger-4">
          <h2 className="text-2xl font-semibold mb-4">things I like</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>music: </strong>
              I love listening to{" "}
              <a
                href="https://open.spotify.com/user/31knvgklastaewzgvec6s67stw74?si=64401350b4a542ad"
                className="underline underline-offset-2 decoration-gray-500 hover:decoration-gray-700 transition-colors"
              >
                new and interesting music
              </a>{" "}
              and I curate many playlists of the music I like
            </li>
            <li>
              <strong>photography: </strong>
              I love taking pictures and collecting them.
            </li>
            <li>
              <strong>linux: </strong>
              love using linux and ricing it for productivity and faster workflows.
            </li>
            <li>
              <strong>movies: </strong>
              sci-fi addict. Interstellar, The Social Network and Whiplash are some of my favourite movies.
            </li>
            <li>
              <strong>self hosting: </strong>
              I don't trust the cloud. I'd rather have my files at home.
            </li>
            <li>
              <strong>writing: </strong>
              I'm also a inconsistent writer. check out my{" "}
              <a
                href="https://akhileshw.substack.com/"
                className="underline underline-offset-2 decoration-gray-500 hover:decoration-gray-700 transition-colors"
              >
                substack
              </a>{" "}
              and{" "}
              <a
                href="https://medium.com/@akhileshw"
                className="underline underline-offset-2 decoration-gray-500 hover:decoration-gray-700 transition-colors"
              >
                medium
              </a>
            </li>
            <li>
              <strong>better future: </strong>
              I am excited for the incredible future we can have if we work towards it. Freedom, privacy, decentralization.
            </li>
          </ul>
        </section>

        <section className="leading-relaxed space-y-4 mt-12 appear stagger-5">
          <p className="text-xl font-semibold">connect</p>

          <div>
            find me on these sites:{" "}

            {linker({ linktext: "Twitter", href: "https://twitter.com/theakhileshw" })}
            {", "}
            {linker({ linktext: "Farcaster", href: "https://farcaster.xyz/akhileshw" })}
            {", "}
            {linker({ linktext: "Mastodon", href: "https://universeodon.com/@akhileshw" })}
            {", "}
            {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
            {", "}
            {linker({ linktext: "Github", href: "https://github.com/akhilesh-w" })}
            {", "}
            {linker({ linktext: "Bluesky", href: "https://bsky.app/profile/akhileshw.bsky.social" })}
            {", "}
            {linker({ linktext: "Peerlist", href: "https://peerlist.io/akhileshw" })}
            {", "}
            {linker({ linktext: "Figma", href: "https://www.figma.com/@akhileshw" })}
            {", "}
            {linker({ linktext: "Substack", href: "https://akhileshw.substack.com/" })}
          </div>

          <div className="mt-12"> reach out at {" "}
            {linker({ linktext: "hey@akhileshw.xyz", href: "mailto:hey@akhileshw.xyz" })}
          </div>

          <div className="mt-20 pt-10 border-t border-neutral-100 dark:border-neutral-800">
            <p className="text-sm opacity-60 italic">
              Enjoyed your stay? {linker({ linktext: "Sign my guestbook", href: "/guestbook" })}
            </p>
          </div>

        </section>

      </main>
    </MainLayout>
  )
}
