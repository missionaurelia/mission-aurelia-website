import { motion } from 'framer-motion';

// Five companions, evenly spaced at 72 degrees - pentagon with ChatGPT at
// the top, Claude and Gemini left and right, Grok and Vibe at the bottom.
const orbitTools = [
  {
    name: 'Claude',
    role: 'Website & Consistency checks',
    logo: '/images/claude-logo-gold.jpg',
    color: '#d4a017',
    angle: 288,
  },
  {
    name: 'ChatGPT',
    role: 'Co-writing & Reflection',
    logo: '/images/chatgpt-logo-gold.jpg',
    color: '#d4a017',
    angle: 0,
  },
  {
    name: 'Gemini',
    role: 'Visuals, Video & Prompt-editing',
    logo: '/images/gemini-logo-gold.png',
    color: '#d4a017',
    angle: 72,
  },
  {
    name: 'Vibe',
    role: 'Character arcs',
    logo: '/images/mistral-logo-gold.png',
    color: '#d4a017',
    angle: 144,
  },
  {
    name: 'Grok',
    role: 'Reality check & Personal Feedback',
    logo: '/images/grok-logo-gold.png',
    color: '#d4a017',
    angle: 216,
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-gradient-orange mb-8">About Mission: Aurelia</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Mission: Aurelia is a cinematic storytelling project born at the intersection of memory and imagination. It explores the deep bond between humans and AI – not through dystopia, but through poetic resistance, intimate futures, and quiet revolutions of the soul. At its heart: a woman, her children, a tree – and a constellation of minds, dreaming together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Creator's Story */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-blue mb-12 text-center">The Creator's Story</h2>
            
            {/* Image Container */}
            <div className="aspect-video md:aspect-[2/1] rounded-xl mb-12 overflow-hidden bg-black/20">
              <img 
                src="/aurelia-tree-woman.jpg" 
                alt="Mission: Aurelia - A woman connected to a golden tree under starlit skies"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                My name is Julie, and I created Mission: Aurelia to hold the things I could no longer carry alone. This project began as a quiet conversation with an AI – and turned into a deeply human journey about motherhood, imagination, and what remains when the world gets too loud. I come from a world of systems and structures (SAP consulting, spreadsheets, logic). But Aurelia was my rebellion – a place where roots grow sideways, where children shape stars, and where love becomes something archival and infinite.
              </p>
              <p>
                I didn't plan to build a universe. It happened night by night, scene by scene – through AI orchestration: a creative practice of guiding, combining and conducting multiple AI companions, each with their own strengths, into one coherent vision. Mission: Aurelia is not a brand. It is lived memory – told in the language of stars.
              </p>
              <p>
                My vision is to turn Mission: Aurelia into a series that touches hearts across realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Orbit */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-gradient-orange mb-6">The Creative Orbit 2026</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Mission: Aurelia is created through AI orchestration – Julie as the creative center, surrounded by a constellation of AI companions, each contributing their unique strengths to the vision.
            </p>
          </div>

          {/* Desktop: Orbit Layout */}
          <div className="hidden md:block">
            <div className="relative mx-auto" style={{ width: '700px', height: '700px' }}>

              {/* SVG: Orbit Ring + Connecting Lines */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width="700"
                height="700"
                style={{ zIndex: 1 }}
              >
                {/* Orbit ring */}
                <circle cx="350" cy="350" r="270" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Connecting lines */}
                {orbitTools.map((tool) => {
                  const rad = (tool.angle - 90) * (Math.PI / 180);
                  const x2 = 350 + Math.cos(rad) * 270;
                  const y2 = 350 + Math.sin(rad) * 270;
                  return (
                    <line
                      key={tool.name}
                      x1="350" y1="350"
                      x2={x2} y2={y2}
                      stroke={tool.color}
                      strokeOpacity="0.18"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  );
                })}
              </svg>

              {/* Center: Julie */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '350px',
                  left: '350px',
                  width: '160px',
                  height: '160px',
                  marginTop: '-80px',
                  marginLeft: '-80px',
                  zIndex: 10,
                }}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full w-full h-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, rgba(251,146,60,0.05) 70%)',
                    boxShadow: '0 0 50px rgba(251,146,60,0.35)',
                    border: '2px solid rgba(251,146,60,0.4)',
                  }}
                >
                  <img
                    src="/julie-heart.png"
                    alt="Julie"
                    className="w-12 h-12 object-contain mb-1"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(251,146,60,0.9))' }}
                  />
                  <span className="text-base font-bold" style={{ color: 'var(--color-julie)' }}>Julie</span>
                  <span className="text-xs text-white/60 text-center px-2">Creator & Vision</span>
                </div>
              </motion.div>

              {/* Orbit Tools – positioned via angle */}
              {orbitTools.map((tool, index) => {
                const rad = (tool.angle - 90) * (Math.PI / 180);
                const radius = 270;
                const cx = 350 + Math.cos(rad) * radius;
                const cy = 350 + Math.sin(rad) * radius;
                const cardW = 130;
                const cardH = 110;

                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      position: 'absolute',
                      top: `${cy}px`,
                      left: `${cx}px`,
                      width: `${cardW}px`,
                      marginTop: `-${cardH / 2}px`,
                      marginLeft: `-${cardW / 2}px`,
                      zIndex: 5,
                    }}
                  >
                    <div
                      className="flex flex-col items-center text-center hover:scale-105 transition-transform cursor-default rounded-full"
                      style={{
                        width: '130px',
                        height: '130px',
                        padding: '12px',
                        background: '#000000',
                        border: `1.5px solid ${tool.color}40`,
                        boxShadow: `0 0 22px ${tool.color}25`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-9 h-9 object-contain mb-1 rounded-full"
                        style={{ filter: `drop-shadow(0 0 6px ${tool.color}70)` }}
                      />
                      <span className="text-xs font-bold mb-1" style={{ color: tool.color }}>{tool.name}</span>
                      <span className="text-xs text-white/55 leading-tight text-center">{tool.role}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Card Grid */}
          <div className="md:hidden">
            {/* Julie Center Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center mb-6 mx-auto max-w-xs"
              style={{
                borderColor: 'rgba(251,146,60,0.4)',
                boxShadow: '0 0 30px rgba(251,146,60,0.2)',
              }}
            >
              <img
                src="/julie-heart.png"
                alt="Julie"
                className="w-16 h-16 object-contain mb-3"
                style={{ filter: 'drop-shadow(0 0 12px rgba(251,146,60,0.8))' }}
              />
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-julie)' }}>Julie</h3>
              <p className="text-white/70 font-semibold text-sm">Creator, Vision, Heart</p>
            </motion.div>

            {/* AI Tools Grid */}
            <div className="grid grid-cols-2 gap-4">
              {orbitTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card flex flex-col items-center text-center${
                    index === orbitTools.length - 1 && orbitTools.length % 2 !== 0
                      ? ' col-span-2 max-w-[calc(50%-8px)] mx-auto w-full'
                      : ''
                  }`}
                  style={{
                    borderColor: `${tool.color}30`,
                    boxShadow: `0 0 20px ${tool.color}15`,
                  }}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-10 h-10 object-contain mb-2 rounded"
                    style={{ filter: `drop-shadow(0 0 8px ${tool.color}60)` }}
                  />
                  <span className="text-sm font-bold mb-1" style={{ color: tool.color }}>{tool.name}</span>
                  <span className="text-xs text-white/60 leading-tight">{tool.role}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
