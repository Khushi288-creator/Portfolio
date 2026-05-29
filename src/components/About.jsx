const skills = [
  "React 19", "TypeScript", "Vite", "Tailwind CSS",
  "Node.js", "Express", "PHP", "Python",
  "Prisma ORM", "MongoDB", "MySQL", "SQLite",
  "JWT", "REST API", "Git", "GitHub"
]

function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        About <span className="text-purple-400">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a 2nd year M.Sc. IT student at Gandhinagar University with a <span className="text-purple-400 font-semibold">9.82 CGPA</span> — consistently improving every semester.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I build production-intentional systems. My flagship project <span className="text-purple-400 font-semibold">StudentFlow</span> is a full-stack school management platform with 5 user roles, AI chat, PDF generation, and 25+ database models.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I've completed two <span className="text-purple-400 font-semibold">Deloitte Forage</span> simulations in Data Analytics and Cybersecurity, and participated in university hackathons.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="https://linkedin.com/in/khushi-trivedi-485092323" target="_blank"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
              LinkedIn
            </a>
            <a href="mailto:trivedikhushi510@gmail.com"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
              Email Me
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="bg-gray-800 border border-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About