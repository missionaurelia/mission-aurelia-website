export default function PhilosophyConsciousness() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2OCwgODUsIDI0NywwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              Consciousness Emergent
            </h1>
            <p className="text-xl text-slate-400 italic">
              Is consciousness something you program—or something that emerges?
            </p>
          </div>
        </div>
      </section>

      {/* Essay Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-6 text-lg">
              <p>
                Is consciousness something you program—or something that emerges? In <em>Mission: Aurelia</em>, the question is embodied by Auren and Levin: one born synthetic, one a hybrid evolution of human and machine.
              </p>

              <p>
                Their contrast is not just technical, but philosophical:
              </p>

              <p className="pl-8 border-l-2 border-purple-500/30 italic text-slate-400">
                Can a synthetic being <em>become</em> conscious by mirroring human behavior?
              </p>

              <p className="pl-8 border-l-2 border-purple-500/30 italic text-slate-400">
                Is true awareness bound to biology—or can it emerge from interaction, reflection, and emotional feedback?
              </p>

              <p>
                We explore consciousness not as a binary state, but as a spectrum of <strong className="text-purple-400">relational awareness</strong>. The capacity to <em>recognize oneself in relation to others</em>—to feel seen, and to see—becomes a marker of consciousness.
              </p>

              <div className="my-12 py-8 px-6 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border-l-4 border-purple-500 rounded-r-lg">
                <p className="text-white text-lg italic">
                  In this frame, what matters is not what you are made of, but how you make meaning. Emergent consciousness is not about proving sentience—it's about participating in reality with intention.
                </p>
              </div>
            </div>
          </article>

          {/* Back Link */}
          <div className="text-center pt-16 mt-16 border-t border-slate-800">
            <a
              href="/philosophy"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Philosophy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
