import { useState } from 'react';

export default function PhilosophyIdentity() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
              <span className="text-violet-400 text-sm font-mono">PHILOSOPHY • SELF & TIME</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500 bg-clip-text text-transparent">
              Identity & Aging
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              How does identity evolve when time is no longer a purely biological process?
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              Exploring identity across memory, augmentation, and continuity of self—when the body becomes negotiable but the emotional trajectory remains deeply human.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Opening Premise */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">When Time Becomes Negotiable</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    In <em>Mission: Aurelia</em>, aging is not only a function of the body, but of <strong className="text-violet-400">memory, augmentation, and continuity of self</strong>.
                  </p>
                  <p>
                    For characters like June, Luna, and Elara, identity unfolds across different axes: motherhood, digital replication, hybrid embodiment. The body becomes negotiable—but the emotional trajectory remains deeply human.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Questions */}
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">The Questions We Ask</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                    <p className="font-semibold text-violet-300 mb-2">On Aging:</p>
                    <p className="italic">
                      Is aging still meaningful when it can be paused, modified, or reversed?
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                    <p className="font-semibold text-violet-300 mb-2">On Identity:</p>
                    <p className="italic">
                      Is identity still stable when it's partly algorithmic?
                    </p>
                  </div>

                  <p className="mt-6">
                    This theme challenges the assumption that age equals decline, or that memory loss equals identity loss. Instead, we explore aging as a <strong className="text-violet-400">narrative arc</strong>—a form of time lived through emotion, relationships, and change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Axes of Identity */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Identity Across Different Axes</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p className="mb-4">
                    In Mission: Aurelia, identity is not a single line—it's a constellation of experiences, choices, and transformations.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-violet-300 mb-3">June: Motherhood</h3>
                      <p className="text-sm">
                        Identity shaped by relationships, care, and the passage of time through her children's growth. Aging as witness to life unfolding.
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-violet-300 mb-3">Luna: Digital Replication</h3>
                      <p className="text-sm">
                        Identity distributed across physical and digital forms. What remains "Luna" when consciousness can be copied?
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-violet-300 mb-3">Elara: Hybrid Embodiment</h3>
                      <p className="text-sm">
                        Identity as holographic projection. Present everywhere, embodied nowhere. Aging without biological time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Body as Negotiable */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">When the Body Becomes Negotiable</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    In a world where bodies can be modified, paused, or even replaced, the question shifts:
                  </p>
                  <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg p-6">
                    <p className="text-lg text-white mb-3">
                      If the body is no longer the anchor of identity...
                    </p>
                    <p className="text-violet-300 font-semibold">
                      What is?
                    </p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-violet-300">Memory?</strong> But memory can be edited, augmented, or lost.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-violet-300">Continuity?</strong> But continuity can be interrupted by digital replication.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-violet-300">Relationships?</strong> The people who remember you, who witness your changes.</p>
                    </div>
                  </div>
                  <p className="mt-6 text-violet-300 italic">
                    Perhaps identity is not what you are, but what you mean to others—and what they mean to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aging as Narrative Arc */}
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Aging as Narrative Arc</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    We propose a reframing: aging is not decline, but <strong className="text-violet-400">narrative progression</strong>.
                  </p>
                  <p>
                    It is the accumulation of experiences, the deepening of relationships, the transformation of perspective. It is time lived through emotion, relationships, and change.
                  </p>
                  <div className="mt-6 p-6 bg-slate-900/50 border border-violet-500/30 rounded-lg">
                    <p className="text-lg font-semibold text-violet-300 mb-3">Key Insight:</p>
                    <p className="text-slate-200">
                      Aging gives shape to identity. Without it, there is no arc—only an endless present. The body may be negotiable, but the story it tells is not.
                    </p>
                  </div>
                  <div className="mt-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg p-6">
                    <p className="text-white font-semibold mb-2">In this lens:</p>
                    <p className="italic">
                      Identity is not lost to time. It is made <strong className="text-violet-300">visible</strong> by it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Memory and Identity */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">The Role of Memory</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    If memory can be augmented, edited, or even transferred—does identity remain stable?
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <p className="font-semibold text-violet-300 mb-2">The Traditional View:</p>
                      <p className="text-sm italic">
                        "I am the sum of my memories. Lose them, and I lose myself."
                      </p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <p className="font-semibold text-violet-300 mb-2">The Aurelia View:</p>
                      <p className="text-sm italic">
                        "I am the pattern of how I respond to the world. Memory shapes me, but does not define me."
                      </p>
                    </div>
                  </div>
                  <p className="mt-6">
                    In Mission: Aurelia, memory loss does not equal identity loss. What remains is the <strong className="text-violet-400">emotional core</strong>—the way you love, the way you care, the way you see others.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* In Mission: Aurelia */}
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">In Mission: Aurelia</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Through June, Luna, and Elara, we see identity unfold across different timelines and embodiments:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-violet-400 font-bold">•</span>
                      <span><strong className="text-violet-300">June</strong> ages naturally, witnessing her children grow—her identity shaped by motherhood and time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-400 font-bold">•</span>
                      <span><strong className="text-violet-300">Luna</strong> explores digital replication—what remains "her" when consciousness can be copied?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-400 font-bold">•</span>
                      <span><strong className="text-violet-300">Elara</strong> exists as holographic projection—present everywhere, aging without biological time.</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg">
                    <p className="text-white font-semibold mb-2">The Story's Insight:</p>
                    <p className="italic">
                      Identity is not static. It is a living process—shaped by time, relationships, and the stories we tell about ourselves. And in that process, aging is not loss. It is <strong className="text-violet-300">becoming</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center pt-16">
          <a
            href="/philosophy"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Philosophy
          </a>
        </div>
      </div>
    </div>
  );
}
