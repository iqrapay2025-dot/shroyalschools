import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

export default function Career() {
  const r1 = useReveal()
  const [form, setForm] = useState({ name: '', email: '', why: '', file: null as File | null })
  const [submitted, setSubmitted] = useState(false)

  return (
    <SiteLayout>
      <PageHero eyebrow="Join Our Team" title="Career Opportunities" subtitle="Take the next step towards your dream job and embark on a journey of growth, learning, and success!" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal">
            <h2 className="text-2xl font-black mb-2 gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>JOIN US AT SULTAN</h2>
            <p className="text-gray-500 text-sm mt-6 mb-10 leading-relaxed">
              We are always looking for passionate, skilled, and dedicated educators and support staff to join the Sultan Hanafi Royal Schools family. If you believe in the power of quality education and share our commitment to excellence, we'd love to hear from you.
            </p>

            {submitted ? (
              <div className="p-10 text-center border-2" style={{ borderColor: '#D4A017' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#D4A017' }}>
                  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-lg font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Application Submitted!</h3>
                <p className="text-sm text-gray-500">Thank you for your interest. We will review your application and be in touch shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', why: '', file: null }) }}
                  className="mt-6 text-xs font-bold uppercase tracking-wider" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-6">
                {[
                  { id: 'name', label: 'Name', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {label} <span style={{ color: '#D4A017' }}>*</span>
                    </label>
                    <input required type={type} value={form[id as 'name' | 'email']}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full px-4 py-3 text-sm border border-gray-200 outline-none transition-colors"
                      onFocus={e => (e.target.style.borderColor = '#D4A017')}
                      onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Why should you be considered? <span style={{ color: '#D4A017' }}>*</span>
                  </label>
                  <textarea required rows={5} value={form.why}
                    onChange={e => setForm(f => ({ ...f, why: e.target.value }))}
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none resize-none transition-colors"
                    onFocus={e => (e.target.style.borderColor = '#D4A017')}
                    onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    CV / Resume & Cover Letter <span className="text-gray-400 normal-case font-normal">(PDF or DOCX)</span>
                  </label>
                  <input type="file" accept=".pdf,.docx"
                    onChange={e => setForm(f => ({ ...f, file: e.target.files?.[0] || null }))}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:cursor-pointer"
                    style={{ background: '#F5F5F5', padding: '8px' }} />
                  {form.file && <p className="text-xs text-gray-500 mt-1">Selected: {form.file.name}</p>}
                </div>
                <button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-widest hover:brightness-90 transition-all"
                  style={{ background: '#D4A017', color: '#1A1A1A', fontFamily: 'Montserrat, sans-serif' }}>
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
