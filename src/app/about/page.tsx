import { Metadata } from "next";
import React, { Children } from "react";
import MainLayout from "../../../components/main-layout";
import linker from "../../../components/linker";

export const metadata: Metadata = {}

export default function About() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">Hi!</h1>
      </header>

      <main>
        <section className="mb-6 leading-relaxed">
          <p>This is Akhilesh. I grew up in a small town in Maharashtra and studied in Hyderabad, Telangana.</p>
          <p>I'm a Graduate in Computer Applications from Osmania University, Hyderabad.</p>
          <p>To other humans, I speak Marathi, Hindi and English. To silicon, I speak C, Python, JavaScript and a little bit of Rust.</p>
        </section>

        <section className="mb-6 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">Things I like</h2>

          <ul className="space-y-4">
            <li><strong>Music: </strong>I love listening to <a href="https://open.spotify.com/user/31knvgklastaewzgvec6s67stw74?si=64401350b4a542ad">new and interesting music</a>  and I curate many playlists of the music I like</li>


            <li><strong>Photography: </strong>I love taking Photographs and collecting beautiful pictures.</li>

            <li><strong>Linux: </strong>I love using Linux and Ricing it for productivity and faster workflows.</li>

            <li><strong>Movies: </strong>I like watching movies, <em>especially sci-fi</em>. Interstellar, The Social Network and Whiplash are some of my favourite movies.</li>

            <li><strong>Self hosting: </strong>I'm not confortable having my data on the cloud. I prefer the peace of mind that comes with keeping my data stored locally on my own devices.</li>

            <li><strong>Writing: </strong>I sometimes write, I'm not at all consistent but I do write. Check out my <a href="https://akhileshw.substack.com/">Substack</a> and <a href="https://medium.com/@akhileshw">Medium</a></li>

            <li><strong>Better Future: </strong>I am excited for the incredible future we can have if we work towards it. More rights to people, no more oppressive regimes, no more centralized platforms, better privacy for all.</li>

          </ul>

        </section>

        <section className="leading-relaxed space-y-4">
          <p className="text-xl font-semibold">Connect</p>

          <div>
            Find me on these sites:{" "}

            {linker({ linktext: "Twitter", href: "https://twitter.com/theakhileshw" })}
            {", "}
            {linker({ linktext: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-w/" })}
            {", "}
            {linker({ linktext: "Github", href: "https://github.com/akhilesh-w" })}
            {", "}
            {linker({ linktext: "Peerlist", href: "https://peerlist.io/akhileshw" })}
            {", "}
            {linker({ linktext: "Mastodon", href: "https://universeodon.com/@akhileshw" })}
            {", "}
            {linker({ linktext: "Warpcast", href: "https://warpcast.com/akhileshw" })}
            {", "}
            {linker({ linktext: "Figma", href: "https://www.figma.com/@akhileshw" })}
            {", "}
          </div>

          <div> Reach out at {" "}
            {linker({ linktext: "hey@akhileshw.xyz", href: "mailto:hey@akhileshw.xyz" })}
          </div>

        </section>
      </main>
    </MainLayout>
  )
}
