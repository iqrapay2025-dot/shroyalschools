import React from 'react'
import SiteLayout from '@/components/SiteLayout'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/components/useReveal'

export default function DirectorsSpeech() {
  const r1 = useReveal()
  const r2 = useReveal()
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Director's Message" subtitle="Welcome To Sultan Hanafi Royal Schools" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Sidebar */}
            <div ref={r1 as React.RefCallback<HTMLElement>} className="reveal md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4" style={{ borderColor: '#D4A017' }}>
                <img src="/images/hanafi-2-1.jpg" alt="Zakariya Olanrewaju Anofi" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Zakariya Olanrewaju Anofi</h3>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Director</p>
              <p className="text-xs text-gray-500">BSc., MSc., FCA, FCCA</p>
              <div className="w-12 h-0.5 mt-4" style={{ background: '#D4A017' }} />
              <div className="mt-5 space-y-1 text-xs text-gray-500">
                <p>Oxford Brookes University</p>
                <p>Edinburgh Business School (Heriot-Watt)</p>
                <p>ACCA UK · ICAN Fellow</p>
              </div>
            </div>
            {/* Speech */}
            <div ref={r2 as React.RefCallback<HTMLElement>} className="reveal reveal-delay-1 md:col-span-2 prose prose-sm max-w-none space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
              <h2 className="text-2xl font-black gold-underline mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}>
                Welcome To Sultan Hanafi Royal Schools
              </h2>
              <p>My name is Zakariya Olanrewaju Anofi and I am delighted to welcome you to the official website of Sultan Hanafi Royal Schools, the best hybrid (Islamic and Secular) school in Lagos, Nigeria located in Ikorodu. As the director, I am deeply committed to ensuring that every student at our institution receives the highest quality education in a nurturing, safe and inclusive environment.</p>
              <p>I hold a B.Sc. in Applied Accounting from Oxford Brookes University and M.Sc. in Financial Management from Edinburgh Business School (Heriot-Watt University). I am a fellow member of both the Association of Chartered Certified Accountants (ACCA) UK and the Institute of Chartered Accountants of Nigeria (ICAN), and currently pursuing a doctorate degree at Edgewood University in Madison, Wisconsin, USA.</p>
              <p>My over two decades work experience cut across banking, insurance, oil &amp; gas and consulting with bias for corporate reporting, taxation management, revenue generation, financial &amp; business advisory, governance and leadership. I have passion for education and this informed my decision to invest in the creation of educational institutions whose sole motive is to impact knowledge to the populace.</p>
              <p>Our website serves as a platform where you can explore the various facets of our school, from our academic programs to extracurricular activities, from our dedicated faculty to our state-of-the-art facilities. Here, you will find all the information you need to understand our mission, vision, and the values that guide us in our pursuit of excellence. Our schools are open to Muslims and non-Muslims, males and females.</p>
              <p>At SULTAN, our dedicated team of educators are passionate about equipping our students with the skills, knowledge, and values they need to succeed in an ever-changing business and technology world.</p>
              <p>I invite you to navigate through our website, engage with our community, and discover the myriad opportunities that await you at SULTAN. Whether you are a prospective student, a current parent, or an alumni member, we are here to support and guide you.</p>
              <p>Thank you for your interest in SULTAN. Together, let us embark on a journey of discovery, innovation, and transformation.</p>
              <div className="pt-4 border-t" style={{ borderColor: '#D4A017' }}>
                <p className="font-black text-sm" style={{ color: '#D4A017', fontFamily: 'Montserrat, sans-serif' }}>Warm regards,</p>
                <p className="font-black mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Zakariya Olanrewaju Anofi</p>
                <p className="text-xs text-gray-500 mt-0.5">Director, Sultan Hanafi Royal Schools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
