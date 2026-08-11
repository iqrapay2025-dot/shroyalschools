import React, { useEffect, useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

function ContactDetail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full" style={{ background: 'rgba(212,160,23,0.12)' }}>
        <span style={{ color: '#D4A017' }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{label}</p>
        <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const revealDetails = useReveal()
  const revealForm = useReveal()
  const revealMap = useReveal()

  const [form, setForm] = useState({ firstName: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)


  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const field = (id: keyof typeof form, label: string, type = 'text', multiline = false) => (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>
        {label} <span style={{ color: '#D4A017' }}>*</span>
      </label>
      {multiline ? (
        <textarea id={id} rows={5} value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          className="w-full px-4 py-3 text-sm border outline-none resize-none transition-colors"
          style={{ borderColor: errors[id] ? '#e53e3e' : '#e5e7eb', fontFamily: 'Open Sans, sans-serif' }}
          onFocus={e => (e.target.style.borderColor = '#D4A017')}
          onBlur={e => (e.target.style.borderColor = errors[id] ? '#e53e3e' : '#e5e7eb')} />
      ) : (
        <input id={id} type={type} value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          className="w-full px-4 py-3 text-sm border outline-none transition-colors"
          style={{ borderColor: errors[id] ? '#e53e3e' : '#e5e7eb', fontFamily: 'Open Sans, sans-serif' }}
          onFocus={e => (e.target.style.borderColor = '#D4A017')}
          onBlur={e => (e.target.style.borderColor = errors[id] ? '#e53e3e' : '#e5e7eb')} />
      )}
      {errors[id] && <p className="mt-1 text-xs" style={{ color: '#e53e3e' }}>{errors[id]}</p>}
    </div>
  )

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact Us" title="We'd Love To Hear From You" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">

            <div ref={revealDetails as React.RefCallback<HTMLElement>} className="reveal">
              <h2 className="text-xl md:text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get In Touch</h2>
              <p className="text-gray-500 text-sm mt-6 mb-8 leading-relaxed">Reach out to us through any of the channels below — we're always happy to answer questions, schedule a visit, or assist with admissions.</p>
              <div className="space-y-7 mb-10">
                <ContactDetail label="Address" icon={<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}>
                  <p>15, Imowonla Road, AP Bus Stop,<br />Off Gberigbe Agura Road,<br />Ikorodu, Lagos State.</p>
                </ContactDetail>
                <ContactDetail label="Email" icon={<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}>
                  <a href="mailto:info@shroyalschools.ng" className="block hover:text-[#D4A017] transition-colors">info@shroyalschools.ng</a>
                  <a href="mailto:principal@shrschools.ng" className="block hover:text-[#D4A017] transition-colors">principal@shrschools.ng</a>
                </ContactDetail>
                <ContactDetail label="Phone" icon={<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}>
                  <a href="tel:+2348070586860" className="block hover:text-[#D4A017] transition-colors">08070586860</a>
                  <a href="tel:+2348038078664" className="block hover:text-[#D4A017] transition-colors">08038078664</a>
                </ContactDetail>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'WhatsApp', href: 'https://wa.me/2348073747650', fa: 'fa-brands fa-whatsapp' },
                    { label: 'Facebook', href: 'https://www.facebook.com/share/1EnMRT3Lrq/', fa: 'fa-brands fa-facebook-f' },
                    { label: 'Instagram', href: 'https://www.instagram.com/shroyal_schools?igsh=MW0wOHNsY3FiaTZpYQ==', fa: 'fa-brands fa-instagram' },
                    { label: 'YouTube', href: 'https://youtube.com/@shroyalschools?si=MQvfOmYe5JJRTPL1', fa: 'fa-brands fa-youtube' },
                    { label: 'LinkedIn', href: '#', fa: 'fa-brands fa-linkedin-in' },
                  ].map(s => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center border transition-all text-sm"
                      style={{ borderColor: '#e5e7eb', color: '#6b7280' }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#D4A017'; el.style.color = '#D4A017' }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e5e7eb'; el.style.color = '#6b7280' }}>
                      <i className={s.fa} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div ref={revealForm as React.RefCallback<HTMLElement>} className="reveal reveal-delay-1">
              <h2 className="text-xl md:text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Take The First Step</h2>
              {submitted ? (
                <div className="mt-10 p-8 text-center border-2" style={{ borderColor: '#D4A017' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#D4A017' }}>
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Message Sent!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: '', phone: '', email: '', message: '' }) }}
                    className="mt-6 text-xs font-bold uppercase tracking-wider cursor-pointer" style={{ fontFamily: 'Montserrat, sans-serif', background: 'none', border: 'none', color: '#D4A017' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  {field('firstName', 'First Name')}
                  {field('phone', 'Phone Number', 'tel')}
                  {field('email', 'Email Address', 'email')}
                  {field('message', 'Message', 'text', true)}
                  <button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all hover:brightness-90" style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>Let's Talk</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section ref={revealMap as React.RefCallback<HTMLElement>} className="reveal" style={{ background: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h2 className="text-xl font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Find Us</h2>
        </div>
        <div style={{ height: 420 }}>
          <iframe title="Sultan Hanafi Royal Schools location" width="100%" height="100%" loading="lazy"
            src="https://maps.google.com/maps?q=15%2C%20Imowonla%20Road%2C%20AP%20Bus%20Stop%2C%20Off%20Gberigbe%20Agura%20Road%2C%20Ikorodu%2C%20Lagos%2C%20Nigeria&t=m&z=14&output=embed&iwloc=near"
            style={{ border: 0, display: 'block' }} />
        </div>
      </section>
    </SiteLayout>
  )
}
