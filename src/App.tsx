// v6
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { HashRouter, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'
import { useReveal } from '@/components/useReveal'
import FacilitiesPage from './FacilitiesPage'
import ContactPage from './ContactPage'
import DirectorsSpeech from '@/pages/DirectorsSpeech'
import AboutSultan from '@/pages/AboutSultan'
import Career from '@/pages/Career'
import Structure from '@/pages/Structure'
import ManagementTeam from '@/pages/ManagementTeam'
import Policies from '@/pages/Policies'
import NurseryPrimary from '@/pages/NurseryPrimary'
import RoyalCollege from '@/pages/RoyalCollege'
import ArabicIslamicStudies from '@/pages/ArabicIslamicStudies'
import QuranCollege from '@/pages/QuranCollege'
import Admission from '@/pages/Admission'
import Boarding from '@/pages/Boarding'
import PhotoGallery from '@/pages/PhotoGallery'
import VideoGallery from '@/pages/VideoGallery'
import NewsEvents from '@/pages/NewsEvents'
import Foundation from '@/pages/Foundation'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Slide { headline: string; subline: string; cta: string; bg: string; overlay?: string }
interface DivisionCard { title: string; desc: string; icon: string; to: string }
interface FacilityItem { caption: string; img: string; alt: string }
interface Testimonial { quote: string; author: string; role: string }

// ─── Data ────────────────────────────────────────────────────────────────────

const heroSlides: Slide[] = [
  { headline: 'Welcome To Sultan Hanafi Royal Schools', subline: "We Nurture Tomorrow's Leaders", cta: 'Learn More', bg: '/images/schbuilding.jpeg', overlay: 'rgba(26,26,26,0.55)' },
  { headline: 'Leaders Are Made Here', subline: 'Readers Are Leaders', cta: 'Learn More', bg: '/images/classroom-scaled.jpg.jpeg', overlay: 'rgba(26,26,26,0.65)' },
  { headline: 'Excellence in Chemical Sciences', subline: 'Advanced laboratory experiences fostering precision, inquiry, and innovation', cta: 'Learn More', bg: '/images/CHEMISTRY-LAB-768x512.jpg.jpeg', overlay: 'rgba(26,26,26,0.58)' },
  { headline: 'Mastering the Principles of Physics', subline: 'Innovative experiments that transform theory into real-world understanding', cta: 'Learn More', bg: '/images/CHEMISTRY-LAB-768x512.jpg.jpeg', overlay: 'rgba(26,26,26,0.68)' },
  { headline: 'Modern Biology Lab for Future Health and Science Professionals', subline: 'Cutting-edge exploration of living systems through research-driven learning', cta: 'Learn More', bg: '/images/BIOLOGY-LAB-768x512.jpg.jpeg', overlay: 'rgba(26,26,26,0.58)' },
]

const showcaseSlides: Slide[] = [
  { headline: 'Innovating Through Technology', subline: 'Empowering students with digital fluency, coding, and future-ready skills', cta: 'Explore More', bg: '/images/ICT-ROOM.jpg.jpeg', overlay: 'rgba(26,26,26,0.60)' },
  { headline: 'Excellence in Life Skills Education', subline: 'Modern facilities for mastering nutrition, creativity, and sustainable living', cta: 'Explore More', bg: '/images/LIBRARY.jpg-1.jpeg', overlay: 'rgba(26,26,26,0.62)' },
  { headline: 'Engineering the Future', subline: "Hands-on innovation, design thinking, and technical mastery for tomorrow's leaders", cta: 'Explore More', bg: '/images/schbuilding.jpeg', overlay: 'rgba(26,26,26,0.60)' },
  { headline: 'Celebrating Culture and Creative Expression', subline: 'An inspiring space where art, culture, and creativity shape confident, well-rounded individuals', cta: 'Explore More', bg: '/images/CCA-ROOM-768x512.jpg.jpeg', overlay: 'rgba(26,26,26,0.60)' },
  { headline: 'Excellence in Sports and Recreation', subline: 'Premium indoor facilities fostering teamwork, discipline, and a passion for healthy living', cta: 'Explore More', bg: '/images/Recreation-indoor-game.jpg.jpeg', overlay: 'rgba(26,26,26,0.62)' },
]

const divisions: DivisionCard[] = [
  { title: 'Nursery & Primary School', desc: 'Experience the magic of play-based education, where every moment is a stepping stone towards lifelong success.', icon: 'fa-solid fa-children', to: '/nursery-primary' },
  { title: 'Royal College', desc: 'Our innovative approach nurtures curiosity, creativity, and critical thinking, laying a robust foundation for academic excellence.', icon: 'fa-solid fa-graduation-cap', to: '/royal-college' },
  { title: 'Islamic & Arabic Studies', desc: 'Discover the richness of knowledge at our school of Islamic and Arabic studies. The path to understanding spiritual growth.', icon: 'fa-solid fa-mosque', to: '/arabic-islamic-studies' },
  { title: "Qur'an College", desc: 'We offer more than education; we offer a connection to the divine. Exploring the beauty and wisdom of the Holy Quran.', icon: 'fa-solid fa-book-open', to: '/quran-college' },
]

const facilities: FacilityItem[] = [
  { caption: 'ICT Room', img: '/images/ICT-ROOM.jpg.jpeg', alt: 'Sultan Hanafi ICT Room with laptops on every desk and smart TV' },
  { caption: 'School Library', img: '/images/LIBRARY.jpg.jpeg', alt: 'Sultan Hanafi School Library with study cubicles and bookshelves' },
  { caption: 'College Hall', img: '/images/SCHOOL-HALL.jpg.jpeg', alt: 'Sultan Hanafi College Hall examination room with rows of desks' },
  { caption: 'Sick Bay', img: '/images/Sick-bay.jpg.jpeg', alt: 'Sultan Hanafi Sick Bay with beds and first aid equipment' },
  { caption: 'Physics Laboratory', img: '/images/PHYSIC-LAB.jpg.jpeg', alt: 'Sultan Hanafi Physics Laboratory with galvanometers and instruments' },
  { caption: 'Chemistry Laboratory', img: '/images/CHEMISTRY-LAB.jpg.jpeg', alt: 'Sultan Hanafi Chemistry Laboratory with periodic table and equipment' },
  { caption: 'Biology Laboratory', img: '/images/BIOLOGY-LAB.jpg.jpeg', alt: 'Sultan Hanafi Biology Laboratory with skeleton model and anatomical specimens' },
  { caption: 'Basic Technology Workshop', img: '/images/Basic-tech-workshop.jpg.jpeg', alt: 'Sultan Hanafi Basic Technology Workshop with hand tools and workbench' },
  { caption: 'Food & Nutrition Room', img: '/images/Food-nut-room.jpg.jpeg', alt: 'Sultan Hanafi Food and Nutrition Room with kitchen appliances and dining table' },
  { caption: 'Clothing & Textile Room', img: '/images/HOME-ECONOMICS-RM1.jpg.jpeg', alt: 'Sultan Hanafi Clothing and Textile Room with sewing machines and fabric work' },
  { caption: 'CCA Room', img: '/images/CCA-ROOM.jpg.jpeg', alt: 'Sultan Hanafi CCA Room with colorful classroom furniture' },
  { caption: 'Indoor Games', img: '/images/Recreation-indoor-game.jpg.jpeg', alt: 'Sultan Hanafi Indoor Games with table tennis, footballs and board games' },
]

const testimonials: Testimonial[] = [
  { quote: 'One thing I look out for in schools is the caliber of teachers they have. So for me certified, skilled and professional teachers is an important criterion, and I see all that in the school because, in most of their recruitments, they look for experienced teachers with PhD, MSc., PGDE or BSc-EDU.', author: 'Mr. Waliy Ojewumi', role: 'Parent' },
  { quote: "Most of us parents have confirmed that the values and morals that the school instils in our children are more than the money we pay. And it has been inspiring for me as a parent. So I would recommend the school to anybody. They should key into bringing their children to learn there because they won't ever regret making that decision.", author: 'Dr. Ismail Akeem Seriki', role: 'Parent' },
]

// ─── Scroll To Top ────────────────────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

// ─── Slider Component ─────────────────────────────────────────────────────────

function Slider({ slides, height = 'h-[520px] md:h-[640px]', autoPlay = true }: { slides: Slide[]; height?: string; autoPlay?: boolean }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!autoPlay) return
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [slides.length, autoPlay])

  const go = (idx: number) => {
    setCurrent(idx)
    if (timerRef.current) clearInterval(timerRef.current)
    if (autoPlay) timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden bg-gray-900`}>
      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <img src={slide.bg} alt={slide.headline} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: slide.overlay || 'rgba(26,26,26,0.6)' }} />
          <div className="absolute inset-0 flex items-center" style={{ zIndex: 2 }}>
            <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>{slide.headline}</h1>
                <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>{slide.subline}</p>
                <a href="#welcome" className="inline-block px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:brightness-90" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>{slide.cta}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => go((current - 1 + slides.length) % slides.length)} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-[#D4A017] text-white transition-colors duration-200" aria-label="Previous slide">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={() => go((current + 1) % slides.length)} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-[#D4A017] text-white transition-colors duration-200" aria-label="Next slide">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)} className="transition-all duration-200" style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, background: i === current ? '#D4A017' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer' }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage() {
  const navigate = useNavigate()
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const revealCta = useReveal()
  const revealWelcomeText = useReveal()
  const revealWelcomeImg = useReveal()
  const revealDivisionsHead = useReveal()
  const revealDiv0 = useReveal()
  const revealDiv1 = useReveal()
  const revealDiv2 = useReveal()
  const revealDiv3 = useReveal()
  const revealGalleryHead = useReveal()
  const revealGalleryGrid = useReveal()
  const revealTestimonials = useReveal()
  const revealNews = useReveal()
  const revealEvents = useReveal()

  const GALLERY_VISIBLE = 2
  const galleryTotal = facilities.length
  const [galleryCurrent, setGalleryCurrent] = useState(0)
  const galleryTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  const startGalleryTimer = useCallback(() => {
    if (galleryTimer.current) clearInterval(galleryTimer.current)
    galleryTimer.current = setInterval(() => setGalleryCurrent(c => (c + 1) % galleryTotal), 3000)
  }, [galleryTotal])

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    startGalleryTimer()
    return () => { if (galleryTimer.current) clearInterval(galleryTimer.current) }
  }, [startGalleryTimer])

  const goGallery = (idx: number) => {
    setGalleryCurrent((idx + galleryTotal) % galleryTotal)
    startGalleryTimer()
  }

  const galleryVisible = Array.from({ length: GALLERY_VISIBLE }, (_, i) => facilities[(galleryCurrent + i) % galleryTotal])

  return (
    <SiteLayout>
      {/* ── Hero Slider ── */}
      <Slider slides={heroSlides} height="h-[480px] md:h-[600px]" />

      {/* ── CTA Banner ── */}
      <section ref={revealCta as React.RefCallback<HTMLElement>} className="reveal w-full py-10 md:py-14" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>EMPOWERING MINDS, INSPIRING FUTURES</p>
              <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Enrol Your Child Today!</h2>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold mb-0.5" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>JOIN OUR FAMILY</p>
              <p className="text-white/70 text-sm max-w-xs">Where Every Student's Journey is Valued and Supported</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate('/admission')} className="w-full sm:w-44 text-center py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Enrol</button>
            <button onClick={() => navigate('/facilities')} className="w-full sm:w-44 text-center py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer" style={{ background: 'transparent', color: 'white', border: '2px solid #D4A017', fontFamily: 'Montserrat, sans-serif' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#D4A017'; (e.currentTarget as HTMLElement).style.color = '#1A1A1A' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'white' }}>Visit</button>
            <button onClick={() => navigate('/contact')} className="w-full sm:w-44 text-center py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer" style={{ background: 'transparent', color: 'white', border: '2px solid #D4A017', fontFamily: 'Montserrat, sans-serif' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#D4A017'; (e.currentTarget as HTMLElement).style.color = '#1A1A1A' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'white' }}>Request</button>
          </div>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section id="welcome" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div ref={revealWelcomeText as React.RefCallback<HTMLElement>} className="reveal">
              <h2 className="text-2xl md:text-3xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Explore Excellence at Sultan Hanafi Royal Schools!</h2>
              <p className="text-gray-600 mt-6 mb-6 leading-relaxed text-sm md:text-base">It gives us immense pleasure to welcome you to the official website of Sultan Hanafi Royal Schools (SULTAN). At SULTAN, we are deeply committed to ensuring that every student at our institution receives the highest quality education in a nurturing, safe and inclusive environment.</p>
              <p className="text-sm font-semibold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>We provide exceptional platforms that enable your child to:</p>
              <ul className="space-y-3">
                {['Excel in academic knowledge across various subjects.', 'Develop a strong moral compass and exhibit exemplary character.', 'Receive faith-based education to deepen their understanding of Islam.', 'Cultivate entrepreneurship skills, fostering innovation and creativity.', 'Gain financial literacy to make informed decisions and manage resources effectively.'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: '#D4A017' }}>
                      <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/admission')} className="inline-block mt-8 px-7 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all cursor-pointer" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Take A Step →</button>
            </div>
            <div ref={revealWelcomeImg as React.RefCallback<HTMLElement>} className="reveal relative">
              <img src="/images/classroom-scaled.jpg.jpeg" alt="Sultan Hanafi Royal Schools teacher and students in classroom" className="w-full object-cover" style={{ height: 440 }} />
              <div className="absolute -bottom-5 -left-5 p-5 shadow-xl hidden md:block" style={{ background: '#D4A017', maxWidth: 200 }}>
                <div className="text-3xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>4</div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>School Divisions</div>
                <div className="text-xs text-black/60 mt-1">Nursery · Secondary · Islamic · Qur'an</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Division Cards ── */}
      <section className="py-16 md:py-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={revealDivisionsHead as React.RefCallback<HTMLElement>} className="reveal text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black gold-underline-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our School Divisions</h2>
            <p className="text-gray-500 mt-5 text-sm max-w-xl mx-auto">A conglomerate of four schools providing qualitative secular and Islamic education in a secure environment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div, i) => {
              const divRefs = [revealDiv0, revealDiv1, revealDiv2, revealDiv3]
              const delayClass = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][i]
              return (
                <div key={i} ref={divRefs[i] as React.RefCallback<HTMLElement>} className={`reveal ${delayClass} bg-white group hover:shadow-xl transition-all duration-300 overflow-hidden`} style={{ borderTop: '4px solid #D4A017' }}>
                  <div className="p-7">
                    <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(212,160,23,0.12)' }}>
                      <i className={`${div.icon} text-xl`} style={{ color: '#D4A017' }} />
                    </div>
                    <h3 className="text-base font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>{div.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{div.desc}</p>
                    <Link to={div.to} className="inline-block mt-5 text-xs font-bold uppercase tracking-wider transition-colors hover:underline" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Learn More →</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Second Showcase Slider ── */}
      <section>
        <div className="max-w-7xl mx-auto px-0">
          <div className="relative">
            <div className="absolute top-8 left-8 z-10 md:left-12">
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Explore More</span>
            </div>
          </div>
        </div>
        <Slider slides={showcaseSlides} height="h-[400px] md:h-[520px]" />
      </section>

      {/* ── Facilities Gallery ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={revealGalleryHead as React.RefCallback<HTMLElement>} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Take A Tour</h2>
              <p className="text-gray-500 mt-5 text-sm max-w-lg leading-relaxed">Explore our modern facilities, meet our dedicated faculty, and discover the transformative impact of quality education.</p>
            </div>
            <button onClick={() => navigate('/facilities')} className="flex-shrink-0 inline-block px-6 py-2.5 text-sm font-bold uppercase tracking-wider border-2 transition-all cursor-pointer" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'Montserrat, sans-serif', background: 'transparent' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#D4A017'; el.style.color = '#ffffff' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#D4A017' }}>All Facilities</button>
          </div>

          <div ref={revealGalleryGrid as React.RefCallback<HTMLElement>} className="reveal relative">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {galleryVisible.map((fac, i) => (
                <div key={`${galleryCurrent}-${i}`} className="facility-card cursor-pointer group" style={{ animation: 'fadeIn 0.4s ease' }}>
                  <div className="overflow-hidden rounded-2xl bg-gray-200" style={{ aspectRatio: '4/3' }}>
                    <img src={fac.img} alt={fac.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3 px-1">
                    <span className="block text-sm font-black" style={{ color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>{fac.caption}</span>
                    <span className="block text-xs mt-0.5 font-semibold" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>View Gallery →</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => goGallery(galleryCurrent - 1)} className="absolute -left-5 md:-left-7 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:scale-110" style={{ background: '#1A1A1A', border: '2px solid #D4A017', borderRadius: 0 }} aria-label="Previous facility">
              <i className="fa-solid fa-chevron-left text-xs" style={{ color: '#D4A017' }} />
            </button>
            <button onClick={() => goGallery(galleryCurrent + 1)} className="absolute -right-5 md:-right-7 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:scale-110" style={{ background: '#1A1A1A', border: '2px solid #D4A017', borderRadius: 0 }} aria-label="Next facility">
              <i className="fa-solid fa-chevron-right text-xs" style={{ color: '#D4A017' }} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {facilities.map((fac, i) => (
              <button key={i} onClick={() => goGallery(i)} title={fac.caption} className="transition-all duration-200" style={{ width: i === galleryCurrent ? 28 : 8, height: 8, borderRadius: 4, background: i === galleryCurrent ? '#D4A017' : 'rgba(26,26,26,0.12)', border: i === galleryCurrent ? 'none' : '1px solid rgba(212,160,23,0.4)', cursor: 'pointer', padding: 0 }} aria-label={`Go to ${fac.caption}`} />
            ))}
          </div>
          <p className="text-center mt-3 text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>
            {facilities[galleryCurrent].caption}
            <span className="text-gray-400 font-normal normal-case tracking-normal ml-2">({galleryCurrent + 1} of {galleryTotal})</span>
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={revealTestimonials as React.RefCallback<HTMLElement>} className="reveal from-scale py-16 md:py-24" style={{ background: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>What Parents Say</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>Trusted by Families</h2>
          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div key={i} className="transition-opacity duration-700" style={{ opacity: i === testimonialIdx ? 1 : 0, position: i === testimonialIdx ? 'relative' : 'absolute', top: 0, left: 0, right: 0 }}>
                <svg width="48" height="36" viewBox="0 0 48 36" fill="#D4A017" opacity="0.3" className="mx-auto mb-5"><path d="M0 36V22.5C0 13.5 5.5 6.5 16.5 0L21 5.5C15.5 8.5 12 13 11 19H18V36H0zm27 0V22.5C27 13.5 32.5 6.5 43.5 0L48 5.5C42.5 8.5 39 13 38 19H45V36H27z"/></svg>
                <p className="text-white/85 text-sm md:text-base leading-relaxed italic max-w-2xl mx-auto mb-7 px-4">"{t.quote}"</p>
                <div>
                  <div className="w-12 h-0.5 mx-auto mb-4" style={{ background: '#D4A017' }} />
                  <p className="font-black text-sm" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{t.author}</p>
                  <p className="text-white/50 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTestimonialIdx(i)} className="transition-all duration-200" style={{ width: i === testimonialIdx ? 28 : 10, height: 10, borderRadius: 5, background: i === testimonialIdx ? '#D4A017' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer' }} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── News Section ── */}
      <section ref={revealNews as React.RefCallback<HTMLElement>} className="reveal py-16 md:py-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>News</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              { title: 'Graduation Ceremony', img: '/images/schbuilding.jpeg', date: 'June 2026', excerpt: 'Sultan Hanafi Royal Schools celebrated another milestone as students crossed the stage at our annual graduation ceremony — a testament to hard work, dedication, and the pursuit of excellence.' },
              { title: '2026 Basic Education Certificate Examination (BECE) Has Commenced', img: '/images/SCHOOL-HALL.jpg.jpeg', date: 'April 2026', excerpt: 'The 2026 BECE is underway at Sultan Hanafi Royal College. Our students are well-prepared and our staff have gone above and beyond to ensure a conducive and fair examination environment.' },
            ].map(news => (
              <article key={news.title} className="bg-white group overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="overflow-hidden" style={{ height: 220 }}>
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{news.date}</p>
                  <h3 className="text-base font-black mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{news.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{news.excerpt}</p>
                  <button onClick={() => navigate('/news-events')} className="text-xs font-bold uppercase tracking-wider cursor-pointer bg-transparent border-0 p-0 transition-colors hover:text-[#D4A017]" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events Calendar ── */}
      <section ref={revealEvents as React.RefCallback<HTMLElement>} className="reveal py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-10 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Upcoming Events</h2>
          <div className="flex flex-col md:flex-row gap-0 overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex-shrink-0 flex flex-col items-center justify-center py-8 px-10 md:px-12" style={{ background: '#D4A017', minWidth: 140 }}>
              <span className="text-4xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>20</span>
              <span className="text-sm font-bold uppercase tracking-wider mt-1" style={{ color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Ramadan</span>
              <span className="text-xs mt-1" style={{ color: '#1A1A1A80', fontFamily: 'Montserrat, sans-serif' }}>1447 AH</span>
            </div>
            <div className="flex-1 p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Annual Competition</p>
              <h3 className="text-lg md:text-xl font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ramadan Annual Qur'an Competition</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">Sultan Hanafi Royal Schools Presents: The 2026 Ramadan Annual Qur'ān Competition.</p>
              <div className="flex flex-wrap gap-5 mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <svg width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Sultan Hanafi Royal College Auditorium, Ikorodu, Lagos
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <svg width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  20th Ramadan 1447 AH
                </div>
              </div>
              <a href="#" className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-90 transition-all" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Register Now</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

// ─── App Router ───────────────────────────────────────────────────────────────

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/directors-speech" element={<DirectorsSpeech />} />
        <Route path="/about-sultan" element={<AboutSultan />} />
        <Route path="/career" element={<Career />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/management" element={<ManagementTeam />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/nursery-primary" element={<NurseryPrimary />} />
        <Route path="/royal-college" element={<RoyalCollege />} />
        <Route path="/arabic-islamic-studies" element={<ArabicIslamicStudies />} />
        <Route path="/quran-college" element={<QuranCollege />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/boarding" element={<Boarding />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
