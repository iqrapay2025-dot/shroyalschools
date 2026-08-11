# Sultan Hanafi Royal Schools — Contact Page Figma Make Prompt

## Overview

Design the **Contact** page for Sultan Hanafi Royal Schools — a clean, welcoming page combining school contact details, a contact form, and a location map.

## Brand Feel

Match the homepage and Facilities page: black/charcoal + gold/amber accent, white/light-grey backgrounds, confident modern sans-serif headings.

## Page Structure

### Hero/Intro Section
- Heading: "We'd Love To Hear From You"
- Subheading: "Contact Us"

### Contact Details Block (3 items, icon + label + value each)

**Address**
15, Imowonla Road, AP Bus Stop, Off Gberigbe Agura Road, Ikorodu, Lagos

**Get In Touch (Email)**
- info@shroyalschools.ng
- principal@shrschools.ng

**Get In Touch (Phone)**
- 08070586860
- 08038078664

⚠️ **Content flag — verify before launch:** `principal@shrschools.ng` uses a different domain than the main site (`shroyalschools.ng` vs `shrschools.ng`, missing "oyal"). Confirm with the school/registrar whether this is intentional or a long-standing typo before publishing it on the new site — do not simply carry it over without checking.

### Contact Form
- Heading: "Take The First Step"
- Fields: First Name, Phone Number, Email, Message
- Submit button: "Let's Talk"
- Design note: include clear field validation states (empty/required field, invalid email format) and a visible success confirmation after submission

### Social Icons Row
Facebook, Twitter, YouTube, Instagram, LinkedIn — displayed near the form as a secondary way to connect

### Embedded Map
Google Maps embed pinned to: "15, Imowonla Road, AP Bus Stop, Off Gberigbe Agura Road, Ikorodu, Lagos, Nigeria" — place below or alongside the contact form/details, sized generously enough to be genuinely useful for someone planning a visit

### Footer
Same site-wide footer as other pages: About blurb, Quick Links (Home, Career, Policies, Foundation), Academics links, repeated Contact info, social icons, copyright line.

## Layout Suggestion

Two-column layout on desktop: contact details + form on one side, map on the other (or map as a full-width section below both) — avoid stacking everything in one long single column on desktop, since that wastes horizontal space for a page whose whole purpose is quick information lookup.

## Responsive Requirement

On mobile, stack in this order: contact details → form → map, ensuring the map remains a reasonable, tappable size (not cramped) and the form fields are full-width and easy to tap.

## Scalability Note

Build the contact detail block (icon + label + value) as a reusable component, since it's a simple repeatable pattern that may need additional entries later (e.g. a WhatsApp-specific contact line, or additional department emails).
