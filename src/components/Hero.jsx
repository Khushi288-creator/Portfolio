import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const codeLines = [
  { code: 'const developer = {', color: 'text-purple-400' },
  { code: '  name: "Khushi Trivedi",', color: 'text-green-400' },
  { code: '  role: "Full Stack Developer",', color: 'text-green-400' },
  { code: '  stack: ["React", "Node.js", "MongoDB"],', color: 'text-yellow-400' },
  { code: '  cgpa: 9.82,', color: 'text-blue-400' },
  { code: '  available: true,', color: 'text-green-400' },
  { code: '}', color: 'text-purple-400' },
]

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 400)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 gap-12 max-w-6xl mx-auto">
      
      {/* Left — Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-left"
      >
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 text-sm font-mono">Available for hire</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I'm<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Khushi
          </span>
        </h1>

        <p className="text-gray-400 text-xl mb-2">Full Stack Developer</p>
        <p className="text-gray-500 font-mono text-sm mb-8">
          // I don't build tutorials. I build systems.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["React 19", "TypeScript", "Node.js", "MongoDB", "face-api.js"].map(tech => (
            <span key={tech} className="bg-gray-800 border border-gray-700 text-purple-300 px-3 py-1 rounded-full text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-600 hover:bg-purple-600/10 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right — Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 w-full max-w-lg"
      >
        <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-xs font-mono">khushi.js</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm">
            <p className="text-gray-500 mb-3">// Meet your next developer</p>
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${line.color} leading-7`}
              >
                {line.code}
              </motion.p>
            ))}
            {visibleLines <= codeLines.length && (
              <span className={`inline-block w-2 h-4 bg-purple-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            )}
            {visibleLines >= codeLines.length && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 mt-3"
              >
                // 9.82 CGPA · Deloitte Certified · Builder 🚀
              </motion.p>
            )}
          </div>
        </div>

        {/* Stats below terminal */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: "CGPA", value: "9.82" },
            { label: "Projects", value: "4+" },
            { label: "Certs", value: "6+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-center hover:border-purple-600 transition"
            >
              <div className="text-purple-400 font-bold text-lg">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-2xl"
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero