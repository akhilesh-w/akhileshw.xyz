import { Metadata } from "next";
import MainLayout from "../../../components/main-layout";
import linker from "../../../components/linker";

export const metadata: Metadata = {}

export default function Uses() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          uses
        </h1>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hardware</h2>
          <ul className="space-y-4 leading-relaxed">
            <li><strong>Laptop:</strong> Lenovo IdeaPad Gaming 3. With 40gb RAM <em>(I added a 32gb RAM stick)</em>, it's an odd combination but it's a good computer and works great for me. It runs Arch.</li>
            <li><strong>Old Laptop:</strong> ThinkPad T440s (Old laptop which just sits in my closet now). I got this second hand when I was in first year of college when I was obssesed with Thinkpads (I still am). It runs ubuntu.</li>
            <li><strong>Monitor:</strong> {linker({ linktext: 'LG 32" 4k.', href: "https://amzn.to/3z0gjr1" })}  I've searched a lot for a good monitor before landing on this one. Monitors are almost universally bad and the ones that are not bad are just expensive, this one is really good for the price. </li>
            <li><strong>Phone:</strong> I use pocofone with LineageOS, it's old now but sadly I can't find a worthy replacement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Software</h2>
          <ul className="space-y-4">
            <li>
              <strong>OS:</strong> I use {" "}
              {linker({ linktext: "Arch", href: "https://archlinux.org/" })} +{" "}
              {linker({ linktext: "i3", href: "https://i3wm.org/" })} as my daily driver.

            </li>
            <li>
              <strong>Note Taking: </strong>
              {linker({ linktext: "Logseq", href: "https://github.com/logseq/logseq" })} is a free & open source markdown editor with a really nice UI. It's kinda like Obsidian but it's open source and free. I use it for note taking and journaling.
            </li>
            <li>
              <strong>Editor: </strong>
              {linker({ linktext: "vscode", href: "https://code.visualstudio.com/" })} and{" "}
              {linker({ linktext: "neovim", href: "https://neovim.io/" })} are my editors of choice. I'm now trying out {linker({ linktext: "Zed", href: "https://zed.dev/" })} which is really fast and I'm kinda liking it. Maybe I'll switch to it full time.
            </li>
            <li>
              <strong>Terminal: </strong>
              {linker({ linktext: "alacritty", href: "https://alacritty.org/" })} with {linker({ linktext: "tmux", href: "https://github.com/tmux/tmux/wiki" })}  is a crazy fast setup especially if you use neovim. Sadly I'm not using it as much as I used to. But it's still a good setup.
            </li>
            <li>
              <strong>Browser: </strong> {linker({ linktext: "Brave", href: "https://brave.com/" })} and chromium for browsing the web <em>(I'm yet not paranoid enough to install ungoogled-chromium)</em>. Brave is my primary browser anyway, I use it with brave search, it works great. It also has a LLM search like Perplexity which just summarized everything.
            </li>
            <li><strong>Email:</strong> I use {linker({ linktext: "proton mail", href: "https://proton.me/mail" })}  for now, but I think I should just self host an email server. I also have gmail though, can't just get rid of it sadly.</li>
            <li><strong>Messaging:</strong> I use almost all texting apps but the ones I use the most are {linker({ linktext: "telegram", href: "https://telegram.org/" })}  and discord. I think Telegram is the best messaging app out there, it has a lot of features and great UI.</li>
            <li><strong>Music: </strong> {linker({ linktext: "Spotify", href: "https://www.spotify.com/" })}. I have a habit of always playing something while I'm working, that's why a centralised platform with a large music repository works for me. Otherwise I'd have stored all my music locally.</li>
          </ul>
        </section>
      </main>
    </MainLayout>
  );
}
