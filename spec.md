# Bright Smile Dental Care

## Current State
New project. Empty Motoko backend and React frontend scaffolded.

## Requested Changes (Diff)

### Add
- Hero section with title, subtitle, WhatsApp CTA button
- About Doctor section for Dr. Sweta Sinha (BDS)
- Services section: Teeth Cleaning, Whitening, RCT, Extraction, Filling, Braces Consultation
- Why Choose Us: 4 trust points
- Gallery section with dental/smile images
- Appointment booking form (Name, Phone, Service, Date, Message) stored in backend
- Contact section with WhatsApp button, Google Map embed (coords 24.7847607, 85.0040398), full address
- Clinic Timings section (Mon-Sat morning/evening, Sunday hours)
- Floating WhatsApp button
- SEO meta tags

### Modify
- None

### Remove
- None

## Implementation Plan
1. Generate Motoko backend to store appointment bookings (name, phone, service, date, message, timestamp)
2. Build full React frontend with all 8 sections
3. Wire appointment form to backend canister
4. Add floating WhatsApp button
5. Embed Google Map via iframe using coordinates
6. Add SEO meta tags in index.html
