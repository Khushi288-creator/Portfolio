const projects = [
  {
    title: "StudentFlow",
    subtitle: "Full-Stack School Management Platform",
    description: "Production-grade system with 5 user roles (Admin, Teacher, Student, Parent, Exam Dept), JWT auth, AI chat via Groq API, QR attendance, PDF generation, 25+ DB models, 20+ REST endpoints.",
    tech: ["React 19", "TypeScript", "Node.js", "Prisma ORM", "MongoDB", "JWT", "TanStack Query", "Tailwind CSS"],
    github: "https://github.com/Khushi288-creator/Studentflow-mongodb",
    color: "from-purple-900 to-gray-900"
  },
  {
    title: "Chrome Extension",
    subtitle: "Crafthathon · Gandhinagar University",
    description: "Shipped a functional Chrome browser extension within hackathon time constraints. Contributed across UI design, Chrome Manifest v3 configuration, and cross-browser testing.",
    tech: ["JavaScript", "Chrome Extensions API", "Manifest v3", "HTML", "CSS"],
    github: "https://github.com/Khushi288-creator/web-extension-hackathone",
    color: "from-blue-900 to-gray-900"
  },
  {
    title: "AI Jailbreak Arena",
    subtitle: "Interactive Browser Game · Deployed on Render",
    description: "Interactive browser game built for a college event where all participants played. Fully responsive, deployed live on Render — accessible via link without any local setup.",
    tech: ["JavaScript", "HTML", "CSS", "AI Prompting", "Git"],
    github: "https://github.com/Khushi288-creator/ai-jailbreak-arena",
    color: "from-green-900 to-gray-900"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What I've <span className="text-purple-400">Actually Built</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">Not todo apps. Not clones. Real systems with real architecture.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className={`bg-gradient-to-br ${p.color} border border-gray-800 rounded-2xl p-6 hover:border-purple-600 transition`}>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-purple-400 text-sm mb-3">{p.subtitle}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="bg-gray-800 text-purple-300 text-xs px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer"
                className="inline-block border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg transition">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects