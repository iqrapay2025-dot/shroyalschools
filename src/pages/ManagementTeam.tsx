import React from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'
import logoImg from '@/imports/Logo-Trans.png'
import directorImg from '@/imports/hanafi-2-1.jpg'
import adegokImg from '@/imports/Dr._Adegoke-removebg-preview-1-e1778566628845-300x300.png'

const BOARD = [
  { name: 'Zakariya Olanrewaju Anofi', creds: 'BSc., MSc., FCA, FCCA', role: 'Board Member', photo: directorImg },
  { name: 'Mr. Lukman Anofi', creds: 'BSC, MBA, MSc, CPA, FCCA', role: 'Board Member', photo: null },
  { name: 'Mrs. Lasisi-Ahmed Olayinka Idayat', creds: 'B.ED, M.ES', role: 'Board Member', photo: null },
  { name: 'Dr. Ismail Seriki', creds: '', role: 'Board Member', photo: null },
]

const EMT = [
  { name: 'Zakariya Olanrewaju Anofi', creds: 'M.Sc. Financial Management, B.Sc. Applied Accounting, FCA, FCCA', role: 'Chief Executive Officer (CEO)', photo: directorImg },
  { name: 'DR. Adegoke Musa Olatunji', creds: 'PhD., MEd. Health Edu., BSc.Edu. Human Kinetics Edu., NCE, MTRCN', role: 'Principal, Sultan Hanafi Royal College', photo: adegokImg },
  { name: 'Shaykh Ahmad Ibrahim', creds: "B.SC Qur'an Sciences, B.A Arabic & Islamic Studies", role: "Principal, Sultan Hanafi Qur'an College", photo: null },
  { name: 'Shaykh Abubakr Solah', creds: 'B.A (In view), Diploma in Arabic Lang., Certificate in Arabic Lang.', role: 'Principal, School of Arabic & Islamic Studies', photo: null },
  { name: 'Mrs. Anofi-Badmus Fatimat Omolola', creds: 'HND Accounting, PGDE', role: 'VP Administration, SHRC', photo: null },
  { name: 'Mrs. Anofi-Abdulkareem Mariam Tope', creds: 'BSc. Microbiology, PGDE', role: 'Registrar, SHRC', photo: null },
  { name: 'Mrs. Kareemat Abdurazaq', creds: 'B.Ed, NCE', role: 'Head Teacher, Nursery & Primary School', photo: null },
]

const STAFF = [
  { name: 'Mr. Oladele Abdulwasiu Adebayo', creds: 'B.A History, M.A History, PGDE, TRCN', role: 'Head, Research & Development', photo: null },
  { name: 'Mr. Yusuf Shola Monsuru', creds: 'HND, Diploma Phonology and Public Speaking, TEFL', role: 'HoD English', photo: null },
  { name: 'Mr. Afolabi Morufu Olalekan', creds: 'BSc(Ed) Accounting Edu, NCE Business Education', role: 'HoD Commerce & Management', photo: null },
  { name: 'Mrs. Nimota Lamidi-Okoh', creds: 'PGDE, BSc., TRCN', role: 'HoD Mathematics', photo: null },
  { name: 'Mr. Oguntade Adebola Aliu', creds: 'MSc. Information Tech., BSc. Computer Science', role: 'ICT Head', photo: null },
  { name: 'Mr. Kassim Jamal Ayopo', creds: 'B.Sc. Chemistry', role: 'HoD Science', photo: null },
]

function PersonCard({ name, creds, role, photo }: { name: string; creds: string; role: string; photo: string | null }) {
  return (
    <div className="bg-white border border-gray-100 hover:shadow-lg transition-shadow text-center" style={{ borderTop: '4px solid #D4A017' }}>
      <div className="pt-8 px-6 pb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2" style={{ borderColor: '#D4A017' }}>
          <img src={photo ?? logoImg} alt={name} className={`w-full h-full ${photo ? 'object-cover object-top' : 'object-contain bg-[#1A1A1A] p-2'}`} />
        </div>
        <h3 className="text-sm font-black mb-1 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</h3>
        <p className="text-xs font-bold mb-1" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{role}</p>
        {creds && <p className="text-xs text-gray-400 leading-relaxed">{creds}</p>}
      </div>
    </div>
  )
}

function SectionHeading({ title }: { title: string }) {
  const r = useReveal()
  return (
    <div ref={r as React.RefCallback<HTMLElement>} className="reveal mb-8">
      <h2 className="text-xl md:text-2xl font-black gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h2>
    </div>
  )
}

export default function ManagementTeam() {
  const rBoard = useReveal(), rEmt = useReveal(), rStaff = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Governance" title="Management Team" subtitle="Meet the dedicated leaders and staff behind Sultan Hanafi Royal Schools." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div>
            <SectionHeading title="Board of Governors" />
            <div ref={rBoard as React.RefCallback<HTMLElement>} className="reveal grid grid-cols-2 md:grid-cols-4 gap-5">
              {BOARD.map((p, i) => <PersonCard key={i} {...p} />)}
            </div>
          </div>
          <div>
            <SectionHeading title="Executive Management Team" />
            <div ref={rEmt as React.RefCallback<HTMLElement>} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {EMT.map((p, i) => <PersonCard key={i} {...p} />)}
            </div>
          </div>
          <div>
            <SectionHeading title="Key Staff Members" />
            <div ref={rStaff as React.RefCallback<HTMLElement>} className="reveal grid grid-cols-2 md:grid-cols-3 gap-5">
              {STAFF.map((p, i) => <PersonCard key={i} {...p} />)}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
