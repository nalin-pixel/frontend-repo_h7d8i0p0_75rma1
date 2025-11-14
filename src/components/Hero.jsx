export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-sky-600 font-semibold">Luxembourg City • Kirchberg</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Find your strongest self at LuxFit Gym
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Premium facilities, expert coaches, and energising classes. Flexible memberships designed for life in Luxembourg.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <a href="#contact" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl shadow">
              Get 7‑day trial
            </a>
            <a href="#classes" className="text-sky-700 hover:text-sky-900 font-semibold">
              View classes
            </a>
          </div>
          <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
            <div>
              <span className="font-bold text-gray-900">06:00–23:00</span> Mon–Sun
            </div>
            <div>
              <span className="font-bold text-gray-900">Multilingual</span> EN • FR • DE • LU
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl border border-white/60" style={{backgroundImage:'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop)'}} />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg hidden md:block">
            <p className="text-sm font-semibold">Central location</p>
            <p className="text-xs text-gray-600">2 min from Tram Europe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
