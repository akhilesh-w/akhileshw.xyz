import { Metadata } from "next";
import MainLayout from "../../../components/main-layout";
import linker from "../../../components/linker";

export const metadata: Metadata = {
  title: "Uses",
  description: "A list of hardware and software I use on a daily basis.",
}

export default function Uses() {
  return (
    <MainLayout>
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          uses
        </h1>
      </header>
      <main>
        <section className="mb-8 appear stagger-2">
          <h2 className="text-2xl font-semibold mb-4">hardware</h2>
          <ul className="space-y-4 leading-relaxed">
            <li><strong>laptop:</strong> Lenovo IdeaPad Gaming 3, It runs Arch.</li>
            <li><strong>old laptop:</strong> ThinkPad T440s (Old laptop which just sits in my closet now). I got this second hand when I was in first year of college when I was obssesed with Thinkpads (I still am). It runs ubuntu.</li>
            <li><strong>monitor:</strong> {linker({ linktext: 'LG 32" 4k.', href: "https://amzn.to/3z0gjr1" })}  I've searched a lot for a good monitor before landing on this one. monitors are almost universally bad and the ones that are not bad are just expensive, this one is really good for the price. </li>
            <li><strong>phone:</strong> I use pocofone with LineageOS, it's old now but sadly I can't find a worthy replacement.</li>
          </ul>
        </section>

        <section className="appear stagger-3">
          <h2 className="text-2xl font-semibold mb-4">Software</h2>
          <ul className="space-y-4">
            <li>
              <strong>OS:</strong> I use {" "}
              {linker({ linktext: "arch", href: "https://archlinux.org/" })} +{" "}
              {linker({ linktext: "i3", href: "https://i3wm.org/" })} as my daily driver.
            </li>

            <li>
              <strong>note taking: </strong>
              {linker({ linktext: "logseq", href: "https://github.com/logseq/logseq" })} is a free & open source markdown editor with a really nice UI. It's kinda like Obsidian but it's open source and free. I use it for note taking and journaling.
            </li>

            <li>
              <strong>editor: </strong>
              {linker({ linktext: "vscode", href: "https://code.visualstudio.com/" })} and{" "}
              {linker({ linktext: "neovim", href: "https://neovim.io/" })} are my editors of choice. been trying out {linker({ linktext: "zed", href: "https://zed.dev/" })} and cursor as well.
            </li>

            <li>
              <strong>terminal: </strong>
              {linker({ linktext: "alacritty", href: "https://alacritty.org/" })} with {linker({ linktext: "tmux", href: "https://github.com/tmux/tmux/wiki" })}  is a crazy fast setup especially if you use neovim. sadly I'm not using it as much as I used to. but it's still a good setup.
            </li>

            <li>
              <strong>browser: </strong> {linker({ linktext: "brave", href: "https://brave.com/" })} and chromium for browsing the web <em>(I'm yet not paranoid enough to install ungoogled-chromium)</em>. brave is my primary browser anyway, I use it with brave search, which i started using when I ditched google search. and honestly it works great.
            </li>

            <li>
              <strong>email:</strong> I use {linker({ linktext: "proton mail", href: "https://proton.me/mail" })} for personal use. I also have gmail though, can't just get rid of it sadly.
            </li>

            <li>
              <strong>messaging:</strong> I use almost all texting apps but mostly it's just {linker({ linktext: "telegram", href: "https://telegram.org/" })}  and discord. I think telegram is the best messaging app out there (great UI, great features, multiple device support without any effort).
            </li>

            <li>
              <strong>music: </strong> {linker({ linktext: "spotify", href: "https://www.spotify.com/" })}. is youtube music better? maybe. but i like spotify better.
            </li>
          </ul>
        </section>
      </main>
    </MainLayout>
  );
}
