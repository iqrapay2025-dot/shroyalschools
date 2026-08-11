import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'
import biologyLabImg from '@/imports/BIOLOGY-LAB.jpg.jpeg'
import chemistryLabImg from '@/imports/CHEMISTRY-LAB.jpg.jpeg'
import ccaRoomImg from '@/imports/CCA-ROOM.jpg.jpeg'
import classroomImg from '@/imports/classroom-scaled.jpg.jpeg'
import libraryImg from '@/imports/LIBRARY.jpg.jpeg'
import library2Img from '@/imports/LIBRARY.jpg-1.jpeg'
import recreationImg from '@/imports/Recreation-indoor-game.jpg.jpeg'
import schBuildingImg from '@/imports/schbuilding.jpeg'
import schoolHallImg from '@/imports/SCHOOL-HALL.jpg.jpeg'
import sickBayImg from '@/imports/Sick-bay.jpg.jpeg'
import foodNutImg from '@/imports/Food-nut-room.jpg.jpeg'
import homeEconImg from '@/imports/HOME-ECONOMICS-RM1.jpg.jpeg'
import ictRoomImg from '@/imports/ICT-ROOM.jpg.jpeg'
import physicLabImg from '@/imports/PHYSIC-LAB.jpg.jpeg'
import basicTechImg from '@/imports/Basic-tech-workshop.jpg.jpeg'
import biologyLabSmImg from '@/imports/BIOLOGY-LAB-768x512.jpg.jpeg'
import chemistryLabSmImg from '@/imports/CHEMISTRY-LAB-768x512.jpg.jpeg'
import ccaRoomSmImg from '@/imports/CCA-ROOM-768x512.jpg.jpeg'

type Category = 'All' | 'Campus' | 'Classrooms' | 'Facilities' | 'Events'

const PHOTOS: { src: string; alt: string; cat: Category }[] = [
  { src: schBuildingImg, alt: 'Sultan Hanafi Royal Schools building exterior', cat: 'Campus' },
  { src: classroomImg, alt: 'Students in classroom', cat: 'Classrooms' },
  { src: ictRoomImg, alt: 'ICT Room with laptops', cat: 'Facilities' },
  { src: libraryImg, alt: 'School Library with study cubicles', cat: 'Facilities' },
  { src: library2Img, alt: 'School Library reading area', cat: 'Facilities' },
  { src: schoolHallImg, alt: 'College Hall examination room', cat: 'Facilities' },
  { src: sickBayImg, alt: 'Sick Bay medical room', cat: 'Facilities' },
  { src: physicLabImg, alt: 'Physics Laboratory', cat: 'Facilities' },
  { src: chemistryLabImg, alt: 'Chemistry Laboratory', cat: 'Facilities' },
  { src: chemistryLabSmImg, alt: 'Chemistry Lab close-up', cat: 'Facilities' },
  { src: biologyLabImg, alt: 'Biology Laboratory with skeleton model', cat: 'Facilities' },
  { src: biologyLabSmImg, alt: 'Biology Lab specimens', cat: 'Facilities' },
  { src: basicTechImg, alt: 'Basic Technology Workshop', cat: 'Facilities' },
  { src: foodNutImg, alt: 'Food and Nutrition Room', cat: 'Facilities' },
  { src: homeEconImg, alt: 'Clothing and Textile Room', cat: 'Facilities' },
  { src: ccaRoomImg, alt: 'CCA Room', cat: 'Facilities' },
  { src: ccaRoomSmImg, alt: 'CCA Room activity space', cat: 'Facilities' },
  { src: recreationImg, alt: 'Indoor Games and Recreation', cat: 'Facilities' },
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
