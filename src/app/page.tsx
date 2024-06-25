import { Metadata } from "next";
import MainLayout from "./components/main-layout";
import { Photo } from "./components/photo";
import me from "../../public/me.jpg";

export const metadata: Metadata = {}

const featuredProjects = [
  {
    title: "akhileshw.xyz",
    description: "Personal site built with nextjs",
    repo: "https://github.com/akhilesh-w/akhileshw.xyz",
  },
  {
    title: "dotfiles",
    description: "dotfiles for my Arch setup",
    repo: "https://github.com/akhilesh-w/dotfiles",
  },
  {
    title: "log",
    description: "canvas for your thoughts",
    repo: "https://log.akhileshw.xyz",
  }
]

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Photo src={me} />
      </div>
      <div className="pt-4 pb-6">
        <p>Hi there, I'm <strong>Akhilesh</strong> aka <strong>dopamine</strong>, a software developer from India. I'm passionate about the internet and love creating things for the web.</p>
        <p>I'm also pretty active in the web3 and blockchain space. Always open to talk about it.</p>
      </div>

      <h2 className="pb-6 pt-4 text-xl font-semibold">Projects</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {featuredProjects?.map((project, index) =>
          <div key={index}>
            <a
              href={project.repo}
              className="underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500" target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            <p className="mt-1 opacity-60">{project.description}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
