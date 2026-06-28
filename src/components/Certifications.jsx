import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ieeeMl from '../assets/IEEE Machine Learning.png'
import deloitteData from '../assets/Deloitte_DataAnalytics.png' 
import deloitteCyber from '../assets/Deloitte_cyber.png'
import TXVolunteer from '../assets/TX_Volunteer.jpeg'
import Drone from '../assets/IEEE Drone Dev Workshop.png'
import SmartED from '../assets/IPL Prediction Bootcamp.png'
import CCC from '../assets/CCC.jpeg'
import participation from '../assets/TechXtreme2K25.png'
import CricketWinners from '../assets/Cricket_winners.jpeg'
import DahiHandi from '../assets/DahiHandi.png'

const categories = [
  {
    label: "🏆 Certifications",
    color: "text-purple-400",
    border: "border-purple-500/30",
    items: [
      {
        title: "IEEE — Machine Learning",
        desc: "IEEE Blended Learning Program · Apr 2026 · Gandhinagar University · Certificate No: GNU26KHK86AWBE6TJ",
        icon: "🤖",
        color: "border-yellow-500",
        glow: "hover:shadow-yellow-500/20",
        bg: "from-yellow-900/30 to-gray-900",
        image: ieeeMl
      },
      {
        title: "Deloitte — Data Analytics",
        desc: "Data Analysis + Forensic Technology · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
        icon: "📊",
        color: "border-blue-500",
        glow: "hover:shadow-blue-500/20",
        bg: "from-blue-900/30 to-gray-900",
        image: deloitteData
      },
      {
        title: "Deloitte — Cyber Security",
        desc: "Cybersecurity simulation · Apr 2026 · Forage verified · Signed by Deloitte CHRO",
        icon: "🔐",
        color: "border-green-500",
        glow: "hover:shadow-green-500/20",
        bg: "from-green-900/30 to-gray-900",
        image: deloitteCyber
      },
      {
        title: "CCC — Grade A",
        desc: "All India Computer Education · Government certified",
        icon: "🎓",
        color: "border-purple-500",
        glow: "hover:shadow-purple-500/20",
        bg: "from-purple-900/30 to-gray-900",
        image: CCC
      },
    ]
  },
  {
    label: "🛠️ Workshops & Bootcamps",
    color: "text-blue-400",
    border: "border-blue-500/30",
    items: [
      {
        title: "IEEE Drone Dev Workshop",
        desc: "Gandhinagar University · Oct 2025",
        icon: "🚁",
        color: "border-red-500",
        glow: "hover:shadow-red-500/20",
        bg: "from-red-900/30 to-gray-900",
        image: Drone
      },
      {
        title: "IPL Prediction Bootcamp",
        desc: "SmartEd · Oct 2025 · NSDC certified · 7-Day intensive",
        icon: "📈",
        color: "border-pink-500",
        glow: "hover:shadow-pink-500/20",
        bg: "from-pink-900/30 to-gray-900",
        image: SmartED
      },
    ]
  },
  {
    label: "🎯 Sports & Activities",
    color: "text-orange-400",
    border: "border-orange-500/30",
    items: [
     {
        title: "TechXtreme 2026 — Volunteer",
        desc: "Event Volunteer · Certificate of Appreciation · Inter-College Tech Fest · Gandhinagar University · Apr 2026",
        icon: "🎖️",
        color: "border-cyan-500",
        glow: "hover:shadow-cyan-500/20",
        bg: "from-cyan-900/30 to-gray-900",
        image: TXVolunteer
      },
      {
        title: "Cricket IMPULSO 2026 ★",
        desc: "Gandhinagar University Championship — Winners!",
        icon: "🏏",
        color: "border-orange-500",
        glow: "hover:shadow-orange-500/20",
        bg: "from-orange-900/30 to-gray-900",
        image: CricketWinners
      },
      {
        title: "TechXtreme 2K25",
        desc: "Hunt the AI · Inter-college Tech Fest · Gandhinagar University",
        icon: "🏆",
        color: "border-teal-500",
        glow: "hover:shadow-teal-500/20",
        bg: "from-teal-900/30 to-gray-900",
        image: participation
      },
      {
        title: "Nandotsav 2024",
        desc: "Certificate of Appreciation · Gandhinagar University",
        icon: "🪔",
        color: "border-amber-500",
        glow: "hover:shadow-amber-500/20",
        bg: "from-amber-900/30 to-gray-900",
        image: DahiHandi
      },
    ]
  }
]

function CertCard({ c, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, y: -6 }}
      onClick={() => onClick(c)}
      className={`bg-gradient-to-br ${c.bg} border ${c.color} ${c.glow} rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl`}
    >
      {c.image && (
        <div className="relative overflow-hidden h-36">
          <img
            src={c.image}
            alt={c.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/20 flex items-center gap-2">
              <span>🔍</span> Click to view
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{c.icon}</span>
          <h3 className="font-semibold text-white text-sm leading-tight">{c.title}</h3>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
        <div className="mt-3 flex items-center gap-1 text-xs text-gray-600 group-hover:text-purple-400 transition-colors">
          <span>View certificate</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >→</motion.span>
        </div>
      </div>
    </motion.div>
  )
}

function Certifications() {
  const [selected, setSelected] = useState(null)

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
        <p className="text-center text-gray-500 mb-2">Verified credentials and recognitions</p>
        <p className="text-center text-gray-600 text-xs mb-16 font-mono">// click any card to view full certificate</p>

        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="mb-12"
          >
            <div className={`flex items-center gap-3 mb-6 pb-3 border-b ${cat.border}`}>
              <h3 className={`text-lg font-bold font-mono ${cat.color}`}>{cat.label}</h3>
              <span className="text-gray-600 text-sm font-mono">// {cat.items.length} items</span>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {cat.items.map((c) => (
                <CertCard key={c.title} c={c} onClick={setSelected} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className={`relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden border ${selected.color} shadow-2xl`}
            >
              {/* Terminal-style Header */}
              <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setSelected(null)}></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-3 text-gray-400 text-xs font-mono">{selected.title}.pdf</span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-white text-lg transition w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Info Bar */}
              <div className={`px-6 py-3 bg-gradient-to-r ${selected.bg} border-b border-gray-800 flex items-center gap-3`}>
                <span className="text-2xl">{selected.icon}</span>
                <div>
                  <h3 className="text-white font-bold">{selected.title}</h3>
                  <p className="text-gray-400 text-xs">{selected.desc}</p>
                </div>
              </div>

              {/* Certificate Image */}
              {selected.image && (
                <div className="p-6 bg-gray-950">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={selected.image}
                    alt={selected.title}
                    className="w-full rounded-xl object-contain max-h-[65vh] shadow-xl"
                  />
                </div>
              )}

              {/* Footer */}
              <div className="px-6 py-3 bg-gray-900 border-t border-gray-800 flex justify-between items-center">
                <span className="text-gray-600 text-xs font-mono">// press ESC or click outside to close</span>
                <button
                  onClick={() => setSelected(null)}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-lg transition font-mono"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications