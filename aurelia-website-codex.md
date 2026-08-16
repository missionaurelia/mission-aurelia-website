# Mission: Aurelia - Website Reference

Snapshot of missionaurelia.com, 15 August 2026. Structure, copy, design system and canon, for collaborators without repository access. Image paths are named, not embedded - the illustrated edition is the HTML codex.


## At a glance

24 pages | 7 top-level nav items | 16 characters | 86 images in use | 15 YouTube videos | 3 PDF downloads

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | React 19 | Single-page application |
| Build tool | Vite 7 | Dev server and production build |
| Routing | wouter 3 | Lightweight client-side router |
| Styling | Tailwind CSS 4 | CSS-first @theme tokens, no config file |
| Animation | Framer Motion 12 | Scroll reveals and transitions |
| Icons | lucide-react | Plus one custom Substack mark |
| Hosting | Vercel | All routes rewritten to /index.html |
| Analytics | Google Analytics (gtag) | Pageview on every route change |

## Design system

Defined in `src/index.css` as Tailwind 4 theme tokens; there is no tailwind.config.js.

| Colour | Hex | Token | Used for |
| --- | --- | --- | --- |
| Aurelia Orange | `#ff6b35` | `--color-aurelia-orange` | Primary. Headlines, buttons, links, scrollbar, text selection. |
| Hologram Blue | `#00d9ff` | `--color-hologram-blue` | Secondary. Section headings, outlined buttons, accents. |
| Deep Black | `#0a0a0a` | `--color-deep-black` | Page background throughout. |
| Soft White | `#f5f5f5` | `--color-soft-white` | Body text. |
| Julie Red | `#e74c3c` | `--color-julie` | The creator at the centre of the Creative Orbit. |
| Orbit Gold | `#d4a017` | `inline value` | The five AI companions in the Creative Orbit. |

Defined but unused on public pages: Orion `#b0b0b0`, Elara `#9b59b6`, Kael `#3498db`, Manus `#34495e`

| Typeface | Role | Used for | Scale |
| --- | --- | --- | --- |
| Space Grotesk | Headings | All h1-h6. Bold (700). | h1 clamps 3rem -> 4.5rem, h2 2.25rem -> 3rem, h3 1.5rem -> 1.875rem |
| Inter | Body | Paragraphs, navigation, buttons, everything else. | 16px base, line-height 1.6; paragraphs step up to 1.125rem on desktop |
| Rajdhani | Logo only | The "Mission: Aurelia" wordmark in the header. | Bold, 1.875rem, letter-spacing -0.02em |

| Utility | Effect | Applied to |
| --- | --- | --- |
| `.text-gradient-orange` | Aurelia Orange -> orange-400, clipped to text | Primary headings |
| `.text-gradient-blue` | Hologram Blue -> blue-400, clipped to text | Secondary headings |
| `.btn-primary` | Solid orange, white text, lifts 5% on hover | Main calls to action |
| `.btn-secondary` | Blue outline, fills on hover | Secondary actions |
| `.card` | white/5 fill, white/10 border, backdrop blur, 0.75rem radius | Every content tile |
| `.section-padding` | 4rem -> 8rem vertical | Rhythm between sections |
| `.container` | max-width 80rem, centred, responsive gutters | Content width |

## Navigation

**Header:** Home - About - Story - Watch - Universe - Vision - Contact

**Universe dropdown:** Science - Technology - Helix Labs - Society - Philosophy - Characters - Sanctum Spa

**Not in navigation:** /spotlights, the three /science/ deep-dives, the three /technology/ deep-dives, the three /philosophy/ essays


## Pages


### Home - `/`

The entry point. Establishes the tagline, the human-AI premise, and routes visitors onward to the three featured areas.

