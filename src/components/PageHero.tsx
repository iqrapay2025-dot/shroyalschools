export default function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="py-20 md:py-28 text-center" style={{ background: '#1A1A1A' }}>
      <div className="max-w-3xl mx-auto px-6">
        {eyebrow && (
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {title}
        </h1>
        <div className="w-16 h-1 mx-auto" style={{ background: '#D4A017' }} />
        {subtitle && (
          <p className="text-white/60 text-sm md:text-base mt-5 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
