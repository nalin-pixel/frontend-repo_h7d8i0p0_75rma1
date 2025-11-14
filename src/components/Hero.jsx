export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-red-500 font-semibold">233 Rue de Beggen • 1221 Beggen • Lëtzebuerg</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Staark. Einfach. DinoFitBox.
          </h1>
          <p className="mt-5 text-neutral-300 text-lg">
            Keng Onnéidegkeet. Just Top-Equipement, Traineren op Héich-Niveau an Coursen déi wierklech wierken.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow">
              Kréi 7-Deeg Test
            </a>
            <a href="#classes" className="text-red-500 hover:text-red-400 font-semibold">
              Kuck Coursen
            </a>
          </div>
          <div className="mt-6 flex items-center space-x-6 text-sm text-neutral-400">
            <div>
              <span className="font-bold text-white">06:00–23:00</span> Mé–Son
            </div>
            <div>
              <span className="font-bold text-white">Sproochen</span> LU • DE • FR • EN
            </div>
            <div>
              <span className="font-bold text-white">Telefon</span> +352 691 611 355
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl border border-red-600/40" style={{backgroundImage:'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop)'}} />
        </div>
      </div>
    </section>
  )
}
