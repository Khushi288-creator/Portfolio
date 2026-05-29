function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      <div className="animate-pulse mb-4 text-purple-400 text-sm tracking-widest uppercase">
        Full Stack Developer
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Khushi <span className="text-purple-400">Trivedi</span>
      </h1>
      <p className="text-xl text-gray-400 mb-2 font-mono">
        "I don't build tutorials. I build systems."
      </p>
      <p className="text-gray-500 mb-8 max-w-xl">
        React · TypeScript · Node.js · Prisma ORM · MongoDB · JWT
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition">
          View Projects
        </a>
        <a href="#contact" className="border border-purple-600 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition">
          Hire Me
        </a>
        <a href="https://github.com/Khushi288-creator" target="_blank" className="border border-gray-600 hover:bg-gray-800 text-gray-300 px-6 py-3 rounded-full font-semibold transition">
          GitHub
        </a>
      </div>
      <div className="mt-16 animate-bounce text-gray-600 text-2xl">↓</div>
    </section>
  )
}

export default Hero