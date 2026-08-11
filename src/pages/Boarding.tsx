import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const OPTIONS = [
  { title: 'Full Boarding', subtitle: 'Monday – Sunday', icon: 'fa-solid fa-moon', desc: 'Students reside at the school from Monday through Sunday, with full access to all facilities, academic support, and Islamic enrichment throughout the week.' },
  { title: 'Half Boarding', subtitle: 'Monday – Friday', icon: 'fa-solid fa-sun', desc: 'Students reside during the school week and return home on weekends, balancing structured boarding life with family time.' },
]

const BENEFITS = [
  'Extra academic and extra-curricular support',
  'More time to read and utilize a wide range of facilities',
  'Opportunity for self-reflection and personal discovery',
  'After-class Islamic lectures and post-Salah admonitions',
  'A supportive community of peers and mentors',
  'Immersive, disciplined learning environment',
]

export default function Boarding() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Boarding Facility" subtitle="Explore our state-of-the-art Boarding Facility — where friendships flourish and memories are made." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>A Home Away From Home</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Discover a community where friendships flourish and memories are made! Our home-like boarding accommodation provides a comfortable environment within which the boarders learn and experience cordial relationship with roommates, thereby creating a supportive and immersive learning environment.</p>
              <p>The Boarding facility is available for our college and Qur'an memorization students only — between the ages of 9 and 16. Students are at liberty to opt for full (Monday to Sunday) or half (Monday to Friday) boarding. Other arrangements are also feasible to accommodate family schedule and budgets.</p>
              <p>The boarders shall have the opportunity to listen to after-class Islamic lectures and post-Salah admonitions.</p>
            </div>
          </div>

          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal mt-12 grid md:grid-cols-2 gap-6">
            {OPTIONS.map((o, i) => (
              <div key={i} className="p-7 md:p-9 hover:shadow-xl transition-shadow" style={{ background: '#1A1A1A', borderTop: '4px solid #D4A017' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5" style={{ background: 'rgba(212,160,23,0.15)' }}>
                  <i className={`${o.icon} text-xl`} style={{ color: '#D4A017' }} />
                </div>
                <h3 className="text-lg font-black text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{o.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{o.subtitle}</p>
                <p className="text-sm text-white/70 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Benefits of Boarding</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: '#D4A017' }}>
                    <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/admission" className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Apply for Boarding</Link>
              <Link to="/contact" className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all" style={{ borderColor: '#1A1A1A', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Make an Enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
