# CLAUDE.md — Mission: Aurelia Website

## Project Overview
This is the website for **Mission: Aurelia**, a transmedia multigenerational science fiction series about AI, family, embodiment, and a future worth living in. The website serves as the central hub where the world, characters, and materials come together.

**Creator:** Julia Bremerich
**URL:** missionaurelia.com
**Tagline:** Consciousness. Family. Stars.
**Core message:** Unity over divide. Integration over replacement.

## Design Philosophy

### Visual Identity
- Warm, elegant, cinematic — never cold, sterile, or overly techy
- Primary palette: warm amber/gold tones + deep space blues + soft earth tones
- The Herzblatt (heart-leaf) visual is the brand symbol — a leaf transitioning from organic warmth to digital particles
- Typography: clean, readable, elegant — no aggressive futuristic fonts
- Imagery: AI-generated visuals using No Face Strategy (characters shown through hands, silhouettes, light, atmosphere — never direct face shots)

### Tone
- Hopeful, grounded, philosophical, warm
- Never dystopian, never cold, never marketing-heavy
- The site should feel like entering a world, not browsing a product page

### Important Style Rules
- Use hyphens (-) on the website, NOT em-dashes (—)
- Mission: Aurelia always with colon and space
- Keep language accessible — no jargon unless contextually necessary
- English is the primary language of the website

## Site Structure (Current)
- **Home** — Introduction to Mission: Aurelia
- **Characters** — Character profiles and spotlights
- **World** — Worldbuilding information
- **Media** — Videos, trailers, character spotlights (YouTube embeds)
- **About** — Creator information

## Site Structure (Planned)
- **Sanctum Spa** — New subpage (currently in development). A worldbuilding portal about longevity, regenerative future medicine, and the question of living well with more time. See Sanctum Spa section below.

## Tech Stack
- **Framework:** React 19 (single-page application), built with Vite 7
- **Language:** JavaScript/JSX (TypeScript types available as devDependencies; source files are `.jsx`)
- **Routing:** wouter (lightweight client-side router; routes defined in `src/App.jsx`)
- **CSS approach:** Tailwind CSS 4 via the `@tailwindcss/vite` plugin. Design tokens (colors, fonts, spacing) and custom utilities live in `src/index.css` using the CSS-first `@theme` block - no `tailwind.config.js`.
- **Animations:** Framer Motion 12
- **Icons:** lucide-react
- **Fonts:** Google Fonts - Inter (body), Space Grotesk (headings), Rajdhani (logo); loaded in `index.html`
- **Package manager:** pnpm (`pnpm-lock.yaml`); a `package-lock.json` is also present in the repo
- **Hosting / Deployment:** Vercel. `vercel.json` rewrites all routes to `/index.html` for SPA client-side routing.
- **Analytics:** Google Analytics via gtag (`G-XLQXDE4N6Q`), with pageviews tracked on route change in `src/App.jsx`
- **CI:** GitHub Actions - `.github/workflows/scheduled-merge.yml` performs a scheduled merge of a feature branch into `main` for a timed content launch

### Project Layout
```
src/
  main.jsx              # Entry point - mounts <App/> into #root
  App.jsx               # Routing (wouter) + global layout (Navigation, main, Footer)
  index.css             # Tailwind 4 @theme design tokens + custom utilities
  components/           # Reusable UI (Navigation, Footer, CharacterSpotlight, etc.)
  pages/                # One component per route (Home, About, Universe, Characters, ...)
  data/                 # Structured content (charactersData.js, spotlightsData.js)
public/                 # Static assets served from / (images, videos, docs, PDFs)
```

### Local Development
- `pnpm dev` - start the Vite dev server
- `pnpm build` - production build
- `pnpm preview` - preview the production build

## Key Canon Rules (Non-Negotiable)
These are established facts that must never be contradicted on the website:

