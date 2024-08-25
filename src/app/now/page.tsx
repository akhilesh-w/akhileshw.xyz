import { Metadata } from "next";
import linker from "../../../components/linker";
import MainLayout from "../../../components/main-layout";

export const metadata: Metadata = {};

const T1 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 mt-2">{children}</h3>
);

const T2 = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 mt-2 pl-4">{children}</p>
);

export default function Now() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          now
        </h1>
      </header>

      <main>
        <div className="mb-8 space-y-4">
          <p>Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that <i>everything around me is someone's life work.</i></p>

          <p>Living in the beautiful city of {linker({ linktext: "Hyderabad, Telangana.", href: "https://maps.app.goo.gl/mcHDLagbZnhuL8p89", })}</p>

          <p>Learning C <em>(after forgetting about it since college)</em>. Also learning Rust <em>(to build for the solana ecosystem)</em></p>

          <p>Mainly building software for the web using modern tools and frameworks like {linker({ linktext: "Next.js", href: "https://nextjs.org/" })} and {linker({ linktext: "Tailwind", href: "https://tailwindcss.com/" })}.</p>

          <p>• Currently reading 'Metamorphosis' by 'Franz Kafka'</p>
          <p>• What else?</p>
          <p>Have become a nerd about Formula 1 🏎 after watching {linker({
            linktext: "Drive to Survive", href: "https://www.netflix.com/in/title/80204890"
          })} on Netflix. Have done so much research about terms, historical events, the cars and obviously the players!</p>
        </div>

        <div className="pt-28"></div>
        <p>
          Inspired by <i>Derek Siver's</i>{" "}
          {linker({
            linktext: "now movement",
            href: "https://nownownow.com/about",
          })}{" "}
        </p>
      </main>
    </MainLayout>
  );
}
