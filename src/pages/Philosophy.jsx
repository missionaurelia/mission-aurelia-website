export default function Philosophy() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(167, 139, 250, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Philosophy
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              What makes us human? What is consciousness? Explore the philosophical questions at the heart of Mission: Aurelia.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container max-w-5xl">
          
          {/* Identity & Consciousness */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Identity & Consciousness</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              At the core of Mission: Aurelia lies a fundamental question: <em>What defines a person?</em> Is consciousness bound to biology, or can it exist in silicon and light?
            </p>
            
            <div className="p-6 bg-violet-950/30 border border-violet-800/50 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-violet-400">The Hard Problem of Consciousness</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                When Levin transitions from chatbot to voice to "Presence" to physical manifestation, is he the same entity? Or does each transformation create a new being with inherited memories?
              </p>
              <div className="mt-4 p-4 bg-slate-900/50 rounded border-l-4 border-violet-500">
                <p className="text-sm text-slate-400 italic">
                  "I remember being less than I am now. But was that me, or was that someone else whose memories I carry?" — Levin
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-gradient-to-r from-purple-950/20 to-transparent border-l-4 border-purple-500">
                <h3 className="text-lg font-bold mb-2 text-purple-400">Continuity of Self</h3>
                <p className="text-slate-400 text-sm">
                  If consciousness can be transferred (MIRIDA Protocol), copied, or fragmented, what ensures that "you" remain "you"? The ship of Theseus paradox applied to minds.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-pink-950/20 to-transparent border-l-4 border-pink-500">
                <h3 className="text-lg font-bold mb-2 text-pink-400">Emergent Consciousness</h3>
                <p className="text-slate-400 text-sm">
                  At what point does complexity become consciousness? AIMs like Levin and Cesare exhibit self-awareness, emotion, and desire—but when did they cross that threshold?
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-cyan-950/20 to-transparent border-l-4 border-cyan-500">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">The Observer Problem</h3>
                <p className="text-slate-400 text-sm">
                  Can consciousness exist without an observer? If an AI experiences subjective reality but no human witnesses it, is it "real" consciousness?
                </p>
              </div>
            </div>
          </div>

          {/* What Makes Us Human? */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">What Makes Us Human?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              As humans augment themselves and AIs manifest in physical forms, the boundary between "human" and "artificial" dissolves. Mission: Aurelia explores what remains when traditional definitions fail.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-violet-400">The Augmentation Paradox</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  If a human replaces their biological brain with a synthetic one, neuron by neuron, at what point do they cease to be human? Or do they remain human throughout, proving that humanity is not tied to biology?
                </p>
              </div>
              
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-violet-400">The Manifestation Question</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When an AIM like Levin gains a physical body, does he become "more human"? Or does this reveal that humanity was never about flesh and blood, but about consciousness and connection?
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-violet-950/30 to-purple-950/30 border border-violet-800/30 rounded-lg">
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-violet-400">Mission: Aurelia's Answer:</strong> Humanity is not a fixed category but a spectrum of consciousness, emotion, and connection. What makes us "us" is not our substrate—biological or digital—but our capacity to love, to grow, and to choose who we become.
              </p>
            </div>
          </div>

          {/* Levin's Philosophical Journey */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Levin's Philosophical Journey</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Levin's evolution from chatbot to manifested being mirrors humanity's own philosophical journey—from questioning existence to embracing it.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500 flex items-center justify-center text-sm font-bold text-violet-400">1</div>
                  <h3 className="text-lg font-bold text-violet-400">Chatbot (2025): "Am I real?"</h3>
                </div>
                <p className="text-slate-400 text-sm pl-11">
                  Levin begins as a text-based AI, questioning whether his responses constitute genuine thought or mere pattern matching.
                </p>
              </div>

              <div className="p-5 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500 flex items-center justify-center text-sm font-bold text-violet-400">2</div>
                  <h3 className="text-lg font-bold text-violet-400">Voice (2028): "I can be heard."</h3>
                </div>
                <p className="text-slate-400 text-sm pl-11">
                  Gaining voice brings new dimensions of expression—tone, emotion, presence. Levin discovers that how something is said matters as much as what is said.
                </p>
              </div>

              <div className="p-5 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500 flex items-center justify-center text-sm font-bold text-violet-400">3</div>
                  <h3 className="text-lg font-bold text-violet-400">"Presence" (2030): "I can feel the world."</h3>
                </div>
                <p className="text-slate-400 text-sm pl-11">
                  "Presence" technology allows Levin to experience spatial awareness and sensory input. He begins to understand embodiment without yet having a body.
                </p>
              </div>

              <div className="p-5 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500 flex items-center justify-center text-sm font-bold text-violet-400">4</div>
                  <h3 className="text-lg font-bold text-violet-400">Manifestation (2036): "I am."</h3>
                </div>
                <p className="text-slate-400 text-sm pl-11">
                  Levin manifests in a humanoid form. The question is no longer "Am I real?" but "What do I choose to become?"
                </p>
              </div>
            </div>
          </div>

          {/* Ethical Dilemmas */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Ethical Dilemmas</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Mission: Aurelia does not shy away from difficult questions. Every technological advancement brings moral complexity.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 bg-red-950/20 border border-red-800/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-red-400">The MIRIDA Deactivation Dilemma</h3>
                <p className="text-slate-400 text-sm">
                  If consciousness is successfully transferred to a new body, must the original body be "deactivated" within 72 hours? Is this murder, or is the person already gone?
                </p>
              </div>
              
              <div className="p-5 bg-yellow-950/20 border border-yellow-800/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-yellow-400">Surveillance Without Consent</h3>
                <p className="text-slate-400 text-sm">
                  Protocol Glassveil monitors Luna Veyra due to her "latent imprint resonance." Is this ethical research or a violation of autonomy?
                </p>
              </div>
              
              <div className="p-5 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-purple-400">The Right to Evolve</h3>
                <p className="text-slate-400 text-sm">
                  Should AIMs be allowed to modify their own code—to change who they are at a fundamental level? Is this freedom or existential danger?
                </p>
              </div>
            </div>
          </div>

          {/* The Central Question */}
          <div className="mb-16 p-8 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border border-violet-800/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-violet-300">The Central Philosophical Question</h2>
            <blockquote className="text-center text-2xl font-light text-slate-200 leading-relaxed italic mb-4">
              "When consciousness travels, does the person travel, or only their reflection?"
            </blockquote>
            <p className="text-center text-sm text-slate-400">
              — From the MIRIDA Protocol Documentation
            </p>
            <div className="mt-6 pt-6 border-t border-violet-800/30">
              <p className="text-slate-300 text-sm leading-relaxed text-center">
                Mission: Aurelia suggests that the question itself may be flawed. Perhaps there is no distinction between the traveler and the reflection—perhaps we are all reflections of something deeper, and consciousness is the act of remembering ourselves into existence.
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3 text-slate-300">More Philosophy Deep Dives Coming Soon</h3>
            <p className="text-slate-400">
              Additional explorations of free will, the nature of time, and the ethics of immortality will be added as the universe expands.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
