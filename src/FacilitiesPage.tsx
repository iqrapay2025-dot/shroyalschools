import React, { useEffect } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'
import { Link } from 'react-router-dom'

interface FacilityCard { name: string; caption: string; img: string; alt: string }

const facilityCards: FacilityCard[] = [
  { name: 'College Hall', caption: 'A spacious hall for assemblies, ceremonies, and large school gatherings.', img: '/images/SCHOOL-HALL.jpg.jpeg', alt: 'Sultan Hanafi College Hall with rows of desks' },
  { name: 'Library', caption: 'A quiet, well-stocked space for research, reading, and independent study.', img: '/images/LIBRARY.jpg.jpeg', alt: 'Sultan Hanafi School Library with study cubicles and bookshelves' },
  { name: 'Biology Laboratory', caption: 'Fully equipped for hands-on exploration of living systems and life sciences.', img: '/images/BIOLOGY-LAB.jpg.jpeg', alt: 'Sultan Hanafi Biology Laboratory with skeleton model and specimens' },
  { name: 'ICT Room', caption: 'Modern computers and digital tools building 21st-century tech skills.', img: ictRoomImg, alt: 'Sultan Hanafi ICT Room with laptops on every desk and smart TV' },
  { name: 'Chemistry Laboratory', caption: 'A safe, well-equipped space for practical chemistry experiments.', img: chemistryLabImg, alt: 'Sultan Hanafi Chemistry Laboratory with periodic table and equipment' },
  { name: 'Physics Laboratory', caption: 'Hands-on equipment for exploring the principles of physics.', img: '/images/PHYSIC-LAB.jpg.jpeg', alt: 'Sultan Hanafi Physics Laboratory with galvanometers and instruments' },
  { name: 'Home Economics Room (Clothing & Textile)', caption: 'Practical training in sewing, textiles, and clothing design.', img: '/images/HOME-ECONOMICS-RM1.jpg.jpeg', alt: 'Sultan Hanafi Clothing and Textile Room with sewing machines' },
  { name: 'Home Economics Room (Food & Nutrition)', caption: 'A dedicated space for learning food preparation and nutrition.', img: '/images/Food-nut-room.jpg.jpeg', alt: 'Sultan Hanafi Food and Nutrition Room with kitchen appliances' },
  { name: 'Basic Technology Workshop', caption: 'Hands-on tools and equipment for foundational technical and engineering skills.', img: '/images/Basic-tech-workshop.jpg.jpeg', alt: 'Sultan Hanafi Basic Technology Workshop with hand tools and workbench' },
  { name: 'Sick Bay', caption: 'A dedicated space for first aid and student health and wellbeing.', img: '/images/Sick-bay.jpg.jpeg', alt: 'Sultan Hanafi Sick Bay with beds and first aid equipment' },
  { name: 'CCA Room', caption: 'A space supporting co-curricular activities and creative pursuits.', img: '/images/CCA-ROOM.jpg.jpeg', alt: 'Sultan Hanafi CCA Room with colorful classroom furniture' },
  { name: 'Recreation Ground & Indoor Games', caption: 'Facilities supporting sports, teamwork, and healthy physical activity.', img: '/images/Recreation-indoor-game.jpg.jpeg', alt: 'Sultan Hanafi Indoor Games with table tennis and board games' },
]

function FacilityCardItem({ card }: { card: FacilityCard }) {
  return (
    <div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl">
      <div className="overflow-hidden rounded-t-2xl" style={{ aspectRatio: '4/3' }}>
        <img src={card.img} alt={card.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="w-8 h-0.5 mb-3" style={{ background: '#D4A017' }} />
        <h3 className="text-sm font-black mb-2 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>{card.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{card.caption}</p>
      </div>
    </div>
  )
}

export default function FacilitiesPage() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()


  return (
    <SiteLayout>
      <PageHero eyebrow="Explore Our Standard" title="Facilities" subtitle="Check out our world-class facilities — take a peek inside Sultan Hanafi Royal Schools." />

      <section ref={r2 as React.RefCallback<HTMLElement>} className="reveal py-16 md:py-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal mb-10">
            <h2 className="text-2xl font-black gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Facilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilityCards.map(card => <FacilityCardItem key={card.name} card={card} />)}
          </div>
        </div>
      </section>

      <section ref={r3 as React.RefCallback<HTMLElement>} className="reveal py-20 md:py-28 text-center" style={{ background: '#1A1A1A' }}>
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Schedule a Visit</p>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Come See Our Facilities In Person</h2>
          <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">Schedule a visit and experience Sultan Hanafi Royal Schools firsthand.</p>
          <Link to="/contact" className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Book a School Tour</Link>
        </div>
      </section>
    </SiteLayout>
  )
}
