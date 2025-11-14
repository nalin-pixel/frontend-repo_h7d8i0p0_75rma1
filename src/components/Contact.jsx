import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'membership' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send. Please try again.')
      setStatus({ state: 'success', message: 'Thanks! We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', message: '', interest: 'membership' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Join LuxFit</h2>
          <p className="text-gray-600 mt-3">Tell us what you’re looking for and we’ll get you started with a 7‑day trial. We speak English, French, German, and Luxembourgish.</p>
          <div className="mt-6 p-6 rounded-2xl border bg-gradient-to-br from-gray-50 to-white">
            <p className="font-semibold text-gray-900">Find us</p>
            <p className="text-gray-600 text-sm mt-1">Kirchberg, Luxembourg City • Near Tram Europe</p>
            <p className="text-gray-600 text-sm mt-1">Open 06:00–23:00 every day</p>
          </div>
        </div>
        <form onSubmit={submit} className="p-6 rounded-2xl border bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={update} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={update} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" value={form.phone} onChange={update} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">I’m interested in</label>
              <select name="interest" value={form.interest} onChange={update} className="mt-1 w-full border rounded-lg px-3 py-2">
                <option value="membership">Membership</option>
                <option value="personal training">Personal Training</option>
                <option value="classes">Classes</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={update} rows={4} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
          </div>
          <button disabled={status.state==='loading'} className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-4 py-3 rounded-xl">
            {status.state==='loading' ? 'Sending...' : 'Request 7‑day trial'}
          </button>
          {status.state !== 'idle' && (
            <p className={`mt-3 text-sm ${status.state==='success' ? 'text-green-700' : status.state==='error' ? 'text-red-600' : 'text-gray-600'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