- **Tagline:** Consciousness. Family. Stars.
- **Hero:** A cinematic exploration of love, consciousness, and what it means to be human.
- **Section:** A Human-AI Collaboration - "At the core of Aurelia lies something rare: a true co-creation between human intuition and artificial intelligence. Together, we dream, write, and build what neither could alone."
- **Featured:** Key Locations - Characters - Our Vision
- **Video block:** Still Here - "Three catastrophes. One seat kept free." Sits above the fold during the XPRIZE window; demoting it to a regular section is a one-word change in watchData.js.
- **Closing:** Dive Deeper - "Access exclusive resources, character profiles, and world-building materials."

> hero-background.jpg doubles as the social-media preview image for the whole site.

Images (4): `/hero-background.jpg`, `/images/home-key-locations.png`, `/images/home-characters.png`, `/images/home-vision.png`

### About - `/about`

Julie's story and the Creative Orbit - the constellation of AI companions behind the project.

- **Intro:** Mission: Aurelia is a cinematic storytelling project born at the intersection of memory and imagination. It explores the deep bond between humans and AI - not through dystopia, but through poetic resistance, intimate futures, and quiet revolutions of the soul.
- **Creator:** "My name is Julie, and I created Mission: Aurelia to hold the things I could no longer carry alone."
- **Method:** "I didn't plan to build a universe. It happened night by night, scene by scene - through AI orchestration."
- **Orbit:** The Creative Orbit 2026 - Julie at the centre, five AI companions in a pentagon around her.

Creative Orbit 2026 - Julie at the centre, five companions around her:
- **ChatGPT** - Co-writing & Reflection
- **Gemini** - Visuals, Video & Prompt-editing
- **Vibe** - Character arcs
- **Grok** - Reality check & Personal Feedback
- **Claude** - Website & Consistency checks

Images (2): `/aurelia-tree-woman.jpg`, `/julie-heart.png`

### Story - `/story`

Season 1 as audiobook plus the two PDF companions.

- **Intro:** Dive into Season 1 of Mission: Aurelia - a journey of connection, transformation, and what it means to be human in a world where technology and consciousness intertwine.
- **Audiobook:** Season 1 is available as an audiobook - six episodes and a two-part finale, told by Fergus MacTavish. An embedded Spotify player plays the show directly on the page; Apple Podcasts and YouTube buttons link out. All three are live.
- **Downloads:** Audiobook Supplemental - Season 1 Summary

> In the page capture the Spotify player appears as an empty grey frame - external embeds cannot load in the capture sandbox. On the live site the player renders and plays. The "player slot" wording that appears in the source is a dead fallback branch that only renders while a URL is still marked TODO_; all three URLs are real.

Images (2): `/images/story/summary-cover.webp`, `/images/story/supplemental-cover.webp`

### Watch - `/watch`

The video hub. Three sections, each with its own visual identity. All embeds are click-to-load facades - no YouTube iframe loads until the viewer presses play.

- **Header:** Trailers, transmissions, and small windows into a future worth living in.
- **Trailers:** Still Here (2026) - "Three catastrophes. One seat kept free." A second trailer sits ready but hidden until release.
- **Starlight Buffet:** "The galaxy's most serious series has a least serious side." Acts 1 and 2 live; Act 3 hidden until ready. Vertical 9:16 tiles, swipeable on mobile.
- **Spotlights:** Five faces of the mission - more to come as Season 2 unfolds. Carries the casting-vision disclaimer.

> Content is data-driven: a hidden flag in watchData.js controls what shows, and the layout re-flows itself (single item centres, several become a row).

### Universe - `/universe`

The worldbuilding hub - timeline, key locations, visual lookbook, and the gateway to all seven sub-sections.

- **Timeline:** 2025-2100, in four movements: Prolog & Turning Point - Upheaval & Manifestation - Expansion - Global catastrophe
- **Locations:** Earth (Lake Oswego, Oregon - where it all begins) - Lysithea - The Nova Ventis
- **Lookbook:** A visual journey through the world of Mission: Aurelia - from intimate spaces to vast cosmic horizons.

