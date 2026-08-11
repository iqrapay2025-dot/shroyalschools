import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

const POSTS = [
  {
    date: "November 2024",
    category: "Academics",
    title: "Annual Spelling Competition 2024",
    excerpt: "Students from all divisions showcased remarkable vocabulary and composure in our annual spelling competition. Participants were assessed across multiple rounds with increasing difficulty.",
    icon: "fa-solid fa-spell-check",
  },
  {
    date: "October 2024",
    category: "Islamic Events",
    title: "Maulid Nabiyy Celebration",
    excerpt: "Sultan Hanafi Royal Schools commemorated the birth of the Prophet Muhammad (SAW) with a programme of lectures, Qur'anic recitations, and Islamic poetry.",
    icon: "fa-solid fa-star-and-crescent",
  },
  {
    date: "September 2024",
    category: "Admissions",
    title: "New Academic Session Begins",
    excerpt: "We are delighted to welcome returning students and new families to the 2024/2025 academic session. Staff orientation and student induction activities marked the beginning of another exciting year.",
    icon: "fa-solid fa-door-open",
  },
  {
    date: "July 2024",
    category: "Achievements",
    title: "WAEC/NECO Results — Outstanding Performance",
    excerpt: "Our Royal College students recorded impressive results in the 2024 WAEC and NECO examinations, with a significant number obtaining distinctions across multiple subjects.",
    icon: "fa-solid fa-trophy",
  },
  {
    date: "April 2024",
    category: "Community",
    title: "Parent-Teacher Association Meeting",
    excerpt: "Parents, teachers, and the school management convened for the quarterly PTA meeting to review academic progress, discuss policy updates, and strengthen the home-school partnership.",
    icon: "fa-solid fa-people-group",
  },
  {
    date: "February 2024",
    category: "Islamic Events",
    title: "Qur'an Memorization Graduation Ceremony",
    excerpt: "Sultan Hanafi Qur'an College celebrated the graduation of a new cohort of Huffaz. Graduates received their certificates (Ijazaat) in a ceremony attended by family and dignitaries.",
    icon: "fa-solid fa-book-quran",
  },
]

export default function NewsEvents() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const r1 = useReveal(), r2 = useReveal()

  return (
    <SiteLayout>
      <PageHero eyebrow="Media" title="News & Events" subtitle="Stay updated with the latest from Sultan Hanafi Royal Schools." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal mb-12">
            <h2 className="text-2xl font-black gold-underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Latest Updates</h2>
          </div>

          <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <article key={i} className="group flex flex-col bg-white border border-gray-100 hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(212,160,23,0.12)' }}>
                      <i className={`${post.icon} text-sm`} style={{ color: '#D4A017' }} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>{post.category}</span>
                      <span className="text-[11px] text-gray-400">{post.date}</span>
                    </div>
                  </div>
                  <h3 className="font-black text-base mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {expanded === i ? post.excerpt : `${post.excerpt.slice(0, 100)}...`}
                  </p>
                </div>
                <button
                  className="mt-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  {expanded === i ? 'Show Less' : 'Read More'} <i className={`fa-solid fa-chevron-${expanded === i ? 'up' : 'down'} ml-1 text-[10px]`} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
