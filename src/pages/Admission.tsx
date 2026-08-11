import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const STEPS = [
  { n: 1, title: 'Enquiries', desc: 'Potential parents/guardians approach the school authority.' },
  { n: 2, title: 'Administrative Office', desc: 'Relevant personnel respectfully attend to enquiries and provide guidance.' },
  { n: 3, title: 'Admission Form', desc: 'Pay for and submit the form with relevant documents.' },
  { n: 4, title: 'Contact Details', desc: 'Provide contact information for further communication.' },
  { n: 5, title: 'Entrance Exam', desc: 'Student sits for the entrance examination, test, and interview.' },
  { n: 6, title: 'Result Notification', desc: 'The school notifies the parent or guardian of the result for further processing.' },
  { n: 7, title: 'Documents Required', desc: 'Birth Certificate · Passport Photograph (2 copies) · Report Sheet or Testimonial from previous school(s).' },
  { n: 8, title: 'Admission Offer', desc: 'Student is offered admission into the qualifying class based on examination performance.' },
  { n: 9, title: 'Fee Payment', desc: 'Pay tuition and other fees upon receipt of admission notice.' },
  { n: 10, title: 'Admission Letter', desc: 'Upon receipt of payment, the student is issued with an admission letter with a unique number.' },
  { n: 11, title: 'Class Acceptance Ticket', desc: 'Receive a ticket to access the relevant class; the school keeps a copy in the student\'s file.' },
  { n: 12, title: 'Start of Classes', desc: 'Student begins classes upon presentation of the access ticket, enjoying our modern educational infrastructure.' },
]

export default function Admission() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Admission Process" subtitle="Ready to Start Your Journey — We'd love to welcome you to the SULTAN family." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal mb-12">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our 12-Step Admission Process</h2>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">We've made admission straightforward and transparent. Follow the steps below to begin your child's journey at Sultan Hanafi Royal Schools.</p>
          </div>
          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal space-y-4">
            {STEPS.map(step => (
              <div key={step.n} className="flex gap-5 items-start p-5 border border-gray-100 hover:shadow-sm transition-shadow bg-white">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-black text-sm" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif', minWidth: 40 }}>
                  {step.n}
                </div>
                <div>
                  <h3 className="text-sm font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 text-center" style={{ background: '#1A1A1A' }}>
        <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Ready to Begin?</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Take the First Step Today</h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">Contact our admissions office to start the process. We're here to guide you every step of the way.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Contact Admissions</Link>
            <a href="tel:+2348073747650" className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider border-2 text-white border-white/30 hover:border-[#D4A017] hover:text-[#D4A017] transition-all" style={{ fontFamily: 'Montserrat, sans-serif' }}>Call Us</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
