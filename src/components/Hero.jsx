import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Hero() {
  const words = ["React Developer", "Full Stack Builder", "TypeScript Expert", "Problem Solver"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full bg-purple-500 opacity-5 animate-pulse"
            style={{
              width: (i + 1) * 80 + 'px',
              height: (i + 1) * 80 + 'px',
              left: (i * 13) + '%',
              top: (i * 11) + '%',
              animationDelay: i * 0.5 + 's',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-purple-300 text-sm">Available for internships & fresher roles</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
          Khushi<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Trivedi
          </span>
        </h1>

        <div className="h-8 mb-6 overflow-hidden">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl text-purple-400 font-mono"
          >
            {words[index]}
          </motion.p>
        </div>

        <p className="text-gray-400 text-lg mb-4 font-mono max-w-lg mx-auto">
          "I don't build tutorials. I build systems."
        </p>

        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          React · TypeScript · Node.js · MongoDB · face-api.js
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
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
          <motion.a
            href="https://github.com/Khushi288-creator"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-3 rounded-full font-semibold transition"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-600 text-2xl"
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero