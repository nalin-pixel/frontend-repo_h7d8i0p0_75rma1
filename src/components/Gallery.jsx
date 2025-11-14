export default function Gallery(){
  const images = [
    'https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546817372-628669db465f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534367610401-9f5056c2b2ab?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599058918144-1fbd6a0d3d1a?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540499530908-d9833d7bf8d0?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1400&auto=format&fit=crop'
  ]
  return (
    <section id="gallery" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Biller</h2>
            <p className="text-neutral-400 mt-3">Kuck wéi et bei eis ausgesäit – Ariichtungen, Stëmmung a Resultater.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border border-red-600/30 bg-neutral-950">
              <img src={src} alt={`DinoFitBox Bild ${idx+1}`} className="h-40 sm:h-44 md:h-48 w-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
