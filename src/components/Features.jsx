export default function Features(){
  const items = [
    { title: 'Kraaft', desc: 'Racken, Plattformen a Scheiwen.' },
    { title: 'Cardio', desc: 'Lafen, Vëlo a Rower.' },
    { title: 'Funktionell', desc: 'Kënscht a Kettlebells.' },
    { title: 'Erhuelung', desc: 'Sauna an Äisbuedem.' },
  ]
  return (
    <section id="features" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Ariichtungen</h2>
        <p className="text-center text-neutral-400 mt-3">Alles wat s de brauchs. Näischt Onnéideges.</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950">
              <h3 className="font-bold text-white">{i.title}</h3>
              <p className="text-neutral-400 mt-2 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
