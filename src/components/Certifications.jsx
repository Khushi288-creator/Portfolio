import { motion } from 'framer-motion'

const certs = [
  {
    title: "Deloitte — Data Analytics",
    desc: "Data Analysis + Forensic Technology · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
    icon: "📊",
    color: "border-blue-500",
    bg: "from-blue-900/30 to-gray-900"
  },
  {
    title: "Deloitte — Cyber Security",
    desc: "Cybersecurity simulation · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
    icon: "🔐",
    color: "border-green-500",
    bg: "from-green-900/30 to-gray-900"
  },
  {
    title: "IEEE — Machine Learning",
    desc: "IEEE Blended Learning Program · Apr 2026 · Gandhinagar University · Certificate No: GNU26KHK86AWBE6TJ",
    icon: "🤖",
    color: "border-yellow-500",
    bg: "from-yellow-900/30 to-gray-900"
  },
  {
    title: "CCC — Grade A",
    desc: "All India Computer Education · Government certified",
    icon: "🎓",
    color: "border-purple-500",
    bg: "from-purple-900/30 to-gray-900"
  },
  {
    title: "Cricket IMPULSO 2026 ★",
    desc: "Gandhinagar University Championship — Winners!",
    icon: "🏏",
    color: "border-orange-500",
    bg: "from-orange-900/30 to-gray-900"
  },
  {
    title: "IEEE Drone Dev Workshop",
    desc: "Gandhinagar University · Oct 2025",
    icon: "🚁",
    color: "border-red-500",
    bg: "from-red-900/30 to-gray-900"
  },
  {
    title: "IPL Prediction Bootcamp",
    desc: "SmartEd · Oct 2025 · NSDC certified · 7-Day intensive",
    icon: "📈",
    color: "border-pink-500",
    bg: "from-pink-900/30 to-gray-900"
  },
  {
    title: "TechXtreme 2K25",
    desc: "Hunt the AI · Inter-college Tech Fest · Gandhinagar University",
    icon: "🏆",
    color: "border-teal-500",
    bg: "from-teal-900/30 to-gray-900"
  }
]

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications & <span className="text-purple-400">Achievements</span>
        </h2>
        <p className="text-center text-gray-500 mb-16">Verified credentials and recognitions</p>

        <div className="grid md:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`bg-gradient-to-br ${c.bg} border ${c.color} rounded-xl p-5 transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-2 leading-tight">{c.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications