import { Metadata } from "next";
import Linker from "../../../components/linker";
import MainLayout from "../../../components/main-layout";

export const metadata: Metadata = {};

export default function Now() {
  return (
    <MainLayout>
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          now
        </h1>
      </header>

      <main>
        <div className="mb-8 space-y-4">
          <p className="appear stagger-2">Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that <i>everything around me is someone's life work.</i></p>

          <p className="appear stagger-3">Living in the beautiful city of <Linker href="https://maps.app.goo.gl/mcHDLagbZnhuL8p89">Hyderabad, Telangana.</Linker></p>

          <p className="appear stagger-4">Learning C <em>(after forgetting about it since college)</em>. Also learning Rust <em>(to build for the solana ecosystem)</em></p>

          <p className="appear stagger-5">Mainly building software for the web using modern tools and frameworks like <Linker href="https://nextjs.org/">Next.js</Linker> and <Linker href="https://tailwindcss.com/">Tailwind</Linker>.</p>

          <p className="appear stagger-5">• Open to contract/freelance work or the right full-time role where I truly believe in the product and can make a real impact.</p>

          <p className="appear stagger-5">• Currently reading 'Metamorphosis' by 'Franz Kafka'</p>
          <p className="appear stagger-5">• What else?</p>
          <p className="appear stagger-5">Have become a nerd about Formula 1 🏎 after watching <Linker href="https://www.netflix.com/in/title/80204890">Drive to Survive</Linker> on Netflix. Have done so much research about terms, historical events, the cars and obviously the players!</p>
        </div>

        <div className="pt-28"></div>
        <p className="appear stagger-5 opacity-60">
          Inspired by <i>Derek Siver's</i> <Linker href="https://nownownow.com/about">now movement</Linker>
        </p>
      </main>
    </MainLayout>
  );
}