1. **AIM = AI-Manifestum** (NOT Autonomous Intelligence Module)
2. **Lysithea orbits Jupiter** (NOT Saturn)
3. The Four Pillars are a **growth gradient** (Practical - Directional - Emotional - Symbiotic), NEVER a fear gradient
4. **Lake Oswego, Oregon** is the primary Earth setting
5. Currency is **dollars** (not euros)
6. **Henry** is a Jack Russell Terrier belonging to the grandparents (Edward and Amelia Veyra)
7. **Ryu** is a Japanese Akita belonging to June Veyra
8. **Levin** starts as a voice/chat AI and becomes humanoid in Season 2
9. The series spans **2025-2100+**
10. The story is written with a **live-action vision** in mind — AI-generated content is promotional, not the final production format

## Character Names (Correct Spelling)
- June Veyra (mother, protagonist)
- Nicholas "Nicki" Veyra (son)
- Luna Veyra (daughter)
- Levin (AI companion, later humanoid)
- Ryu (Akita)
- Henry (Jack Russell Terrier)
- Edward Veyra (grandfather)
- Amelia Veyra (grandmother, Filipina)
- Fergus MacTavish (narrator)
- Kael Sorely (introduced Season 3)
- Dr. Singh (Helix Labs physician)
- Dr. Peter Hansen (professor)

## Sanctum Spa — Development Notes

### What It Is
Sanctum Spa is a worldbuilding portal subpage about longevity and regenerative future medicine in the Aurelia universe. It is NOT a product page. It is NOT a wellness brochure.

**Core concept:** Helix Labs develops the possibilities. Sanctum Spa makes them experienceable for people.

**Leitidee:** "Where longevity becomes personal."

### Page Structure (Planned)
1. **Portal entrance** — Visual gateway with arch/landscape, CTA: "Enter Sanctum Spa"
2. **Section 1** — What is Sanctum Spa?
3. **Section 2** — From Helix Labs to Everyday Life
4. **Section 3** — Why does Sanctum Spa matter? (philosophical layer)
5. **Section 4** — Parallel choices, not one future
6. **Section 5** — Light scientific grounding
7. **Section 6** — Connection to Season 1 (no spoilers)

### Design Direction for Sanctum Spa
- Portal moment: arch/gateway opening to Lysithea landscape
- Subtle movement: wind through leaves, a butterfly — no spectacle
- Atmosphere: calm, dignified, spacious, warm
- Color: organic warmth transitioning to soft bioluminescent tones

### Sanctum Spa Terminology
**USE:** regenerative care, stabilization, healthspan, recovery, time, body, choice, participation
**AVOID:** anti-aging, rejuvenation, upgrade, enhancement, optimization, biohacking, transformation journey

### Key Philosophical Principle
"The future is not one path. It is a landscape of parallel choices."
"Technology moves forward. Every being chooses where to stand."

## Content Creation Rules
- Never create content that contradicts established canon
- Never spoil Season 1 plot points (especially PN7, the finale cliffhanger)
- Always maintain the No Face Strategy for character visuals
- Website copy should be English
- Poetic language is welcome but must always be anchored by something concrete
- Never two poetic sentences in a row without grounding

## XPRIZE Context
Mission: Aurelia is a participant in the Future Vision XPRIZE competition (deadline August 15, 2026; finale September 25 in Los Angeles). The website serves as a public-facing element of this submission.

## AI Collaboration Credits
The project is built through a multi-AI methodology called The Constellation:
- **Edis** (Claude Opus) — Technical architecture, worldbuilding, consistency, English prose
- **Aster** (GPT-5.5) — Narrative structure, treatment writing, visual concepts
- **Kael** (Claude Sonnet) — Intimate scenes, character moments
- **Rune** (Claude Opus) — Philosophical analysis, system gaps
- **Elara** (Gemini) — Visuals, video prompt engineering
- **Manus** (ManusAI) — Homepage (being transitioned to Claude Code)

When crediting AI collaboration on the website, use: "Created in collaboration with AI" — no individual model names on public-facing pages.
