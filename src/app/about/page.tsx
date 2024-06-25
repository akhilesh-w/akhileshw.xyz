import { Metadata } from "next";
import React, { Children } from "react";

export const metadata: Metadata = {}

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-5 font-medium text-lg">{children}</h3>
)

const Description = ({ children }: { children: React.ReactNode }) => (
  <p className="pt-1 pl-3">{children}</p>
)


export default function About() {
  return (
    <div>
      <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl">Hi!</h1>
      <div className="pt-4">
        <p>This is Akhilesh. I grew up in a small town in Maharashtra and studied in Hyderabad, Telangana.</p>
        <p>I'm a Graduate in Computer Applications from Osmania University, Hyderabad.</p>
        <p>To other humans, I speak Marathi, Hindi and English. To silicon, I speak C, Python, JavaScript and a little bit of Rust.</p>
      </div>

      <h2 className="text-xl font-medium pt-4">Things I like</h2>

      <SubHeading>Music</SubHeading>
      <Description>I love listening to <a href="https://open.spotify.com/user/31knvgklastaewzgvec6s67stw74?si=64401350b4a542ad">new and interesting music</a>  and I curate many playlists of the music I like</Description>

      <SubHeading>Photography</SubHeading>
      <Description>I love taking Photographs and collecting beautiful pictures.</Description>

      <SubHeading>Linux</SubHeading>
      <Description>I love using Linux and Ricing it for productivity and faster workflows.</Description>

      <SubHeading>Movies</SubHeading>
      <Description>I like watching movies </Description>

      <SubHeading>Automation</SubHeading>
      <Description>I'm obsessed with automation and productivity. I'm soon gonna make a post to share all about it.</Description>

      <SubHeading>Self hosting</SubHeading>
      <Description>I don't really feel confortable having my data on the clouds of these big corps, I know it's secure and I'm just being paranoid, but I prefer the peace of mind that comes with keeping my data stored locally on my own devices.</Description>

      <SubHeading>Writing</SubHeading>
      <Description>I sometimes write, I'm not at all consistent but I do write. Check out my <a href="https://akhileshw.substack.com/">Substack</a> and <a href="https://medium.com/@akhileshw">Medium</a></Description>

      <SubHeading>Better Future</SubHeading>
      <Description>I am excited for the incredible future we can have if we work towards it. More rights to people, no more oppressive regimes, no more centralized platforms, better privacy for all.</Description>

      <div>
        <SubHeading>Connect</SubHeading>
        <Description>
          Find me on these sites:{" "}

          <a href="https://twitter.com/the_akhilesh_w">Twitter</a>
          {", "}
          <a href="https://www.linkedin.com/in/akhilesh-w/"> LinkedIn</a>
          {", "}
          <a href="https://github.com/akhilesh-w">GitHub</a>
          {", "}
          <a href="https://peerlist.io/akhileshw">Peerlist</a>
          {", "}
          <a href="https://universeodon.com/@akhileshw">Mastodon</a>
          {", "}
          <a href="https://warpcast.com/akhileshw">Warpcast</a>
          {", "}
          <a href="https://www.figma.com/@akhileshw">Figma</a>
          {", "}

        </Description>


        <Description> Reach out at {" "}
          <a href="mailto:hey@akhileshw.xyz">hey@akhileshw.xyz</a>
        </Description>


      </div>
    </div>
  )
}
