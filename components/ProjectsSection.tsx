const projects = [
  {
    name: 'akhileshw.xyz:',
    description: 'my forever-in-progress personal site. built with nextjs, styled with vibes.',
    link: 'https://akhileshw.xyz',
  },
  {
    name: 'dotfiles:',
    description: 'dotfiles for my arch setup',
    link: 'https://github.com/akhileshw/dotfiles',
  },
  {
    name: 'log:',
    description: 'canvas for your thoughts',
    link: 'https://log.akhileshw.xyz/',
  },
  {
    name: 'sites:',
    description: 'a weird little garden of all the random sites I’ve built over time.',
    link: 'https://sites.akhileshw.xyz',
  },
];

export default function ProjectsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">projects</h2>
      <ul className="list-disc pl-6 space-y-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline font-medium">
              {project.name}
            </a>
            {project.description && (
              <span className="text-gray-500 ml-2">{project.description}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
