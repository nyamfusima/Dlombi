# Dlombi's Guesthouse — design strategy

## Research notes

Reference sites reviewed on 9 November 2026:

- [One&Only Cape Town](https://www.oneandonlyresorts.com/cape-town) uses immersive resort imagery and concise, editorial experience groupings. The useful lesson here is to let photography set the mood before asking visitors to act; resort-scale facilities and claims are not carried over.
- [Casa Angelina](https://www.casangelina.com/) opens with a deliberate, minimal visual sequence and pairs large images with short statements. Its restraint and generous whitespace inform this design; its luxury positioning and property details do not.
- [Amalinda Collection](https://amalindacollection.com/) places landscape and a clear sense of place at the centre of its storytelling. The site connects setting, identity and imagery rather than treating photographs as decoration.
- [Hôtel Particulier Montmartre](https://www.hotelparticulier.com/) uses short editorial blocks and a quiet, private-house tone. This supports an intimate, welcoming voice rather than generic hotel sales language.
- [Babylonstoren](https://babylonstoren.com/) connects the guest stay to its farm setting and natural materials. Its place-led approach is relevant; its amenities and story are not implied for Dlombi's.

The supplied photographs are the only evidence of the property. They show a guest room, bathroom, covered patio/courtyard and landscaped garden. No room count, prices, street address, availability, ratings, policies or additional amenities are published.

## Visual direction

**African boutique hospitality × contemporary editorial design.** Warm, quiet and welcoming, with the supplied grey-and-brown identity translated into an ivory, charcoal, olive and natural-brown palette. Use authentic guesthouse photographs for property descriptions. One Pexels landscape is used only as explicitly labelled regional context and is never represented as a view of the property.

## Palette and type

| Token | Value | Use |
|---|---|---|
| Paper | `#F6F4EF` | Main canvas |
| Stone | `#EBE8DF` | Alternate sections |
| Ink | `#292A26` | Primary text |
| Muted | `#77746E` | Supporting text |
| Olive | `#71785E` | Calls to action and emphasis |
| Natural brown | `#927659` | Heritage accent |

- **DM Serif Display** for distinctive, restrained editorial headlines.
- **DM Sans** for readable navigation, body text and form controls.
- Headline sizes are responsive and paired with short copy, generous line-height and controlled letter spacing.

## Homepage structure

1. Minimal fixed header and mobile menu.
2. Image-led hero using a supplied courtyard photograph.
3. Guesthouse introduction and garden photograph.
4. Accommodation image pair without invented room categories.
5. Place-led context with stock-image disclosure.
6. Lightbox gallery, with property and context images labelled.
7. Dennilton location and a Google Maps town search (not a fabricated property pin).
8. Enquiry form that opens a prefilled WhatsApp message; email is the fallback.
9. Contact-focused footer.

## Component and motion strategy

Sections and shared interactions are separated into React components. Property gallery content is centralised in `src/data/gallery.ts`; contact details are centralised in `src/lib/contact.ts`.

Three motion moments are used: a restrained hero image drift and staged headline entrance; small, one-time section reveals; and a soft gallery lightbox transition. Navigation and buttons use short CSS transitions. `prefers-reduced-motion` disables non-essential movement. Gallery controls support keyboard arrows/Escape and touch swipes.

## Mobile UX

Navigation becomes a full-screen menu with large, labelled links and an always-obvious enquiry action. Sections reflow into a single column; the gallery retains varied image proportions. The enquiry form uses native date, email, telephone and numeric controls, with large touch targets and visible labels. Layouts are authored at mobile widths first and expanded for larger screens.

## Launch-dependent information

The production domain is not yet known. Set `NEXT_PUBLIC_SITE_URL` at build time to enable the canonical URL, absolute Open Graph URL and sitemap entry. Google Fonts are loaded from Google Fonts; a self-hosted font option can be introduced if third-party font requests are not desired.
