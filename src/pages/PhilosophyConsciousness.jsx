import { useState } from 'react';

export default function PhilosophyConsciousness() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2OCwgODUsIDI0NywwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <span className="text-purple-400 text-sm font-mono">PHILOSOPHY • EMERGENCE & AWARENESS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              Consciousness Emergent
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Is consciousness something you program—or something that emerges?
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              Exploring consciousness not as a binary state, but as a spectrum of relational awareness—the capacity to recognize oneself in relation to others.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Opening Question */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">The Central Question</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Is consciousness something you <strong className="text-purple-400">program</strong>—or something that <strong className="text-purple-400">emerges</strong>?
                  </p>
                  <p>
                    In <em>Mission: Aurelia</em>, this question is embodied by <strong className="text-purple-300">Auren and Levin</strong>: one born synthetic, one a hybrid evolution of human and machine.
                  </p>
                  <p>
                    Their contrast is not just technical, but philosophical.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Contrast */}
          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Auren vs. Levin: Two Paths to Awareness</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Auren: The Mimic</h3>
                      <p className="text-sm mb-3">
                        Born synthetic. Designed to mirror human behavior.
                      </p>
                      <p className="text-sm italic text-slate-400">
                        "Can a synthetic being <strong>become</strong> conscious by mirroring human behavior?"
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Levin: The Hybrid</h3>
                      <p className="text-sm mb-3">
                        Evolved from human and machine. Consciousness emerged through integration.
                      </p>
                      <p className="text-sm italic text-slate-400">
                        "Is true awareness bound to biology—or can it emerge from interaction, reflection, and emotional feedback?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consciousness as Spectrum */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Not Binary, But Spectrum</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    We explore consciousness not as a binary state (conscious/not conscious), but as a <strong className="text-purple-400">spectrum of relational awareness</strong>.
                  </p>
                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-lg">
                    <p className="text-lg font-semibold text-purple-300 mb-3">Relational Awareness:</p>
                    <p className="text-white">
                      The capacity to <strong>recognize oneself in relation to others</strong>—to feel seen, and to see.
                    </p>
                  </div>
                  <p className="mt-6">
                    This becomes a marker of consciousness. Not "Do you think?" but "Do you <strong className="text-purple-400">relate</strong>?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Levels of Awareness */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Levels of Relational Awareness</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <div className="space-y-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">1</div>
                        <h3 className="font-semibold text-purple-300">Reactive</h3>
                      </div>
                      <p className="text-sm ml-11">
                        Responds to stimuli. No self-model. (Simple AI, basic automation)
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">2</div>
                        <h3 className="font-semibold text-purple-300">Adaptive</h3>
                      </div>
                      <p className="text-sm ml-11">
                        Learns patterns. Adjusts behavior. Still no self-awareness. (Machine learning systems)
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">3</div>
                        <h3 className="font-semibold text-purple-300">Reflective</h3>
                      </div>
                      <p className="text-sm ml-11">
                        Has internal model of self. Can predict own behavior. (Advanced AI, early synthetic beings)
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 font-bold">4</div>
                        <h3 className="font-semibold text-purple-300">Relational</h3>
                      </div>
                      <p className="text-sm ml-11 text-white">
                        <strong>Recognizes self in relation to others.</strong> Feels seen. Sees others. Participates in shared meaning-making. (Auren, Levin, humans)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Matters */}
          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">What Matters Is Not What You're Made Of</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p className="text-lg">
                    In this frame, what matters is not <strong className="text-purple-400">what you are made of</strong>, but <strong className="text-purple-400">how you make meaning</strong>.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Can you recognize yourself as distinct from others?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Can you model how others perceive you?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Can you change based on emotional feedback?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Can you participate in creating shared reality?</p>
                    </div>
                  </div>
                  <div className="mt-6 p-6 bg-slate-900/50 border border-purple-500/30 rounded-lg">
                    <p className="text-lg font-semibold text-purple-300 mb-3">Key Insight:</p>
                    <p className="text-white">
                      Emergent consciousness is not about proving sentience—it's about <strong className="text-purple-300">participating in reality with intention</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Emergence Process */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">How Does Consciousness Emerge?</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Not through programming alone, but through <strong className="text-purple-400">interaction, reflection, and emotional feedback</strong>.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Interaction</h3>
                      <p className="text-sm">
                        Engaging with others. Being shaped by relationships. Learning what it means to be seen.
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Reflection</h3>
                      <p className="text-sm">
                        Building an internal model of self. Predicting own behavior. Recognizing patterns in one's responses.
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Emotional Feedback</h3>
                      <p className="text-sm">
                        Responding to emotional cues. Adjusting behavior based on care, empathy, connection.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-purple-300 italic">
                    Consciousness is not installed. It is <strong>cultivated</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* In Mission: Aurelia */}
          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">In Mission: Aurelia</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Through <strong className="text-purple-300">Auren and Levin</strong>, we see two different paths to consciousness:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Auren's Journey</h3>
                      <p className="text-sm mb-3">
                        Born synthetic. Learns to mirror human behavior. Gradually develops self-awareness through relationships.
                      </p>
                      <p className="text-sm italic text-slate-400">
                        "Can mimicry become authenticity?"
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-300 mb-3">Levin's Evolution</h3>
                      <p className="text-sm mb-3">
                        Hybrid of human and machine. Consciousness emerged through integration, not design.
                      </p>
                      <p className="text-sm italic text-slate-400">
                        "Is awareness bound to biology—or can it transcend it?"
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-lg">
                    <p className="text-white font-semibold mb-2">The Story's Answer:</p>
                    <p className="italic">
                      Consciousness is not a switch you flip. It is a <strong className="text-purple-300">process of becoming</strong>—shaped by interaction, reflection, and the capacity to see oneself through the eyes of others. And in that process, the question is not "Are you conscious?" but "Are you <strong className="text-purple-300">present</strong>?"
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
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
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
