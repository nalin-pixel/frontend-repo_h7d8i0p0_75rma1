import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'membership' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Gëtt geschéckt...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Konnt net geschéckt ginn. Probéier nach eng Kéier.')
      setStatus({ state: 'success', message: 'Merci! Mir mellen eis séier bei dir.' })
      setForm({ name: '', email: '', phone: '', message: '', interest: 'membership' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Mell dech bei DinoFitBox</h2>
          <p className="text-neutral-400 mt-3">So eis wat s du sicht an mir starten dech mat engem 7-Deeg Test.</p>
          <div className="mt-6 p-6 rounded-2xl border border-neutral-800 bg-neutral-950">
            <p className="font-semibold text-white">Fann eis</p>
            <p className="text-neutral-400 text-sm mt-1">233 Rue de Beggen, 1221 Beggen, Lëtzebuerg</p>
            <p className="text-neutral-400 text-sm mt-1">Oppen 06:00–23:00 all Dag</p>
            <p className="text-neutral-400 text-sm mt-1">Telefon: +352 691 611 355</p>
          </div>
        </div>
        <form onSubmit={submit} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300">Numm</label>
              <input name="name" value={form.name} onChange={update} required className="mt-1 w-full border border-neutral-800 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300">Email</label>
              <input type="email" name="email" value={form.email} onChange={update} required className="mt-1 w-full border border-neutral-800 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300">Telefon</label>
              <input name="phone" value={form.phone} onChange={update} className="mt-1 w-full border border-neutral-800 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300">Ech interesséiere mech fir</label>
              <select name="interest" value={form.interest} onChange={update} className="mt-1 w-full border border-neutral-800 bg-black text-white rounded-lg px-3 py-2">
                <option value="membership">Memberschaft</option>
                <option value="personal training">Perséinlechen Training</option>
                <option value="classes">Coursen</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-neutral-300">Noriicht</label>
              <textarea name="message" value={form.message} onChange={update} rows={4} required className="mt-1 w-full border border-neutral-800 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
          </div>
          <button disabled={status.state==='loading'} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-xl">
            {status.state==='loading' ? 'Gëtt geschéckt...' : 'Ufro fir 7-Deeg Test'}
          </button>
          {status.state !== 'idle' && (
            <p className={`mt-3 text-sm ${status.state==='success' ? 'text-green-500' : status.state==='error' ? 'text-red-500' : 'text-neutral-400'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
