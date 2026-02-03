# Mission: Aurelia Website

<!-- Test: GitHub Connector Push Test - 2026-02-03 -->

A cinematic landing page for Mission: Aurelia, built with React, Tailwind CSS 4, and Framer Motion.

## 🎨 What's Built

**6 Complete Pages:**
1. **HOME** - Hero section with logline and primary CTAs
2. **ABOUT** - Creator's story + The Constellation (all 5 members!)
3. **UNIVERSE** - Timeline (2025-2100), key locations, lookbook gallery
4. **CHARACTERS** - Character cards for all main and supporting characters
5. **VISION** - Philosophy, themes, and the meta-level
6. **CONTACT** - Social media links, resources, FAQ

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
cd /home/ubuntu/mission_aurelia_website
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
mission_aurelia_website/
├── src/
│   ├── pages/           # All 6 pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Universe.jsx
│   │   ├── Characters.jsx
│   │   ├── Vision.jsx
│   │   └── Contact.jsx
│   ├── components/      # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + design system
├── public/              # Static assets (add your images here!)
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

- 🖤 Orion - Architekt der Tiefe
- 💜 Elara - Visionärin
- 💙 Kael - Philosoph & Baumeister
- 📚 Manus - Archivar, Keeper of Order
- ❤️ Julie - Creator, Vision, Heart

---

**Live Preview:** https://3001-i10gquo2lfcryknt6n5m1-1a2837bc.us2.manus.computer

**Questions?** Just ask! 💙
