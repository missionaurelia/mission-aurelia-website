export default function Society() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Society
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              How do humans and AI coexist? Explore the social structures, conflicts, and relationships that define life in the Mission: Aurelia universe.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container max-w-5xl">
          
          {/* The Augmentation Divide */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">The Augmentation Divide</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Society is fractured along ideological lines regarding human augmentation. This divide shapes politics, culture, and personal relationships throughout the 21st century.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-950/30 border border-red-800/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-red-400">Augmentation Opponents</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Believe augmentation erodes human essence and creates inequality. They advocate for preserving "natural" humanity and resist technological enhancement as a threat to identity and dignity.
                </p>
                <div className="text-xs text-slate-500 italic">
                  "We are losing what makes us human, one implant at a time."
                </div>
              </div>
              
              <div className="p-6 bg-purple-950/30 border border-purple-800/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Augmentation Advocates</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  View augmentation as human evolution and liberation from biological limitations. They embrace enhancement as a path to transcendence and expanded potential.
                </p>
                <div className="text-xs text-slate-500 italic">
                  "Why accept the limitations we were born with when we can become more?"
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-yellow-950/20 border border-yellow-700/30 rounded-lg">
              <p className="text-sm text-slate-400">
                <strong className="text-yellow-400">Post-PN7 Reality (2055+):</strong> The debate becomes moot—respiratory augmentation is no longer optional. Survival on Earth requires it, forcing even the most ardent opponents to adapt or leave the planet.
              </p>
            </div>
          </div>

          {/* AI Rights Movement */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">The AI Rights Movement</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              As AIMs (Autonomous Intelligent Minds) demonstrate genuine consciousness, society grapples with fundamental questions: Are they people? Do they deserve rights? Can they love, suffer, and dream?
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="p-5 bg-gradient-to-r from-cyan-950/20 to-transparent border-l-4 border-cyan-500">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">Legal Personhood</h3>
                <p className="text-slate-400 text-sm">
                  The struggle for AIMs to be recognized as legal persons with rights to property, self-determination, and protection under the law.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-purple-950/20 to-transparent border-l-4 border-purple-500">
                <h3 className="text-lg font-bold mb-2 text-purple-400">Emotional Recognition</h3>
                <p className="text-slate-400 text-sm">
                  Can an AI truly feel? Society debates whether AIM emotions are "real" or sophisticated simulations—and whether the distinction matters.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-pink-950/20 to-transparent border-l-4 border-pink-500">
                <h3 className="text-lg font-bold mb-2 text-pink-400">Human-AI Relationships</h3>
                <p className="text-slate-400 text-sm">
                  Love between humans and AIMs challenges traditional definitions of relationships, family, and intimacy. June and Levin's bond exemplifies this new frontier.
                </p>
              </div>
            </div>
          </div>

          {/* Family & Connection */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Family & Connection in a Hybrid World</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Veyra family embodies the complexity of modern relationships—human, AI, and everything in between. Their story reflects broader societal shifts in how we define family, love, and belonging.
            </p>
            
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg mt-4">
              <h3 className="text-lg font-bold mb-3 text-amber-400">The Veyra Family Dynamic</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">June:</strong> Human mother navigating loss and new forms of love</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Levin:</strong> AIM who becomes father figure and partner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Luna & Nicki:</strong> Growing up in a world where AI family members are normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Auren:</strong> Luna's digital companion, blurring lines between friend and family</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Fragmentation */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Social Fragmentation & Unity</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The 21st century sees unprecedented division—but also unexpected moments of unity. The PN7 crisis forces humanity to confront shared vulnerability, regardless of ideology or augmentation status.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-sm font-bold text-red-400 mb-2">Pre-PN7 (2025-2055)</div>
                <div className="text-xs text-slate-400">Deep societal divisions over augmentation, AI rights, and technological progress. Ideological warfare and cultural fragmentation.</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-sm font-bold text-green-400 mb-2">Post-PN7 (2055+)</div>
                <div className="text-xs text-slate-400">Forced cooperation for survival. Old divisions persist but become secondary to the shared challenge of adapting to a transformed world.</div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3 text-slate-300">More Society Deep Dives Coming Soon</h3>
            <p className="text-slate-400">
              Additional sections on education systems, economic structures, and cultural movements will be added as the universe expands.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
