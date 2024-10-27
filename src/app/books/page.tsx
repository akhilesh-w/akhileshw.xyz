import { Metadata } from "next";
import React, { Children } from "react";
import MainLayout from "../../../components/main-layout";

export const metadata: Metadata = {}

export default function about() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">My Bookshelf
        </h1>
      </header>

      <main>
        <section className="mb-6 leading-relaxed">
          <p>Zero to One by Peter Thiel</p>
          <p>Hooked by Nir Eyal and Ryan Hoover</p>
          <p>Chanakya in You by Radhakishnan Pillai</p>
          <p>Think Straight by Darious Foroux</p>
          <p>The Subtle Art of Not Giving a Fuck by Mark Manson</p>
          <p>Ikigai by Hector Garcia</p>
          <p>Steal like an Artist by Austin Kleon</p>
          <p>Show Your Work by Austin Kleon</p>
          <p>The Psychology of Money by Morgan Housel</p>
          <p>The Almanack of Naval Ravikant by Eric Jorgenson</p>
          <p>Super Pumped by Mike Isaac</p>
          <p>Deep Work by Cal Newport</p>
          <p>Rich Dad, Poor Dad by Robert Kiyosaki</p>
          <p>Atomic Habits by James Clear</p>
          <p>Shoe Dog by Phil Knight</p>
          <p>Do Epic Shit by Ankur Warikoo</p>
          <p>How we die by Sherwin B. Nuland</p>
        </section>

        <section>

        </section>
      </main>
    </MainLayout>
  )
}
