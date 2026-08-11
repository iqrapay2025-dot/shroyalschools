import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '@/imports/Logo-Trans.png'

const NAV_ITEMS = [
  { label: 'Home', to: '/', items: [] },
  { label: 'About Us', items: [
    { label: "Director's Speech", to: '/directors-speech' },
    { label: 'About SULTAN', to: '/about-sultan' },
    { label: 'Career', to: '/career' },
  ]},
  { label: 'Governance', items: [
    { label: 'Sultan Hanafi Structure', to: '/structure' },
    { label: 'Sultan Management', to: '/management' },
    { label: 'Policies', to: '/policies' },
  ]},
  { label: 'Academics', items: [
    { label: 'Nursery & Primary', to: '/nursery-primary' },
    { label: 'Royal College', to: '/royal-college' },
    { label: 'Islamic & Arabic Studies', to: '/arabic-islamic-studies' },
    { label: "Qur'an College", to: '/quran-college' },
    { label: 'Admission', to: '/admission' },
    { label: 'Boarding', to: '/boarding' },
    { label: 'Facilities', to: '/facilities' },
  ]},
  { label: 'Media', items: [
    { label: 'Photo Gallery', to: '/photo-gallery' },
    { label: 'Video Gallery', to: '/video-gallery' },
    { label: 'News & Events', to: '/news-events' },
  ]},
  { label: 'Contact', to: '/contact', items: [] },
]

const FOOTER_ACADEMICS = [
  { label: 'Sultan Nursery and Primary School', to: '/nursery-primary' },
  { label: 'Sultan Hanafi Royal College', to: '/royal-college' },
  { label: 'Sultan Hanafi School of Arabic and Islamic Studies', to: '/arabic-islamic-studies' },
  { label: "Sultan Hanafi Qur'an College", to: '/quran-college' },
]

function DesktopDropdown({ label, items }: { label: string; items: { label: string; to: string }[] }) {
  return (
    <div className="dropdown-parent relative">
      <button className="nav-link flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] py-1 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}>
        {label}
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div className="dropdown-menu">
        {items.map(item => (
          <Link key={item.to} to={item.to} className="block px-5 py-3 text-sm text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#D4A017] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Open Sans, sans-serif', color: '#1A1A1A' }}>

      {/* Top utility bar */}
      <div className="hidden md:block w-full py-2 px-6" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-white/80">
            <a href="mailto:info@shroyalschools.ng" className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              info@shroyalschools.ng
            </a>
            <a href="tel:+2348073747650" className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              +234 (0) 8073747650 | +234 (0) 8070586860
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[
              { href: 'https://wa.me/2348073747650', icon: 'fa-brands fa-whatsapp', color: '#25D366' },
              { href: 'https://www.facebook.com/share/1EnMRT3Lrq/', icon: 'fa-brands fa-facebook-f', color: '#D4A017' },
              { href: 'https://www.instagram.com/shroyal_schools?igsh=MW0wOHNsY3FiaTZpYQ==', icon: 'fa-brands fa-instagram', color: '#D4A017' },
              { href: 'https://youtube.com/@shroyalschools?si=MQvfOmYe5JJRTPL1', icon: 'fa-brands fa-youtube', color: '#D4A017' },
            ].map(s => (
              <a key={s.icon} href={s.href} className="text-white/70 transition-colors text-sm" target="_blank" rel="noopener noreferrer"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = s.color}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logoImg} alt="Sultan Hanafi Royal Schools" style={{ height: 60, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 xl:gap-6">
            {NAV_ITEMS.map(item =>
              item.items.length === 0 ? (
                <Link key={item.label} to={item.to!} className="nav-link text-xs font-semibold whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.label}
                </Link>
              ) : (
                <DesktopDropdown key={item.label} label={item.label} items={item.items as { label: string; to: string }[]} />
              )
            )}
          </nav>

          <div className="hidden md:flex">
            <Link to="/foundation" className="px-4 py-2 text-xs font-bold uppercase tracking-wider hover:brightness-90 whitespace-nowrap" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>
              Get Involved
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {NAV_ITEMS.map(({ label, items, to }) => (
              <div key={label}>
                <button
                  className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold border-b border-gray-50 hover:bg-gray-50"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => {
                    if (items.length === 0 && to) { navigate(to); setMobileOpen(false) }
                    else setMobileExpanded(mobileExpanded === label ? null : label)
                  }}
                >
                  {label}
                  {items.length > 0 && (
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={`transition-transform ${mobileExpanded === label ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
                  )}
                </button>
                {mobileExpanded === label && items.length > 0 && (
                  <div className="bg-gray-50">
                    {(items as { label: string; to: string }[]).map(item => (
                      <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="block px-8 py-2.5 text-sm text-gray-600 hover:text-[#D4A017] border-b border-gray-100">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <Link to="/foundation" onClick={() => setMobileOpen(false)} className="block w-full text-center py-3 text-sm font-bold uppercase tracking-wider" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            <div>
              <div className="mb-5">
                <img src={logoImg} alt="Sultan Hanafi Royal Schools" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-6">
                Sultan Hanafi Royal Schools is a conglomerate of several schools that provide qualitative secular and Islamic education to learners of diverse age group in a secure and serene environment.
              </p>
              <div className="flex gap-2">
                {[
                  { href: 'https://wa.me/2348073747650', fa: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
                  { href: 'https://www.facebook.com/share/1EnMRT3Lrq/', fa: 'fa-brands fa-facebook-f', label: 'Facebook' },
                  { href: 'https://www.instagram.com/shroyal_schools?igsh=MW0wOHNsY3FiaTZpYQ==', fa: 'fa-brands fa-instagram', label: 'Instagram' },
                  { href: 'https://youtube.com/@shroyalschools?si=MQvfOmYe5JJRTPL1', fa: 'fa-brands fa-youtube', label: 'YouTube' },
                  { href: '#', fa: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
                ].map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#D4A017] hover:text-[#D4A017] transition-all text-sm">
                    <i className={s.fa} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black text-white mb-5 pb-2 border-b" style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#D4A017' }}>Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Career', to: '/career' },
                  { label: 'Policies', to: '/policies' },
                  { label: 'Foundation', to: '/foundation' },
                ].map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-xs text-white/50 hover:text-[#D4A017] transition-colors flex items-center gap-2">
                      <span style={{ color: '#D4A017' }}>›</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black text-white mb-5 pb-2 border-b" style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#D4A017' }}>Academics</h4>
              <ul className="space-y-2.5">
                {FOOTER_ACADEMICS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-xs text-white/50 hover:text-[#D4A017] transition-colors flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: '#D4A017' }}>›</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black text-white mb-5 pb-2 border-b" style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#D4A017' }}>Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span className="text-xs text-white/50 leading-relaxed">15, Imowonla Road, AP Bus Stop, Off Gberigbe Agura Road, Ikorodu, Lagos State.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="flex-shrink-0" width="14" height="14" fill="#D4A017" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                  <a href="mailto:info@shroyalschools.ng" className="text-xs text-white/50 hover:text-[#D4A017] transition-colors">info@shroyalschools.ng</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="flex-shrink-0" width="14" height="14" fill="#D4A017" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  <a href="tel:+2348073747650" className="text-xs text-white/50 hover:text-[#D4A017] transition-colors">+234 (0) 8073747650</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">© Sultan Hanafi Royal Schools. All rights reserved.</p>
            <p className="text-xs text-white/20">Empowering Minds · Inspiring Futures · Nurturing Leaders</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
