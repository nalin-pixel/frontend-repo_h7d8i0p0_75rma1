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
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Facilities' },
    { id: 'classes', label: 'Classes' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded overflow-hidden flex">
            <span className="w-1/3 bg-red-500"></span>
            <span className="w-1/3 bg-white"></span>
            <span className="w-1/3 bg-sky-400"></span>
          </div>
          <span className="font-extrabold tracking-tight text-gray-900">LuxFit</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-gray-700 hover:text-sky-600 transition-colors">
              {n.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg shadow">Join Now</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-100">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left px-4 py-3 hover:bg-gray-50">
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
