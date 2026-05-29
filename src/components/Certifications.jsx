const certs = [
  {
    title: "Deloitte — Data Analytics",
    desc: "Data Analysis + Forensic Technology · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
    icon: "📊",
    color: "border-blue-600"
  },
  {
    title: "Deloitte — Cyber Security",
    desc: "Cybersecurity tasks simulation · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
    icon: "🔐",
    color: "border-green-600"
  },
  {
    title: "CCC — Grade A",
    desc: "All India Computer Education · Government certified",
    icon: "🎓",
    color: "border-yellow-600"
  },
  {
    title: "Cricket IMPULSO 2026 ★ Winners",
    desc: "Gandhinagar University Championship — Winners!",
    icon: "🏏",
    color: "border-purple-600"
  },
  {
    title: "IEEE Drone Dev Workshop",
    desc: "Gandhinagar University · Oct 2025",
    icon: "🚁",
    color: "border-red-600"
  },
  {
    title: "7-Day IPL Prediction Bootcamp",
    desc: "SmartEd · Oct 2025 · NSDC certified",
    icon: "📈",
    color: "border-orange-600"
  }
]

function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Certifications & <span className="text-purple-400">Achievements</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {certs.map(c => (
          <div key={c.title} className={`bg-gray-900 border ${c.color} rounded-xl p-5 hover:scale-105 transition`}>
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="font-semibold text-white mb-2">{c.title}</h3>
            <p className="text-gray-400 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications