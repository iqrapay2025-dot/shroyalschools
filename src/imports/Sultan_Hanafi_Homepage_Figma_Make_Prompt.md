# Sultan Hanafi Royal Schools — Homepage Figma Make Prompt
## Frontend Only

## Overview

Design a fresh, modern homepage for **Sultan Hanafi Royal Schools (SULTAN)** — a hybrid (Islamic and Secular) school conglomerate in Ikorodu, Lagos, Nigeria, comprising 4 divisions: Nursery and Primary School, Royal College, Islamic and Arabic Studies, and Qur'an College.

This is a full visual rebuild of the homepage only, built from scratch as a fresh frontend (not connected to the old WordPress site). Use the content below as the source of truth — do not invent new copy, but you may restructure layout, pacing, and visual hierarchy to fix the issues noted.

## Brand Feel

Warm, trustworthy, and aspirational — a well-run hybrid Islamic/secular school with real facilities and real achievements. Not overly corporate, not overly playful.

- **Color palette:** Deep black/charcoal as a grounding neutral (matches current footer/branding), warm gold/amber as the primary accent (matches current branding), clean white/light-grey backgrounds for content sections
- **Typography:** A confident, modern sans-serif for headings, clean readable sans-serif for body text
- **Imagery:** Real facility photos (labs, library, ICT room, etc.), real classroom/student imagery — avoid generic stock photos where possible

## Known Issues From the Current Live Site — Fix These

1. **Hero slider text gets cropped/clipped on mobile** — ensure all hero text has proper padding, max-width constraints, and wraps gracefully at every screen size, never touching or exceeding screen edges
2. **CTA button bar overlaps the slider's own "Learn more" button** — the Enrol/Visit/Request button group must never visually collide with slider navigation controls or slide CTAs; give it its own clear section/stacking context
3. **Facilities gallery looks like a raw, uncaptioned photo dump** — redesign as a proper gallery grid with consistent aspect ratios, hover states, and visible captions per image (not just a bare grid of raw photos)
4. **Duplicate WhatsApp icons in the header** — consolidate into a single WhatsApp icon (can offer a choice between the two numbers on click, or default to one primary number)
5. **Weak visual hierarchy overall on mobile** — ensure generous spacing, clear section breaks, and a logical scroll flow given how much content is on this homepage (2 sliders, welcome section, 4 division cards, 12-image gallery, testimonials, news, events, footer)

## Page Sections (in order)

### 1. Top Utility Bar
- Email: info@shroyalschools.ng
- Phone: +234 (0) 8073747650, +234 (0) 8070586860
- Single WhatsApp icon (fixing the duplicate issue)
- Social icons: Facebook, Instagram, Twitter, YouTube

### 2. Header / Navigation
- Logo (left)
- Main nav: Home | About Us (dropdown: Director's Speech, About SULTAN, Career) | Governance (dropdown: Sultan Hanafi Structure, Sultan Management, Policies) | Academics (dropdown: Nursery & Primary, Royal College, Islamic & Arabic Studies, Qur'an College, Admission, Boarding, Facilities) | Media (dropdown: Photo Gallery, Video Gallery, News & Events) | Contact
- "Get Involved" gold CTA button (top right) → links conceptually to the Foundation page

### 3. Hero Slider (5 slides)
1. "Welcome To Sultan Hanafi Royal Schools" / "We Nurture Tomorrow's Leaders" — CTA: Learn more
2. "Leaders Are Made Here" / "Readers Are Leaders" — CTA: Learn more
3. "Excellence in Chemical Sciences" / "Advanced laboratory experiences fostering precision, inquiry, and innovation" — CTA: Learn more
4. "Mastering the Principles of Physics" / "Innovative experiments that transform theory into real-world understanding" — CTA: Learn more
5. "Modern Biology Lab for Future Health and Science Professionals" / "Cutting-edge exploration of living systems through research-driven learning" — CTA: Learn more