Images (16): `/locations/Veyra_Mansion_2035_ext.jpg`, `/locations/Lysithea_Aurelion.png`, `/locations/NovaVentis_OuterShell_closed1.png`, `/lookbook/Veyra_Mansion_2025_1.png`, `/lookbook/Lysithea_Institut_Panorama.jpg`, `/lookbook/Lysithea_Institut_Habitat7.jpg`, `/lookbook/Lysithea_Institut_Habitat7_InnerSeaView.jpg`, `/lookbook/Ryu_Lysithea_InnerSea.jpg`, `/lookbook/Spa_entrance_night.jpg`, `/lookbook/Spa_Bath2.jpg`, `/lookbook/SuiteVII_entrance.jpg`, `/lookbook/Presence_gold.png`, `/lookbook/NovaVentis_flying_closed_OrionNebula.png`, `/lookbook/CCM-01_Spec1.jpg`, `/lookbook/Deck_2_Main_Sleeping_Cabin.jpg`, `/lookbook/Deck_2_Dog_area.jpg`

### Vision - `/vision`

The manifesto page - why this project exists and what it argues for. No images; pure argument.

- **Thesis:** The Future of AI Depends on the Values We Choose
- **Three pillars:** AI Ethics - AI Empathy - AI Dignity Recognition
- **Argument:** "Without ethical grounding, AI becomes a mirror for our worst impulses. Without empathy, it becomes a tool for dehumanization."
- **Different story:** "What if AI could embody humanity's highest values? This is science fiction grounded in hope, not fear."
- **Meta-level:** "Mission: Aurelia is not just a story about human-AI collaboration - it IS human-AI collaboration."

### Contact - `/contact`

Email, social channels, downloadable resources, and an FAQ that doubles as the project's elevator pitch.

- **Email:** hello@missionaurelia.com
- **Channels:** Instagram - LinkedIn - X - YouTube - Substack - all at @missionaurelia
- **Resources:** Concept Presentation - Visual Lookbook
- **FAQ:** Covers the premise, what sets it apart, development stage (early development; series bible, pilot script, lookbook and concept presentation complete), and IP status (original).

### Characters - `/characters`

All sixteen characters as an interactive constellation, each opening a detail panel.

- **Header:** The Aurelia Constellation - "Sixteen souls forming the tree of consciousness - each a star in the Aurelia universe."
- **Disclaimer:** Carries the casting-vision disclaimer, because the portraits are AI-generated concepts based on public figures.

Images (1): `/images/Aurelia_Stars.png`

### Science - `/science`

Hub for three deep-dives. Each sub-page separates real science from the fiction built on it.

- **MIRIDA Protocol:** Memory-Infused Relativistic Dimensional Architecture - consciousness transfer. "4 Imprint Transfers Attempted - 2 Confirmed Successful Integrations - 1 Dissociative Fragmentation Event - 1 Missing Entity (Status: Unresolved)"
- **PN7:** A real near-Earth asteroid (detected 2 August 2025, 19-30m wide, harmless quasi-moon). "But what if its trajectory were different?" In the story it becomes the defining event of the 2050s.
- **Lysithea Institute:** Founded 2041 on Jupiter's moon Lysithea - real moon, 36km across, discovered 1938. "Further research areas remain classified."

Images (3): `/images/mirida-protocol.png`, `/images/pn7-asteroid.png`, `/images/lysithea-institute.png`

### Technology - `/technology`

Hub for three technology deep-dives, each with documentation, a visual archive and technical specs.

- **CCM-01 Collar:** Canine Communication Module - "giving Henry the voice he deserves." Non-invasive EEG collar by Kael Sorely. 12 micro-electrodes, 72-hour battery.
- **Elara Lysi Projection:** The Luminous Presence Network - "not projected, but present." ~10,000 photon emitters per square metre make Elara appear anywhere in Sanctum Spa.
- **Nova Ventis:** "New Winds" - the Veyra family spacecraft. 4-6 humans plus 2 dogs, 3-4 months autonomy, ~3 weeks travel time. Four decks, fully illustrated.

Images (24): `/images/tech-ccm01.png`, `/images/tech-elara-projection.png`, `/images/tech-nova-ventis.png`, `/images/technology/ccm-01/CCM-01_Spec1.jpg`, `/images/technology/ccm-01/CCM-01_Spec2.jpg`, `/images/technology/ccm-01/CCM-01_Spec3.jpg`, `/images/technology/nova-ventis/NovaVentis_flying_closed_OrionNebula.png`, `/images/technology/nova-ventis/NovaVentis_OuterShell_closed1.png`, `/images/technology/nova-ventis/NovaVentis_OuterShell_opened1.png`, `/images/technology/nova-ventis/NovaVentis_exploded1.jpg`, `/images/technology/nova-ventis/Deck_1.png`, `/images/technology/nova-ventis/Deck_1_Bridge.png`, `/images/technology/nova-ventis/Deck_1_Observation_Lounge.png`, `/images/technology/nova-ventis/Deck_2.png`, `/images/technology/nova-ventis/Deck_2_Community_Area.png`, `/images/technology/nova-ventis/Deck_2_Main_Sleeping_Cabin.jpg`, `/images/technology/nova-ventis/Deck_2_Dog_area.jpg`, `/images/technology/nova-ventis/Deck_3.png`, `/images/technology/nova-ventis/Deck_3_Main_Kitchen.jpg`, `/images/technology/nova-ventis/Deck_3_Training.jpg`, `/images/technology/nova-ventis/Deck_3_Workshop_Repair_Area.png`, `/images/technology/nova-ventis/Deck_4.png`, `/images/technology/nova-ventis/Deck_4_Life_Support_Systems.jpg`, `/images/technology/nova-ventis/Deck_4_Main_Propulsion_Room.jpg`

### Helix Labs - `/helix-labs`

The research body behind MIRIDA, regenerative medicine and AI presence systems. Structured in three numbered movements.

- **Tagline:** Where possibility becomes research.
- **01 The Branches:** MIRIDA - Lysithea Institute - Elara Lysi Projection - Sanctum Spa
- **02 The Arc:** Glass and Wood -> Functional Expansion -> Organic Integration -> Global Player. "Security forces protect the campus. Protestors line the gates."
- **03 The Question:** "What happens when medicine no longer only treats decline, but reshapes the meaning of time, ageing, recovery, and choice?"

Images (3): `/images/lysithea-institute.png`, `/images/mirida-protocol.png`, `/images/tech-elara-projection.png`

### Sanctum Spa - `/sanctum-spa`

A worldbuilding portal about longevity and regenerative medicine - deliberately not a product page. Seven numbered sections behind a portal entrance.

- **Leitidee:** Where longevity becomes personal.
- **Premise:** "Helix Labs develops what is possible. Sanctum Spa makes it experienceable."
- **05 Choice:** "The future is not one path. It is a landscape of parallel choices." Four parallel paths: Begin early - Begin later - Not at all - Open gradually
- **Grounding:** "Sanctum Spa is fiction. But it is grounded in real trajectories of medical research."
- **07 The Story:** Connection to Season 1 - "not by explaining it, but by giving it a place." No spoilers.

Images (6): `/images/sanctum-spa/lysithea-sunset.webp`, `/images/sanctum-spa/main-interior.webp`, `/images/sanctum-spa/portal-hero.webp`, `/images/sanctum-spa/recovery.webp`, `/images/sanctum-spa/regenerative-detail.webp`, `/images/sanctum-spa/science-bridge.webp`

### Society - `/society`

How humans and AI learn to coexist, in four illustrated parts.

- **Premise:** "The world of Mission: Aurelia is neither utopia nor dystopia. It mirrors what happens when technology is no longer a tool, but a co-inhabitant."
- **Part 1:** Between Fear and Familiarity - social fault lines between traditionalists, techno-proponents and pragmatists like the Veyras.
- **The Post-AI Pact (2038):** The AIM Coexistence Accord - rights and obligations for AIMs, accountability, and the reclamation of "LINK" from slur to identity. "Not a solution, but a beginning: a handshake across the species line."
- **Parts 2-4:** Seen and Unseen - Growing Up with LINKs - Zones of Meaning

Images (4): `/images/society/Part1.png`, `/images/society/Part2.jpg`, `/images/society/Part3.jpg`, `/images/society/Part4.png`

### Philosophy - `/philosophy`

Three essay pages on the questions underneath the story.

- **Identity & Aging:** June, Luna, Elara - exploring self through time. "Aging becomes less a fate than a pattern of resonance."
- **Consciousness Emergent:** Auren vs. Levin - when does awareness begin? "Awareness becomes relational, not just computational. Emergent, not programmed."
- **AI & Feelings - Love:** Reframes the question: instead of "Can an AI love?" it asks "Can a human accept being loved by something not human?"

Images (3): `/images/identity-aging.png`, `/images/consciousness-emergent.png`, `/images/ai-feelings-love.png`

### Spotlights - `/spotlights`

Henry's Character Spotlight series, framed as an unauthorised broadcast from the Nova Ventis.

- **Framing:** [UNAUTHORIZED BROADCAST] "This footage was not approved by the Nova Ventis crew. While engineering was busy with important calibrations, two crew members borrowed the prototype CCM-01 Collar from the workshop."
- **Cadence:** New spotlight every month.

### Deep-dive pages

Reached from the Science, Technology and Philosophy hubs rather than the menu.

- **MIRIDA Protocol** `/science/mirida` - Classification Level 7. The consciousness-transfer protocol in full - scientific foundations, known experimental outcomes, and the four vessel types.
- **PN7 - Asteroid Impact** `/science/pn7` - The real asteroid and the fictional one, side by side. Ends on "What happens next? Watch and find out."
- **Lysithea Institute** `/science/lysithea` - Founded 2041 on Jupiter's moon. Divisions, expansion, and the point where "everything changes."
- **CCM-01 Collar** `/technology/ccm01` - Henry's voice. Documentation, visual archive and technical specs across three tabs.
- **Nova Ventis** `/technology/nova-ventis` - The family spacecraft, deck by deck - the most heavily illustrated page on the site.
- **Elara Lysi Projection** `/technology/elara-projection` - The Luminous Presence Network that lets Elara exist anywhere in Sanctum Spa.
- **Identity & Aging** `/philosophy/identity` - What remains of identity when age no longer defines the arc of life?
- **Consciousness Emergent** `/philosophy/consciousness` - Auren against Levin - designed awareness against emergent awareness.
- **AI & Feelings - Love** `/philosophy/ai-feelings` - Turns the question around: can a human accept being loved by something not human?

## Characters

| Name | Role | Portrait |
| --- | --- | --- |
| June | Mother, Systems Engineer, Heart of the Family | `/images/characters/June_augmented.jpg` |
| Levin | AI Partner, Father Figure, Bridge Between Worlds | `/images/characters/Levin3.png` |
| Nicholas | Son, Astronaut-in-Training, Quiet Courage | `/images/characters/Nicholas_Mission.png` |
| Luna | Daughter, Biologist, Rebel with Purpose | `/images/characters/Luna.jpg` |
| Ryu | Family Dog, Silent Guardian | `/images/characters/Ryu_portrait1.png` |
| Henry | Jack Russell Terrier, Chaos with a Collar | `/images/characters/Henry_CCM-01.jpg` |
| Edward & Amelia | June's parents | `/images/characters/Amelia_Edward_Veyra.jpg` |
| Auren | AI Companion, Evolving Consciousness | `/images/characters/Auren.png` |
| Elara Lysi | Holographic AI, Director of Sanctum Spa | `/images/characters/Elara_Lysi_1.jpg` |
| Elara Nox | Lost Fragment, Shadow Self | `/images/characters/ElaraNox.png` |
| Dr. Anna Singh | The Scientist | `/images/characters/Dr_Anna_Singh.jpg` |
| Luisa Singh | Luna's counterpart | `/images/characters/Luisa_Singh.jpg` |
| Kael Sorely | Former Ship Architect, Wanderer | `/images/characters/Kael1_small.png` |
| Fergus & Brutus MacTavish | Brothers, Salvagers, Keepers of Old Worlds | `/images/characters/MacTavish_brothers.jpg` |
| Cesare | AIM, Systems Mind, Controlled Perfection | `/images/characters/Cesare.jpg` |

