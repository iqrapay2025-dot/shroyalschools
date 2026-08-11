import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'
import schBuildingImg from '@/imports/schbuilding.jpeg'

const DEPTS = [
  { name: 'Languages', subjects: ['English Language', 'Yoruba Language', 'French (Future)', 'Hausa (Future)', 'Chinese (Future)'] },
  { name: 'Mathematics & ICT', subjects: ['Mathematics', 'Further Mathematics', 'Computer Studies', 'Data Processing', 'Programming/Coding'] },
  { name: 'Humanities', subjects: ['Geography', 'History', 'Government', 'Civic Education', 'Art', 'Literature in English', 'Social Studies'] },
  { name: 'Science & Technology', subjects: ['Biology', 'Physics', 'Chemistry', 'Agricultural Science', 'Food & Nutrition', 'Basic Sciences', 'Technical Drawing', 'Basic Technology', 'Home Economics', 'PHE'] },
  { name: 'Commerce & Management', subjects: ['Financial Accounting', 'Commerce', 'Economics', 'Bookkeeping', 'Marketing', 'Business Studies'] },
  { name: 'Arabic', subjects: ['Arabic', 'Nahwu & Sarfu (Arabic Grammar)', 'Aruud (Poetry)', 'Balaghah (Rhetoric)', 'Al-Adab-Al Arabiy (Arabic Literature)', 'Al-Inshaw (Composition)'] },
  { name: 'Islamic Sciences', subjects: ['Fiqh', 'Usul-Fiqh', 'Tawheed', 'Seerah', 'Tajweed', 'Hadith', 'Ulumul-Hadith', 'Ulumul-Tafseer', 'Tafseer', 'Ilmu Qiraat'] },
]

export default function RoyalCollege() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Sultan Hanafi" title="Royal College" subtitle="A Beacon of Educational Excellence" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <img src={schBuildingImg} alt="Sultan Hanafi Royal College" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[['2021', 'Established'], ['10+', 'Age Group'], ['7', 'Departments']].map(([val, lbl]) => (
                  <div key={lbl} className="text-center p-4" style={{ background: '#D4A017' }}>
                    <div className="text-xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>{val}</div>
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1A1A1A' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal reveal-delay-1 order-1 md:order-2">
              <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Elevate the Future of Your Children!</h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>Sultan Hanafi Royal College stands as a beacon of educational excellence, offering a comprehensive curriculum that integrates both junior and secondary education, encompassing both Islamic and secular studies, to students aged ten and above. Established with a vision to provide a well-rounded education that nurtures the mind, body, and spirit, our institution has been serving the academic needs of students since its inception in 2021.</p>
                <p>Our dedicated faculty, comprised of passionate educators, strives to create a dynamic learning environment where students are inspired to excel academically and grow personally. With a focus on fostering critical thinking skills, promoting moral values, and instilling a sense of responsibility, Sultan Hanafi Royal College equips students with the tools they need to succeed in their academic pursuits and beyond.</p>
                <p>Since our founding, we have remained committed to providing a holistic education that not only prepares students for academic success but also empowers them to become compassionate and socially responsible individuals.</p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/admission" className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Apply Now</Link>
                <Link to="/contact" className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all" style={{ borderColor: '#1A1A1A', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Enquire</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={r3 as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Academic Departments</h2>
            <p className="text-gray-500 mt-5 text-sm max-w-lg mx-auto">Seven departments covering secular, Islamic, and Arabic studies — giving students a truly comprehensive education.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPTS.map((d, i) => (
              <div key={i} className="bg-white p-6 hover:shadow-md transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <h3 className="text-sm font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{d.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {d.subjects.map(s => (
                    <span key={s} className="text-xs px-2 py-1 rounded" style={{ background: '#F5F5F5', color: '#555', border: '1px solid #e5e7eb' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