Design note: text must have a protected safe-zone with proper padding — no cropping at any breakpoint (fixes Issue #1).

### 4. CTA Banner Section (separate section below hero, NOT overlapping it)
- "Empowering Minds, Inspiring Futures" / "Enrol Your Child Today!" — CTA: Take A Step
- "Join Our Family" / "Where Every Student's Journey is Valued and Supported" — CTA: Contact us
- Three prominent buttons: **Enrol** / **Visit** / **Request**

Design note: this must be its own clearly separated section with its own background/spacing — never positioned to overlap the hero slider above it (fixes Issue #2).

### 5. Welcome Section
**Heading:** "Explore Excellence at Sultan Hanafi Royal Schools!"

Full paragraph: "It gives us immense pleasure to welcome you to the official website of Sultan Hanafi Royal Schools (SULTAN). At SULTAN, we are deeply committed to ensuring that every student at our institution receives the highest quality education in a nurturing, safe and inclusive environment."

Bullet list — "We provide exceptional platforms that enable your child to:"
- Excel in academic knowledge across various subjects.
- Develop a strong moral compass and exhibit exemplary character.
- Receive faith-based education to deepen their understanding of Islam.
- Cultivate entrepreneurship skills, fostering innovation and creativity.
- Gain financial literacy to make informed decisions and manage resources effectively

### 6. Division Cards (4, equal-weight grid)
1. **Nursery and Primary School** — "Experience the magic of play-based education, where every moment is a stepping stone towards lifelong success."
2. **Royal College** — "Our innovative approach nurtures curiosity, creativity, and critical thinking, laying a robust foundation for academic excellence."
3. **Islamic and Arabic Studies** — "Discover the richness of knowledge at our school of islamic and arabic studies. The path to understanding spiritual growth."
4. **Qur'an College** — "We offer more than education; we offer a connection to the divine. Exploring the beauty and wisdom of the Holy Quran."

### 7. Second Showcase Slider — "Explore More" facilities-focused (5 slides)
1. "Innovating Through Technology" / "Empowering students with digital fluency, coding, and future-ready skills" — CTA: Explore more
2. "Excellence in Life Skills Education" / "Modern facilities for mastering nutrition, creativity, and sustainable living" — CTA: Explore more
3. "Engineering the Future" / "Hands-on innovation, design thinking, and technical mastery for tomorrow's leaders" — CTA: Explore more
4. "Celebrating Culture and Creative Expression" / "An inspiring space where art, culture, and creativity shape confident, well-rounded individuals" — CTA: Explore more
5. "Excellence in Sports and Recreation" / "Premium indoor facilities fostering teamwork, discipline, and a passion for healthy living" — CTA: Explore more

### 8. "Take A Tour" Facilities Gallery
**Heading:** "Take A Tour"
**Copy:** "Explore our modern facilities, meet our dedicated faculty, and discover the transformative impact of quality education. Schedule a tour and see why we are the perfect choice for your wards' academic journey!"
**Link:** All Facilities

12 captioned images in a proper gallery grid (fixes Issue #3 — must have visible captions, consistent sizing, hover states, not a raw uncaptioned photo dump):
ICT Room, School Library, College Hall, Sick Bay, Physics Laboratory, Chemistry Laboratory, Biology Laboratory, Basic Technology Workshop, Food and Nutrition Room, Clothing and Textile Room, CCA Room, Indoor Games

### 9. Testimonials (carousel, 2 entries)
1. "One thing I look out for in schools is the caliber of teachers they have. So for me certified, skilled and professional teachers is an important criterion, and I see all that in the school because, in most of their recruitments, they look for experienced teachers with Phd, MSc., PGDE or BSc-EDU," — **Mr. Waliy Ojewumi, Parent**
2. "Most of us parents have confirmed that the values and morals that the school instils in our children are more than the money we pay. And it has been inspiring for me as a parent. So I would recommend the school to anybody. They should key into bringing their children to learn there because they won't ever regret making that decision" — **Dr. Ismail Akeem Seriki, Parent**

Design note: give the carousel proper padding so quote text and navigation arrows never touch screen edges (fixes part of Issue #5).

### 10. News Section
**Heading:** News
- "Graduation Ceremony" (with image) — Read More
- "2026 Basic Education Certificate Examination (BECE) Has Commenced" (with image) — Read More

### 11. Events Calendar
"RAMADAN ANNUAL QUR'AN COMPETITION" — "Sultan Hanafi Royal Schools Presents: The 2026 Ramadan Annual Qur'ān Competition." — Location: Sultan Hanafi Royal College Auditorium, Ikorodu, Lagos — Date: 20th Ramadan 1447 AH — CTA: Register

### 12. Footer
**About:** "Sultan Hanafi Royal Schools is a conglomerate of several schools that provide qualitative secular and Islamic education to learners of diverse age group in a secure and serene environment."

**Quick Links:** Home, Career, Policies, Foundation

**Academics:** Sultan Nursery and Primary School, Sultan Hanafi Royal College, Sultan Hanafi School of Arabic and Islamic Studies, Sultan Hanafi Qur'an College (include all 4 — the old site was missing Qur'an College from this list, include it this time for consistency)

**Contact Us:**
- Address: 15, Imowonla Road, AP Bus Stop, Off Gberigbe Agura Road, Ikorodu, Lagos State.
- Email: info@shroyalschools.ng
- Phone: +234 (0) 8073747650

Social icons: single WhatsApp, Facebook, Instagram, YouTube, LinkedIn (include LinkedIn consistently here, matching the old footer)

Copyright line: "© Sultan Hanafi Royal Schools"

## Scalability Note (Frontend/Component Level)

Build the hero slider, showcase slider, division cards, gallery items, testimonial cards, and news cards as reusable components with variants — this homepage has a lot of repeating card/slide patterns, and future content updates (new facilities, new testimonials, new news posts) should be easy to add without rebuilding layout.

## Responsive Requirement

This homepage must be fully tested and functional on mobile — most visitors will view it on a phone. Every section above must be checked at mobile width specifically for the two known issues (hero text clipping, CTA bar overlap) before considering the page complete.
