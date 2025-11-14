import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Classes from './components/Classes'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Contact />
      <footer className="py-10 border-t border-neutral-800 text-center text-sm text-neutral-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} LuxFit Gym • Luxembourg</p>
          <p className="mt-1">Privacy • Terms • Contact: hello@luxfit.lu</p>
        </div>
      </footer>
    </div>
  )
}

export default App
