import { motion } from 'framer-motion'

const skills = [
  { name: "React 19", level: 95 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Python", level: 75 },
  { name: "PHP", level: 70 },
  { name: "Git/GitHub", level: 88 },
]

const stats = [
  { label: "CGPA", value: "9.82" },
  { label: "Projects Built", value: "4+" },
  { label: "Certifications", value: "6+" },
  { label: "Technologies", value: "15+" },
]

function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-600 transition"
            >
              <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a 2nd year M.Sc. IT student at Gandhinagar University with a{' '}
              <span className="text-purple-400 font-semibold">9.82 CGPA</span> — consistently
              improving every semester.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My flagship project <span className="text-purple-400 font-semibold">StudentFlow</span>{' '}
              is a production-grade school management system with face recognition attendance,
              AI chat, 5 user roles, and 25+ database models.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I've completed two <span className="text-purple-400 font-semibold">Deloitte Forage</span>{' '}
              simulations in Data Analytics and Cybersecurity.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://linkedin.com/in/khushi-trivedi-485092323" target="_blank"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold transition">
                LinkedIn
              </a>
              <a href="mailto:trivedikhushi510@gmail.com"
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-semibold transition">
                Email Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-purple-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About