import { Metadata } from "next";
import React, { Children } from "react";
import MainLayout from "../../../components/main-layout";

export const metadata: Metadata = {}

export default function Bookshelf() {
  return (
    <MainLayout>
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">My Bookshelf
        </h1>
      </header>

      <main>
        <section className="mb-6 leading-relaxed">
          {[
            "Zero to One by Peter Thiel",
            "Hooked by Nir Eyal and Ryan Hoover",
            "Chanakya in You by Radhakishnan Pillai",
            "Think Straight by Darious Foroux",
            "The Subtle Art of Not Giving a Fuck by Mark Manson",
            "Ikigai by Hector Garcia",
            "Steal like an Artist by Austin Kleon",
            "Show Your Work by Austin Kleon",
            "The Psychology of Money by Morgan Housel",
            "The Almanack of Naval Ravikant by Eric Jorgenson",
            "Super Pumped by Mike Isaac",
            "Deep Work by Cal Newport",
            "Rich Dad, Poor Dad by Robert Kiyosaki",
            "Atomic Habits by James Clear",
            "Shoe Dog by Phil Knight",
            "Do Epic Shit by Ankur Warikoo",
            "How we die by Sherwin B. Nuland"
          ].map((book, index) => (
            <p key={index} className={`appear stagger-${Math.min((index % 4) + 2, 5)}`}>{book}</p>
          ))}
        </section>

        <section>

        </section>
      </main>
    </MainLayout>
  )
}
