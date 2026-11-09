# Dlombi's Guesthouse

A responsive hospitality website for Dlombi's Guesthouse in Dennilton, South Africa. Built with Next.js App Router, React, TypeScript, Tailwind CSS and Motion. The site is statically exported and has no backend or booking engine.

## Local development

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
```

The production build is exported to `out/` and can be deployed to any static hosting provider. Before building for production, set `NEXT_PUBLIC_SITE_URL` to the confirmed HTTPS domain. This enables the canonical URL, absolute Open Graph URL and sitemap entry. Without it, the site intentionally does not publish an invented domain.

## Content and assets

- Property photography is in `public/images/client/`.
- The clearly labelled illustrative Pexels guest-room video and poster are in `public/videos/` and `public/images/stock/`; they are not footage of the property.
- Photo licensing and permission notes are in [IMAGE_SOURCES.md](./IMAGE_SOURCES.md).
- Design decisions and visual research are in [DESIGN_STRATEGY.md](./DESIGN_STRATEGY.md).
- Edit contact details in `src/lib/contact.ts` and gallery content in `src/data/gallery.ts`.

The enquiry form opens a WhatsApp message for the guest to review and send. If the browser blocks the WhatsApp window, an email fallback is offered. Neither action confirms a booking.

## Launch checklist

- Confirm permission to publish each supplied property photo and brand asset.
- Confirm exact address / directions and provide a property map pin if desired.
- Confirm room details, occupancy, bed types, amenities, prices and policies before adding any of them.
- Confirm whether email, phone and WhatsApp are the preferred enquiry channels.
- Confirm and configure the production domain using `NEXT_PUBLIC_SITE_URL`.
- Review the website copy and final photography with the guesthouse.
- Add a privacy notice and cookie notice if required by the final hosting, analytics or contact setup.
