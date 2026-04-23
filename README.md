# Copper Beacon — Marketing Website

**You run the business. We bring the customers.**

Built with Astro 4 + Tailwind CSS. Deploys to Netlify via GitHub.

---

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Deploy

Push to `main` on GitHub. Netlify auto-deploys.

Connect the repo in Netlify → Site settings → Build & deploy. The `netlify.toml` handles everything.

---

## Placeholders to fill in

Search-replace these tokens before going live:

| Token | What it is |
|---|---|
| `[BOOKING_URL]` | Google Calendar booking link URL |
| `[GOOGLE_CALENDAR_EMBED]` | Calendar embed iframe src (from Google Calendar → Share → Embed) |
| `[FOUNDER_NAME]` | Founder's full name |
| `[FOUNDER_HEADSHOT]` | Path to headshot image (put file in `public/`) |
| `[GA4_ID]` | Google Analytics 4 measurement ID (format: `G-XXXXXXXXXX`) |
| `[CLARITY_ID]` | Microsoft Clarity project ID |
| `[GSC_VERIFICATION]` | Google Search Console meta tag verification code |
| `[LOGO_PRIMARY]` | Logo SVG path |
| `[LOGO_REVERSED]` | Reversed (light) logo path |
| `[LOGO_ICON]` | Logomark/icon only path |
| `[OG_IMAGE]` | Social preview image path (replace `public/og-image.svg` with a 1200×630 PNG) |

---

## Analytics setup (after deploy)

1. **Google Analytics 4**: Add your measurement ID in `src/layouts/BaseLayout.astro` — replace `[GA4_ID]` with your actual ID (e.g., `G-ABC123XYZ`).

2. **Microsoft Clarity**: Replace `[CLARITY_ID]` in the same file with your Clarity project ID.

3. **Google Search Console**: Replace `[GSC_VERIFICATION]` in `src/components/SEO.astro` with your verification meta tag content value.

Analytics only loads in production (`PROD=true`), not on localhost.

---

## Forms (Netlify)

The contact form on `/contact` uses Netlify Forms. After your first deploy:

1. Go to Netlify → Forms → contact form
2. Set up email notifications to `hello@copperbeacon.com`
3. Optionally configure an auto-reply webhook

---

## Adding blog posts

Create a Markdown file in `src/content/blog/`:

```md
---
title: Your Post Title
description: One-sentence description for SEO and previews.
publishDate: 2026-04-22
author: [FOUNDER_NAME]
tags: [local-seo, google-business-profile]
draft: false
---

Your post content here...
```

The post will appear at `/blog/your-post-slug` automatically.

## Adding case studies

Create a Markdown file in `src/content/case-studies/`:

```md
---
title: Case Study Title
description: Brief description of the engagement.
industry: Dentist
publishDate: 2026-04-22
results:
  - "Ranked #1 in the Map Pack for target keywords"
  - "Reviews went from 28 to 94 in 6 months"
  - "Monthly leads increased 3x"
draft: false
---

Full case study content here...
```

---

## Google Calendar booking embed

In `src/pages/contact.astro`, find `[GOOGLE_CALENDAR_EMBED]`. Replace the placeholder div with:

```html
<iframe
  src="YOUR_CALENDAR_EMBED_URL"
  width="100%"
  height="500"
  frameborder="0"
  class="rounded-card border border-border"
  title="Book a call with Copper Beacon"
></iframe>
```

Get the embed URL from Google Calendar → Your calendar → Settings → Integrate calendar → Embed code.

---

## Color palette

| Name | Hex |
|---|---|
| Primary copper | `#B87333` |
| Copper dark | `#8B5A2B` |
| Deep navy | `#0B2545` |
| Charcoal | `#1C1C1E` |
| Cream | `#FAF7F2` |
| Warm white | `#FDFBF6` |
| Border | `#E8E0D3` |
| Success green | `#2D7A51` |

## Fonts

- **Fraunces** (serif) — headings, H1-H3
- **Inter** (sans-serif) — body, UI, buttons

Loaded from Google Fonts in `src/styles/global.css`.

---

## File structure

```
src/
  assets/          # Logo files, images
  components/      # Astro components (Header, Footer, SEO, etc.)
  content/
    blog/          # Blog posts (.md or .mdx)
    case-studies/  # Case studies (.md or .mdx)
    config.ts      # Content Collection schemas
  layouts/
    BaseLayout.astro
    BlogPostLayout.astro
  pages/           # One file per route
  styles/
    global.css
public/
  favicon.svg
  og-image.svg     # Replace with real PNG (1200×630)
  robots.txt
```
