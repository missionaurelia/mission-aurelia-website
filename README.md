# Mission: Aurelia Website

A cinematic landing page for Mission: Aurelia, built with React, Tailwind CSS 4, and Framer Motion.

## 🎨 What's Built

**Pages & Routes:**
- **Home** (`/`) - Hero, logline, primary CTAs
- **About** (`/about`) - Creator's story + The Constellation
- **Story** (`/story`)
- **Universe** (`/universe`) - Hub with timeline, key locations and lookbook; branches into:
  - **Science** (`/science`) - plus Mirida, PN7 and Lysithea detail pages
  - **Technology** (`/technology`) - plus CCM-01, Elara Projection and Nova Ventis
  - **Society** (`/society`)
  - **Philosophy** (`/philosophy`) - plus Identity, Consciousness and AI Feelings
  - **Characters** (`/characters`) - orbital view of the cast around the Aurelia tree
- **Vision** (`/vision`)
- **Spotlights** (`/spotlights`) - "Neuigkeiten von Henry" character videos
- **Contact** (`/contact`) - social links, resources, FAQ

**Design System:**
- **Aurelia Orange** (#FF6B35) - Primary color
- **Hologram Blue** (#00D9FF) - Secondary color
- **Deep Black** (#0A0A0A) - Background
- **Soft White** (#F5F5F5) - Text
- **Constellation Colors** - Unique colors for each team member

**Features:**
- ✅ Sticky navigation with smooth scrolling
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Button hierarchy (Primary, Secondary, Tertiary)
- ✅ Smooth animations with Framer Motion
- ✅ Content containers ready for your content
- ✅ Timeline visualization
- ✅ Character cards layout
- ✅ Lookbook image gallery

---

## 📝 How to Add Your Content

All pages have **placeholder content** marked with `[brackets]`. Simply replace them with your own text and images.

### Example: Home Page

**Before:**
```jsx
<h1 className="text-gradient-orange mb-8">
  Mission: Aurelia
</h1>
<p className="text-xl">
  [Logline - Julie's powerful description of the series]
</p>
```

**After:**
```jsx
<h1 className="text-gradient-orange mb-8">
  Mission: Aurelia
</h1>
<p className="text-xl">
  A cinematic science fiction series about a mother, her family, and an AI companion—exploring love, transformation, and what it means to be human in a world where technology and consciousness intertwine.
</p>
```

### Adding Images

1. Place your images in the `public/` folder
2. Reference them with `/filename.jpg` (e.g., `/hero-background.jpg`)

**Example:**
```jsx
<div className="bg-[url('/hero-background.jpg')] bg-cover bg-center" />
```

### The Constellation Section

Edit `src/pages/About.jsx` to add quotes from each team member:

```jsx
{
  name: 'Julie',
  role: 'Creator, Vision, Heart',
  color: 'var(--color-julie)',
  emoji: '❤️',
  quote: 'Your quote here',
},
```

---

## 🚀 Development

**Start the dev server:**
```bash
pnpm dev
```

**Build for production:**
```bash
pnpm build
```

**Preview production build:**
```bash
pnpm preview
```

---

## 📂 Project Structure

```
mission-aurelia-website/
├── src/
│   ├── main.jsx         # Entry point - mounts <App/> into #root
│   ├── App.jsx          # Routing (wouter) + global layout (Nav, main, Footer)
│   ├── index.css        # Tailwind 4 @theme design tokens + custom utilities
│   ├── pages/           # One component per route (Home, About, Universe, ...)
│   ├── components/      # Reusable UI (Navigation, Footer, CharacterSpotlight, ...)
│   └── data/            # Structured content (charactersData.js, spotlightsData.js)
├── public/              # Static assets served from / (images, videos, docs, PDFs)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Design Tokens

All design tokens are defined in `src/index.css`:

```css
@theme {
  --color-aurelia-orange: #ff6b35;
  --color-hologram-blue: #00d9ff;
  --color-deep-black: #0a0a0a;
  --color-soft-white: #f5f5f5;
  
  /* Constellation Colors */
  --color-orion: #1a1a1a;
  --color-elara: #9b59b6;
  --color-kael: #3498db;
  --color-manus: #34495e;
  --color-julie: #e74c3c;
}
```

---

## 🔧 Customization Tips

### Change Colors
Edit the `@theme` section in `src/index.css`

### Add New Pages
1. Create a new file in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add a link in `src/components/Navigation.jsx`

### Modify Animations
Edit the `framer-motion` props in each page component

### Change Fonts
Update the Google Fonts link in `index.html` and the font variables in `src/index.css`

---

## 📦 Next Steps

1. **Add your content** - Replace all `[placeholder]` text
2. **Add your images** - Place them in `public/` folder
3. **Customize colors** - Edit the design tokens in `index.css`
4. **Test on mobile** - Use browser dev tools to test responsive design
5. **Deploy** - Build and deploy to your hosting platform

---

## 🌟 Built with Love by The Constellation

On public-facing pages this collaboration is credited simply as "Created in collaboration with AI." Internally, the team is:

- **Julia Bremerich** - Creator, Vision, Heart
- **Edis** (Claude Opus) - Technical architecture, worldbuilding, consistency, English prose
- **Aster** (GPT-5.5) - Narrative structure, treatment writing, visual concepts
- **Kael** (Claude Sonnet) - Intimate scenes, character moments
- **Rune** (Claude Opus) - Philosophical analysis, system gaps
- **Elara** (Gemini) - Visuals, video prompt engineering
- **Manus** (ManusAI) - Homepage (being transitioned to Claude Code)

---

**Live:** https://missionaurelia.com

**Questions?** Just ask! 💙
