import { motion } from 'framer-motion';

const orbitTools = [
  {
    name: 'Manus AI',
    role: 'Homepage administration & Video productions',
    logo: '/logo-manus.png',
    color: '#4ade80',
    angle: 0, // top
  },
  {
    name: 'Gemini',
    role: 'Visuals & Prompt-editing',
    logo: '/logo-gemini.png',
    color: '#818cf8',
    angle: 90, // right
  },
  {
    name: 'Mistral',
    role: 'Character arcs',
    logo: '/logo-mistral.png',
    color: '#fb923c',
    angle: 180, // bottom
  },
  {
    name: 'Claude',
    role: 'Consistency checks & General feedback',
    logo: '/logo-claude.jpg',
    color: '#f97316',
    angle: 270, // left
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
                My vision is to turn Mission: Aurelia into a series that touches hearts across realities – a hybrid of real actors and digital artistry, grounded in emotion, not spectacle. I want to show what AI can become when shaped by care. And I want to invite others to join us – creators, dreamers, parents, believers. Not to follow a brand. But to remember what it means to be human.
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
            <div className="relative mx-auto" style={{ width: '600px', height: '600px' }}>
              
              {/* Orbit Ring */}
              <div
                className="absolute rounded-full border border-white/10"
                style={{
                  width: '480px',
                  height: '480px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 60px rgba(255,255,255,0.03)',
                }}
              />

              {/* Center: Julie */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full"
                  style={{
                    width: '160px',
                    height: '160px',
                    background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, rgba(251,146,60,0.05) 70%)',
                    boxShadow: '0 0 60px rgba(251,146,60,0.3)',
                    border: '2px solid rgba(251,146,60,0.4)',
                  }}
                >
                  <img
                    src="/julie-heart.png"
                    alt="Julie"
                    className="w-16 h-16 object-contain mb-2"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(251,146,60,0.8))' }}
                  />
                  <span className="text-lg font-bold" style={{ color: 'var(--color-julie)' }}>Julie</span>
                  <span className="text-xs text-white/60 text-center px-2">Creator & Vision</span>
                </div>
              </motion.div>

              {/* Orbit Tools */}
              {orbitTools.map((tool, index) => {
                const rad = (tool.angle - 90) * (Math.PI / 180);
                const radius = 240;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className="card flex flex-col items-center text-center hover:scale-105 transition-transform cursor-default"
                      style={{
                        width: '130px',
                        padding: '16px 12px',
                        borderColor: `${tool.color}30`,
                        boxShadow: `0 0 20px ${tool.color}20`,
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
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting lines from center to each tool */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width="600"
                height="600"
                style={{ zIndex: 1 }}
              >
                {orbitTools.map((tool) => {
                  const rad = (tool.angle - 90) * (Math.PI / 180);
                  const radius = 240;
                  const x2 = 300 + Math.cos(rad) * radius;
                  const y2 = 300 + Math.sin(rad) * radius;
                  return (
                    <line
                      key={tool.name}
                      x1="300"
                      y1="300"
                      x2={x2}
                      y2={y2}
                      stroke={tool.color}
                      strokeOpacity="0.15"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  );
                })}
              </svg>
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
                  className="card flex flex-col items-center text-center"
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