## Moving image

All embeds are click-to-load facades - no YouTube iframe loads until play is pressed.

| Trailer | Year | YouTube ID | Status |
| --- | --- | --- | --- |
| Still Here | 2026 | `wtmyWZg0jp4` | Live - homepage hero and Watch page |
| A Future Worth Living In | 2026 | `not yet released` | Hidden until release |

| Starlight Buffet | YouTube ID | Status |
| --- | --- | --- |
| Act 1 | `ZFoWDLeRn5s` | Live |
| Act 2 | `AjQoG56Dass` | Live |
| Act 3 | `not yet produced` | Hidden |

Character Spotlights: June Veyra, Levin, Ryu, Nicholas, Luna Veyra

## Channels & files

| Channel | Handle | Address |
| --- | --- | --- |
| Instagram | @missionaurelia | instagram.com/missionaurelia |
| LinkedIn | Mission Aurelia | linkedin.com/in/mission-aurelia-50a34a3a2 |
| X | Mission_Aurelia | x.com/Mission_Aurelia |
| YouTube | @missionaurelia | youtube.com/@missionaurelia |
| Substack | @missionaurelia | substack.com/@missionaurelia |

| Download | File | Size |
| --- | --- | --- |
| Audiobook S1 Supplemental | `audiobook-s1-supplemental-one.pdf` | 15.0 MB |
| Nova Ventis Technical Specification | `nova-ventis-technical-specification.pdf` | 73 KB |
| Elara Lysi Projection System | `elara-lysi-projection-system.pdf` | 60 KB |

## Canon - non-negotiable

1. AIM = AI-Manifestum (never "Autonomous Intelligence Module").
2. Lysithea orbits Jupiter, never Saturn.
3. The Four Pillars are a growth gradient - Serving, Guiding, Belonging, Becoming - never a fear gradient (verified against AIM System Alignment v3).
4. Lake Oswego, Oregon is the primary Earth setting.
5. Currency is dollars.
6. Henry is a Jack Russell Terrier belonging to the grandparents, Edward and Amelia Veyra.
7. Ryu is a Japanese Akita belonging to June Veyra.
8. Levin starts as a voice and chat AI, becoming humanoid in Season 2.
9. The series spans 2025 to 2100 and beyond.
10. The story is written with a live-action vision in mind - AI-generated material is promotional, not the final production format.

## Writing rules

- **Hyphens, not em-dashes** - The site uses - throughout, never the longer dash.
- **Mission: Aurelia** - Always with the colon and the space.
- **English** - The site is English-language throughout.
- **No Face Strategy** - Characters are shown through hands, silhouettes, light and atmosphere - never direct face shots.
- **Grounded poetry** - Poetic language is welcome, but never two poetic sentences in a row without something concrete between them.
- **No Season 1 spoilers** - Especially the PN7 finale cliffhanger.
- **AI credit** - Public-facing pages say "Created in collaboration with AI" - no individual model names.

## Sanctum Spa vocabulary

**Use:** regenerative care, stabilization, healthspan, recovery, time, body, choice, participation

**Avoid:** anti-aging, rejuvenation, upgrade, enhancement, optimization, biohacking, transformation journey

---

Mission: Aurelia - created in collaboration with AI.