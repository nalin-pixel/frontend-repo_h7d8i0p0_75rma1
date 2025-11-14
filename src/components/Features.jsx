export default function Features(){
  const items = [
    { title: 'Strength & Conditioning', desc: 'Free weights, racks, and machines from top brands.' },
    { title: 'Cardio Zone', desc: 'Treadmills, bikes, rowers with city views.' },
    { title: 'Functional Area', desc: 'Turf, sleds, kettlebells, and battle ropes.' },
    { title: 'Spa & Recovery', desc: 'Sauna, steam room, and ice plunge.' },
  ]
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Facilities</h2>
        <p className="text-center text-gray-600 mt-3">Everything you need for performance and recovery</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="p-6 rounded-2xl border bg-gradient-to-br from-gray-50 to-white">
              <h3 className="font-bold text-gray-900">{i.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
