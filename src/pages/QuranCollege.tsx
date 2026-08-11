import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const FEATURES = [
  { icon: 'fa-solid fa-clock', title: '24–36 Months', desc: 'Average duration to complete full Qur\'an memorization programme.' },
  { icon: 'fa-solid fa-book-quran', title: 'Sciences of the Qur\'an', desc: 'In-depth study of Qur\'anic sciences alongside memorization.' },
  { icon: 'fa-solid fa-language', title: 'Arabiyyah Language', desc: 'Structured Arabic language learning throughout the programme.' },
  { icon: 'fa-solid fa-certificate', title: 'Standard Ijazaat', desc: 'Recognized certifications (Ijazaat) issued upon programme completion.' },
  { icon: 'fa-solid fa-bed', title: 'Day & Boarding', desc: 'Programme available for both day students and boarding students.' },
  { icon: 'fa-solid fa-heart', title: 'Islamic Morals', desc: 'Character development and Islamic ethics woven throughout.' },
]

export default function QuranCollege() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Qur'an College" subtitle="We lay the groundwork for moral and religious growth." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Qur'an Knowledge!</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Sultan Hanafi Qur'an College was established to provide a platform where students from different walks of life can spend an average of 24 to 36 months to complete the memorization of the Qur'an, learn the science of the Qur'an, Arabiyyah Language, other Islamic knowledge and good morals, with the issuance of standard Ijazaat (License/certifications on specific fields) at the completion of the programme.</p>
              <p>We offer a specialized Quran memorization program designed for day and boarding students. This program ensures a thorough and disciplined approach to the memorization of the Quran.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Programme Highlights</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white p-6 text-center hover:shadow-md transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4" style={{ background: 'rgba(212,160,23,0.12)' }}>
                  <i className={`${f.icon} text-lg`} style={{ color: '#D4A017' }} />
                </div>
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal">
            <i className="fa-solid fa-mosque text-5xl mb-6 block" style={{ color: '#D4A017' }} />
            <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Begin Your Journey with the Qur'an</h2>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Whether you are a day student or joining our boarding programme, we welcome students from all walks of life who are committed to memorizing and living by the Qur'an.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admission" className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Apply Now</Link>
              <Link to="/boarding" className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all" style={{ borderColor: '#1A1A1A', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Boarding Info</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
