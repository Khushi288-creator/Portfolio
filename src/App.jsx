import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App