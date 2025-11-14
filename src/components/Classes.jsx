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
      if (!res.ok) throw new Error('Failed to load classes')
      const data = await res.json()
      setClasses(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="classes" className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Classes</h2>
            <p className="text-gray-600 mt-3">From HIIT to Yoga — something for every level</p>
          </div>
          <button onClick={fetchClasses} className="hidden sm:inline-flex bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Refresh</button>
        </div>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading classes...</p>
        ) : error ? (
          <p className="mt-8 text-red-600">{error}</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {classes.length === 0 ? (
              <p className="text-gray-500">Class schedule coming soon.</p>
            ) : (
              classes.map(c => (
                <div key={c._id} className="p-6 rounded-2xl border bg-white shadow-sm">
                  <h3 className="font-bold text-gray-900">{c.title}</h3>
                  {c.day && c.time && (
                    <p className="text-sm text-sky-700 mt-1">{c.day} • {c.time}</p>
                  )}
                  {c.coach && (
                    <p className="text-sm text-gray-600 mt-1">Coach: {c.coach}</p>
                  )}
                  {c.description && (
                    <p className="text-gray-600 mt-3 text-sm">{c.description}</p>
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
