# FORMA — agency frontend

A React + TypeScript frontend with a Scalio-reference layout: photographic hero, ivory/black/green palette, visual examples and a service mosaic. Vite handles local development. No backend, database, authentication, or API keys are required.

September 23 update: `src/data/offerings.ts` holds the services confirmed from the owner's two service sheets. `GettingStarted.tsx` shows the two-path client flow (request a callback or choose a service). `GrowthServices.tsx` groups the services into three uncluttered areas. The service directory links each selection to a prefilled enquiry form. `styles/journey.css` contains the navigation, flowchart and simplified-service refinements. Individual service detail routes deliberately show only their title and a preparation notice. Callback forms are local previews and never place calls or send requests.

## Run locally

Requires Node.js 22.12+ (Node 24 recommended).

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal, normally `http://127.0.0.1:5173`.

```sh
npm run build    # Type-check and create the production build
npm run preview  # Serve that build locally
```

## Where things live

```text
src/
  App.tsx                     Routes
  main.tsx                    React entry point
  data/site.ts                Brand details, service copy, projects, media & video URLs
  components/
    Layout.tsx                Navigation, mobile menu, footer
    UI.tsx                    Shared buttons, headings, FAQs, contact banner
    ServiceVisual.tsx         Website, search, calendar, ad, Reel & follow-up previews
    ServiceGrid.tsx           Homepage service mosaic
    ExampleGallery.tsx        Scrollable concept gallery
    DemoDialog.tsx            Accessible interactive walkthrough modal
    EnquiryForm.tsx           Frontend-only contact and audit forms
  pages/
    HomePage.tsx
    ServicesPage.tsx
    ServicePage.tsx           Intentional placeholders driven by offerings.ts
    WorkPage.tsx              Work index & project detail
    ContactPage.tsx           Contact & audit
    SupportingPages.tsx      Process, packages, about, legal, insights, 404
  styles/
    global.css                Design tokens, typography, shared controls
    components.css            Reusable component styling
    pages.css                 Page layouts
    responsive.css            Tablet, mobile and wide-screen adjustments
public/
  images/                     Local temporary photographs / generated concept assets
  favicon.svg
```

## Replace content and videos

- Edit `src/data/offerings.ts` for the confirmed service names and homepage descriptions. Edit `src/data/site.ts` for contact details, FAQs, media and older work-gallery concepts.
- Set `site.email`, `site.whatsapp` (digits with country code), and `site.bookingUrl` to activate the real contact options. Empty values deliberately show placeholders.
- Replace photos in `public/images` or update the `media` paths. All current imagery represents fictional concepts, not completed client work.
- Put final clips in `public/videos/` when ready. The rebuilt homepage intentionally uses static photos; replace the relevant images in `HomePage.tsx` and `GrowthServices.tsx` with video elements at that stage. The older work-gallery demo still supports the `videos` object in `site.ts`.
- Pricing, business identity, founder biography, legal details and final videos are clearly marked as pending.

## Frontend behavior

Service navigation and homepage visual cards open the deliberately minimal service routes. The menu supports keyboard use and Escape. The older work-gallery demos remain available on the work page. Forms use browser validation and show an explicitly labelled demo confirmation. They **do not send or persist data**. The hero photo selector and FAQs work locally.

The layout supports mobile, tablet and desktop, and respects reduced-motion preferences. Google Fonts is the only external asset request; the site falls back to local sans-serif fonts if unavailable.

## Deployment later

`npm run build` outputs `dist/`. Since this uses browser routes, configure your static host to serve `index.html` for unknown paths (SPA fallback). This pass has only been prepared for local preview; it does not change the previously published site.

## Design references

Visual hierarchy and feature-page research: https://scalio.app/ and its seven top-level feature pages. Branding, copy, code and generated imagery are original to this frontend. No competitor client claims, ratings or results are reused.
