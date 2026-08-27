import { motion } from 'framer-motion'

const projects = [
  {
    title: "StudentFlow",
    subtitle: "Full-Stack School Management Platform",
    description: "Production-grade system with 5 user roles, AI face recognition attendance, JWT auth, AI chat via Groq API, QR attendance, PDF generation, 25+ MongoDB models, 20+ REST endpoints.",
    tech: ["React 19", "TypeScript", "Node.js", "MongoDB", "JWT", "face-api.js", "Tailwind CSS"],
    github: "https://github.com/Khushi288-creator/Studentflow-mongodb",
    live: "https://studentflow-mongodb.vercel.app",
    color: "from-purple-900/50 to-gray-900",
    border: "hover:border-purple-500",
    badge: "Featured"
  },
  {
    title: "LeadDesk Mini",
    subtitle: "Full Stack Lead Management CRM",
    description: "Lightweight lead-capture CRM with public landing page for prospects to submit inquiries and a secured admin dashboard to manage, search, and triage leads in real time.",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Vite"],
    github: "https://github.com/Khushi288-creator/LeadDesk-Mini",
    live: "https://lead-desk-mini-omega.vercel.app",
    color: "from-blue-900/50 to-gray-900",
    border: "hover:border-blue-500",
    badge: "Live"
  },
  {
    title: "Volunteer Management System",
    subtitle: "Full Stack Volunteer & Event Platform",
    description: "Complete volunteer management system with event registration, volunteer tracking, admin dashboard, and real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Khushi288-creator/Volunteer-Management-System",
    live: "https://volunteer-management-system-bt8b.vercel.app",
    color: "from-green-900/50 to-gray-900",
    border: "hover:border-green-500",
    badge: "Live"
  },
  {
    title: "Chrome Extension",
    subtitle: "Crafthathon · Gandhinagar University",
    description: "Shipped a functional Chrome browser extension within hackathon time constraints. UI design, Chrome Manifest v3, and cross-browser testing.",
    tech: ["JavaScript", "Chrome Extensions API", "Manifest v3", "HTML", "CSS"],
    github: "https://github.com/Khushi288-creator/web-extension-hackathone",
    live: null,
    color: "from-yellow-900/50 to-gray-900",
    border: "hover:border-yellow-500",
    badge: "Hackathon"
  },
  {
    title: "AI Jailbreak Arena",
    subtitle: "Interactive Browser Game · Deployed on Render",
    description: "Interactive browser game for a college event. Fully responsive, deployed live on Render — real users played during the event.",
    tech: ["JavaScript", "HTML", "CSS", "AI Prompting", "Git"],
    github: "https://github.com/Khushi288-creator/ai-jailbreak-arena",
    live: "https://ai-jailbreak-arena.onrender.com",
    color: "from-pink-900/50 to-gray-900",
    border: "hover:border-pink-500",
    badge: "Live"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            What I've <span className="text-purple-400">Actually Built</span>
          </h2>
          <p className="text-center text-gray-500 mb-16">
            Not todo apps. Not clones. Real systems with real architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${p.color} border border-gray-800 ${p.border} rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-4 right-4">
                <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 pr-16">{p.title}</h3>
              <p className="text-purple-400 text-sm mb-3">{p.subtitle}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="bg-gray-800/80 text-purple-300 text-xs px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
  <a href={p.github} target="_blank" rel="noreferrer"
    className="inline-block border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg transition">
    GitHub →
  </a>
  {p.live && (
    <a href={p.live} target="_blank" rel="noreferrer"
      className="inline-block bg-purple-600/20 border border-purple-500/50 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm px-4 py-2 rounded-lg transition">
      Live Demo ↗
    </a>
  )}
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects