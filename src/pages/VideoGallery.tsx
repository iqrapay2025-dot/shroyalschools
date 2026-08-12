import React from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const VIDEOS = [
  {
    title: "Spelling Competition",
    desc: "Watch our talented students compete in the Annual Sultan Hanafi Spelling Competition.",
    thumb: null,
    embedUrl: "https://res.cloudinary.com/nlmhqbwe/video/upload/v1786516139/Spelling-Competition_eup81g.mp4",
    tag: "Academics",
  },
]

export default function VideoGallery() {
  const r1 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Media" title="Video Gallery" subtitle="Relive our most memorable moments through video." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((v, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative bg-gray-900" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,160,23,0.15)', border: '2px solid #D4A017' }}>
                      <i className="fa-solid fa-play text-2xl pl-1" style={{ color: '#D4A017' }} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/50" style={{ fontFamily: 'Montserrat, sans-serif' }}>Video Coming Soon</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-2" style={{ background: 'rgba(212,160,23,0.12)', color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{v.tag}</span>
                  <h3 className="font-black text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{v.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}

            {/* Placeholder cards */}
            {[1, 2].map(i => (
              <div key={`ph-${i}`} className="rounded-2xl bg-gray-50 overflow-hidden shadow-sm">
                <div className="flex items-center justify-center bg-gray-100" style={{ aspectRatio: '16/9' }}>
                  <i className="fa-solid fa-video text-3xl text-gray-300" />
                </div>
                <div className="p-5">
                  <div className="h-3 w-20 bg-gray-100 rounded mb-3" />
                  <div className="h-4 w-40 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-14">More videos will be added regularly. Subscribe to our social channels for updates.</p>
        </div>
      </section>
    </SiteLayout>
  )
}
