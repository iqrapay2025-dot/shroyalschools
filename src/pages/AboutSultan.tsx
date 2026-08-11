import React from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const VALUES = [
  { letter: 'C', word: 'Creativity', desc: 'Encouraging innovative thinking and problem-solving skills.' },
  { letter: 'L', word: 'Leadership', desc: 'Fostering leadership qualities and empowering students to become future leaders.' },
  { letter: 'E', word: 'Engagement', desc: 'Promoting active participation and involvement in the learning process.' },
  { letter: 'V', word: 'Versatility', desc: 'Nurturing well-rounded individuals with a broad range of knowledge and skills.' },
  { letter: 'E', word: 'Ethical Behavior', desc: 'Cultivating a strong sense of moral responsibility and ethical conduct.' },
  { letter: 'R', word: 'Reliability', desc: 'Demonstrating trustworthiness, dependability, and accountability in all aspects of our work.' },
]

const DIVISIONS = [
  { title: 'Nursery & Primary School', desc: 'Experience the magic of play-based education, where every moment is a stepping stone towards lifelong success.', to: '/nursery-primary', icon: 'fa-solid fa-children' },
  { title: 'Royal College', desc: 'Our innovative approach nurtures curiosity, creativity, and critical thinking, laying a robust foundation for academic excellence.', to: '/royal-college', icon: 'fa-solid fa-graduation-cap' },
  { title: 'Islamic & Arabic Studies', desc: 'Discover the richness of knowledge at our school of Islamic and Arabic studies. The path to understanding spiritual growth.', to: '/arabic-islamic-studies', icon: 'fa-solid fa-mosque' },
  { title: "Qur'an College", desc: 'We offer more than education; we offer a connection to the divine. Exploring the beauty and wisdom of the Holy Quran.', to: '/quran-college', icon: 'fa-solid fa-book-open' },
]

export default function AboutSultan() {
  const rIntro = useReveal(), rMission = useReveal(), rVision = useReveal()
  const rValues = useReveal(), rDiv = useReveal(), rCurr = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="Know More" title="About Us" subtitle="Explore Excellence at Sultan Hanafi Royal Schools!" />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div ref={rIntro as React.RefCallback<HTMLElement>} className="reveal">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              At Sultan Hanafi Royal Schools, we are deeply committed to ensuring that every learner at our institution receives the highest and complete education in a nurturing and inclusive environment.
            </p>
            <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>We provide exceptional platforms that enable your child to:</p>
            <ul className="space-y-3">
              {['Excel in academic knowledge across various subjects.','Develop a strong moral compass and exhibit exemplary character.','Receive faith-based education to deepen their understanding of Islam.','Cultivate entrepreneurship skills, fostering innovation and creativity.','Gain financial literacy to make informed decisions and manage resources effectively.'].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: '#D4A017' }}>
                    <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
          <div ref={rMission as React.RefCallback<HTMLElement>} className="reveal bg-white p-8 md:p-10" style={{ borderTop: '4px solid #D4A017' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5" style={{ background: 'rgba(212,160,23,0.12)' }}>
              <i className="fa-solid fa-bullseye text-xl" style={{ color: '#D4A017' }} />
            </div>
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h2>
            <p className="text-sm text-gray-600 leading-relaxed">Our mission is to provide a holistic education to our students by imparting both Islamic and secular knowledge through rigorous research and effective teaching methods. We strive to promote ethical behaviour, instill strong values in our students, and contribute to the development of a secure, informed, and progressive society in collaboration with the government.</p>
          </div>
          <div ref={rVision as React.RefCallback<HTMLElement>} className="reveal reveal-delay-1 bg-white p-8 md:p-10" style={{ borderTop: '4px solid #D4A017' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5" style={{ background: 'rgba(212,160,23,0.12)' }}>
              <i className="fa-solid fa-eye text-xl" style={{ color: '#D4A017' }} />
            </div>
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Vision</h2>
            <p className="text-sm text-gray-600 leading-relaxed">Our vision is to be recognized as a leading institution that excels in knowledge dissemination and character building. We aspire to create a positive impact wherever our presence is felt, inspiring others through our commitment to excellence in education.</p>
          </div>
        </div>
      </section>

      {/* CLEVER Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={rValues as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Core Values</h2>
            <p className="text-gray-500 mt-5 text-sm max-w-lg mx-auto">We are guided by the acronym <strong>CLEVER</strong> — a framework of values that shapes every student's journey.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <div className="text-4xl font-black mb-2" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{v.letter}</div>
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{v.word}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={rDiv as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our School Divisions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONS.map((d, i) => (
              <div key={i} className="bg-white p-7 hover:shadow-xl transition-shadow" style={{ borderTop: '4px solid #D4A017' }}>
                <div className="mb-4 w-11 h-11 flex items-center justify-center rounded-full" style={{ background: 'rgba(212,160,23,0.12)' }}>
                  <i className={`${d.icon} text-lg`} style={{ color: '#D4A017' }} />
                </div>
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{d.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{d.desc}</p>
                <Link to={d.to} className="text-xs font-bold uppercase tracking-wider hover:underline" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div ref={rCurr as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Applicable Curriculum</h2>
            <div className="mt-7 space-y-5 text-sm text-gray-600 leading-relaxed">
              <p>A mixed curriculum practice! Both the Royal College and the Basic School adopt the Nigeria curriculum for its secular programme with the infusion of additional beneficial curriculum activities borrowed from the western world. We apply completely the content and skills of the Nigeria National Curriculum, embedded with special skills such as entrepreneurial, financial intelligence, leadership skills, broad based technology, personal development, career planning, skill trades, applied technology, business and work-ready elective subjects.</p>
              <p>Our Islamic &amp; Arabic School and the Qur'an College adopt the Saudi Arabian educational curriculum for teaching and learning experience. A number of Saudi Arabian approved text books have been adopted to achieve our aims in this respect.</p>
            </div>
            <div className="mt-8 p-6 md:p-8" style={{ background: '#F5F5F5', borderLeft: '4px solid #D4A017' }}>
              <h3 className="text-sm font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Extra-Curricular Activities</h3>
              <p className="text-sm text-gray-600 mb-4">In our quest to ensuring that our students achieve the three domains of cognitive, affective and psychomotor knowledge, we embark on extra-curricular activities which includes:</p>
              <div className="flex flex-wrap gap-3">
                {['Sports & Games', 'Debate', 'Islamic Arts & Cultures'].map(a => (
                  <span key={a} className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
