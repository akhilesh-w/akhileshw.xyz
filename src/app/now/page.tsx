import { Metadata } from "next";
import Linker from "@/components/linker";
import MainLayout from "@/components/main-layout";

export const metadata: Metadata = {
  title: "Now",
};

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

        </div>

        <div className="pt-28"></div>
        <p className="appear stagger-5 opacity-60">
          Inspired by <i>Derek Siver's</i> <Linker href="https://nownownow.com/about">now movement</Linker>
        </p>
      </main>
    </MainLayout>
  );
}
