# Sultan Hanafi Royal Schools — Facilities Page Figma Make Prompt

## Overview

Design the **Facilities** page for Sultan Hanafi Royal Schools — a showcase page displaying the school's 12 physical facilities. The original page is very thin (just headings, no descriptions), so this rebuild should present the same 12 facilities in a richer, more visually complete way, with short added captions.

## Brand Feel

Match the homepage: black/charcoal + gold/amber accent, white/light-grey backgrounds, confident modern sans-serif headings, clean body text. Warm, trustworthy, real-facility photography (not stock images).

## Page Structure

### Hero/Intro Section
- Eyebrow text: "Explore Our Standard"
- Heading: "Facilities"
- Subheading: "Check out our World Class Facilities"
- Supporting line: "Take a peek inside Sultan Hanafi Royal Schools"

### Facilities Grid (12 items)

Present each as a card: image + facility name + short 1-sentence caption (captions below are suggested additions to fill the content gap — feel free to adjust tone):

1. **College Hall** — "A spacious hall for assemblies, ceremonies, and large school gatherings."
2. **Library** — "A quiet, well-stocked space for research, reading, and independent study."
3. **Biology Laboratory** — "Fully equipped for hands-on exploration of living systems and life sciences."
4. **ICT Room** — "Modern computers and digital tools building 21st-century tech skills."
5. **Chemistry Laboratory** — "A safe, well-equipped space for practical chemistry experiments."
6. **Physics Laboratory** — "Hands-on equipment for exploring the principles of physics."
7. **Home Economics Room (Clothing and Textile)** — "Practical training in sewing, textiles, and clothing design."
8. **Home Economics Room (Food and Nutrition)** — "A dedicated space for learning food preparation and nutrition."
9. **Basic Tech. Workshop** — "Hands-on tools and equipment for foundational technical and engineering skills."
10. **Sick Bay** — "A dedicated space for first aid and student health and wellbeing."
11. **CCA Room** — "A space supporting co-curricular activities and creative pursuits."
12. **Recreation Ground / Indoor Games** — "Facilities supporting sports, teamwork, and healthy physical activity."

Design note: use a consistent naming convention throughout — the original site inconsistently called these "Food and Nutrition Room" on one page and "Home Economics Room (Food and Nutrition)" on another. Use the fuller "Home Economics Room (...)" naming consistently, since it's more descriptive and was the naming used on this specific page.

### Grid Layout Requirements
- Consistent card sizing and aspect ratio across all 12 facilities (fixes the "photo dump" feel of the original)
- Each card: image with a subtle hover state, facility name as a clear heading, caption below in smaller text
- Responsive grid: adjust column count gracefully across desktop/tablet/mobile (e.g. 3 columns desktop → 2 tablet → 1 mobile)

### Optional CTA Section (bottom of page)
Since the original page has no closing CTA, add one to give the page a purpose beyond just browsing:
- Heading: "Come See Our Facilities In Person"
- Supporting line: "Schedule a visit and experience Sultan Hanafi Royal Schools firsthand."
- Button: "Book a School Tour"

## Scalability Note

Build the facility card as a single reusable component with variants — future facilities added later (e.g. if they build a new lab or sports complex) should slot into the same grid without custom layout work.

## Responsive Requirement

Test this page specifically at mobile width — with 12 image-heavy cards, ensure load performance and layout don't feel overwhelming; consider lazy-loading images below the fold.
