import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const PILLARS = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Scholarship', desc: 'Providing financial support to deserving students from underprivileged backgrounds, ensuring quality education is accessible to all.' },
  { icon: 'fa-solid fa-book-open-reader', title: 'Islamic Education', desc: 'Promoting Islamic literacy and Qur\'anic knowledge within local communities through outreach and programmes.' },
  { icon: 'fa-solid fa-hand-holding-heart', title: 'Community Support', desc: 'Supporting widows, orphans, and families in need through welfare programmes and resources.' },
  { icon: 'fa-solid fa-mosque', title: 'Religious Infrastructure', desc: 'Contributing to the development of mosques and Islamic centres in Ikorodu and surrounding communities.' },
]

export default function Foundation() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Sultan Zakariya Hanafi Foundation" subtitle="Education, Compassion, Community — Our Mission Beyond the Classroom." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Legacy of Service</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>The Sultan Zakariya Hanafi Foundation is the philanthropic arm of Sultan Hanafi Royal Schools, established to extend the institution's commitment to education and community beyond the school gates.</p>
              <p>Named in honour of its founding patron, the Foundation carries a vision of an empowered, educated, and spiritually grounded community in Ikorodu and beyond. Through scholarships, welfare programmes, and community outreach, the Foundation works to uplift lives and create lasting impact.</p>
              <p>The Foundation believes that education is a right, not a privilege. Through collaborative efforts with partners, donors, and volunteers, we continue to break barriers and open doors for those who need it most.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Pillars of Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <div key={i} className="bg-white p-7 text-center hover:shadow-md transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-5" style={{ background: 'rgba(212,160,23,0.12)' }}>
                  <i className={`${p.icon} text-lg`} style={{ color: '#D4A017' }} />
                </div>
                <h3 className="text-sm font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 text-center" style={{ background: '#1A1A1A' }}>
        <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Get Involved</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Partner With the Foundation</h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">Whether you are a potential donor, volunteer, or organisation seeking to collaborate on community impact — we would love to hear from you.</p>
          <Link to="/contact" className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>
            Contact the Foundation
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
