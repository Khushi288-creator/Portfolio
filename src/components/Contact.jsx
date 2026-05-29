function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let's <span className="text-purple-400">Connect</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Open to internships & fresher roles in Full Stack Development.
          Located in Kalol, Gandhinagar, Gujarat, India.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <a href="mailto:trivedikhushi510@gmail.com"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-semibold transition text-sm">
            📧 Email
          </a>
          <a href="https://linkedin.com/in/khushi-trivedi-485092323" target="_blank" rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition text-sm">
            💼 LinkedIn
          </a>
          <a href="https://github.com/Khushi288-creator" target="_blank" rel="noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-xl font-semibold transition text-sm">
            🐙 GitHub
          </a>
          <a href="https://www.fiverr.com/s/DBpVymA" target="_blank" rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition text-sm">
            💰 Fiverr
          </a>
        </div>
        <p className="mt-12 text-gray-600 text-sm">
          © 2026 Khushi Trivedi · Built with React + Tailwind CSS
        </p>
      </div>
    </section>
  )
}

export default Contact