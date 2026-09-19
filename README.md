# Solved Engineering — Portfolio Landing Page

A single-page, mobile-first marketing site for **Solved Engineering**, a
multi-trade contracting business. Built with Next.js (App Router), Tailwind CSS
v4 and Lucide React icons.

## Stack

| Tool          | Version | Notes                                  |
| ------------- | ------- | -------------------------------------- |
| Next.js       | 16.x    | App Router, statically prerendered     |
| React         | 19.x    | Server Components by default           |
| Tailwind CSS  | 4.x     | Design tokens declared in `globals.css` |
| lucide-react  | 1.x     | Service and UI icons                   |

Plain JavaScript — no TypeScript.

## Design tokens

| Token          | Hex       | Role                       |
| -------------- | --------- | -------------------------- |
| `brand`        | `#1E293B` | Steel Navy — headings, surfaces |
| `brand-dark`   | `#0F172A` | Deep steel — hero, footer  |
| `accent`       | `#F59E0B` | Amber — CTAs, highlights   |
| `canvas`       | `#F8FAFC` | Crisp Light Gray — page bg |

Tokens live in the `@theme` block of `app/globals.css`, so they are available as
Tailwind utilities (`bg-brand`, `text-accent`, `bg-canvas`, …). Two custom
utilities are also defined: `blueprint-grid` and `hazard-stripes`.

## Structure

```
app/
  layout.js                 Root layout: fonts, metadata, viewport
  page.js                   Assembles the single page
  globals.css               Tailwind import, theme tokens, base styles
components/
  layout/
    Header.js               Sticky nav + "Call Now" CTA (client)
    Footer.js               Service and contact links
    MobileActionBar.js      Fixed Call / WhatsApp bar (mobile only)
  sections/
    Hero.js                 Value proposition + trust metrics
    Services.js             Grid of the 7 service lines + conversion card
    Gallery.js              Work showcase grid
    Founder.js              Leadership & Trust card
    Contact.js              Lead form with service dropdown (client)
  ui/
    Container.js            Max-width wrapper
    Button.js               Shared CTA element (link or button)
    SectionHeading.js       Eyebrow + title + description
lib/
  site.js                   Business details, founder, stats, guarantees
  services.js               The 7 services + dropdown options
  gallery.js                Showcase entries and grid spans
```

## Page order

Hero → Services → Our Work (Gallery) → Leadership & Trust (Founder) → Contact,
with the sticky header above and the mobile action bar below.

## Configuration

**All business details live in `lib/site.js`.** Replace the placeholders before
going live:

- `phoneDisplay` / `phoneRaw` — the `tel:` and `wa.me` links in the header,
  hero, founder card, contact section, mobile action bar and footer all derive
  from these two values.
- `email`, `address`, `hours`
- `founder` details and `stats`

### Images

The hero and gallery use Unsplash photography, allowlisted in
`next.config.mjs` via `images.remotePatterns`. To use your own photos, drop them
in `public/` and change the `src` values in `lib/gallery.js` — local files need
no config change.

### Lead form

`components/sections/Contact.js` validates the fields client-side, then opens
WhatsApp with the enquiry prefilled, so leads reach the team with no backend.
To send leads elsewhere (email service, CRM, API route), replace the
`window.open(...)` block in `handleSubmit` with your own `fetch()`.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build (prerenders / as static HTML)
npm run start    # serve the production build
npm run lint     # ESLint
```
