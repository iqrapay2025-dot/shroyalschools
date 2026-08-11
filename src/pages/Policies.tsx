import React from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'
import assessmentPdf from '@/imports/ASSESMENT-POLICY.pdf'
import antiBullyingPdf from '@/imports/ANTI-BULLYING-DISCIPLINARY-POLICY.pdf'
import antiBullying1Pdf from '@/imports/ANTI-BULLYING-DISCIPLINARY-POLICY__1_.pdf'
import careerPdf from '@/imports/CAREER-POLICY.pdf'
import dressCodePdf from '@/imports/DRESS-CODE-POLICY.pdf'
import equalOpportunityPdf from '@/imports/EQUAL-OPPORTUNITY-POLICY-1.pdf'
import firstAidPdf from '@/imports/SULTAN-FIRST-AID-POLICY.pdf'
import healthSafetyPdf from '@/imports/SULTAN-HEALTH-SAFETY-POLICY.pdf'
import complaintPdf from '@/imports/COMPLAINT-POLICY-1.pdf'

const POLICIES = [
  { title: 'Assessment Policy', pdf: assessmentPdf },
  { title: 'Anti-Bullying and Disciplinary Policy', pdf: antiBullyingPdf },
  { title: 'Anti-Bullying and Disciplinary Policy (Revised)', pdf: antiBullying1Pdf },
  { title: 'Career Policy', pdf: careerPdf },
  { title: 'Dress Code Policy', pdf: dressCodePdf },
  { title: 'Equal Opportunity Policy', pdf: equalOpportunityPdf },
  { title: 'First Aid Policy', pdf: firstAidPdf },
  { title: 'Health and Safety Policy', pdf: healthSafetyPdf },
  { title: 'Complaint Policy', pdf: complaintPdf },
]

export default function Policies() {
  const r1 = useReveal(), r2 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Governance" title="School Policies" subtitle="Stay informed. Stay empowered. Access our policies and pave the way for success with confidence." />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal mb-10">
            <h2 className="text-xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>SULTAN HANAFI School Policies</h2>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">Download any of our official school policies below. These documents outline the standards and expectations that guide our school community.</p>
          </div>
          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal space-y-4">
            {POLICIES.map((p, i) => (
              <div key={i} className="flex items-center justify-between gap-4 p-5 border border-gray-100 hover:shadow-md transition-shadow bg-white" style={{ borderLeft: '4px solid #D4A017' }}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full" style={{ background: 'rgba(212,160,23,0.12)' }}>
                    <i className="fa-solid fa-file-pdf text-base" style={{ color: '#D4A017' }} />
                  </div>
                  <p className="text-sm font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</p>
                </div>
                <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:brightness-90"
                  style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
