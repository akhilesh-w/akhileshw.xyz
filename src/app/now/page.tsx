import { Metadata } from "next";
import linker from "../components/linker";

export const metadata: Metadata = {}

const T1 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 mt-2">{children}</h3>
)

const T2 = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 mt-2 pl-4">{children}</p>
)


export default function Now() {
  return (
    <div>
      <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl">now</h1>
      <div className="pt-4 pb-4">
        <T1>• Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that <i>everything around me is someone's life work.</i></T1>
        {/* <T1>• Focusing on <i> reading, learning and building.</i> Working carefully and methodically. Mindful of my time and attention so that I can produce quality work and feel poroductive.</T1> */}
        <T1>• Living in the beautiful city of {linker({ linktext: "Hyderabad, Telangana.", href: "https://maps.app.goo.gl/mcHDLagbZnhuL8p89" })}</T1>
        <T1>• Learning C (after forgetting about it since college). Also learning Rust (to build for the solana ecosystem)</T1>
        <T1>• Mainly building software for the web using modern tools and frameworks like {linker({ linktext: "Next.js", href: "https://nextjs.org/" })} and {linker({ linktext: "Tailwind", href: "https://tailwindcss.com/" })}.</T1>

        <T1>• Currently reading 'Metamorphosis' by 'Franz Kafka'</T1>
        <T1>• What else?</T1>
        <T2>• Have become a nerd about Formula 1 🏎 after watching {linker({ linktext: "Drive to Survive", href: "https://www.netflix.com/in/title/80204890" })} on Netflix. Have done so much research about terms, historical events, the cars and obviously the players!</T2>
      </div>

      <div className="pt-28"></div>
      <p>Inspired by <i>Derek Siver's</i> {linker({ linktext: "now movement", href: "https://nownownow.com/about" })} </p>

    </div>
  )
}
