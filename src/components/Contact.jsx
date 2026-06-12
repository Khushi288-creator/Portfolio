import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 mb-4 text-lg">
            Open to internships & fresher roles in Full Stack Development.
          </p>
          <p className="text-gray-500 mb-12">
            Located in Kalol, Gandhinagar, Gujarat, India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Email", href: "mailto:trivedikhushi510@gmail.com", bg: "bg-red-600 hover:bg-red-700", icon: "📧" },
              { label: "LinkedIn", href: "https://linkedin.com/in/khushi-trivedi-485092323", bg: "bg-blue-600 hover:bg-blue-700", icon: "💼" },
              { label: "GitHub", href: "https://github.com/Khushi288-creator", bg: "bg-gray-700 hover:bg-gray-600", icon: "🐙" },
              { label: "Fiverr", href: "https://www.fiverr.com/s/DBpVymA", bg: "bg-green-600 hover:bg-green-700", icon: "💰" },
            ].map((btn, i) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${btn.bg} text-white py-3 px-4 rounded-xl font-semibold transition text-sm`}
              >
                {btn.icon} {btn.label}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-2xl p-8 bg-gray-900/50"
          >
            <p className="text-gray-400 text-sm font-mono mb-2">Currently available for</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Full Stack Internship", "React Developer Role", "Node.js Projects", "Freelance Work"].map(tag => (
                <span key={tag} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <p className="mt-12 text-gray-600 text-sm">
            © 2026 Khushi Trivedi · Built with React + Tailwind CSS + Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact