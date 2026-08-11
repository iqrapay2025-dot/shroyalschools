import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const SCHEDULE = [
  { days: 'Monday – Wednesday', time: '2:00 pm – 6:00 pm', icon: 'fa-solid fa-calendar-week' },
  { days: 'Saturday & Sunday', time: '9:00 am – 3:00 pm', icon: 'fa-solid fa-calendar-days' },
]

const FOCUS = ["Comprehensive Islamic Studies", "Proficiency in Arabic Language", "Memorizing the Qur'an", "Memorizing Hadith"]

export default function ArabicIslamicStudies() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="School of Arabic & Islamic Studies" subtitle="We lay the groundwork for moral and religious growth." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Divine Moments!</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Sultan Hanafi School of Islamic &amp; Arabic Studies was established to cater for the educational need of the Muslim Ummah (Community) and it serves as a platform where Islamic studies and Arabic Language are taught to students of different age categories.</p>
              <p>The school offers classes on weekdays and weekends to accommodate different schedules, focusing on providing comprehensive Islamic studies, proficiency in Arabic language, and memorizing the Qur'an and Hadith.</p>
            </div>
          </div>

          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-7 md:p-9" style={{ background: '#1A1A1A' }}>
              <h3 className="text-base font-black text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Class Schedule</h3>
              <div className="space-y-5">
                {SCHEDULE.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(212,160,23,0.15)' }}>
                      <i className={`${s.icon} text-sm`} style={{ color: '#D4A017' }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{s.days}</p>
                      <p className="text-white/80 text-sm mt-0.5">{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-7 md:p-9" style={{ background: '#F5F5F5' }}>
              <h3 className="text-base font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Areas of Focus</h3>
              <div className="space-y-3">
                {FOCUS.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#D4A017' }}>
                      <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal mt-12 flex flex-wrap gap-4">
            <Link to="/admission" className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Enrol Now</Link>
            <Link to="/contact" className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all" style={{ borderColor: '#1A1A1A', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
