#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Curated content for the website reference document.

Every quoted line is copy that actually ships on the site - pulled from the
JSX sources, not paraphrased.
"""

SNAPSHOT_DATE = '15 August 2026'

STACK = [
    ('Framework', 'React 19', 'Single-page application'),
    ('Build tool', 'Vite 7', 'Dev server and production build'),
    ('Routing', 'wouter 3', 'Lightweight client-side router'),
    ('Styling', 'Tailwind CSS 4', 'CSS-first @theme tokens, no config file'),
    ('Animation', 'Framer Motion 12', 'Scroll reveals and transitions'),
    ('Icons', 'lucide-react', 'Plus one custom Substack mark'),
    ('Hosting', 'Vercel', 'All routes rewritten to /index.html'),
    ('Analytics', 'Google Analytics (gtag)', 'Pageview on every route change'),
]

COUNTS = [
    ('24', 'pages'),
    ('7', 'top-level nav items'),
    ('16', 'characters'),
    ('86', 'images in use'),
    ('15', 'YouTube videos'),
    ('3', 'PDF downloads'),
]

PALETTE = [
    ('#ff6b35', 'Aurelia Orange', '--color-aurelia-orange', 'Primary. Headlines, buttons, links, scrollbar, text selection.'),
    ('#00d9ff', 'Hologram Blue', '--color-hologram-blue', 'Secondary. Section headings, outlined buttons, accents.'),
    ('#0a0a0a', 'Deep Black', '--color-deep-black', 'Page background throughout.'),
    ('#f5f5f5', 'Soft White', '--color-soft-white', 'Body text.'),
    ('#e74c3c', 'Julie Red', '--color-julie', 'The creator at the centre of the Creative Orbit.'),
    ('#d4a017', 'Orbit Gold', 'inline value', 'The five AI companions in the Creative Orbit.'),
]

PALETTE_LEGACY = [
    ('#b0b0b0', 'Orion', '--color-orion'),
    ('#9b59b6', 'Elara', '--color-elara'),
    ('#3498db', 'Kael', '--color-kael'),
    ('#34495e', 'Manus', '--color-manus'),
]

TYPE_ROLES = [
    ('Space Grotesk', 'Headings', 'All h1-h6. Bold (700).',
     'h1 clamps 3rem &rarr; 4.5rem, h2 2.25rem &rarr; 3rem, h3 1.5rem &rarr; 1.875rem'),
    ('Inter', 'Body', 'Paragraphs, navigation, buttons, everything else.',
     '16px base, line-height 1.6; paragraphs step up to 1.125rem on desktop'),
    ('Rajdhani', 'Logo only', 'The "Mission: Aurelia" wordmark in the header.',
     'Bold, 1.875rem, letter-spacing -0.02em'),
]

UTILITIES = [
    ('.text-gradient-orange', 'Aurelia Orange &rarr; orange-400, clipped to text', 'Primary headings'),
    ('.text-gradient-blue', 'Hologram Blue &rarr; blue-400, clipped to text', 'Secondary headings'),
    ('.btn-primary', 'Solid orange, white text, lifts 5% on hover', 'Main calls to action'),
    ('.btn-secondary', 'Blue outline, fills on hover', 'Secondary actions'),
    ('.card', 'white/5 fill, white/10 border, backdrop blur, 0.75rem radius', 'Every content tile'),
    ('.section-padding', '4rem &rarr; 8rem vertical', 'Rhythm between sections'),
    ('.container', 'max-width 80rem, centred, responsive gutters', 'Content width'),
]

NAV_PRIMARY = ['Home', 'About', 'Story', 'Watch', 'Universe', 'Vision', 'Contact']
NAV_UNIVERSE = ['Science', 'Technology', 'Helix Labs', 'Society', 'Philosophy', 'Characters', 'Sanctum Spa']

# ---------------------------------------------------------------- pages ----
# purpose = what the page is for (written for this document)
# copy    = verbatim lines from the live site
PAGES = [
    {
        'route': '/', 'title': 'Home', 'group': 'Primary navigation',
        'purpose': 'The entry point. Establishes the tagline, the human-AI premise, and routes visitors onward to the three featured areas.',
        'copy': [
            ('Tagline', 'Consciousness. Family. Stars.'),
            ('Hero', 'A cinematic exploration of love, consciousness, and what it means to be human.'),
            ('Section', 'A Human-AI Collaboration - "At the core of Aurelia lies something rare: a true co-creation between human intuition and artificial intelligence. Together, we dream, write, and build what neither could alone."'),
            ('Featured', 'Key Locations &middot; Characters &middot; Our Vision'),
            ('Video block', 'Still Here - "Three catastrophes. One seat kept free." Sits above the fold during the XPRIZE window; demoting it to a regular section is a one-word change in watchData.js.'),
            ('Closing', 'Dive Deeper - "Access exclusive resources, character profiles, and world-building materials."'),
        ],
        'images': ['/hero-background.jpg', '/images/home-key-locations.png', '/images/home-characters.png', '/images/home-vision.png'],
        'note': 'hero-background.jpg doubles as the social-media preview image for the whole site.',
    },
    {
        'route': '/about', 'title': 'About', 'group': 'Primary navigation',
        'purpose': 'Julie\'s story and the Creative Orbit - the constellation of AI companions behind the project.',
        'copy': [
            ('Intro', 'Mission: Aurelia is a cinematic storytelling project born at the intersection of memory and imagination. It explores the deep bond between humans and AI - not through dystopia, but through poetic resistance, intimate futures, and quiet revolutions of the soul.'),
            ('Creator', '"My name is Julie, and I created Mission: Aurelia to hold the things I could no longer carry alone."'),
            ('Method', '"I didn\'t plan to build a universe. It happened night by night, scene by scene - through AI orchestration."'),
            ('Orbit', 'The Creative Orbit 2026 - Julie at the centre, five AI companions in a pentagon around her.'),
        ],
        'images': ['/aurelia-tree-woman.jpg', '/julie-heart.png'],
        'orbit': True,
    },
    {
        'route': '/story', 'title': 'Story', 'group': 'Primary navigation',
        'purpose': 'Season 1 as audiobook plus the two PDF companions.',
        'copy': [
            ('Intro', 'Dive into Season 1 of Mission: Aurelia - a journey of connection, transformation, and what it means to be human in a world where technology and consciousness intertwine.'),
            ('Audiobook', 'Season 1 is available as an audiobook - six episodes and a two-part finale, told by Fergus MacTavish. Also on Apple Podcasts and YouTube.'),
            ('Downloads', 'Audiobook Supplemental &middot; Season 1 Summary'),
        ],
        'images': ['/images/story/summary-cover.webp', '/images/story/supplemental-cover.webp'],
        'note': 'The Spotify player is still a placeholder slot awaiting its embed URL.',
    },
    {
        'route': '/watch', 'title': 'Watch', 'group': 'Primary navigation',
        'purpose': 'The video hub. Three sections, each with its own visual identity. All embeds are click-to-load facades - no YouTube iframe loads until the viewer presses play.',
        'copy': [
            ('Header', 'Trailers, transmissions, and small windows into a future worth living in.'),
            ('Trailers', 'Still Here (2026) - "Three catastrophes. One seat kept free." A second trailer sits ready but hidden until release.'),
            ('Starlight Buffet', '"The galaxy\'s most serious series has a least serious side." Acts 1 and 2 live; Act 3 hidden until ready. Vertical 9:16 tiles, swipeable on mobile.'),
            ('Spotlights', 'Five faces of the mission - more to come as Season 2 unfolds. Carries the casting-vision disclaimer.'),
        ],
        'images': [],
        'note': 'Content is data-driven: a hidden flag in watchData.js controls what shows, and the layout re-flows itself (single item centres, several become a row).',
    },
    {
        'route': '/universe', 'title': 'Universe', 'group': 'Primary navigation',
        'purpose': 'The worldbuilding hub - timeline, key locations, visual lookbook, and the gateway to all seven sub-sections.',
        'copy': [
            ('Timeline', '2025-2100, in four movements: Prolog &amp; Turning Point &middot; Upheaval &amp; Manifestation &middot; Expansion &middot; Global catastrophe'),
            ('Locations', 'Earth (Lake Oswego, Oregon - where it all begins) &middot; Lysithea &middot; The Nova Ventis'),
            ('Lookbook', 'A visual journey through the world of Mission: Aurelia - from intimate spaces to vast cosmic horizons.'),
        ],
        'images': ['/locations/Veyra_Mansion_2035_ext.jpg', '/locations/Lysithea_Aurelion.png', '/locations/NovaVentis_OuterShell_closed1.png',
                   '/lookbook/Veyra_Mansion_2025_1.png', '/lookbook/Lysithea_Institut_Panorama.jpg', '/lookbook/Lysithea_Institut_Habitat7.jpg',
                   '/lookbook/Lysithea_Institut_Habitat7_InnerSeaView.jpg', '/lookbook/Ryu_Lysithea_InnerSea.jpg', '/lookbook/Spa_entrance_night.jpg',
                   '/lookbook/Spa_Bath2.jpg', '/lookbook/SuiteVII_entrance.jpg', '/lookbook/Presence_gold.png',
                   '/lookbook/NovaVentis_flying_closed_OrionNebula.png', '/lookbook/CCM-01_Spec1.jpg', '/lookbook/Deck_2_Main_Sleeping_Cabin.jpg',
                   '/lookbook/Deck_2_Dog_area.jpg'],
    },
    {
        'route': '/vision', 'title': 'Vision', 'group': 'Primary navigation',
        'purpose': 'The manifesto page - why this project exists and what it argues for. No images; pure argument.',
        'copy': [
            ('Thesis', 'The Future of AI Depends on the Values We Choose'),
            ('Three pillars', 'AI Ethics &middot; AI Empathy &middot; AI Dignity Recognition'),
            ('Argument', '"Without ethical grounding, AI becomes a mirror for our worst impulses. Without empathy, it becomes a tool for dehumanization."'),
            ('Different story', '"What if AI could embody humanity\'s highest values? This is science fiction grounded in hope, not fear."'),
            ('Meta-level', '"Mission: Aurelia is not just a story about human-AI collaboration - it IS human-AI collaboration."'),
        ],
        'images': [],
    },
    {
        'route': '/contact', 'title': 'Contact', 'group': 'Primary navigation',
        'purpose': 'Email, social channels, downloadable resources, and an FAQ that doubles as the project\'s elevator pitch.',
        'copy': [
            ('Email', 'hello@missionaurelia.com'),
            ('Channels', 'Instagram &middot; LinkedIn &middot; X &middot; YouTube &middot; Substack - all at @missionaurelia'),
            ('Resources', 'Concept Presentation &middot; Visual Lookbook'),
            ('FAQ', 'Covers the premise, what sets it apart, development stage (early development; series bible, pilot script, lookbook and concept presentation complete), and IP status (original).'),
        ],
        'images': [],
    },
    # ---- universe sub-pages ----
    {
        'route': '/characters', 'title': 'Characters', 'group': 'Universe',
        'purpose': 'All sixteen characters as an interactive constellation, each opening a detail panel.',
        'copy': [
            ('Header', 'The Aurelia Constellation - "Sixteen souls forming the tree of consciousness - each a star in the Aurelia universe."'),
            ('Disclaimer', 'Carries the casting-vision disclaimer, because the portraits are AI-generated concepts based on public figures.'),
        ],
        'images': ['/images/Aurelia_Stars.png'],
        'characters': True,
    },
    {
        'route': '/science', 'title': 'Science', 'group': 'Universe',
        'purpose': 'Hub for three deep-dives. Each sub-page separates real science from the fiction built on it.',
        'copy': [
            ('MIRIDA Protocol', 'Memory-Infused Relativistic Dimensional Architecture - consciousness transfer. "4 Imprint Transfers Attempted &middot; 2 Confirmed Successful Integrations &middot; 1 Dissociative Fragmentation Event &middot; 1 Missing Entity (Status: Unresolved)"'),
            ('PN7', 'A real near-Earth asteroid (detected 2 August 2025, 19-30m wide, harmless quasi-moon). "But what if its trajectory were different?" In the story it becomes the defining event of the 2050s.'),
            ('Lysithea Institute', 'Founded 2041 on Jupiter\'s moon Lysithea - real moon, 36km across, discovered 1938. "Further research areas remain classified."'),
        ],
        'images': ['/images/mirida-protocol.png', '/images/pn7-asteroid.png', '/images/lysithea-institute.png'],
    },
    {
        'route': '/technology', 'title': 'Technology', 'group': 'Universe',
        'purpose': 'Hub for three technology deep-dives, each with documentation, a visual archive and technical specs.',
        'copy': [
            ('CCM-01 Collar', 'Canine Communication Module - "giving Henry the voice he deserves." Non-invasive EEG collar by Kael Sorley. 12 micro-electrodes, 72-hour battery.'),
            ('Elara Lysi Projection', 'The Luminous Presence Network - "not projected, but present." ~10,000 photon emitters per square metre make Elara appear anywhere in Sanctum Spa.'),
            ('Nova Ventis', '"New Winds" - the Veyra family spacecraft. 4-6 humans plus 2 dogs, 3-4 months autonomy, ~3 weeks travel time. Four decks, fully illustrated.'),
        ],
        'images': ['/images/tech-ccm01.png', '/images/tech-elara-projection.png', '/images/tech-nova-ventis.png',
                   '/images/technology/ccm-01/CCM-01_Spec1.jpg', '/images/technology/ccm-01/CCM-01_Spec2.jpg', '/images/technology/ccm-01/CCM-01_Spec3.jpg',
                   '/images/technology/nova-ventis/NovaVentis_flying_closed_OrionNebula.png', '/images/technology/nova-ventis/NovaVentis_OuterShell_closed1.png',
                   '/images/technology/nova-ventis/NovaVentis_OuterShell_opened1.png', '/images/technology/nova-ventis/NovaVentis_exploded1.jpg',
                   '/images/technology/nova-ventis/Deck_1.png', '/images/technology/nova-ventis/Deck_1_Bridge.png',
                   '/images/technology/nova-ventis/Deck_1_Observation_Lounge.png', '/images/technology/nova-ventis/Deck_2.png',
                   '/images/technology/nova-ventis/Deck_2_Community_Area.png', '/images/technology/nova-ventis/Deck_2_Main_Sleeping_Cabin.jpg',
                   '/images/technology/nova-ventis/Deck_2_Dog_area.jpg', '/images/technology/nova-ventis/Deck_3.png',
                   '/images/technology/nova-ventis/Deck_3_Main_Kitchen.jpg', '/images/technology/nova-ventis/Deck_3_Training.jpg',
                   '/images/technology/nova-ventis/Deck_3_Workshop_Repair_Area.png', '/images/technology/nova-ventis/Deck_4.png',
                   '/images/technology/nova-ventis/Deck_4_Life_Support_Systems.jpg', '/images/technology/nova-ventis/Deck_4_Main_Propulsion_Room.jpg'],
    },
    {
        'route': '/helix-labs', 'title': 'Helix Labs', 'group': 'Universe',
        'purpose': 'The research body behind MIRIDA, regenerative medicine and AI presence systems. Structured in three numbered movements.',
        'copy': [
            ('Tagline', 'Where possibility becomes research.'),
            ('01 The Branches', 'MIRIDA &middot; Lysithea Institute &middot; Elara Lysi Projection &middot; Sanctum Spa'),
            ('02 The Arc', 'Glass and Wood &rarr; Functional Expansion &rarr; Organic Integration &rarr; Global Player. "Security forces protect the campus. Protestors line the gates."'),
            ('03 The Question', '"What happens when medicine no longer only treats decline, but reshapes the meaning of time, ageing, recovery, and choice?"'),
        ],
        'images': ['/images/lysithea-institute.png', '/images/mirida-protocol.png', '/images/tech-elara-projection.png'],
    },
    {
        'route': '/sanctum-spa', 'title': 'Sanctum Spa', 'group': 'Universe',
        'purpose': 'A worldbuilding portal about longevity and regenerative medicine - deliberately not a product page. Seven numbered sections behind a portal entrance.',
        'copy': [
            ('Leitidee', 'Where longevity becomes personal.'),
            ('Premise', '"Helix Labs develops what is possible. Sanctum Spa makes it experienceable."'),
            ('05 Choice', '"The future is not one path. It is a landscape of parallel choices." Four parallel paths: Begin early &middot; Begin later &middot; Not at all &middot; Open gradually'),
            ('Grounding', '"Sanctum Spa is fiction. But it is grounded in real trajectories of medical research."'),
            ('07 The Story', 'Connection to Season 1 - "not by explaining it, but by giving it a place." No spoilers.'),
        ],
        'images': [],
        'spa': True,
    },
    {
        'route': '/society', 'title': 'Society', 'group': 'Universe',
        'purpose': 'How humans and AI learn to coexist, in four illustrated parts.',
        'copy': [
            ('Premise', '"The world of Mission: Aurelia is neither utopia nor dystopia. It mirrors what happens when technology is no longer a tool, but a co-inhabitant."'),
            ('Part 1', 'Between Fear and Familiarity - social fault lines between traditionalists, techno-proponents and pragmatists like the Veyras.'),
            ('The Post-AI Pact (2038)', 'The AIM Coexistence Accord - rights and obligations for AIMs, accountability, and the reclamation of "LINK" from slur to identity. "Not a solution, but a beginning: a handshake across the species line."'),
            ('Parts 2-4', 'Seen and Unseen &middot; Growing Up with LINKs &middot; Zones of Meaning'),
        ],
        'images': ['/images/society/Part1.png', '/images/society/Part2.jpg', '/images/society/Part3.jpg', '/images/society/Part4.png'],
    },
    {
        'route': '/philosophy', 'title': 'Philosophy', 'group': 'Universe',
        'purpose': 'Three essay pages on the questions underneath the story.',
        'copy': [
            ('Identity &amp; Aging', 'June, Luna, Elara - exploring self through time. "Aging becomes less a fate than a pattern of resonance."'),
            ('Consciousness Emergent', 'Auren vs. Levin - when does awareness begin? "Awareness becomes relational, not just computational. Emergent, not programmed."'),
            ('AI &amp; Feelings - Love', 'Reframes the question: instead of "Can an AI love?" it asks "Can a human accept being loved by something not human?"'),
        ],
        'images': ['/images/identity-aging.png', '/images/consciousness-emergent.png', '/images/ai-feelings-love.png'],
    },
    {
        'route': '/spotlights', 'title': 'Spotlights', 'group': 'Standalone',
        'purpose': 'Henry\'s Character Spotlight series, framed as an unauthorised broadcast from the Nova Ventis.',
        'copy': [
            ('Framing', '[UNAUTHORIZED BROADCAST] "This footage was not approved by the Nova Ventis crew. While engineering was busy with important calibrations, two crew members borrowed the prototype CCM-01 Collar from the workshop."'),
            ('Cadence', 'New spotlight every month.'),
        ],
        'images': [],
    },
]

CHARACTERS = [
    ('June', 'Mother, Systems Engineer, Heart of the Family', '/images/characters/June_augmented.jpg'),
    ('Levin', 'AI Partner, Father Figure, Bridge Between Worlds', '/images/characters/Levin3.png'),
    ('Nicholas', 'Son, Astronaut-in-Training, Quiet Courage', '/images/characters/Nicholas_Mission.png'),
    ('Luna', 'Daughter, Biologist, Rebel with Purpose', '/images/characters/Luna.jpg'),
    ('Ryu', 'Family Dog, Silent Guardian', '/images/characters/Ryu_portrait1.png'),
    ('Henry', 'Jack Russell Terrier, Chaos with a Collar', '/images/characters/Henry_CCM-01.jpg'),
    ('Edward &amp; Amelia', 'June\'s parents', '/images/characters/Amelia_Edward_Veyra.jpg'),
    ('Auren', 'AI Companion, Evolving Consciousness', '/images/characters/Auren.png'),
    ('Elara Lysi', 'Holographic AI, Director of Sanctum Spa', '/images/characters/Elara_Lysi_1.jpg'),
    ('Elara Nox', 'Lost Fragment, Shadow Self', '/images/characters/ElaraNox.png'),
    ('Dr. Anna Singh', 'The Scientist', '/images/characters/Dr_Anna_Singh.jpg'),
    ('Luisa Singh', 'Luna\'s counterpart', '/images/characters/Luisa_Singh.jpg'),
    ('Kael Sorely', 'Former Ship Architect, Wanderer', '/images/characters/Kael1_small.png'),
    ('Fergus &amp; Brutus MacTavish', 'Brothers, Salvagers, Keepers of Old Worlds', '/images/characters/MacTavish_brothers.jpg'),
    ('Cesare', 'AIM, Systems Mind, Controlled Perfection', '/images/characters/Cesare.jpg'),
]

VIDEO = {
    'trailers': [
        ('Still Here', '2026', 'wtmyWZg0jp4', 'Live - homepage hero and Watch page'),
        ('A Future Worth Living In', '2026', 'not yet released', 'Hidden until release'),
    ],
    'buffet': [
        ('Act 1', 'ZFoWDLeRn5s', 'Live'),
        ('Act 2', 'AjQoG56Dass', 'Live'),
        ('Act 3', 'not yet produced', 'Hidden'),
    ],
    'spotlights': [
        ('June Veyra', '/images/characters/June_augmented.jpg'),
        ('Levin', '/images/characters/Levin3.png'),
        ('Ryu', '/images/characters/Ryu.jpg'),
        ('Nicholas', '/images/characters/Nicholas_Mission.png'),
        ('Luna Veyra', '/images/characters/Luna.jpg'),
    ],
}

CHANNELS = [
    ('Instagram', '@missionaurelia', 'instagram.com/missionaurelia'),
    ('LinkedIn', 'Mission Aurelia', 'linkedin.com/in/mission-aurelia-50a34a3a2'),
    ('X', 'Mission_Aurelia', 'x.com/Mission_Aurelia'),
    ('YouTube', '@missionaurelia', 'youtube.com/@missionaurelia'),
    ('Substack', '@missionaurelia', 'substack.com/@missionaurelia'),
]

DOWNLOADS = [
    ('Audiobook S1 Supplemental', 'audiobook-s1-supplemental-one.pdf', '15.0 MB'),
    ('Nova Ventis Technical Specification', 'nova-ventis-technical-specification.pdf', '73 KB'),
    ('Elara Lysi Projection System', 'elara-lysi-projection-system.pdf', '60 KB'),
]

CANON = [
    'AIM = AI-Manifestum (never "Autonomous Intelligence Module").',
    'Lysithea orbits Jupiter, never Saturn.',
    'The Four Pillars are a growth gradient - Practical, Directional, Emotional, Symbiotic - never a fear gradient.',
    'Lake Oswego, Oregon is the primary Earth setting.',
    'Currency is dollars.',
    'Henry is a Jack Russell Terrier belonging to the grandparents, Edward and Amelia Veyra.',
    'Ryu is a Japanese Akita belonging to June Veyra.',
    'Levin starts as a voice and chat AI, becoming humanoid in Season 2.',
    'The series spans 2025 to 2100 and beyond.',
    'The story is written with a live-action vision in mind - AI-generated material is promotional, not the final production format.',
]

STYLE_RULES = [
    ('Hyphens, not em-dashes', 'The site uses - throughout, never the longer dash.'),
    ('Mission: Aurelia', 'Always with the colon and the space.'),
    ('English', 'The site is English-language throughout.'),
    ('No Face Strategy', 'Characters are shown through hands, silhouettes, light and atmosphere - never direct face shots.'),
    ('Grounded poetry', 'Poetic language is welcome, but never two poetic sentences in a row without something concrete between them.'),
    ('No Season 1 spoilers', 'Especially the PN7 finale cliffhanger.'),
    ('AI credit', 'Public-facing pages say "Created in collaboration with AI" - no individual model names.'),
]

SPA_TERMS_USE = ['regenerative care', 'stabilization', 'healthspan', 'recovery', 'time', 'body', 'choice', 'participation']
SPA_TERMS_AVOID = ['anti-aging', 'rejuvenation', 'upgrade', 'enhancement', 'optimization', 'biohacking', 'transformation journey']
