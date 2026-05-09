export default function PhilosophyIdentity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500 bg-clip-text text-transparent">
              Identity & Aging
            </h1>
            <p className="text-xl text-slate-400 italic">
              Reframing the Self in a Post-Biological Timeline
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
                In the world of <em>Mission: Aurelia</em>, aging is no longer defined by the biological clock alone. Medical augmentation, neuroadaptive systems, and memory modulation technologies have altered the experience of time and the perception of the self. What was once considered inevitable-physical decline, cognitive loss, emotional fragility-can now be interrupted, delayed, or even bypassed. This shift raises fundamental questions: <strong className="text-violet-400">What remains of identity when age no longer defines the arc of life?</strong> What does it mean to grow older in a world where the body is no longer a fixed point of reference?
              </p>

              <p>
                Aging, traditionally associated with decay, is increasingly seen as a set of choices: which memories to keep, which capabilities to enhance, which limits to accept or transcend. The boundaries between natural and artificial experience become porous. Individuals navigate between physical continuity and digital flexibility, between inherited biology and optional modification.
              </p>

              <p>
                In this context, identity becomes dynamic. It is shaped not only by memory, social roles, and personal history, but also by the degree of intervention a person accepts-or resists. Aging becomes less a biological event and more a philosophical stance: to allow change, to preserve imperfection, or to control the narrative of one's own development.
              </p>

              <div className="my-12 py-8 px-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-l-4 border-violet-500 rounded-r-lg">
                <p className="text-white text-lg italic">
                  Rather than offering answers, <em>Mission: Aurelia</em> explores how identity unfolds in a world where time is no longer linear, and where aging no longer equals disappearance.
                </p>
              </div>

              <p>
                Some individuals reject augmentation in favor of embodied presence. Others adapt fully, extending their relevance across decades. Most exist in-between, navigating identity not as a fixed entity, but as a relational process.
              </p>

              <p>
                This new framing challenges long-held assumptions about legacy, loss, and generational meaning. When the boundaries of aging blur, so do the definitions of wisdom, maturity, and succession. Identity, in this future, is not a destination-but a <strong className="text-violet-400">pattern of resonance</strong> between memory, technology, and self-awareness.
              </p>
            </div>
          </article>

          {/* Back Link */}
          <div className="text-center pt-16 mt-16 border-t border-slate-800">
            <a
              href="/philosophy"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-lg"
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
