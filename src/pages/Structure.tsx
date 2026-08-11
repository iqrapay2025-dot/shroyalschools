import React from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const SECTIONS = [
  {
    title: 'Board of Governors (BOG)',
    icon: 'fa-solid fa-building-columns',
    body: 'The board of Sultan Hanafi Royal Schools comprise of broadminded individuals with diverse background, including educators and parents\' representatives. The collective goal of the board is to ensure that the schools provides quality education, a safe and supportive learning environment and prepare students for success in their future endeavours. The board plays a crucial role in overseeing and guiding the administration of the school. Key responsibilities include setting policies and goals, hiring and evaluating senior officers, overseeing budget and financial decisions, approving curriculum and academic programs, ensuring compliance with regulations, and evaluating the overall performance of the school.',
  },
  {
    title: 'Executive Management Team (EMT)',
    icon: 'fa-solid fa-people-group',
    body: 'Our Executive Management Team (EMT) at Sultan Hanafi Royal Schools (SULTAN) is charged with the day to day operations of the school. It comprises the part-time Chief Executive Officer (CEO), the Principal of the Sultan Hanafi Royal College (SHRC), Principal of the Sultan Hanafi Quran College (SHQC), the Vice-Principal Administration, the School Registrar, and the heads of the Islamic & Arabic School and the basic school.',
    tags: ['The Chief Executive Officer (CEO)', 'Principals', 'VP Admin', 'The Registrar'],
  },
  {
    title: 'Heads of Departments (H.O.Ds)',
    icon: 'fa-solid fa-chalkboard-user',
    body: 'Our H.O.Ds are appointed based on seniority, qualification and performance. They assist the management by coordinating, supporting and evaluating educators in their Departments, recommend textbooks for the school use, ensuring compliance with regulations and advising on curriculum and schemes of work improvement.',
  },
  {
    title: 'School Committees',
    icon: 'fa-solid fa-users-gear',
    body: 'Standing and Ad-hoc committees are constituted to assist the school in various aspects of school life and activities.',
    tags: ['Academic Committee', 'Negative Reinforcement Committee', 'Health and Safety Committee', 'Sports Committee', 'Dawah Committee', 'Media & Transformation Committee'],
  },
  {
    title: 'Parents Teachers Association (P.T.A.)',
    icon: 'fa-solid fa-handshake',
    body: 'Our PTA is formed as a complementary body to support our efforts at SULTAN in the implementation of our educational programmes. Its membership is automatic for every parent or guardian whose child attends our school. It meets regularly so as to play a vital role in creating a positive and supportive school environment.',
  },
  {
    title: "Students' Representative Council (S.R.C.)",
    icon: 'fa-solid fa-user-graduate',
    body: 'Our SRC at SULTAN provides our children the opportunities of inclusively having a voice in school decision-making and developing leadership skills. It comprises of forms and class heads who represent the interests and concerns of their peers.',
  },
  {
    title: 'Class Captains',
    icon: 'fa-solid fa-star',
    body: 'At SULTAN, our class captains as leaders of their respective classes play a vital role in maintaining positive and productive school environment.',
  },
]

export default function Structure() {
  const refs = SECTIONS.map(() => useReveal())
  return (
    <SiteLayout>
      <PageHero eyebrow="Governance" title="Sultan Hanafi Structure" subtitle="A well-governed institution built on transparency, accountability, and excellence." />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i} ref={refs[i] as React.RefCallback<HTMLElement>} className="reveal bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-7 md:p-9" style={{ borderLeft: '4px solid #D4A017' }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(212,160,23,0.12)' }}>
                  <i className={`${s.icon} text-lg`} style={{ color: '#D4A017' }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.body}</p>
                  {s.tags && (
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full" style={{ background: 'rgba(212,160,23,0.1)', color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
