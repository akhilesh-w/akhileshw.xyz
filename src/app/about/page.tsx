import { Metadata } from "next";
import React, { Children } from "react";
import MainLayout from "../../../components/main-layout";
import Linker from "../../../components/linker";
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
              I love listening to <Linker href="https://open.spotify.com/user/31knvgklastaewzgvec6s67stw74?si=64401350b4a542ad">new and interesting music</Linker> and curating playlists of the songs I like
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
              I'm also a inconsistent writer. check out my <Linker href="https://akhileshw.substack.com/">substack</Linker> and <Linker href="https://medium.com/@akhileshw">medium</Linker>
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
            find me on these sites:
            <Linker href="https://twitter.com/theakhileshw">Twitter</Linker>,
            <Linker href="https://farcaster.xyz/akhileshw">Farcaster</Linker>,
            <Linker href="https://universeodon.com/@akhileshw">Mastodon</Linker>,
            <Linker href="https://www.linkedin.com/in/akhilesh-w/">LinkedIn</Linker>,
            <Linker href="https://github.com/akhilesh-w">Github</Linker>,
            <Linker href="https://bsky.app/profile/akhileshw.bsky.social">Bluesky</Linker>,
            <Linker href="https://peerlist.io/akhileshw">Peerlist</Linker>,
            <Linker href="https://www.figma.com/@akhileshw">Figma</Linker>,
            <Linker href="https://akhileshw.substack.com/">Substack</Linker>
          </div>

          <div className="mt-12"> reach out at <Linker href="mailto:hey@akhileshw.xyz">hey@akhileshw.xyz</Linker>
          </div>

          <div className="mt-20 pt-10 border-t border-neutral-100 dark:border-neutral-800">
            <p className="text-sm opacity-60 italic">
              Enjoyed your stay? <Linker href="/guestbook">Sign my guestbook</Linker>
            </p>
          </div>

        </section>

      </main>
    </MainLayout>
  )
}
