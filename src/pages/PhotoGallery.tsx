import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

type Category = 'All' | 'Campus' | 'Classrooms' | 'Facilities' | 'Events'

const PHOTOS: { src: string; alt: string; cat: Category }[] = [
  { src: '/images/schbuilding.jpeg', alt: 'Sultan Hanafi Royal Schools building exterior', cat: 'Campus' },
  { src: '/images/classroom-scaled.jpg.jpeg', alt: 'Students in classroom', cat: 'Classrooms' },
  { src: '/images/ICT-ROOM.jpg.jpeg', alt: 'ICT Room with laptops', cat: 'Facilities' },
  { src: '/images/LIBRARY.jpg.jpeg', alt: 'School Library with study cubicles', cat: 'Facilities' },
  { src: '/images/LIBRARY.jpg-1.jpeg', alt: 'School Library reading area', cat: 'Facilities' },
  { src: '/images/SCHOOL-HALL.jpg.jpeg', alt: 'College Hall examination room', cat: 'Facilities' },
  { src: '/images/Sick-bay.jpg.jpeg', alt: 'Sick Bay medical room', cat: 'Facilities' },
  { src: '/images/PHYSIC-LAB.jpg.jpeg', alt: 'Physics Laboratory', cat: 'Facilities' },
  { src: '/images/CHEMISTRY-LAB.jpg.jpeg', alt: 'Chemistry Laboratory', cat: 'Facilities' },
  { src: '/images/CHEMISTRY-LAB-768x512.jpg.jpeg', alt: 'Chemistry Lab close-up', cat: 'Facilities' },
  { src: '/images/BIOLOGY-LAB.jpg.jpeg', alt: 'Biology Laboratory with skeleton model', cat: 'Facilities' },
  { src: '/images/BIOLOGY-LAB-768x512.jpg.jpeg', alt: 'Biology Lab specimens', cat: 'Facilities' },
  { src: '/images/Basic-tech-workshop.jpg.jpeg', alt: 'Basic Technology Workshop', cat: 'Facilities' },
  { src: '/images/Food-nut-room.jpg.jpeg', alt: 'Food and Nutrition Room', cat: 'Facilities' },
  { src: '/images/HOME-ECONOMICS-RM1.jpg.jpeg', alt: 'Clothing and Textile Room', cat: 'Facilities' },
  { src: '/images/CCA-ROOM.jpg.jpeg', alt: 'CCA Room', cat: 'Facilities' },
  { src: '/images/CCA-ROOM-768x512.jpg.jpeg', alt: 'CCA Room activity space', cat: 'Facilities' },
  { src: '/images/Recreation-indoor-game.jpg.jpeg', alt: 'Indoor Games and Recreation', cat: 'Facilities' },
]

const CATS: Category[] = ['All', 'Campus', 'Classrooms', 'Facilities', 'Events']

export default function PhotoGallery() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const r1 = useReveal(), r2 = useReveal()

  const filtered = active === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === active)

  return (
    <SiteLayout>
      <PageHero eyebrow="Media" title="Photo Gallery" subtitle="Step into our world through captivating visuals." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filter tabs */}
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal flex flex-wrap gap-2 mb-10">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                style={active === cat
                  ? { background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }
                  : { background: '#F5F5F5', color: '#666', fontFamily: 'Montserrat, sans-serif' }}>
                {cat}
              </button>
            ))}
            <span className="ml-auto self-center text-xs text-gray-400">{filtered.length} photos</span>
          </div>

          {/* Grid */}
          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="group cursor-pointer overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '4/3' }}
                onClick={() => setLightbox(p.src)}>
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
            {active === 'Events' && (
              <div className="col-span-2 md:col-span-3 lg:col-span-4 py-12 text-center text-gray-400 text-sm">
                Event photos coming soon. Check back after our next event!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </SiteLayout>
  )
}
