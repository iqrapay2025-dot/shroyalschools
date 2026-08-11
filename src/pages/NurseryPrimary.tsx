import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const CLASSES = [
  { title: 'Crèche', icon: 'fa-solid fa-baby', desc: 'At our Crèche, we create a nurturing and secure atmosphere designed to foster the highest standards of childcare within a supportive learning community.' },
  { title: 'Nursery', icon: 'fa-solid fa-child-reaching', desc: 'Our team of teachers and support staff share a deep passion for child development, dedicating themselves wholeheartedly to nurturing the growth and potential of every child in our care.' },
  { title: 'Basic School', icon: 'fa-solid fa-school', desc: 'Through a thoughtful blend of informed activities, interactive discussions, collaborative group work, and creative play, our approach to learning fosters holistic development in every child.' },
]

export default function NurseryPrimary() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Nursery & Primary School" subtitle="Building Bright Beginnings — Early Years Adventures Await!" />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
              <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>We Lay the Groundwork for Future Academic Success!</h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>Sultan Hanafi Nursery & Primary School stands as a beacon of holistic education, dedicated to nurturing young minds through a blend of secular and Islamic teachings. Our esteemed institution welcomes learners from the tender age of 2 up to 10 years old, offering a comprehensive foundation that seamlessly integrates academic excellence with moral development.</p>
                <p>At our school, early years education is not just about imparting knowledge; it's about fostering a love for learning and exploration. Our specially crafted curriculum embraces play-based experiences, stimulating curiosity, creativity, and critical thinking skills from the earliest stages of development.</p>
                <p>With state-of-the-art facilities, a supportive learning environment, and a commitment to excellence, Sultan Hanafi Nursery & Primary School is where early years adventures begin, setting the stage for a lifetime of achievement and fulfillment.</p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/admission" className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Apply Now</Link>
                <Link to="/contact" className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 hover:bg-[#1A1A1A] hover:text-white transition-all" style={{ borderColor: '#1A1A1A', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Contact Us</Link>
              </div>
            </div>
            <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal reveal-delay-1">
              <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <img src="/images/classroom-scaled.jpg.jpeg" alt="Sultan Hanafi Nursery and Primary School" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 p-5 flex gap-6" style={{ background: '#D4A017' }}>
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>2–10</div>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1A1A1A' }}>Age Range</div>
                </div>
                <div className="w-px bg-black/20" />
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>3</div>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1A1A1A' }}>Class Levels</div>
                </div>
                <div className="w-px bg-black/20" />
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>Hybrid</div>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1A1A1A' }}>Curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Classes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CLASSES.map((c, i) => (
              <div key={i} className="bg-white p-7 hover:shadow-xl transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5" style={{ background: 'rgba(212,160,23,0.12)' }}>
                  <i className={`${c.icon} text-xl`} style={{ color: '#D4A017' }} />
                </div>
                <h3 className="text-base font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
