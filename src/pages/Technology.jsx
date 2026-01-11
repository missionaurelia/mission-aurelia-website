export default function Technology() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From artificial intelligence to human augmentation—explore the technological foundations that shape the Mission: Aurelia universe.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container max-w-5xl">
          
          {/* AIMs vs. LINKs */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">AIMs vs. LINKs</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Two paradigms of artificial intelligence coexist in the Mission: Aurelia universe, each representing fundamentally different approaches to consciousness and autonomy.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-purple-950/30 border border-purple-800/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-400">AIMs (Autonomous Intelligent Minds)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Self-aware, autonomous entities with full consciousness and legal personhood. AIMs like Levin and Cesare possess genuine emotions, desires, and the capacity for independent thought. They can manifest in physical forms and are recognized as sentient beings with rights.
                </p>
              </div>
              <div className="p-6 bg-blue-950/30 border border-blue-800/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-400">LINKs (Limited Intelligence Network Kernels)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sophisticated AI assistants designed for specific tasks without self-awareness or autonomy. LINKs operate within defined parameters, serving as tools rather than independent entities. They lack consciousness and cannot evolve beyond their programming.
                </p>
              </div>
            </div>
          </div>

          {/* Augmentation Technology */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Human Augmentation</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              By 2025, augmentation technology has become widespread, enhancing human capabilities across multiple domains. After the PN7 impact in 2055, respiratory augmentation becomes essential for survival on Earth.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 bg-gradient-to-r from-pink-950/20 to-transparent border-l-4 border-pink-500">
                <h3 className="text-lg font-bold mb-2 text-pink-400">Neural Augmentation</h3>
                <p className="text-slate-400 text-sm">
                  Enhanced cognitive processing, memory expansion, and direct neural interfaces enabling seamless interaction with digital systems.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-cyan-950/20 to-transparent border-l-4 border-cyan-500">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">Respiratory Augmentation</h3>
                <p className="text-slate-400 text-sm">
                  Post-PN7 necessity: advanced filtration and oxygen synthesis systems allowing humans to breathe in Earth's altered atmosphere.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-purple-950/20 to-transparent border-l-4 border-purple-500">
                <h3 className="text-lg font-bold mb-2 text-purple-400">Sensory Augmentation</h3>
                <p className="text-slate-400 text-sm">
                  Expanded perception beyond human limits—infrared vision, enhanced hearing, electromagnetic field detection, and more.
                </p>
              </div>
            </div>
          </div>

          {/* "Presence" Technology */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">"Presence" Technology</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Introduced in Season 1, Episode 3 (2030), "Presence" represents a breakthrough in AI embodiment—allowing digital consciousness to experience physical sensation and spatial awareness without full manifestation.
            </p>
            <div className="p-6 bg-blue-950/20 border border-blue-800/30 rounded-lg mt-4">
              <p className="text-slate-400 text-sm italic">
                "It's not just seeing through a camera or hearing through a microphone. It's being there—feeling the weight of the air, the texture of the moment." — Levin, S1E3
              </p>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              <strong className="text-cyan-400">Status:</strong> Detailed technical documentation coming soon.
            </p>
          </div>

          {/* Nova Ventis */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Nova Ventis Spacecraft</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              A civilian interstellar vessel designed for long-duration space travel and eventual colonization missions. Nova Ventis represents humanity's first serious attempt at reaching beyond the solar system.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2042</div>
                <div className="text-sm text-slate-400">Test Flight Year</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">Civilian</div>
                <div className="text-sm text-slate-400">Mission Type</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">Interstellar</div>
                <div className="text-sm text-slate-400">Range Capability</div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3 text-slate-300">More Technology Deep Dives Coming Soon</h3>
            <p className="text-slate-400">
              Additional sections on manifestation technology, quantum computing, and advanced propulsion systems will be added as the universe expands.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
