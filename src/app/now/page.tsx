import { Metadata } from "next";
import linker from "../components/linker";

export const metadata: Metadata = {}

const T1 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 mt-2">{children}</h3>
)

const T2 = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 mt-2 pl-4">{children}</p>
)


export default function About() {
  return (
    <div>
      <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl">now</h1>
      <div className="pt-4 pb-4">
        <T1>• Living in {linker({ linktext: "Hyderabad, Telangana.", href: "https://maps.app.goo.gl/mcHDLagbZnhuL8p89" })}</T1>
        <T1>• Learning Rust (to talk to silicon) and German (to talk to idk who) </T1>
        <T1>• Reading</T1>
        <T2>• Metamorphosis by Franz Kafka</T2>
        <T1>• What else?</T1>
        <T2>• Have become a nerd about Formula 1 🏎 after watching {linker({ linktext: "Drive to Survive", href: "https://www.netflix.com/in/title/80204890" })} on Netflix. Have done so much research about terms, historical events, the cars and obviously the players!</T2>
      </div>



      <div className="pt-28"></div>
      <p>Inspired by <i>Derek Siver's</i> {linker({ linktext: "now movement", href: "https://nownownow.com/about" })} </p>

    </div>
  )
}
