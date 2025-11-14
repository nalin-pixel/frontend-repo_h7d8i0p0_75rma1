import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Doheem' },
    { id: 'features', label: 'Ariichtungen' },
    { id: 'gallery', label: 'Biller' },
    { id: 'classes', label: 'Coursen' },
    { id: 'contact', label: 'Kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/70 border-b border-red-600/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded overflow-hidden flex ring-1 ring-red-600/50">
            <span className="w-1/3 bg-red-600"></span>
            <span className="w-1/3 bg-black"></span>
            <span className="w-1/3 bg-red-600"></span>
          </div>
          <span className="font-extrabold tracking-tight text-white">DinoFitBox</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-neutral-300 hover:text-red-500 transition-colors">
              {n.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow">Mell dech un</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-neutral-900">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left px-4 py-3 hover:bg-neutral-900 text-neutral-200">
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
