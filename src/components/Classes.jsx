import { useEffect, useState } from 'react'

export default function Classes(){
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { fetchClasses() }, [])

  const fetchClasses = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/classes`)
      if (!res.ok) throw new Error('Konnte Coursen net lueden')
      const data = await res.json()
      setClasses(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="classes" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Coursen</h2>
            <p className="text-neutral-400 mt-3">HIIT, Kraaft, Yoga.</p>
          </div>
          <button onClick={fetchClasses} className="hidden sm:inline-flex bg-neutral-900 hover:bg-neutral-800 text-neutral-200 px-4 py-2 rounded-lg border border-neutral-700">Aktualiséieren</button>
        </div>

        {loading ? (
          <p className="mt-8 text-neutral-400">Coursen ginn gelueden...</p>
        ) : error ? (
          <p className="mt-8 text-red-500">{error}</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {classes.length === 0 ? (
              <p className="text-neutral-400">Stonnenplang kënnt geschwënn.</p>
            ) : (
              classes.map(c => (
                <div key={c._id} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <h3 className="font-bold text-white">{c.title}</h3>
                  {c.day && c.time && (
                    <p className="text-sm text-red-400 mt-1">{c.day} • {c.time}</p>
                  )}
                  {c.coach && (
                    <p className="text-sm text-neutral-400 mt-1">Trainer: {c.coach}</p>
                  )}
                  {c.description && (
                    <p className="text-neutral-400 mt-3 text-sm">{c.description}</p>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}
