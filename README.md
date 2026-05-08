# nabeelscode.com

Personal portfolio and brand site for **Nabeel Imran** — AI Engineer / Nabeel's Code.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** with CSS custom properties for theming
- **Framer Motion** for animations
- **Lucide React** + `react-icons` for iconography
- **next/font** loading Inter, Plus Jakarta Sans, JetBrains Mono
- **Resend** for the contact-form server action
- **Gemini API** (`gemini-2.5-flash`) backing the in-page Billy chatbot

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in keys
npm run dev
```

Open <http://localhost:3000>.

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Contact-form email |
| `GEMINI_API_KEY` | Billy chatbot |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for `metadataBase`) |
| `NEXT_PUBLIC_CAL_LINK` | Optional booking link |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (digits only, e.g. `923239960094`) |

## Theming

Dark-by-default with a built-in light mode toggle. The theme is persisted in
`localStorage` under `nabeelscode-theme` and applied synchronously before
paint via an inline bootstrap script in `app/layout.tsx` to prevent flashes.

Tokens live as CSS custom properties scoped to `:root[data-theme='dark']` and
`:root[data-theme='light']` in `app/globals.css`. Adding a new color or
adjusting either palette is a single-file change.

## Project Structure

```
app/
  layout.tsx          Root layout, metadata, ThemeProvider, JSON-LD
  page.tsx            Home (assembles all sections)
  api/chat/route.ts   Billy chatbot (edge runtime, Gemini)
  projects/           Projects archive + dynamic case studies
  contact/, blog/     Standalone routes
components/
  layout/             Navigation (with theme toggle), Footer
  sections/           Hero, BillyIntro, About, WhyMe, Services,
                      Projects, Process, Experience, Skills,
                      Content, Testimonials, FAQ, Contact
  ui/                 ThemeProvider, ThemeToggle, BillyChat,
                      FloatingActions, GlassCard, Button, Badge,
                      AnimatedCounter, SectionWrapper, TerminalCard,
                      StackMarquee
  three/              ParticleBackground (lightweight canvas)
lib/
  projects.ts         Project data
  stack.tsx           Tech stack with brand icons
  contact.ts          Resend server action
public/
  cv/Nabeel_Imran_CV.pdf
  images/nabeel.jpg
  projects/           Project screenshots
```

## Build

```bash
npm run build
npm run start
```

Optimized for Vercel — push to GitHub and import the repo at vercel.com.

## CV

The downloadable CV is served from `public/cv/Nabeel_Imran_CV.pdf` via the
"Download CV" button in the Hero. Replace that file to update.
